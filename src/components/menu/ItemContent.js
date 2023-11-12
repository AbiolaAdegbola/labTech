// chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// import { MdUpgrade } from "react-icons/md";
import React from "react";

export function ItemContent(props) {
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <>

      <Flex flexDirection='column'>
        <Text
          mb='5px'
          fontWeight='bold'
          color={textColor}
          fontSize={{ base: "md", md: "md" }}>
          Nouvelle notification: {props.info}
        </Text>
        <Flex alignItems='center'>
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight='100%'
            color={textColor}>
            {props.detail}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
