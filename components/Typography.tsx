import {Heading, HeadingProps, Text as ChakraText} from "@chakra-ui/react";
import {FC} from "react";
import {TextProps} from "@chakra-ui/layout/dist/declarations/src/text";

export const H3: FC<HeadingProps> = ({children, ...rest}) =>
  (<Heading size="sm" as="h3" {...rest}>{children}</Heading>)

export const Text: FC<TextProps> = ({children, ...rest}) =>
  (<ChakraText {...rest} color="gray">{children}</ChakraText>)
