import {
  Flex,
  Image,
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logo.png";
import React from "react";

export default function SidebarDocs() {
  const bgColor = "white";
  // const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      position='relative'>
      
      <Image src={logoWhite} />
    </Flex>
      
  );
}
