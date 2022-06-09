import { Container, Flex, VStack, Heading } from "@chakra-ui/react";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
export default function Home() {
  return (
    // centering everything
    <Container maxW="container.xl" p={0}>

      <Flex h="100vh" py="20" /*// expanding inner elements*/>
        <Details />
        <Cart />
      </Flex>
    </Container >
  )
}
