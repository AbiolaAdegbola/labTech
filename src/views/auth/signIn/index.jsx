import React, { useState } from "react";
// Chakra imports
import {
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { BsFillPersonPlusFill } from "react-icons/bs";
import axios from "axios";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import { useHistory } from "react-router-dom";

function SignIn() {

  const navigate = useHistory();

  const [vue, setVue] = useState("initial");
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );

  const connexion = async (data) => {
    try {

      let connexion = {
        email: data.email,
        mdp: data.mdp
      }

      const fetchPosts = async () => {
        const response = await axios.post('http://localhost/labTech/connexion.php', { connexion });
        // console.log(response.data)
        if (response.data === 'Mot de passe incorrecte') {
          // 'Mot de passe incorrecte'

        } else if (response.data === 'E-mail n\'existe pas') {
          // 'E-mail n\'existe pas'
        } else {
          const id = response.data
          navigate.push(`../admin/profile/${id}`)
        }


      };

      await fetchPosts();

    } catch (error) {
      console.error(error);
    }
  }


  const inscription = async (data) => {
    try {

      let inscription = {
        nom: data.nom,
        email: data.emailInsc,
        telephone: data.telephone,
        description: data.description,
        promotion: data.promotion,
        filiere: data.filiere,
        mdp: data.mdpInsc
      }

      const fetchPosts = async () => {
        const response = await axios.post('http://localhost/labTech/connexion.php', { inscription });
        console.log(response.data)

        if (response.data === "Votre compte a été crée avec suc") {
          // Votre compte a été crée avec succès
          
        }else{
          const id = response.data
          navigate.push(`../admin/profile/${id}`)
        }

      };

      await fetchPosts();

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        // w='100%'
        // mx={{ base: "auto", lg: "0px" }}
        // me='auto'
        // h='100vh'
        alignItems='start'
        justifyContent='center'
        // mb={{ base: "5px", md: "5px" }}
        // px={{ base: "5px", md: "0px" }}
        // mt={{ base: "5px", md: "1vh" }}
        flexDirection='column'>
        <Heading color={textColor} fontSize='26px' mb='30px'>
          Authentification
          <br />
        </Heading>

        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <div onClick={() => setVue("none")} style={{ display: vue === "initial" ? "initial" : "none" }}>
            <Button
              fontSize='sm'
              me='0px'
              mb='26px'
              py='15px'
              h='50px'
              w="100%"
              borderRadius='16px'
              bg={googleBg}
              color={googleText}
              fontWeight='500'
              _hover={googleHover}
              _active={googleActive}
              _focus={googleActive}>

              <Icon as={BsFillPersonPlusFill} w='20px' h='20px' me='10px' />
              S'inscrire
            </Button>
          </div>

          <div onClick={() => setVue("initial")} style={{ display: vue === "initial" ? "none" : "initial" }}>
            <Button
              fontSize='sm'
              me='0px'
              mb='26px'
              py='15px'
              h='50px'
              w="100%"
              borderRadius='16px'
              bg={googleBg}
              color={googleText}
              fontWeight='500'
              _hover={googleHover}
              _active={googleActive}
              _focus={googleActive}>

              <Icon as={BsFillPersonPlusFill} w='20px' h='20px' me='10px' />
              Se connecter
            </Button>
          </div>

          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              ou
            </Text>
            <HSeparator />
          </Flex>
          <div className="connexionBoite" style={{ display: vue === "initial" ? "initial" : "none" }}>
            <Connexion connexion={connexion} />
          </div>

          {/* div inscription */}
          <div className="inscriptionBoite" style={{ display: vue === "initial" ? "none" : "initial" }}>
            <Inscription inscription={inscription} />
          </div>
          <br />
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
