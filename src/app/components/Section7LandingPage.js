"use client";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Rotating star animation
const rotateStar = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Section7OurWebsite = () => {
  const websites = [
    {
      id: 1,
      title: "KPOPROAD.KR",
      description:
        "KPOP ROAD is a platform dedicated to posting and updating the latest content related to K-POP.",
      image: "kpoproad1.png",
      url: "https://kpoproad.kr",
    },
    {
      id: 2,
      title: "KPOPROAD.COM",
      description:
        "A platform that posts official trainee recruitments and auditions from leading entertainment companies in Korea",
      image: "kpoproad2.png",
      url: "https://kpoproad.com",
    },
    {
      id: 3,
      title: "AUDITION.KPOPROAD.COM",
      description:
        "A platform that allows you to vote for top idols and trainees.",
      image: "kpoproad3.png",
      url: "https://audition.kpoproad.com",
    },
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="full"
      minH="100vh"
      bg="black"
      py={20}
      position="relative">
      {/* Floating background particles */}
      {[...Array(10)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="2px"
          height="2px"
          bg="rgba(14, 254, 33, 0.3)"
          borderRadius="50%"
          top={`${15 + ((i * 9) % 70)}%`}
          left={`${5 + ((i * 11) % 90)}%`}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Decorative Stars */}
      <MotionBox
        position="absolute"
        top="20%"
        right="10%"
        width="60px"
        height="60px"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}>
        <Box width="100%" height="100%" position="relative">
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              position="absolute"
              top="50%"
              left="50%"
              width="2px"
              height="25px"
              bg="white"
              transform={`translate(-50%, -50%) rotate(${i * 45}deg)`}
              transformOrigin="center"
            />
          ))}
        </Box>
      </MotionBox>

      <MotionBox
        position="absolute"
        bottom="30%"
        right="8%"
        width="40px"
        height="40px"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}>
        <Box width="100%" height="100%" position="relative">
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              position="absolute"
              top="50%"
              left="50%"
              width="1px"
              height="18px"
              bg="white"
              transform={`translate(-50%, -50%) rotate(${i * 60}deg)`}
              transformOrigin="center"
            />
          ))}
        </Box>
      </MotionBox>

      <Container maxW="7xl">
        {/* Title */}
        <MotionText
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="700"
          color="white"
          textAlign="center"
          mb={16}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Our Website
        </MotionText>

        {/* Websites Grid */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          columnGap="40px"
          rowGap="80px"
          // Make the third item span full width on large screens
          // gridColumn={website.id === 3 && { lg: "1 / -1" }}
          // maxW={website.id === 3 && { lg: "600px" }}
          // mx={website.id === 3 && { lg: "auto" }}
          maxW="6xl"
          mx="auto">
          {websites.map((website, index) => (
            <MotionBox
              key={website.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -5,
              }}>
              <VStack
                align="stretch"
                spacing={6}
                bg="rgba(255, 255, 255, 0.02)"
                p={8}
                borderRadius="xl"
                border="1px solid rgba(255, 255, 255, 0.1)"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(14, 254, 33, 0.3)",
                }}
                transition="all 0.3s ease">
                {/* Website Mockup Image */}
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius="lg"
                  bg="gray.800">
                  <Image
                    src={website.image}
                    alt={`${website.title} mockup`}
                    width="100%"
                    height="auto"
                    maxHeight="300px"
                    objectFit="cover"
                    filter="brightness(0.9)"
                    _hover={{
                      filter: "brightness(1)",
                      transform: "scale(1.02)",
                    }}
                    transition="all 0.3s ease"
                  />
                </Box>

                {/* Website Info */}
                <VStack align="start" spacing={4}>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color="white">
                    {website.title}
                  </Text>

                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.300"
                    lineHeight="tall">
                    {website.description}
                  </Text>

                  <Button
                    bg="#0EFE21"
                    color="black"
                    fontWeight="bold"
                    px={8}
                    py={3}
                    borderRadius="full"
                    _hover={{
                      bg: "rgba(14, 254, 33, 0.9)",
                      transform: "translateY(-1px)",
                    }}
                    transition="all 0.2s ease"
                    onClick={() => window.open(website.url, "_blank")}>
                    Learn More
                  </Button>
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* Background Glow Effects */}
      <MotionBox
        position="absolute"
        top="40%"
        left="15%"
        width="120px"
        height="120px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(14, 254, 33, 0.08), transparent)"
        filter="blur(25px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <MotionBox
        position="absolute"
        top="70%"
        left="60%"
        display={{ base: "none", sm: "block" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
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
          width={{ base: "100px", md: "100px", lg: "200px" }}
          height={{ base: "100px", md: "100px", lg: "200px" }}
          pointerEvents="none"
        />
      </MotionBox>
    </Box>
  );
};

export default Section7OurWebsite;
