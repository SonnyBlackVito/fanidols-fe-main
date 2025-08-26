// components/Section9ContactForm.jsx
"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function Section9ContactForm() {
  // Form state
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validation
  const errors = {
    email:
      touched.email && values.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
          ? ""
          : "Invalid email"
        : "",
    first_name: touched.first_name && !values.first_name ? "Required" : "",
    message: touched.message && !values.message ? "Required" : "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      first_name: true,
      last_name: true,
      phone: true,
      email: true,
      message: true,
    });

    if (errors.email || errors.first_name || errors.message) {
      return;
    }

    setSubmitting(true);
    try {
      console.log("Form submitted:", values);
      // Reset form after successful submission
      setValues({ 
        first_name: "", 
        last_name: "", 
        phone: "", 
        email: "", 
        message: "" 
      });
      setTouched({});
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const labelStyle = {
    fontSize: "24px",
    color: "whiteAlpha.900",
    fontWeight: "semibold",
    mb: 2,
    textTransform: "uppercase",
    letterSpacing: "widest",
  };

  const inputStyle = {
    variant: "unstyled",
    bg: "transparent",
    px: 0,
    py: 3,
    borderBottom: "2px solid",
    borderColor: "rgba(255,255,255,0.18)",
    borderRadius: 0,
    color: "white",
    _placeholder: { color: "whiteAlpha.600" },
    _hover: { borderColor: "rgba(255,255,255,0.28)" },
    _focus: { 
      outline: "none", 
      boxShadow: "none", 
      borderColor: "purple.400", 
      borderBottomWidth: "3px" 
    },
    transition: "border-color 180ms ease, box-shadow 180ms ease",
  };

  return (
    <Box
      w="full"
      minH="50vh"
      bg="black"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Animated background dots */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="4px"
          height="4px"
          bg="rgba(14,254,33,0.36)"
          borderRadius="50%"
          top={`${14 + i * 12}%`}
          left={`${6 + i * 14}%`}
          animate={{ 
            y: [0, -14, 0], 
            opacity: [0.25, 0.8, 0.25] 
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity, 
            delay: i * 0.4 
          }}
        />
      ))}

      <Container maxW="6xl" py={4} zIndex={5}>
        <VStack spacing={4} mb={8} alignItems="flex-start">
          <MotionText
            fontSize={{ base: "4xl", md: "4xl", lg: "7xl" }}
            fontWeight="bold"
            color="#0EFE21"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CONTACT US
          </MotionText>

          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="whiteAlpha.900" 
            maxW="2xl" 
            lineHeight="tall" 
            opacity={0.95}
          >
            Have any questions or want to learn more about our project? Contact our team to find out more!
          </Text>
        </VStack>

        <Box as="form" onSubmit={handleSubmit}>
          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={{ base: 8, md: 12 }} 
            mb={6}
          >
            <Box>
              <Text {...labelStyle}>First Name</Text>
              <Input
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your first name"
                {...inputStyle}
                borderColor={
                  touched.first_name && errors.first_name 
                    ? "red.400" 
                    : inputStyle.borderColor
                }
              />
              {errors.first_name && (
                <Text color="red.400" fontSize="xs" mt={1}>
                  {errors.first_name}
                </Text>
              )}
            </Box>

            <Box>
              <Text {...labelStyle}>Last Name</Text>
              <Input 
                name="last_name" 
                value={values.last_name} 
                onChange={handleChange} 
                onBlur={handleBlur} 
                placeholder="Your last name" 
                {...inputStyle} 
              />
            </Box>

            <Box>
              <Text {...labelStyle}>Phone</Text>
              <Input 
                name="phone" 
                value={values.phone} 
                onChange={handleChange} 
                onBlur={handleBlur} 
                type="tel" 
                placeholder="+1 209 xxx 4321" 
                {...inputStyle} 
              />
            </Box>

            <Box>
              <Text {...labelStyle}>Email</Text>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="hello@example.com"
                {...inputStyle}
                borderColor={
                  touched.email && errors.email 
                    ? "red.400" 
                    : inputStyle.borderColor
                }
              />
              {errors.email && (
                <Text color="red.400" fontSize="xs" mt={1}>
                  {errors.email}
                </Text>
              )}
            </Box>
          </SimpleGrid>

          <Box mb={8}>
            <Text {...labelStyle}>Message</Text>
            <Textarea 
              name="message" 
              value={values.message} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              minH="120px" 
              resize="vertical" 
              placeholder="Write your message..." 
              {...inputStyle} 
              borderColor={
                touched.message && errors.message 
                  ? "red.400" 
                  : inputStyle.borderColor
              } 
            />
            {errors.message && (
              <Text color="red.400" fontSize="xs" mt={1}>
                {errors.message}
              </Text>
            )}
          </Box>

          <Button 
            type="submit"
            width={{base: "184px", md: "184px"}}
            height={{base: "56x", md: "56px"}}
            bg="linear-gradient(90deg, #6F45AE 0%, #8A14A0 100%)" 
            color="white" 
            size="lg" 
            fontSize="lg" 
            fontWeight="bold" 
            px={8} 
            py={6} 
            borderRadius="full" 
            isLoading={submitting}
            loadingText="Submitting..."
            _hover={{ 
              transform: "translateY(-2px)", 
              boxShadow: "0 8px 25px rgba(139,92,246,0.4)" 
            }} 
            transition="all 0.2s ease"
          >
            CONTACT US
          </Button>
        </Box>
      </Container>

      {/* Background blur effects */}
      <MotionBox 
        position="absolute" 
        top="28%" 
        left="6%" 
        width="120px" 
        height="120px" 
        borderRadius="full" 
        bg="radial-gradient(circle, rgba(14,254,33,0.08), transparent)" 
        filter="blur(22px)" 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.25, 0.6, 0.25] 
        }} 
        transition={{ 
          duration: 5, 
          repeat: Infinity 
        }} 
      />

      <MotionBox 
        position="absolute" 
        bottom="22%" 
        right="10%" 
        width="100px" 
        height="100px" 
        borderRadius="full" 
        bg="radial-gradient(circle, rgba(139,92,246,0.06), transparent)" 
        filter="blur(18px)" 
        animate={{ 
          scale: [1.05, 0.95, 1.05], 
          opacity: [0.3, 0.7, 0.3] 
        }} 
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          delay: 1 
        }} 
      />
    </Box>
  );
}