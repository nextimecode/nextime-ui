/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, {
  ReactNode,
  useRef,
  useState,
  Dispatch,
  SetStateAction
} from 'react'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

import { AddIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  useToast,
  IconButton,
  Center,
  Input
} from '@chakra-ui/react'

import { v4 as uuidv4 } from 'uuid'

import { User } from '../../../@types/User'
import { useAuth } from '../../../contexts/AuthContext'
import api from '../../../lib/api'
import {
  storage,
  storageRef,
  uploadBytesResumable,
  getDownloadURL
} from '../../../lib/firebaseClient'
import { translateErrorCode } from '../../../lib/translateErrorCode'

type FileUploadProps = {
  register: UseFormRegisterReturn
  accept?: string
  multiple?: boolean
  children?: ReactNode
  directoryName: string
  userData: any
  setUserData: Dispatch<SetStateAction<User>>
}

const FileUpload = (props: FileUploadProps) => {
  const { user } = useAuth()
  const { register, accept, setUserData } = props
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void
  }
  const toast = useToast()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [progress, setProgress] = useState(0)
  const [uploadPhotosLoading, setUploadPhotosLoading] = useState(false)

  const updateProfileImage = async (downloadURL: string) => {
    const newPhotos: string[] = props.userData.photos
    if (props.userData.photos) {
      newPhotos.push(downloadURL)
    }
    try {
      const newUser = {
        photos: newPhotos,
        photoCount: newPhotos.length
      }
      await api.put('/users', newUser, {
        headers: {
          Authorization: user?.accessToken
        }
      })
      const response = await api.get('users', {
        headers: {
          Authorization: user?.accessToken
        }
      })
      setUserData(response.data)
      setUploadPhotosLoading(false)
    } catch (error) {
      toast({
        title: 'Tivemos um problema ao atualizar sua bio.',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  const handleUploadFile = (file: File) => {
    setUploadPhotosLoading(true)
    const imageCode = uuidv4()
    const storageRefImage = storageRef(
      storage,
      `images/${user?.uid}/${props.directoryName}/${imageCode}`
    )
    const uploadTask = uploadBytesResumable(storageRefImage, file)

    uploadTask.on(
      'state_changed',
      snapshot => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      error => {
        toast({
          title: 'Ops! Encontramos um obstáculo.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          updateProfileImage(downloadURL)
        })
      }
    )
  }

  const handleClick = async () => {
    if (
      inputRef.current &&
      inputRef.current?.files &&
      inputRef.current?.files.length > 0
    ) {
      handleUploadFile(inputRef.current?.files[0])
    }
  }

  return (
    <InputGroup onChange={handleClick}>
      <Input
        type={'file'}
        hidden
        accept={accept}
        {...rest}
        ref={e => {
          ref(e)
          inputRef.current = e
        }}
      />
      <IconButton
        colorScheme="blue"
        aria-label="Call Segun"
        size="lg"
        icon={<AddIcon />}
        onClick={() => inputRef.current?.click()}
        isLoading={uploadPhotosLoading}
      />
    </InputGroup>
  )
}

type FormValues = {
  file_: FileList
}

type UploadProps = {
  directoryName: string
  userData: any
  setUserData: Dispatch<SetStateAction<User>>
}

export const NextUploadImageProfile = ({
  directoryName,
  userData,
  setUserData
}: UploadProps) => {
  const {
    register,
    formState: { errors }
  } = useForm<FormValues>()

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return 'Selecione um arquivo'
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024)
      const MAX_FILE_SIZE = 10
      if (fsMb > MAX_FILE_SIZE) {
        return 'O arquivo pode ter no máximo 10mb'
      }
    }
    return true
  }

  return (
    <Center
      h="110px"
      w="110px"
      maxH="110px"
      maxW="110px"
      border={'4px'}
      borderStyle={'dashed'}
      borderColor={'gray.300'}
      borderRadius={'2xl'}
    >
      <form>
        <FormControl isInvalid={!!errors.file_} isRequired>
          <FileUpload
            accept={'image/*'}
            register={register('file_', { validate: validateFiles })}
            directoryName={directoryName}
            userData={userData}
            setUserData={setUserData}
          ></FileUpload>
          <FormErrorMessage>
            {errors.file_ && errors?.file_.message}
          </FormErrorMessage>
        </FormControl>
      </form>
    </Center>
  )
}
