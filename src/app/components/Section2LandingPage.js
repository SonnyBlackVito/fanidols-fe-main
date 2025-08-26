"use client";
import { Box, Flex, Text, Button, Container, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Section2LandingPage = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box w="full" h="100vh" position="relative">
      <MotionFlex
        w="full"
        h="80vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        p={{ base: 4, md: 8 }}
        textAlign="center"
        position="relative"
        overflow="hidden"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(75, 0, 130, 0.2) 0%, rgba(0, 0, 0, 0.9) 70%)",
            "radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.25) 0%, rgba(0, 0, 0, 0.8) 70%)",
            "radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.3) 0%, rgba(0, 0, 0, 0.85) 70%)",
            "radial-gradient(circle at 20% 20%, rgba(75, 0, 130, 0.3) 0%, rgba(0, 0, 0, 0.9) 70%)",
            "radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.25) 0%, rgba(0, 0, 0, 0.8) 70%)",
            "radial-gradient(circle at 30% 40%, rgba(75, 0, 130, 0.2) 0%, rgba(0, 0, 0, 0.9) 70%)",
          ],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}>
        {/* Mystical floating orbs */}
        <MotionBox
          position="absolute"
          width="150px"
          height="150px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.05), transparent)"
          filter="blur(20px)"
          animate={{
            x: [-100, 200, -150, 100, -100],
            y: [-80, 50, -100, 80, -80],
            scale: [1, 1.3, 0.8, 1.1, 1],
            opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <MotionBox
          position="absolute"
          top="20%"
          right="15%"
          width="100px"
          height="100px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(75, 0, 130, 0.2), rgba(139, 92, 246, 0.08), transparent)"
          filter="blur(15px)"
          animate={{
            x: [80, -120, 60, -80, 80],
            y: [60, -40, 80, -60, 60],
            rotate: [0, 360],
            opacity: [0.4, 0.8, 0.3, 0.6, 0.4],
          }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Mystical mist effect */}
        <MotionBox
          position="absolute"
          width="400px"
          height="200px"
          background="radial-gradient(ellipse, rgba(168, 85, 247, 0.08), transparent)"
          filter="blur(40px)"
          animate={{
            x: [-200, 300, -250, 200, -200],
            y: [100, -50, 120, -80, 100],
            scaleX: [1, 1.5, 0.8, 1.3, 1],
            scaleY: [1, 0.7, 1.2, 0.9, 1],
            opacity: [0.2, 0.4, 0.1, 0.3, 0.2],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Subtle light rays */}
        <MotionBox
          position="absolute"
          top="10%"
          left="20%"
          width="2px"
          height="200px"
          background="linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3), transparent)"
          filter="blur(2px)"
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0.5, 1.2, 0.5],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />

        <MotionBox
          position="absolute"
          bottom="20%"
          right="25%"
          width="1px"
          height="150px"
          background="linear-gradient(180deg, transparent, rgba(75, 0, 130, 0.4), transparent)"
          filter="blur(1px)"
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0.3, 1.5, 0.3],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
        />

        {/* Optimized Content Section */}
        <Container maxW="8xl" position="relative" zIndex={10}>
          <VStack gap={32} spacing={{ base: 6, md: 8 }} align="center">
            {/* Hero Title */}
            <MotionText
              // py={42}
              fontSize={{ base: "2xl", md: "4xl", lg: "7xl" }}
              fontWeight="bold"
              color="#0EFE21"
              textShadow="0 0 20px rgba(14, 254, 33, 0.5), 0 0 40px rgba(14, 254, 33, 0.2)"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              whileInView={{
                textShadow: [
                  "0 0 20px rgba(14, 254, 33, 0.5), 0 0 40px rgba(14, 254, 33, 0.2)",
                  "0 0 30px rgba(14, 254, 33, 0.7), 0 0 60px rgba(14, 254, 33, 0.3)",
                  "0 0 20px rgba(14, 254, 33, 0.5), 0 0 40px rgba(14, 254, 33, 0.2)",
                ],
              }}
              transition={{
                textShadow: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}>
              REVOLUTIONIZING ENTERTAINMENT
            </MotionText>

            {/* Main Description */}
            <MotionText
              fontSize={{ base: "md", md: "3xl" }}
              maxW="4xl"
              lineHeight="tall"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={1}>
              K-POP ROAD is a next-generation Web3 platform designed to connect
              global fans with K-POP artists
              {/* <br /> */}
              <br />
              <Text as="span" lineHeight={0} fontSize={{ base: "sm", md: "xl" }} opacity={0.9}>
                By engaging on the platform, fans unlock unique opportunities —
                from accessing exclusive content and trading NFTs to voting,
                purchasing official merchandise, and exploring K-brand products.
                Through on-chain governance, fans evolve from participants into
                true co-creators of the K-POP ecosystem.
              </Text>
            </MotionText>

            {/* Combined Description */}
            {/* <MotionText
              fontSize={{ base: "sm", md: "md" }}
              maxW="4xl"
              opacity={0.9}
              lineHeight="tall"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              By engaging on the platform, fans unlock unique opportunities — from
              accessing exclusive content and trading NFTs to voting, purchasing
              official merchandise, and exploring K-brand products. Through on-chain 
              governance, fans evolve from participants into true co-creators of 
              the K-POP ecosystem.
            </MotionText> */}

            {/* CTA Button */}
            <MotionBox
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={3}>
              <Button
                as="a"
                href="https://docs.kpoproad.com"
                target="_blank"
                rel="noopener noreferrer"
                bg="linear-gradient(90deg, #6F45AE 0%, #8A14A0 100%)"
                color="white"
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                boxShadow="0 4px 15px rgba(139, 92, 246, 0.2)"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0 8px 25px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)",
                }}
                transition="all 0.3s">
                READ OUR WHITEPAPER
              </Button>
            </MotionBox>
          </VStack>
        </Container>
      </MotionFlex>
    </Box>
  );
};

export default Section2LandingPage;
