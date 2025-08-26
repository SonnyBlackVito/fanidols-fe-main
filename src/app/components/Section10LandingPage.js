"use client";
import {
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  Box,
  Image,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import NextImage from "next/image";

export default function FooterComponent() {
  return (
    <Container
      color="white"
      bgColor="#BEBEBE"
      fontWeight={500}
      maxW="100%"
      minH={{ base: "auto", md: "30vh" }}
      backgroundColor="footerBackground"
      py={{ base: 6, sm: 8, md: 12 }}
      px={{ base: 4, sm: 6, md: 8 }}>
      
      <VStack spacing={{ base: 6, md: 8 }}>
        
        {/* Main Footer Content */}
        <Flex
          borderBottom="2px solid"
          borderColor="gray.600"
          pb={{ base: 6, md: 12 }}
          mb={{ base: 2, md: 4 }}
          w={{ base: "100%", md: "90%", lg: "80%" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 6, md: 8, lg: 0 }}>
          
          {/* Logo Section with Glow Effect */}
          <Box 
            order={{ base: 1, lg: 1 }}
            alignSelf={{ base: "center", lg: "flex-start" }}
            position="relative">
            <Link href="/">
              <Box
                position="relative"
                display="inline-block"
                _hover={{
                  transform: "scale(1.05)",
                  filter: "brightness(1.2)"
                }}
                transition="all 0.3s ease"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-5px",
                  left: "-5px",
                  right: "-5px",
                  bottom: "-5px",
                  background: "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)",
                  backgroundSize: "400% 400%",
                  borderRadius: "15px",
                  opacity: 0,
                  animation: "gradientShift 3s ease infinite",
                  zIndex: -1,
                  filter: "blur(10px)"
                }}
                _hover_before={{
                  opacity: 0.7
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px", 
                  bottom: "-2px",
                  background: "linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff)",
                  backgroundSize: "200% 200%",
                  borderRadius: "12px",
                  opacity: 0,
                  animation: "shimmer 2s ease infinite",
                  zIndex: -1
                }}
                _hover_after={{
                  opacity: 0.3
                }}
                sx={{
                  "@keyframes gradientShift": {
                    "0%, 100%": {
                      backgroundPosition: "0% 50%"
                    },
                    "50%": {
                      backgroundPosition: "100% 50%"
                    }
                  },
                  "@keyframes shimmer": {
                    "0%, 100%": {
                      backgroundPosition: "0% 0%"
                    },
                    "50%": {
                      backgroundPosition: "100% 100%"
                    }
                  }
                }}>
                <Image
                  src="kpop_road_logo1.png"
                  alt="Kpop Road Logo"
                  height={{ base: "35px", sm: "40px", md: "50px" }}
                  width="auto"
                  cursor="pointer"
                  loading="lazy"
                  position="relative"
                  zIndex={1}
                  borderRadius="8px"
                  filter="drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
                  _hover={{
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))"
                  }}
                  transition="filter 0.3s ease"
                />
              </Box>
            </Link>
          </Box>

          {/* Social Links Section */}
          <Stack
            order={{ base: 2, lg: 2 }}
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 3, sm: 4 }}
            alignItems="center"
            justifyContent="center"
            flexWrap={{ base: "nowrap", sm: "wrap" }}>
            
            <Link
              href="https://medium.com/@kpoproad9"
              passHref
              target="_blank"
              rel="noopener noreferrer">
              <Box
                as="span"
                px={{ base: 3, sm: 4 }}
                py={2}
                borderRadius="full"
                bg="whiteAlpha.100"
                _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                minW={{ base: "80px", sm: "auto" }}>
                Medium
              </Box>
            </Link>

            <Link
              href="https://x.com/kpop_road"
              passHref
              target="_blank"
              rel="noopener noreferrer">
              <Box
                as="span"
                px={{ base: 3, sm: 4 }}
                py={2}
                borderRadius="full"
                bg="whiteAlpha.100"
                _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                minW={{ base: "100px", sm: "auto" }}>
                Twitter / X
              </Box>
            </Link>

            <Link
              href="https://t.me/kpoproad"
              passHref
              target="_blank"
              rel="noopener noreferrer">
              <Box
                as="span"
                px={{ base: 3, sm: 4 }}
                py={2}
                borderRadius="full"
                bg="whiteAlpha.100"
                _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                minW={{ base: "120px", sm: "auto" }}>
                Telegram Group
              </Box>
            </Link>
          </Stack>

          {/* Links Section */}
          <VStack
            order={{ base: 3, lg: 3 }}
            spacing={{ base: 3, md: 4 }}
            alignItems={{ base: "center", lg: "flex-start" }}
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold">
            
            <Link
              href="https://docs.kpoproad.com"
              passHref
              target="_blank"
              rel="noopener noreferrer">
              <Text 
                _hover={{ color: "gray.600", textDecoration: "underline" }}
                transition="all 0.2s ease"
                cursor="pointer">
                Whitepaper
              </Text>
            </Link>

            <Text 
              _hover={{ color: "gray.600", textDecoration: "underline" }}
              transition="all 0.2s ease"
              cursor="pointer">
              Privacy Policy
            </Text>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Text
          px={{ base: 4, md: 8 }}
          fontSize={{ base: "xs", sm: "sm", md: "md" }}
          color="gray.300"
          textAlign="center"
          maxW="100%">
          Copyright © Kpop Road. All rights reserved.
        </Text>
        
      </VStack>
    </Container>
  );
}