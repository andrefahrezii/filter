import { VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import Filter from '../components/Filter';

const Home = () => {
    return (
        <VStack>
            <Header />
            {/* <Parallax /> */}
            <Filter />
        </VStack>
    );
};

export default Home;
