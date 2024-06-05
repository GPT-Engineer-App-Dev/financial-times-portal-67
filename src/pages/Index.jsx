import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Main Headline Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>Main Headline Story</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero fermentum, a cursus magna gravida. 
            Integer nec ipsum nec nulla facilisis tincidunt. Sed sit amet eros ut nunc tincidunt vehicula.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Trending News</Heading>
          <VStack align="start" spacing={4}>
            <Text>Trending news item 1</Text>
            <Text>Trending news item 2</Text>
            <Text>Trending news item 3</Text>
            <Text>Trending news item 4</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal><FaFacebook /></Link>
            <Link href="#" isExternal><FaTwitter /></Link>
            <Link href="#" isExternal><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;