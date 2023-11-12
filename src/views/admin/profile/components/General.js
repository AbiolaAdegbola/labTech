// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { description, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Description
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        {description}
      </Text>
      <SimpleGrid columns='1' gap='20px'>
        {/* <Information
          boxShadow={cardShadow}
          title='Formation'
          value='Stanford University'
        /> */}


        <Card>
          <Box>
            <div style={{ display: "flex" }}>
              <Text fontWeight='500' color={textColorSecondary} fontSize='sm'>
              Formation
              </Text>
              <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
              Stanford University
              </Text>
            </div>
          </Box>
        </Card>

      </SimpleGrid>

      <br />
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Education'
          value='Stanford University'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='English, Spanish, Italian'
        />
        <Information
          boxShadow={cardShadow}
          title='Department'
          value='Product Design'
        />
        <Information
          boxShadow={cardShadow}
          title='Work History'
          value='Google, Facebook'
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='Simmmple Web LLC'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='20 July 1986'
        />
      </SimpleGrid>
    </Card>
  );
}
