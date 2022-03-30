import {NextPage} from "next";
import {Box, ChakraProvider, extendTheme} from "@chakra-ui/react";
import Head from "next/head";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary"
      },
    },
  },
  colors: {
    primary: {
      main: "#7bb9e8",
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1"
    }
  }
})

const Page: NextPage = ({children}) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>My Mug - Personalised Mugs</title>
        <meta name="description" content="My Mug - Personalised Mugs" />
        <link rel="icon" href={"/favicon.ico"}/>
      </Head>

      <main>
        <Box
          padding={5}
          height={"100%"}
        >
          {children}
        </Box>
      </main>

    </ChakraProvider>
  )
}

export default Page
