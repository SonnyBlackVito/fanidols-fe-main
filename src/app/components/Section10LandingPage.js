"use client";
import {
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  // Divider,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import NextImage from "next/image";

export default function FooterComponent() {
  return (
    <Container
      bgColor="#BEBEBE"
      maxW="100%"
      h="30vh"
      backgroundColor="footerBackground"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}>
      <VStack spacing={8}>
        <Flex
          borderBottom="2px solid"
          mb={4}
          borderColor="gray.600"
          pb={12}
          w="80%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 0 }}>
          <Box>
            <Link href="/">
              <Image
                src="kpop_road_logo1.png"
                alt="Kpop Road Logo"
                height={{ base: "40px", md: "50px" }}
                width="auto"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
                loading="lazy" 
                transition="opacity 0.2s"
              />
            </Link>
          </Box>

          <HStack
            display="flex"
            // flexDirection={{ base: "column", md: "column" }}
            // justifyContent={{ base: "flex-start", md: "flex-start" }}
            // alignItems={{ base: "center", md: "center" }}
            spacing={4}>
            <Link
              href="https://medium.com/@kpoproad9"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              >
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
                p={2}
                borderRadius="full"
                bg="whiteAlpha.100"
                _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                justifyContent="center">
                {/* <NextImage
                  src="/x_logo.png"
                  alt="X Logo"
                  width={24}
                  height={24}
                /> */}
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
                p={2}
                borderRadius="full"
                bg="whiteAlpha.100"
                _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                justifyContent="center">
                Telegram Group
              </Box>
            </Link>
          </HStack>

          <Flex
            display="flex"
            flexDirection={{ base: "column", md: "column" }}
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={8}
            gapY={4}
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="bold">
            <Link
              href="https://docs.kpoproad.com"
              passHref
              target="_blank"
              rel="noopener noreferrer">
              Whitepaper
            </Link>
            <Text>Privacy Policy</Text>
          </Flex>
        </Flex>

        {/* Separator */}
        {/* <Divider borderColor="gray.600" /> */}

        <Text
          px={8}
          fontSize={{ base: "sm", md: "md" }}
          color="gray.300"
          textAlign="center">
          Copyright © Kpop Road. All rights reserved.
        </Text>
      </VStack>
    </Container>
  );
}
