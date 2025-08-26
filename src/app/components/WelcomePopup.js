"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function WelcomePopup({ isOpen, onClose }) {
//   const [isAgreed, setIsAgreed] = useState(false);

//   const handleContinue = () => {
//     if (isAgreed) {
//       console.log("User agreed to terms and clicked continue");
//       onClose();
//     }
//   };

  return (
    <Box>
        
    </Box>
    // <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
    //   <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
    //   <ModalContent
    //     bg="#111111"
    //     borderRadius="xl"
    //     border="1px solid #333"
    //     maxW="400px"
    //     mx={4}
    //   >
    //     <ModalCloseButton
    //       color="white"
    //       fontSize="20px"
    //       _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
    //     />
        
    //     <ModalBody p={8}>
    //       <VStack spacing={6} align="center">
    //         {/* Logo Kpop Road */}
    //         <Box position="relative" mb={4}>
    //           <Image src="/small-logo-white.png" alt="Kpop Road" width={150} height={150} />
    //         </Box>

    //         <Text
    //           fontSize="24px"
    //           fontWeight="bold"
    //           color="white"
    //           textAlign="center"
    //           mb={2}
    //         >
    //           Welcome to Kpop Road
    //         </Text>

    //         <HStack spacing={3} align="flex-start" w="100%">
    //           <Checkbox
    //             isChecked={isAgreed}
    //             onChange={(e) => setIsAgreed(e.target.checked)}
    //             colorScheme="purple"
    //             size="lg"
    //             mt={1}
    //           />
    //           <Text
    //             fontSize="14px"
    //             color="gray.400"
    //             lineHeight="1.4"
    //             flex={1}
    //           >
    //             I agree to K-pop Road&apos;s{" "}
    //             <Link
    //               color="purple.300"
    //               textDecoration="underline"
    //               _hover={{ color: "purple.200" }}
    //               href="/terms"
    //               target="_blank"
    //             >
    //               Terms of Service
    //             </Link>{" "}
    //             and{" "}
    //             <Link
    //               color="purple.300"
    //               textDecoration="underline"
    //               _hover={{ color: "purple.200" }}
    //               href="/privacy"
    //               target="_blank"
    //             >
    //               Privacy Policy
    //             </Link>
    //             .
    //           </Text>
    //         </HStack>

    //         <Button
    //           w="100%"
    //           h="48px"
    //           bgGradient="linear(to-r, #6E46AE, #8B13A0)"
    //           color="white"
    //           fontWeight="bold"
    //           fontSize="16px"
    //           borderRadius="50"
    //           _hover={{
    //             bgGradient: "linear(to-r, #7A4FB8, #9A15B0)",
    //             transform: "translateY(-2px)",
    //             boxShadow: "0 8px 25px rgba(110, 70, 174, 0.4)",
    //           }}
    //           _active={{
    //             transform: "translateY(0)",
    //           }}
    //           transition="all 0.3s ease"
    //           isDisabled={!isAgreed}
    //           opacity={isAgreed ? 1 : 0.6}
    //           onClick={handleContinue}
    //         >
    //           Continue
    //         </Button>
    //       </VStack>
    //     </ModalBody>
    //   </ModalContent>
    // </Modal>
  );
}
