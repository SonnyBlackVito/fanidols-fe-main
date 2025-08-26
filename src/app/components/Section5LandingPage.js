"use client";
import {
  Box,
  Flex,
  Text,
  Container,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Enhanced Keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { 
    text-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3); 
    filter: brightness(1);
  }
  50% { 
    text-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5); 
    filter: brightness(1.2);
  }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const wave = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  25% { transform: translateY(-10px) rotate(5deg) scale(1.05); }
  50% { transform: translateY(-15px) rotate(0deg) scale(1.1); }
  75% { transform: translateY(-5px) rotate(-5deg) scale(1.05); }
`;

const ripple = keyframes`
  0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(139, 92, 246, 0); }
  100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`;

const RoadmapPage = () => {
  const phases = [
    {
      id: "01",
      title: "PHASE 01",
      timeline: "Q1 2025 - Q3 2025",
      description:
        "Whitepaper Release — Website Launch — NXT Token Launch — Announcement of the Artist content collaboration.",
      color: "#0EFE21",
      isActive: true,
    },
    {
      id: "02",
      title: "PHASE 02",
      timeline: "Q3 2025 - Q4 2025",
      description:
        "Phase 2 focuses on launching an AI powered Web6 entertainment platform and RWA platform, alongside fostering community engagement and partnerships with our AI-powered models.",
      color: "#8B5CF6",
      isActive: false,
    },
    {
      id: "03",
      title: "PHASE 03",
      timeline: "Q4 2025 - Q2 2026",
      description:
        "Phase 3 focuses on launching an AI powered Web6 entertainment platform and RWA platform, alongside fostering community engagement and partnerships with our AI-powered models.",
      color: "#8B5CF6",
      isActive: false,
    },
    {
      id: "04",
      title: "PHASE 04",
      timeline: "Q3 2026 ONWARD",
      description:
        "Phase 4 aims to enhance the AI-driven personalization experience by integrating DePIN entertainment. This phase will focus on building a comprehensive KpopRoad Xverse entertainment ecosystem that fosters artistic freedom and co-creates a vibrant environment to enrich the fan experience.",
      color: "#8B5CF6",
      isActive: false,
    },
  ];

  return (
    <Box w="full" minH="100vh" bg="black" position="relative" overflow="hidden">
      {/* Animated Background with Moving Gradients */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(14, 254, 33, 0.04) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        pointerEvents="none"
      />

      {/* Enhanced Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width={`${3 + (i % 3)}px`}
          height={`${3 + (i % 3)}px`}
          bg={
            i % 3 === 0
              ? "rgba(139, 92, 246, 0.8)"
              : i % 3 === 1
              ? "rgba(14, 254, 33, 0.6)"
              : "rgba(255, 255, 255, 0.4)"
          }
          borderRadius="50%"
          top={`${10 + ((i * 7) % 80)}%`}
          left={`${5 + ((i * 8) % 90)}%`}
          boxShadow={
            i % 3 === 0
              ? "0 0 10px rgba(139, 92, 246, 0.6)"
              : i % 3 === 1
              ? "0 0 8px rgba(14, 254, 33, 0.5)"
              : "0 0 6px rgba(255, 255, 255, 0.4)"
          }
          animate={{
            y: [0, -30 - (i % 3) * 10, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flowing Light Streaks */}
      <MotionBox
        position="absolute"
        top="30%"
        left="-10%"
        width="300px"
        height="2px"
        background="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)"
        animate={{
          x: [0, "120vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />

      <MotionBox
        position="absolute"
        top="70%"
        left="-10%"
        width="200px"
        height="1px"
        background="linear-gradient(90deg, transparent, rgba(14, 254, 33, 0.6), transparent)"
        animate={{
          x: [0, "120vw"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 3,
        }}
      />

      <Container maxW="8xl" py={20}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={16}
          minH="80vh">
          {/* Left Side - Enhanced Title with Logo */}
          <Box flex="1" textAlign="center" position="relative">
            {/* Pulsing Background Ring */}
            <MotionBox
              position="absolute"
              top="50%"
              left="50%"
              width="500px"
              height="500px"
              border="1px solid rgba(139, 92, 246, 0.3)"
              borderRadius="50%"
              transform="translate(-50%, -50%)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />

            {/* Animated Title with Enhanced Effects */}
            <MotionText
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="black"
              color="white"
              mb={4}
              animation={`${glow} 3s ease-in-out infinite`}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}>
              {"ROADMAP".split("").map((letter, i) => (
                <MotionBox
                  key={i}
                  as="span"
                  display="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    y: -10,
                    color: "#8B5CF6",
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}>
                  {letter}
                </MotionBox>
              ))}
            </MotionText>

            <MotionText
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="black"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}>
              <Text
                as="span"
                color="#0EFE21"
                animation={`${wave} 2s ease-in-out infinite`}
                display="inline-block">
                &
              </Text>
              <br />
              <Text
                as="span"
                color="white"
                animation={`${glow} 3s ease-in-out infinite 0.5s`}>
                {"DEVELOPMENT".split("").map((letter, i) => (
                  <MotionBox
                    key={i}
                    as="span"
                    display="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      y: -10,
                      color: "#0EFE21",
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}>
                    {letter}
                  </MotionBox>
                ))}
              </Text>
            </MotionText>

            {/* Enhanced Logo with Multiple Effects */}
            <MotionBox
              mt={8}
              position="relative"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 1.5,
                delay: 1,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}>
              {/* Rotating Ring Around Logo */}
              {/* <MotionBox
                position="absolute"
                top="50%"
                left="50%"
                width="420px"
                height="420px"
                border="2px solid rgba(139, 92, 246, 0.3)"
                borderRadius="50%"
                transform="translate(-50%, -50%)"
                animation={`${rotate} 20s linear infinite`}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-6px",
                  left: "50%",
                  width: "12px",
                  height: "12px",
                  bg: "#0EFE21",
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 15px #0EFE21",
                }}
              /> */}

              {/* Logo with Glow Effect */}
              {/* <Image
                src="/roadmap-unscreen.gif"
                alt="KPOP ROAD Logo"
                width={{ base: "200px", md: "300px", lg: "400px" }}
                height={{ base: "200px", md: "300px", lg: "400px" }}
                mx="auto"
                filter="drop-shadow(0 0 40px rgba(139, 92, 246, 0.5)) brightness(1.1)"
                animation={`${pulse} 4s ease-in-out infinite`}
              /> */}

              {/* Orbiting Particles */}
              {[...Array(4)].map((_, i) => (
                <MotionBox
                  key={i}
                  position="absolute"
                  top="50%"
                  left="50%"
                  width="8px"
                  height="8px"
                  bg={i % 2 === 0 ? "#8B5CF6" : "#0EFE21"}
                  borderRadius="50%"
                  boxShadow={`0 0 10px ${i % 2 === 0 ? "#8B5CF6" : "#0EFE21"}`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: `0 ${150 + i * 20}px`,
                    marginLeft: "-4px",
                    marginTop: "-4px",
                  }}
                />
              ))}
            </MotionBox>
          </Box>

          {/* Right Side - Enhanced Timeline */}
          <Box flex="1" position="relative" maxW="600px">
            {/* Animated Timeline Line */}
            <MotionBox
              position="absolute"
              left="20px"
              top="0"
              bottom="0"
              width="3px"
              background="linear-gradient(to bottom, rgba(139, 92, 246, 0.3), rgba(14, 254, 33, 0.5), rgba(139, 92, 246, 0.3))"
              borderRadius="2px"
              display={{ base: "none", md: "block" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />

            <VStack spacing={8} align="stretch">
              {phases.map((phase, index) => (
                <MotionBox
                  key={phase.id}
                  position="relative"
                  pl={{ base: 0, md: 16 }}
                  initial={{ opacity: 0, x: 100, rotateY: 45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.5 + index * 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}>
                  {/* Enhanced Timeline Dot with Ripple */}
                  <MotionBox
                    position="absolute"
                    left={{ base: "-10px", md: "12px" }}
                    top="8px"
                    width="16px"
                    height="16px"
                    borderRadius="50%"
                    bg={phase.isActive ? phase.color : "white"}
                    border={`3px solid ${phase.color}`}
                    boxShadow={
                      phase.isActive ? `0 0 20px ${phase.color}` : "none"
                    }
                    animation={
                      phase.isActive ? `${ripple} 2s infinite` : "none"
                    }
                    display={{ base: "none", md: "block" }}
                    zIndex={2}
                  />

                  {/* Enhanced Phase Card */}
                  <MotionBox
                    bg="linear-gradient(180deg, rgba(145, 145, 145, 0.15) 0%, rgba(145, 145, 145, 0.05) 100%)"
                    p={6}
                    borderRadius="16px"
                    width={{ base: "320px", lg: "624px" }}
                    height={{ base: "auto", lg: "228px" }}
                    border="1px solid rgba(139, 92, 246, 0.2)"
                    backdropFilter="blur(15px)"
                    position="relative"
                    overflow="hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: `0 20px 40px ${phase.color}20`,
                      borderColor: phase.color,
                      scale: 1.02,
                    }}
                    transition="all 0.3s ease"
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                      animation: `${shimmer} 3s infinite ${index * 0.5}s`,
                    }}>
                    <Flex
                      direction={{ base: "column", sm: "row" }}
                      justify="space-between"
                      align={{ base: "start", sm: "center" }}
                      mb={4}>
                      <MotionText
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="bold"
                        color={phase.color}
                        whileHover={{
                          scale: 1.05,
                          textShadow: `0 0 20px ${phase.color}`,
                        }}>
                        {phase.title}
                      </MotionText>
                      <Text
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="medium"
                        mt={{ base: 1, sm: 0 }}>
                        [{phase.timeline}]
                      </Text>
                    </Flex>

                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="white"
                      lineHeight="tall"
                      opacity={0.9}>
                      {phase.description}
                    </Text>
                  </MotionBox>

                  {/* Enhanced Separator */}
                  {index < phases.length - 1 && (
                    <MotionBox
                      width="100%"
                      height="2px"
                      background="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)"
                      mt={8}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 3 + index * 0.3,
                      }}
                    />
                  )}
                </MotionBox>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Enhanced Decorative Elements */}
      <MotionBox
        position="absolute"
        bottom="10%"
        right="10%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)"
        filter="blur(30px)"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <MotionBox
        position="absolute"
        top="15%"
        left="5%"
        width="120px"
        height="120px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(14, 254, 33, 0.12), transparent)"
        filter="blur(25px)"
        animate={{
          scale: [1.3, 0.7, 1.3],
          opacity: [0.4, 0.9, 0.4],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* Corner Sparkles */}
      {[...Array(4)].map((_, i) => (
        <MotionBox
          key={`corner-${i}`}
          position="absolute"
          width="6px"
          height="6px"
          bg="white"
          borderRadius="50%"
          boxShadow="0 0 12px white"
          top={i < 2 ? "10%" : "90%"}
          left={i % 2 === 0 ? "10%" : "90%"}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </Box>
  );
};

export default RoadmapPage;
