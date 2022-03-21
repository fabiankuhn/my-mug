import {Button as ChakraButton} from "@chakra-ui/react";
import {FC} from "react";
import {ButtonProps} from "@chakra-ui/button/src/button";
import Link from 'next/link'

type Props = ButtonProps &  {
  link?: string
}

export const Button: FC<Props> = ({link, children, ...rest}) => {

  const button = (
    <ChakraButton {...rest}>
      {children}
    </ChakraButton>
  )

  return link
    ? (
      <Link href={link} passHref>
        {button}
      </Link>
    )
    : button
}
