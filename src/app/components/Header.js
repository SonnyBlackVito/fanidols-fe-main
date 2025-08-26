'use client'

import { Box, Flex, Link, HStack, IconButton, useDisclosure, Container } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
        <Container height={{ base: "90px", lg: "137px" }}>
            <Flex h={"100%"} justifyContent="center" alignItems="center">
                <Box background={"subBackground"} w={{ base: '100%', lg: 377}} rounded={"full"} p={1}>
                    {/* <CategoryButtonComponent onClick={() =>setCategory(CATEFORIES.FANIDOL)} isChoose={category == CATEFORIES.FANIDOL} text='아이돌'></CategoryButtonComponent> */}
                    {/* <CategoryButtonComponent onClick={() => setCategory(CATEFORIES.AUDITION)} isChoose={category == CATEFORIES.AUDITION} text='오디션'></CategoryButtonComponent> */}
                </Box>
            </Flex>
        </Container>
  );
}

export default Header;