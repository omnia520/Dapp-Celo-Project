import { Container, Flex, Stack, Heading, Text, Box, Image, AspectRatio, Button, useColorMode } from "@chakra-ui/react"
import { useState, useEffect } from 'react';
const Cart = () => {
    let [precio, setPrecio] = useState("N/A");
    const getPrice = () => {
        console.log(precio);
        const retornoGetPriceDelContrato = 1000.0//llamar función getPrice del contrato
        setPrecio(retornoGetPriceDelContrato);
    }
    const buton = () => {
        getPrice();
    }
    return (
        <Stack direction='column' // inner elements
            w="full"
            h="full"
            p={10}
            spacing={10}
            align-items="flex-start"
            bg="gray.50"
        >
            <Stack spacing={2} direction='column' alignItems="flex-start">
                <Heading size="2xl">Your Cart</Heading>
                <Stack spacing={0}>
                    <Text>If the price is too hard on your eyes,</Text>
                    <Button variant="link" colorScheme="black" >try changing the theme</Button>

                </Stack>
            </Stack>
            <Stack direction='row' spacing={3} w="full" alignItems="center" >
                <AspectRatio ratio={1} w={24}>
                    <Image src="/img/Esmerald.jpeg" objectFit="cover"></Image>
                </AspectRatio>

                <Stack
                    direction="row"
                    w="full"
                    spacing={0}
                    alignItems="center"
                    justifyContent="space-between">
                    <Stack direction='column' spacing={0} h="full" justifyContent="center">
                        <Heading size="md">Esmerald</Heading>
                        <Text fontSize="sm" >PNYCOMP27541</Text>
                    </Stack>

                    <Heading size="sm" textAlign="end">${precio}</Heading>
                </Stack>

            </Stack>
            <Stack direction="column" spacing={4}>
                <Stack direction="row" spacing={1} w="full" justifyContent="space-between" alignItems="center">
                    <Text size="xs">Subtotal</Text>
                    <Heading size="xs">${precio}</Heading>
                </Stack>

            </Stack>
            <Stack direction="row" spacing={1} w="full" justifyContent="space-between" alignItems="center">
                <Text size="xs">Total</Text>
                <Heading size="lg">${precio} cUSD</Heading>
            </Stack>
            <Stack direction="column">
                <Button onClick={buton}>getPrice</Button>
            </Stack>
        </Stack >
    )
}

export default Cart;