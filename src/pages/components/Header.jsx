import React from 'react';
import { Box, Link as ChakraLink, Flex } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
            as="header"
            position="sticky"
            top="0"
            bg="lightblue"
            zIndex="999"
            px="4"
            py="2"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="15px"
            w={"100%"}
        >
            <Box
            >
                <ChakraLink href="/" textDecoration="none" marginLeft={40}>
                    <img src="/logo.png" alt="Logo" width="50" height="50" />
                </ChakraLink>
            </Box>


            <nav >
                <ul style={{ listStyle: 'none', margin: 10, padding: 0 }}>
                    <li style={{ display: 'inline-block', marginRight: '20px' }}>
                        <ChakraLink href="/" textDecoration="none">Home</ChakraLink>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '20px' }}>
                        <ChakraLink href="/" textDecoration="none">Villa</ChakraLink>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '20px' }}>
                        <ChakraLink href="/" textDecoration="none">Land</ChakraLink>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '20px' }}>
                        <ChakraLink href="/" textDecoration="none">Contact</ChakraLink>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '90px' }}>
                        <ChakraLink href="/" textDecoration="none">Home</ChakraLink>
                    </li>
                </ul>
            </nav>
        </Flex >
    );
};

export default Header;
