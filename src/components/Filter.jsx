import { useState } from 'react';
import { Box, Heading, Select, Flex, Text, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Contoh data dummy
const dummyData = [
    { id: 1, type: 'House', city: 'New York', propertyId: 'ABC123', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, type: 'Apartment', city: 'Los Angeles', propertyId: 'DEF456', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, type: 'Condo', city: 'Chicago', propertyId: 'GHI789', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, type: 'Apartment', city: 'Los Angeles', propertyId: 'JKL012', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, type: 'Apartment', city: 'Los Angeles', propertyId: 'MNO345', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, type: 'House', city: 'Los Angeles', propertyId: 'PQR678', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const PropertyCard = ({ data }) => (
    <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="sm" mb={4}>
        <Text>Type: {data.type}</Text>
        <Text>City: {data.city}</Text>
        <Text>Property ID: {data.propertyId}</Text>
        <Text>Description: {data.description}</Text>
    </Box>
);

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
            <Carousel showArrows={false} showStatus={false} showThumbs={false} selectedItem={currentIndex}>
                {data.map((item, index) => (
                    <PropertyCard key={index} data={item} />
                ))}
            </Carousel>
            <Flex justifyContent="space-between" mt={4}>
                <Button leftIcon={<ChevronLeftIcon />} onClick={handleSlideLeft}>Previous</Button>
                <Button rightIcon={<ChevronRightIcon />} onClick={handleSlideRight}>Next</Button>
            </Flex>
        </Box>
    );
};

const Filter = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedPropertyId, setSelectedPropertyId] = useState('');
    const [selectedData, setSelectedData] = useState(null);

    const handleTypeChange = (value) => {
        setSelectedType(value);
        setSelectedData(null); // Reset selected data when type changes
    };

    const handleCityChange = (value) => {
        setSelectedCity(value);
        setSelectedData(null); // Reset selected data when city changes
    };

    const handlePropertyIdChange = (value) => {
        setSelectedPropertyId(value);
        // Find selected data when all options are selected
        const selected = dummyData.find(item => {
            if (!selectedType) return item.city === selectedCity && item.propertyId === value;
            return item.type === selectedType && item.city === selectedCity && item.propertyId === value;
        });
        setSelectedData(selected);
    };

    // Filter unique cities based on selected type
    const uniqueCities = selectedType ? [...new Set(dummyData.filter(item => item.type === selectedType).map(item => item.city))] : [];

    return (
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
            <Box p={4} borderWidth="1px" borderRadius="15px" boxShadow="md" mb={4}>
                <Flex direction="row">
                    <Box flex={1}>
                        <Heading as="h2" mb={4} fontSize="xl">Filter By</Heading>
                    </Box>
                    <Box flex={1} mr={2}>
                        <Select placeholder="Type" variant="filled" size="md" value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
                            <option value="">All Types</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                        </Select>
                    </Box>
                    <Box flex={1} mr={2}>
                        <Select placeholder="City" variant="filled" size="md" value={selectedCity} onChange={(e) => handleCityChange(e.target.value)}>
                            <option value="">All Cities</option>
                            {uniqueCities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </Select>
                    </Box>
                    <Box flex={1}>
                        <Select placeholder="Property ID" variant="filled" size="md" value={selectedPropertyId} onChange={(e) => handlePropertyIdChange(e.target.value)}>
                            <option value="">All Property IDs</option>
                            {selectedCity &&
                                dummyData
                                    .filter(item => (!selectedType || item.type === selectedType) && item.city === selectedCity)
                                    .map(item => <option key={item.id} value={item.propertyId}>{item.propertyId}</option>)
                            }
                        </Select>
                    </Box>
                </Flex>
            </Box>
            <PropertyCarousel data={dummyData} />
        </Flex>
    );
};

export default Filter;
