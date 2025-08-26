'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import { system } from './styles/theme';
export function Providers({ children }) {
  return (
    <ChakraProvider   value={system}>
      {children}
    </ChakraProvider>
  );
}
