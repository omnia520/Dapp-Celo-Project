import { Container, Flex, Heading, VStack, Text, GridItem, SimpleGrid, FormControl, FormLabel, Input, Select, Checkbox, Button } from "@chakra-ui/react"
import React, { useState } from 'react'
import Web3 from "web3";


const Details = () => {
    let textInput = React.createRef();
    let [value, setValue] = useState(1000);
    let [account, setAccount] = useState(1000);

    let web3;
    const connect = async () => {
        /** hacer conexión*/
        let accounts = [];
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            try {
                // Request account access
                await window.ethereum.enable();
                accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                console.log(accounts)
                setAccount(accounts[0])
                return true
            } catch (e) {
                // User denied access
                return false
            }
        }
    }
    const bid = async () => {
        console.log(textInput.current.value)
        console.log(value)
        const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
            gas: '0x2710', // customizable by user during MetaMask confirmation.
            to: '0x5FbDB2315678afecb367f032d93F642f64180aa3', // Required except during contract publications.
            from: ethereum.selectedAddress, // must match user's active address.
            value: Web3.utils.toWei(textInput.current.value), // Only required to send ether to the recipient from the initiating external account.
            data:
                '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };

        // txHash is a hex string
        // As with any RPC call, it may throw an error
        const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        console.log("transaction in address: " + txHash);
        /** 
         * llamar función del contrato de buy()
        */

    }

    return (
        <VStack // inner elements
            w="full"
            h="full"
            p={10}
            spacing={10}
            align-items="flex-start"

        >
            <VStack spacing={3}>
                <Heading size="2xl">Subasta</Heading>
                <Text>details</Text>
            </VStack>
            <SimpleGrid columns={2} rowGap={6} columnGap={3} w="full" alignItems="end">
                <GridItem colSpan={2}>
                    <Button onClick={connect}>connect vía Metamask</Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Bid</FormLabel>
                        <Input ref={textInput} placeholder="Input Bid"></Input>
                    </FormControl>

                </GridItem>
                <GridItem colSpan={1} alignItems="end">
                    <Button w="100%" onClick={bid}> Bid</Button>
                </GridItem>
                <GridItem colSpan={1} alignItems="center" >
                    <Text> Current Account</Text>
                </GridItem>
                <GridItem colSpan={1} alignItems="center">
                    <Text> {account}</Text>
                </GridItem>


            </SimpleGrid>

        </VStack>
    )
}
export default Details;
