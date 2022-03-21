import {Box, Flex} from "@chakra-ui/react";
import {Product} from "../models/product";

import {moneyFormatter} from "../utils/formatter.utils";
import {H3, Text} from "./Typography";
import {Button} from "./Buttons";

type Props = {
  product: Product
}

const ProductCard = ({product}: Props) => {
  return (
    <Box
      marginY={6}
      boxShadow="2xl"
      rounded='md'
      bg='white'
    >
      <Box height="180"
           backgroundImage={product.image}
           backgroundSize="cover"
           backgroundRepeat="no-repeat"
           backgroundPosition="center"
           roundedTop="md"
      />

      <Box p={3}>
        <H3 marginY={1}>{product.heading}</H3>

        <Text marginY={3}>{product.description}</Text>

        <H3>{moneyFormatter(product.price)}</H3>

        <Flex justifyContent="flex-end">
          {/* TODO read and improve */}
            <Button link="/create">Create</Button>
        </Flex>
      </Box>

    </Box>

  )
}

export default ProductCard


