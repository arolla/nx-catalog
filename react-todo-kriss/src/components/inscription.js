import React, {useCallback, useState} from 'react';
import Navigation from "./Navigation";

const Inscription = (req,res) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");
    const signupFetch=async()=>{
            const method = 'Post'
            const bodyAenvoyer = {
                "nom": nom,
                "prenom": prenom,
                "age": age,
                "password": password,
                "email": email
            }
            const options = {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(bodyAenvoyer
                )
            }

            try {
                const url = 'http://localhost:3004/connection/signup'

                const response = await fetch(url, options);
                const data = await response.json();
                await console.log(data);

            } catch (err) {
              console.log(err)
            }

        }




        return (

            <div>
                <div id='container'>
                    <Navigation></Navigation>
                    <div id="iconLogin"/>
                    <input id='nom' value={nom} placeholder={'nom'}
                           onChange={e => setNom(e.target.value)} type={'text'}/>
                    <input id='prenom' value={prenom} placeholder={'prenom'}
                           onChange={e => setPrenom(e.target.value)} type={'text'}/>
                    <input id='age' value={age} placeholder={'age'}
                           onChange={e => setAge(e.target.value)} type={'text'}/>

                    <input id='email' value={email} placeholder={'email'} onChange={e => setEmail(e.target.value)}
                           type={'text'}/>
                    <input id='password' value={password} placeholder={'password'}
                           onChange={e => setPassword(e.target.value)} type={'text'}/>

                    <button onClick={signupFetch} id='btnSignup'>SIGNUP</button>
                    <a href='/login'>LOGIN</a>
                </div>
            </div>
        );
    };

    export default Inscription;