import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
// import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import NomLogo from '../../../assets/img/layout/nomlogo.png';

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img src={NomLogo} alt="nomlogo" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
