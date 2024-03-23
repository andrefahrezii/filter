import { useState } from 'react';
import {
    Box,
    Heading,
    Select,
    Flex,
    Text,
    Button,
    IconButton,
    Tooltip,
    Card,
    HStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const dummyData = [
    { id: 1, type: 'House', city: 'New York', propertyId: 'ABC123', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, type: 'Apartment', city: 'Los Angeles', propertyId: 'DEF456', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, type: 'Condo', city: 'Chicago', propertyId: 'GHI789', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, type: 'Apartment', city: 'Los Angeles', propertyId: 'JKL012', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, type: 'Apartment', city: 'Los Angeles', propertyId: 'MNO345', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, type: 'House', city: 'Los Angeles', propertyId: 'PQR678', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];


const PropertyCarousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSlideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
        <Box>
            <HStack overflowX="auto" px={4} flexDirection={"row"}>
                {data.length > 0 && data.map((item, index) => (
                    <Card key={index} justifyContent={"center"} textAlign={"center"} maxW={300} maxH={200} borderRadius={25} p={4} mb={4} flex="1 0 auto" position="relative" >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            zIndex={0}
                            borderRadius={["105", "35", "10", "10"]}
                            backgroundImage="url('https://picsum.photos/seed/picsum/200/300')"
                            backgroundSize="cover"
                            backgroundPosition="center"
                            opacity={0.8}
                            h={"65%"}
                        />
                        <Text>Type: {item.type}</Text>
                        <Text>City: {item.city}</Text>
                        <Text>Property ID: {item.propertyId}</Text>
                        <Text>Description: {item.description}</Text>
                        <Button>Detail</Button>
                    </Card>
                ))}
            </HStack>
        </Box>
    );
};


const Filter = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedPropertyId, setSelectedPropertyId] = useState('');
    const [filteredData, setFilteredData] = useState(dummyData);

    const handleTypeChange = (value) => {
        setSelectedType(value);
        const newData = dummyData.filter(item => (value === '' || item.type === value) && (selectedCity === '' || item.city === selectedCity) && (selectedPropertyId === '' || item.propertyId === selectedPropertyId));
        setFilteredData(newData);
    };

    const handleCityChange = (value) => {
        setSelectedCity(value);
        const newData = dummyData.filter(item => (value === '' || item.city === value) && (selectedType === '' || item.type === selectedType) && (selectedPropertyId === '' || item.propertyId === selectedPropertyId));
        setFilteredData(newData);
    };

    const handlePropertyIdChange = (value) => {
        setSelectedPropertyId(value);
        const newData = dummyData.filter(item => (value === '' || item.propertyId === value) && (selectedType === '' || item.type === selectedType) && (selectedCity === '' || item.city === selectedCity));
        setFilteredData(newData);
    };

    // Filter unique cities based on selected type
    const uniqueCities = selectedType ? [...new Set(dummyData.filter(item => item.type === selectedType).map(item => item.city))] : [];

    return (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" >
            <Box p={4} borderWidth="1px" borderRadius="15px" boxShadow="md" mb={4} w="100%" maxW={900} backgroundColor={"whitesmoke"}>
                <Flex direction="row" alignItems="center" textAlign={'center'}>
                    <Heading as="h2" fontSize="xl">Filter By</Heading>
                    <Tooltip label="Clear Filters">
                        <IconButton
                            ml={4}
                            aria-label="Clear Filters"
                            icon={<CloseIcon />}
                            size="sm"
                            onClick={() => {
                                setSelectedType('');
                                setSelectedCity('');
                                setSelectedPropertyId('');
                                setFilteredData(dummyData);
                            }}
                        />
                    </Tooltip>
                </Flex>
                <Flex direction="row" mt={4} justifyContent={'space-between'}>
                    <Select placeholder="Type" variant="filled" size="md" w={80} value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
                        <option value="">All Types</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                    </Select>
                    <Select placeholder="City" variant="filled" size="md" value={selectedCity} w={80} onChange={(e) => handleCityChange(e.target.value)}>
                        <option value="">All Cities</option>
                        {uniqueCities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </Select>
                    <Select placeholder="Property ID" variant="filled" size="md" w={80} value={selectedPropertyId} onChange={(e) => handlePropertyIdChange(e.target.value)}>
                        <option value="">All Property IDs</option>
                        {dummyData
                            .filter(item => (selectedType === '' || item.type === selectedType) && (selectedCity === '' || item.city === selectedCity))
                            .map(item => <option key={item.id} value={item.propertyId}>{item.propertyId}</option>)
                        }
                    </Select>
                </Flex>
            </Box>
            <HStack justifyContent={"center"} pb={10}>
                <Text>
                    Discover our <Text fontWeight={"bold"}>Featured Listings</Text>
                </Text>
            </HStack>
            <PropertyCarousel data={filteredData} />
        </Flex>
    );
};


export default Filter;
