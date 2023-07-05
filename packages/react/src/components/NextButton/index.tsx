import { Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NextButtonProps {
  children: ReactNode;
}

export function NextButton({ children, ...props }: NextButtonProps) {
  return (
    <ChakraButton colorScheme="blue" {...props}>
      {children}
    </ChakraButton>
  )
}
