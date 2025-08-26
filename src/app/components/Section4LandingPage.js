"use client";
import {
  Box,
  Flex,
  Text,
  Container,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Section4LandingPage = () => {
  return (
    <Box w="full" minH="50vh" bg="black" py={20} position="relative">
      <Flex justifyContent="center" alignItems="center" mt={20}>
        {/* Decorative star icon */}
        <MotionBox
          position="absolute"
          top={{ base: "50px", md: "80px", lg: "200px" }}
          left={{ base: "10px", md: "50px", lg: "110px" }}
          display={{ base: "block", sm: "block" }} 
          animate={{
            rotate: [0, 90],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          zIndex={1}>
          <Image
            src="/star-right.png"
            alt="Decorative Star Icon"
            width={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            height={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            opacity={{ base: 0.6, md: 0.8, lg: 1 }} // Giảm opacity trên mobile
            pointerEvents="none" // Không can thiệp với tương tác user
          />
        </MotionBox>
        <MotionBox
          position="absolute"
          bot={{ base: "50px", md: "80px", lg: "110px" }}
          left={{ base: "10px", md: "50px", lg: "110px" }}
          display={{ base: "block", sm: "block" }} 
          animate={{
            rotate: [0, 90],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          zIndex={1}>
          <Image
            src="/star-right.png"
            alt="Decorative Star Icon"
            width={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            height={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            opacity={{ base: 0.6, md: 0.8, lg: 1 }} // Giảm opacity trên mobile
            pointerEvents="none" // Không can thiệp với tương tác user
          />
        </MotionBox>


        <Container maxW="7xl">
          {/* Main Title */}
          <MotionText
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb={16}
            lineHeight="short"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            {/* POWER BY{" "}
            ENTERTAINMENT */}

            Empowered Through
            <br />
            <Text as="span" color="#0EFE21">Entertainment</Text>
          </MotionText>

          {/* Cards Grid */}
          <Flex
            alignItems={"center"}
            justifyContent={{ base: "center", lg: "space-between" }}
            justifyItems="center"
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 6, lg: 8 }} // 6 = 24px mobile, 8 = 32px desktop
            // hoặc sử dụng:
            // gap="32px" // Fixed 32px cho tất cả breakpoints
            maxW="5xl"
            mx="auto">
            {/* Card 1 - KpopRoad VR LIVE */}
            <MotionBox
              bg="linear-gradient(180deg, rgba(145, 145, 145, 0.30) 0%, rgba(145, 145, 145, 0.00) 100%)"
              p={10}
              width={{ base: "320px", lg: "624px" }}
              height={{ base: "auto", lg: "320px" }}
              borderRadius="2xl"
              textAlign="center"
              position="relative"
              overflow="hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
              }}>
              {/* Subtle gradient overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%)"
                borderRadius="2xl"
              />

              <Box position="relative" zIndex={2}>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="#6F45AE"
                  mb={6}>
                  KPOPROAD VR LIVE
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.300"
                  lineHeight="tall">
                  Step into ultra-immersive VR experiences, meticulously crafted
                  in collaboration with global top-tier artists.
                </Text>
              </Box>
            </MotionBox>

            {/* Card 2 - KpopRoad RWA */}
            <MotionBox
              bg="linear-gradient(180deg, rgba(145, 145, 145, 0.30) 0%, rgba(145, 145, 145, 0.00) 100%)"
              p={10}
              width={{ base: "320px", lg: "624px" }}
              height={{ base: "auto", lg: "320px" }}
              borderRadius="2xl"
              textAlign="center"
              position="relative"
              overflow="hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
              }}>
              {/* Subtle gradient overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%)"
                borderRadius="2xl"
              />

              <Box position="relative" zIndex={2}>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="#6F45AE"
                  mb={6}>
                  KPOPROAD PLAY
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.300"
                  lineHeight="tall">
            Uniting the energy of K-POP with Web3 innovation to create seamless, borderless connections between artists and fans.
                </Text>
              </Box>
            </MotionBox>
          </Flex>
        </Container>

        {/* Background decoration */}
        <MotionBox
          position="absolute"
          bottom="10%"
          left="5%"
          width="100px"
          height="100px"
          borderRadius="50%"
          bg="radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)"
          filter="blur(20px)"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </Flex>
    </Box>
  );
};

export default Section4LandingPage;
