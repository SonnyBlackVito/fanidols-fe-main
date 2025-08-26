import { Box, Image, chakra, useRadioCardGroup } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import WelcomePopup from "./WelcomePopup";
import Link from "next/link";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop),
});

const HoverButton = () => {
  const [isHover, setIsHover] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLaunchApp = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Box
        href="https://audition.kpoproad.com/"
        passHref
        target="_blank"
        rel="noopener noreferrer"
        as="button"
        position="relative"
        px={4}
        py={3}
        bg="#ffffff"
        color="black"
        fontWeight="600"
        borderRadius="md"
        overflow="hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleLaunchApp}
        minW="160px"
        height="40px"
        cursor="pointer">
        <MotionBox
          layout
          position="absolute"
          top={isHover ? "auto" : "4px"}
          bottom={isHover ? "4px" : "auto"}
          left="4px"
          w="12px"
          h="12px"
          animate={{
            rotate: isHover ? 280 : 350,
          }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}>
          <Image
            src="left_arrow.svg"
            alt="icon"
            w="50%"
            h="50%"
            objectFit="contain"
          />
        </MotionBox>

        <MotionBox
          layout
          position="absolute"
          top={isHover ? "2px" : "auto"}
          bottom={isHover ? "8px" : "-2px"}
          right={isHover ? "-3px" : "-2px"}
          w="12px"
          h="12px"
          animate={{
            rotate: isHover ? 290 : 350,
          }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}>
          <Image
            src="right_arrow.svg"
            alt="icon"
            w="50%"
            h="50%"
            objectFit="contain"
          />
        </MotionBox>

        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%">
          <MotionBox
            position="absolute"
            animate={{
              y: isHover ? 20 : 0,
              opacity: isHover ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            LAUNCH APP
          </MotionBox>

          {/* Text hover */}
          <MotionBox
            position="absolute"
            animate={{
              y: isHover ? 0 : -20,
              opacity: isHover ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            <Link
              href="https://audition.kpoproad.com/"
              passHref
              target="_blank"
              rel="noopener noreferrer">
              LAUNCH APP
            </Link>
          </MotionBox>
        </Box>
      </Box>

      {/* Welcome Popup */}
      {/* <WelcomePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      /> */}
    </>
  );
};

export default HoverButton;
