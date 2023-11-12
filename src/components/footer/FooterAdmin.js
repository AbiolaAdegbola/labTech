/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {" "}
        
        <Text as='span' fontWeight='500' ms='4px'>
          
          <Link
            mx='3px'
            color={textColor}
            href='https://www.linkedin.com/in/abiola-mansourou-adegbola-89a43a1a5'
            target='_blank'
            fontWeight='100'>
          <FaLinkedin style={{color:"blue",fontSize:"15px"}}/>Abiola Mansourou ADEGBOLA
          </Link>
        </Text><br/><br/>
        &copy; {2023}Tous droits réservés.
      </Text>
    </Flex>
  );
}
