"use client";
import {
  Divider,
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  VStack,
  Image,
} from "@chakra-ui/react";
import HoverButton from "./HoverButtonComponent";
import { motion } from "framer-motion";

// const NavLink = ({ children }) => (
//   <Link
//     href="#"
//     color="#0EFE21"
//     fontWeight="medium"
//     letterSpacing="wider"
//     _hover={{ textDecoration: "none", color: "white" }}
//     transition="color 0.2s">
//     {children}
//   </Link>
// );

const NavLink = ({ children, href, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    color="#0EFE21"
    fontWeight="medium"
    letterSpacing="wider"
    _hover={{ textDecoration: "none", color: "white" }}
    transition="color 0.2s"
    cursor="pointer">
    {children}
  </Link>
);


const MotionImage = motion(Image);

const HeroSection = () => {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <Flex
      w="full"
      h="100vh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      color="white"
      p={{ base: 4, md: 8 }}
      backgroundImage="url('/animated_wave_light_light.gif')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat">
      {/* ===== HEADER ===== */}
      <Flex
        as="header"
        w="full"
        fontSize="16px"
        lineHeight="22px"
        // fontFamily={500}
        fontWeight={500}
        justifyContent="space-between"
        alignItems="center"
        px={{ base: 2, md: 6 }}>
        <HStack spacing={{ base: 4, md: 12 }}>
          <NavLink onClick={handleScrollToTop}>HOME</NavLink>
          <NavLink onClick={() => handleScroll('about')}>ABOUT</NavLink>
          <Link
            href="https://docs.kpoproad.com"
            passHref
            target="_blank"
            rel="noopener noreferrer">
            <Box
              as="span"
              p={2}
              borderRadius="full"
              bg="whiteAlpha.100"
              _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
              transition="all 0.2s ease"
              display="flex"
              alignItems="center"
              justifyContent="center">
              WHITEPAPER
            </Box>
          </Link>
   
        </HStack>
        <HoverButton />
      </Flex>

      {/* ===== MAIN CONTENT ===== */}
      <VStack flex="1" justifyContent="center" textAlign="center" spacing={4}>
        <MotionImage
          src="/KpopRoad.png"
          alt="KPOP ROAD"
          w={{ base: "250px", md: "500px" }}
          animate={{
            y: ["-10px", "10px", "-10px"],
            filter: [
              "drop-shadow(0 0 8px rgba(200, 117, 255, 0.4))",
              "drop-shadow(0 0 15px rgba(200, 117, 255, 0.6))",
              "drop-shadow(0 0 8px rgba(200, 117, 255, 0.4))",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </VStack>

      <Box
        as="footer"
        w="full"
        borderTop="2px solid"
        borderColor="gray.600"
        pt={4}
        px={{ base: 2, md: 6 }}>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          gap={4}>
          <HStack spacing={5}>
            <Image
              src="/Frame1.svg"
              alt="Frame1"
              boxSize="45px"
              filter="grayscale(1) brightness(0.6)"
              loading="lazy" 
            />
            <Image
              src="/Frame2.svg"
              alt="Frame2"
              boxSize="45px"
              filter="grayscale(1) brightness(0.6)"
              loading="lazy" 
            />
            <Image
              src="/Frame3.svg"
              alt="Frame3"
              boxSize="45px"
              filter="grayscale(1) brightness(0.6)"
              loading="lazy" 
            />
            <Image
              src="/Frame4.svg"
              alt="Frame4"
              boxSize="45px"
              filter="grayscale(1) brightness(0.6)"
              loading="lazy" 
            />
            <Image
              src="/Frame5.svg"
              alt="Frame5"
              boxSize="45px"
              filter="grayscale(1) brightness(0.6)"
              loading="lazy" 
            />
          </HStack>

          <Text
            // fontSize="xs"
            fontSize={{ base: "14px", md: "16px" }}
            fontFamily={500}
            letterSpacing="wide"
            textAlign={{ base: "center", md: "right" }}>
            Where artists and fans shape{" "}
            <Text as="span" color="#0EFE21" fontWeight="bold">
              THE FUTURE OF ENTERTAINMENT TOGETHER
            </Text>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeroSection;
