import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, VStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, SimpleGrid, GridItem, Textarea, Image } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaSolarPanel, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Heading as="h1" size="xl" textAlign="center">
          Solar Energy Calculator
        </Heading>
        <Image src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MHx8fHwxNzEzNjgzNzEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Solar Panels" />
        <Box as="section" w="full">
          <Heading as="h2" size="lg" mb={4}>
            Calculate Your Solar Panel Installation
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter your address" />
            </FormControl>
            <FormControl id="zip-code">
              <FormLabel>Zip Code</FormLabel>
              <Input placeholder="Enter your zip code" />
            </FormControl>
          </Flex>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="teal" mt={4}>
            Draw on Map
          </Button>
        </Box>

        <Box as="section" w="full">
          <Heading as="h2" size="lg" mb={4}>
            Summary
          </Heading>
          <Text>
            Buy 74 Solar Panels - Pro <br />
            SEK 438,716 <br />
            <strong>Green deduction</strong> <br />
            - SEK 85,111 <br />
            <strong>Your estimate</strong> <br />
            from SEK 353,605 <br />
            <Button variant="link" colorScheme="blue">
              What affects my price?
            </Button>
          </Text>
          <Text mt={4}>
            <strong>Optional</strong> <br />
            Green deduction - SEK 0 <br />
            One-off cost SEK 0 <br />
          </Text>
          <Text mt={4}>
            <strong>Calculation</strong> <br />
            Value of solar energy produced SEK 62,851/year <br />
            Repayment period 5 years <br />
            Estimated production 33790.62 kWh/year
          </Text>
        </Box>

        <Box as="section" w="full">
          <Heading as="h2" size="lg" mb={4}>
            Contact Information
          </Heading>
          <SimpleGrid columns={2} spacing={6}>
            <GridItem colSpan={1}>
              <FormControl id="first-name">
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter your first name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl id="last-name">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter your email" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl id="telephone">
                <FormLabel>Telephone</FormLabel>
                <Input placeholder="Enter your telephone number" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="address-full">
                <FormLabel>Address</FormLabel>
                <Input placeholder="Enter your full address" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl id="postcode">
                <FormLabel>Postcode</FormLabel>
                <Input placeholder="Enter your postcode" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input placeholder="Enter your city" />
              </FormControl>
            </GridItem>
          </SimpleGrid>
          <Button rightIcon={<FaArrowRight />} colorScheme="green" mt={4}>
            Submit
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
