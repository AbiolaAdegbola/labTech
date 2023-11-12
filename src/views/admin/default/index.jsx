// Chakra imports
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdCode,
  MdBarChart,
  MdQuestionAnswer,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import tableDataComplexConversation from "views/admin/default/variables/tableDataComplexConversation.json";
import tableDataComplexChallenger from "views/admin/default/variables/tableDataComplexChallenger.json";
import ColumnsTableConversation from "./components/ComplexTableConversation";
import ColumnsTableChallenge from "./components/ComplexTableChallenge";
import { columnsDataComplexConversation } from "./variables/columnsData";
import { columnsDataComplexChallenger } from "./variables/columnsData";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Inscrits'
          value='70'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdCode} color={brandColor} />
              }
            />
          }
          name='Challenges'
          value='12'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdQuestionAnswer} color={brandColor} />
              }
            />
          }
          name='Convversations'
          value='4' />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px'>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ColumnsTableConversation
          columnsData={columnsDataComplexConversation}
          tableData={tableDataComplexConversation}
        />

        <ColumnsTableChallenge
          columnsData={columnsDataComplexChallenger}
          tableData={tableDataComplexChallenger}
        />
        <MiniCalendar h='100%' minW='50%' selectRange={false} />
      </SimpleGrid>
    </Box>
  );
}
