import { useForm } from 'react-hook-form';

const Inscription = ({ inscription }) => {

    const { handleSubmit, register } = useForm();

    return (
        <div className='InscriptionConteneur'>
            <form onSubmit={handleSubmit(inscription)}>
                <label htmlFor="nom">Nom et prenoms</label><br />
                <input type="text" placeholder="Votre nom et prenom"
                    id="nom"
                    {...register("nom")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />

                <br /><br />
                <label htmlFor="telephone">Téléphone</label><br />
                <input type="number" placeholder="Votre numéro de téléphone"
                    id="telephone"
                    {...register("telephone")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />
                <br /><br />

                <label htmlFor="emailInsc">E-mail</label><br />
                <input type="email" placeholder="abiole68@gmail.com"
                    id="emailInsc"
                    {...register("emailInsc")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />
                <br /><br />

                <label htmlFor="filiere">Filière</label><br />
                <select name="filiere" {...register("filiere")} id="filiere" style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }}>
                    <option value="EEAI">Electronique Electrotechnique Automatique Information EEAI</option>
                    <option value="EEM">Energie Electromecanique EEM</option>
                    <option value="MPT">Mathematique Physique Technologie MPT</option>
                    <option value="MPCT">Mathematique Physique Chimie Technologie MPCT</option>
                </select>
                <br /><br />

                <label htmlFor="promotion">Promotion</label><br />
                <input type="text" id='promotion' placeholder='Votre promotion'
                    {...register("promotion")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />
                <br /><br />

                <label htmlFor="promotion">Decrivez-vous</label><br />
                <textarea cols="20" rows="5" placeholder='Description profil' {...register("description")} style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} ></textarea>
                <br /><br />

                <label htmlFor="mdpInsc">Mot de passe</label><br />
                <input type="password"
                    {...register("mdpInsc")}
                    style={{ padding: "10px", paddingLeft: "20px", backgroundColor: "#EEEEEE", width: "100%", borderRadius: "20px" }} />
                <br /><br />
                <button style={{ backgroundColor: "#89CFF3", padding: "10px", width: "200px", textAlign: "center", borderRadius: "20px", marginLeft: "20%" }}>inscription</button>

            </form>
        </div>
    )
}

export default Inscription;