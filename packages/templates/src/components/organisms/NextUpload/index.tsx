/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

import { useRouter } from 'next/navigation'

import { AttachmentIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormErrorMessage,
  InputGroup,
  Box,
  useToast,
  IconButton
} from '@chakra-ui/react'

import { v4 as uuidv4 } from 'uuid'

import { useAuth } from '../../../contexts/AuthContext'
import { CallApi } from '../../../lib/CallApi'
import {
  getDownloadURL,
  storage,
  storageRef,
  uploadBytesResumable
} from '../../../lib/firebaseClient'

type FileUploadProps = {
  register: UseFormRegisterReturn
  accept?: string
  multiple?: boolean
  children?: ReactNode
}

const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void
  }
  const [listImages, setListImages] = useState<
    Array<Record<string, any>> | undefined
  >()

  const handleClick = async () => {
    inputRef.current?.click()
    if (
      inputRef.current &&
      inputRef.current?.files &&
      inputRef.current?.files.length > 0
    ) {
      setListImages(Array.from(inputRef.current.files))
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      if (
        inputRef.current &&
        inputRef.current?.files &&
        inputRef.current?.files.length > 0
      ) {
        setListImages(Array.from(inputRef.current.files))
      }
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <InputGroup onClick={handleClick} onChange={handleClick}>
        <input
          type={'file'}
          multiple={multiple || false}
          hidden
          accept={accept}
          {...rest}
          ref={e => {
            ref(e)
            inputRef.current = e
          }}
        />
        <>{children}</>
      </InputGroup>
      <Box>
        {listImages?.map((item, index) => <div key={index}>{item.name}</div>)}
      </Box>
    </div>
  )
}

type FormValues = {
  file_: FileList
}

type UploadProps = {
  id: string
  directoryName: string
}

export const NextUpload = ({ id, directoryName }: UploadProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const [progress, setProgress] = useState(0)
  const [uploadPhotosLoading, setUploadPhotosLoading] = useState(false)
  const toast = useToast()
  const { user } = useAuth()
  const router = useRouter()

  const updateUserVerificationImage = async (downloadURL: string) => {
    const updateUser = {
      verificationImageUrl: downloadURL
    }
    await CallApi({
      toast,
      method: 'put',
      url: '/users',
      data: updateUser,
      headers: {},
      toastInformation: {
        success: {
          description:
            'A imagem de verificação do perfil foi atualizada com sucesso!'
        },
        error: {
          title:
            'Tivemos um problema ao atualizar a imagem de verificação do perfil.'
        }
      },
      user
    })
  }

  const handleUpload = (file: File) => {
    const imageCode = uuidv4()
    const storageRefImage = storageRef(
      storage,
      `images/${id}/${directoryName}/${imageCode}`
    )
    const uploadTask = uploadBytesResumable(storageRefImage, file)

    uploadTask.on(
      'state_changed',
      snapshot => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      error => {
        toast({
          title: 'Ops! Encontramos um obstáculo.🚧',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          updateUserVerificationImage(downloadURL)
        })
        setUploadPhotosLoading(false)
        toast({
          title: 'Foto recebida com sucesso!📸',
          description:
            'Agradecemos por enviar sua foto! Enquanto nossa equipe verifica sua conta, você pode aproveitar para treinar o ChatGPT-4 do aplicativo, assim terá melhores matchs. Divirta-se e aprimore suas conexões! ⏳🤖💙',
          status: 'success',
          duration: 12000,
          isClosable: true
        })
        router.push('/preferences')
      }
    )
  }

  const onSubmit = handleSubmit(data => {
    setUploadPhotosLoading(true)
    if (data.file_.length > 0) {
      for (let i = 0; i < data.file_.length; i++) {
        handleUpload(data.file_[i])
      }
    }
  })

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return 'Nenhum arquivo selecionado! Por favor, escolha um arquivo antes de prosseguir. Clique em Selecionar arquivo e localize a imagem em seu dispositivo. Obrigado!'
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024)
      const MAX_FILE_SIZE = 10
      if (fsMb > MAX_FILE_SIZE) {
        return 'Por favor, certifique-se de que o arquivo enviado tenha no máximo 10 MB. Redimensione sua imagem, se necessário, e tente novamente para prosseguir. Obrigado!'
      }
    }
    return true
  }

  return (
    <form>
      <FormControl isInvalid={!!errors.file_} isRequired>
        <FileUpload
          accept={'image/*'}
          multiple
          register={register('file_', { validate: validateFiles })}
        >
          <IconButton
            colorScheme="blue"
            aria-label="Call Segun"
            size="lg"
            icon={<AttachmentIcon />}
          />
        </FileUpload>
        <FormErrorMessage>
          {errors.file_ && errors?.file_.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={5}
        mb={10}
        onClick={onSubmit}
        colorScheme="green"
        loadingText={`Enviando ${progress}`}
        isLoading={uploadPhotosLoading}
      >
        Enviar imagem
      </Button>
    </form>
  )
}
