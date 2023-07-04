import { Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function NextButton({ children, ...props }: ButtonProps) {
  return (
    <ChakraButton colorScheme="blue" {...props}>
      {children}
    </ChakraButton>
  )
}
