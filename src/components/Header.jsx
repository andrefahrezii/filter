import React from 'react';
import { Box, Link as ChakraLink, Flex } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
            as="header"
            position="sticky"
            top="0"
            bg="lightblue" // Warna latar belakang biru muda
            zIndex="999" // Memberikan z-index untuk memastikan header tetap di atas
            px="4"
            py="2"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w={1200}

            borderRadius="15px" // Menambahkan border radius
        // maxWidth="fit-content" // Menyesuaikan lebar dengan konten di dalamnya
        // marginX="auto" // Menengahkan header
        >
            {/* Logo di sisi kiri */}
            <Box
            // w={2000000}
            >
                <ChakraLink href="/" textDecoration="none" marginLeft={40}>
                    <img src="/logo.png" alt="Logo" width="50" height="50" />
                </ChakraLink>
            </Box>

            {/* Menu di sisi kanan */}
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
                    {/* Tambahkan menu lain di sini */}
                </ul>
            </nav>
        </Flex >
    );
};

export default Header;
