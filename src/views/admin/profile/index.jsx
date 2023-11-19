// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import Information from "views/admin/profile/components/Information";

// Assets
import banner from "assets/img/layout/nomlogo.png";
import avatar from "assets/img/layout/logo.png";
import iconEntreprise from "assets/img/layout/house.png"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidCircle } from 'react-icons/bi'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Overview() {

  const [infoProfil, setInfoProfil] = useState({ id: '', nom: '', email: '', telephone: '', promotion: '', filiere: '', description: "", photo: '', titre: '' })
  const location = useLocation();
  const id = location.pathname.split('/').pop()

  useEffect(async () => {

    const recu = async (id) => {
      const response = await axios.post(`http://localhost/labTech/profil.php/`, {
        profil: {
          id: id,
        }
      })
      setInfoProfil(response.data)
    }

    await recu(id)

  }, [id])


  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const bg = useColorModeValue("white", "navy.700");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Banner
        gridArea={{ base: '3 / 3 / 3 / 3', lg: "1 / 3 / 2 / 4", }}
        banner={banner}
        avatar={infoProfil.photo !== "" ? infoProfil.photo : avatar}
        name={infoProfil.nom}
        job={infoProfil.titre}
        posts='17'
        followers='9.7k'
        following='274'
        used={70}
        minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
      /><br />
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />

        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            fontSize='2xl'
            mt='10px'
            mb='4px'>
            Description
          </Text>
          <Text color={textColorSecondary} fontSize='md' me='6px' mb='3px'>
            {infoProfil.description}
          </Text>
          {/* <SimpleGrid columns='1' gap='100px'> */}

            <Card bg={bg}>
              <Box>
                <div style={{ fontSize: "18px" }}>Domaine de compétence</div>
                <div style={{ width: "100%", marginLeft: "10px" }}>
                  <Text color={textColorPrimary} fontWeight='700' fontSize="md">
                    <span style={{ display: 'flex', alignItems: "center", margin: "8px" }}>
                      <BiSolidCircle style={{ fontSize: "5px", marginRight: "9px" }} />  Centre de dispatching,
                      <BiSolidCircle style={{ fontSize: "5px", margin: "9px" }} />  Transport Haut tension,
                    </span>

                    <span style={{ display: 'flex', alignItems: "center", margin: "8px" }}>
                      <BiSolidCircle style={{ fontSize: "5px", marginRight: "9px" }} />  Génie électrique,
                      <BiSolidCircle style={{ fontSize: "5px", margin: "9px" }} />  Installation électrique,
                      <BiSolidCircle style={{ fontSize: "5px", margin: "9px" }} />  Production,
                    </span>
                  </Text>
                </div>
              </Box>
            </Card>

            <Card bg={bg}>
              <Box width="100%">
                <div style={{ fontSize: "18px", margin: "10px" }}>Expérience professionnel</div>
                <div style={{ width: "100%" }}>
                  <div style={{ position: "relative" }}>
                    <img src={iconEntreprise} alt="icon-entreprise" style={{ width: "50px" }} />
                    <div style={{ position: "absolute", top: "0px", left: "55px" }}>
                      <Text color={textColorPrimary} fontWeight='600' fontSize="md">
                        Ingénieur génie électrique
                      </Text>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        CI-Energie <BiSolidCircle style={{ fontSize: "3px", margin: "9px" }} />
                        <span>CDD</span>
                      </span>
                      <span style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                        Abidjan <BiSolidCircle style={{ fontSize: "3px", margin: "9px" }} />
                        <span>Sur site</span>
                      </span>

                      <span style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                        Juin 2023 -
                        <span>Novembre 2023</span>
                      </span>

                      <div >
                        compétence :
                        <span style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                          frontend <BiSolidCircle style={{ fontSize: "3px", margin: "9px" }} />
                          <span>backend</span>
                        </span>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </Box>
            </Card>

            <Card bg={bg} >
              <Box>
                <div style={{ fontSize: "18px" }}>Formation</div>
                <div style={{ display: "flex", width: "100%", marginLeft: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BiSolidCircle style={{ fontSize: "6px", marginRight: "9px" }} /> 2019 - 2023
                  </div>
                  <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
                    <span style={{ marginLeft: "20px" }}>EEAI</span>
                    <span style={{ marginLeft: "20px" }}>
                      Université Félix Houphouet Boigny de cocody
                    </span>
                    <span style={{ marginLeft: "10px" }}>Licence 3</span>
                  </Text>
                </div>
                <div style={{ display: "flex", width: "100%", marginLeft: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BiSolidCircle style={{ fontSize: "6px", marginRight: "9px" }} /> 2019 - 2023
                  </div>
                  <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
                    <span style={{ marginLeft: "20px" }}>EEAI</span>
                    <span style={{ marginLeft: "20px" }}>
                      Université Félix Houphouet Boigny de cocody
                    </span>
                    <span style={{ marginLeft: "10px" }}>Licence 3</span>
                  </Text>
                </div>
              </Box>
              <br />
              <Box>
                <div style={{ fontSize: "18px" }}>Certification</div>
                <div style={{ display: "flex", width: "100%", marginLeft: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BiSolidCircle style={{ fontSize: "6px", marginRight: "9px" }} /> 2019 - 2023
                  </div>
                  <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
                    <span style={{ marginLeft: "20px" }}>EEAI</span>
                    <span style={{ marginLeft: "20px" }}>
                      Université Félix Houphouet Boigny de cocody
                    </span>
                    <span style={{ marginLeft: "10px" }}>Licence 3</span>
                  </Text>
                </div>
                <div style={{ display: "flex", width: "100%", marginLeft: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BiSolidCircle style={{ fontSize: "6px", marginRight: "9px" }} /> 2019 - 2023
                  </div>
                  <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
                    <span style={{ marginLeft: "20px" }}>EEAI</span>
                    <span style={{ marginLeft: "20px" }}>
                      Université Félix Houphouet Boigny de cocody
                    </span>
                    <span style={{ marginLeft: "10px" }}>Licence 3</span>
                  </Text>
                </div>
              </Box>
            </Card>
          {/* </SimpleGrid> */}

          <br />
          <SimpleGrid columns='2' gap='20px'>
            <Information
              boxShadow={cardShadow}
              title='Langues'
              value='English, Spanish, Italian, French'
            />
            <Information
              boxShadow={cardShadow}
              title='Activités'
              value='Lecture, Sport, Footing'
            />
          </SimpleGrid>
        </Card>

        <Notifications
          used={25.6}
          total={50}
        />
      </Grid>
    </Box>
  );
}
