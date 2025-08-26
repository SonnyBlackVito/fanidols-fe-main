import { Box, Image, chakra, useBreakpointValue } from "@chakra-ui/react";
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

  // Responsive values (bỏ base vì sẽ ẩn trên mobile)
  const buttonWidth = useBreakpointValue({ 
    sm: "150px", 
    md: "160px", 
    lg: "170px" 
  });
  
  const buttonHeight = useBreakpointValue({ 
    sm: "38px", 
    md: "40px", 
    lg: "42px" 
  });
  
  const paddingX = useBreakpointValue({ 
    sm: 3, 
    md: 4, 
    lg: 4 
  });
  
  const paddingY = useBreakpointValue({ 
    sm: 2.5, 
    md: 3, 
    lg: 3 
  });

  const fontSize = useBreakpointValue({ 
    sm: "sm", 
    md: "sm", 
    lg: "md" 
  });

  const iconSize = useBreakpointValue({ 
    sm: "11px", 
    md: "12px", 
    lg: "13px" 
  });

  const iconImageSize = useBreakpointValue({ 
    sm: "48%", 
    md: "50%", 
    lg: "52%" 
  });

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
        px={paddingX}
        py={paddingY}
        bg="#ffffff"
        color="black"
        fontWeight="600"
        borderRadius="md"
        overflow="hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleLaunchApp}
        minW={buttonWidth}
        height={buttonHeight}
        cursor="pointer"
        fontSize={fontSize}
        // Ẩn trên mobile, hiện từ small tablet trở lên
        display={{ base: "none", sm: "block" }}
        // Touch-friendly for tablet
        _active={{
          transform: "scale(0.98)",
        }}
        // Ensure good touch target size
        touchAction="manipulation"
      >
        {/* Left Arrow */}
        <MotionBox
          layout
          position="absolute"
          top={isHover ? "auto" : { base: "3px", md: "4px" }}
          bottom={isHover ? { base: "3px", md: "4px" } : "auto"}
          left={{ base: "3px", md: "4px" }}
          w={iconSize}
          h={iconSize}
          animate={{
            rotate: isHover ? 280 : 350,
          }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}>
          <Image
            src="left_arrow.svg"
            alt="icon"
            loading="lazy" 
            w={iconImageSize}
            h={iconImageSize}
            objectFit="contain"
          />
        </MotionBox>

        {/* Right Arrow */}
        <MotionBox
          layout
          position="absolute"
          top={isHover ? { base: "1px", md: "2px" } : "auto"}
          bottom={isHover ? { base: "7px", md: "8px" } : { base: "-1px", md: "-2px" }}
          right={isHover ? { base: "-2px", md: "-3px" } : { base: "-1px", md: "-2px" }}
          w={iconSize}
          h={iconSize}
          animate={{
            rotate: isHover ? 290 : 350,
          }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}>
          <Image
            src="right_arrow.svg"
            alt="icon"
            w={iconImageSize}
            h={iconImageSize}
            loading="lazy" 
            objectFit="contain"
          />
        </MotionBox>

        {/* Button Text Container */}
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%">
          
          {/* Default Text */}
          <MotionBox
            position="absolute"
            fontSize={fontSize}
            fontWeight="inherit"
            animate={{
              y: isHover ? { base: 15, md: 20 } : 0,
              opacity: isHover ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            LAUNCH APP
          </MotionBox>

          {/* Hover Text */}
          <MotionBox
            position="absolute"
            fontSize={fontSize}
            fontWeight="inherit"
            animate={{
              y: isHover ? 0 : { base: -15, md: -20 },
              opacity: isHover ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            <Link
              href="https://audition.kpoproad.com/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                textDecoration: "none", 
                color: "inherit",
                fontSize: "inherit",
                fontWeight: "inherit"
              }}>
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