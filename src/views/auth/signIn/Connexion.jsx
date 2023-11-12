import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import {useForm} from 'react-hook-form';

const Connexion = ({connexion}) => {

    const {handleSubmit, register} = useForm();

  const textColorBrand = useColorModeValue("brand.500", "white");


    return (
        <div>
            <form onSubmit={handleSubmit(connexion)}>
                <label htmlFor="email">E-mail</label><br />
                <input type="email" placeholder="abiole68@gmail.com"
                    id="email"
                    {...register("email")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />

                <br /><br />
                <label htmlFor="mdp">Mot de passe</label><br />
                <input type="password"
                    {...register("mdp")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />


                <Flex justifyContent='space-between' align='center' mb='24px'>
                    <Text
                        color={textColorBrand}
                        fontSize='sm'
                        w='154px'
                        fontWeight='500'>
                        mot de passe oublié?
                    </Text>
                </Flex>

                <button style={{ backgroundColor: "#89CFF3", padding: "10px", width: "200px", textAlign: "center", borderRadius: "20px", marginLeft: "20%" }}>connexion</button>

            </form>
        </div>
    )
}

export default Connexion;