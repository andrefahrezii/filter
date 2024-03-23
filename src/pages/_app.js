import { ChakraProvider, VStack } from '@chakra-ui/react';
import Header from './components/Header';
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <VStack mx={20} my={5}>
                <Header />
                <Component {...pageProps} />
            </VStack>
        </ChakraProvider>
    );
}

export default MyApp;
