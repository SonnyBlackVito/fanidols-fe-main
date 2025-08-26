"use client";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Logo hover effect
const logoHover = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const Section6PartnersPage = () => {
  const partners = [
    {
      id: 1,
      name: "The Hana",
      logo: "/the-hana-logo.png", // Replace with actual logo path
      alt: "The Hana Logo",
    },
    {
      id: 2,
      name: "TikTok",
      logo: "/tiktok-logo.png", // Replace with actual logo path
      alt: "TikTok Logo",
    },
  ];

  return (
    <Box
      w="full"
      minH="50vh"
      bg="black"
      py={20}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center">
      {/* Floating background particles */}
      {[...Array(8)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="2px"
          height="2px"
          bg="rgba(14, 254, 33, 0.4)"
          borderRadius="50%"
          top={`${20 + ((i * 12) % 60)}%`}
          left={`${10 + ((i * 15) % 80)}%`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <Container maxW="6xl">
        {/* Main container without borders */}
        <MotionBox
          p={{ base: 6, md: 12 }}
          position="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}>
          {/* Title */}
          <MotionText
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb={12}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Partners{" "}
            <Text as="span" color="#0EFE21">
              &
            </Text>{" "}
            Collaborators
          </MotionText>

          {/* Partners container without borders */}
          <MotionBox
            p={{ base: 8, md: 12 }}
            bg="rgba(255, 255, 255, 0.02)"
            backdropFilter="blur(10px)"
            borderRadius="xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="center"
              gap={{ base: 8, md: 16 }}
              wrap="wrap">
              {partners.map((partner, index) => (
                <MotionBox
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  cursor="pointer">
                  {/* Unified logo container */}
                  <Box
                    bg="rgba(255, 255, 255, 0.05)"
                    px={8}
                    py={6}
                    borderRadius="lg"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    transition="all 0.3s ease"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={{ base: "120px", md: "150px" }}
                      height="auto"
                      maxHeight="60px"
                      objectFit="contain"
                      filter="brightness(0.9)"
                      _hover={{
                        filter: "brightness(1.1)",
                      }}
                      transition="all 0.3s ease"
                    />
                  </Box>
                </MotionBox>
              ))}
            </Flex>

            {/* Decorative elements */}
            <Flex mt={8} justify="center" gap={4}>
              {[...Array(3)].map((_, i) => (
                <MotionBox
                  key={i}
                  width="6px"
                  height="6px"
                  bg={i === 1 ? "#0EFE21" : "rgba(139, 92, 246, 0.6)"}
                  borderRadius="50%"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </Flex>
          </MotionBox>
        </MotionBox>
      </Container>

      {/* Background glow effects */}
      <MotionBox
        position="absolute"
        top="30%"
        left="20%"
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(14, 254, 33, 0.1), transparent)"
        filter="blur(20px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        width="80px"
        height="80px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)"
        filter="blur(15px)"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </Box>
  );
};

export default Section6PartnersPage;
