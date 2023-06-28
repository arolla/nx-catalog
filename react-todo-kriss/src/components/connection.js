import React, {useState} from 'react';
import Navigation from "./Navigation";
import Form from "./Form";
const Connection=(req,res)=>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [probleme, setProbleme] = useState("");

    const login = async () => {

        const method = 'Post'
        const bodyAenvoyer = {
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
            const url = "http://localhost:3004/connection/login"

            const response = await fetch(url, options);
            const data = await response.json();
            await console.log("front");
            await console.log(data)
            if (!isNaN(data?.id)) {
                await setProbleme('connecte')
            }


        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            {(probleme === "connecte") ? (<Form></Form>) : ''
            }
            {(probleme !== "connecte") ? (
                <>
                    <div id='container'>
                        <Navigation></Navigation>
                        <div id="iconLogin"/>
                        <input id='email' value={email} placeholder={'email'} onChange={e => setEmail(e.target.value)}
                               type={'text'}/>
                        <input id='password' value={password} placeholder={'password'}
                               onChange={e => setPassword(e.target.value)} type={'text'}/>
                        <a id="mdpOublie" href="">Mot de passe ounblié</a>
                        <button onClick={login} id='btnLogin'>LOGIN</button>
                        <h1>{(probleme !== 'connecte' ? 'incorrect' : 'connecte')}</h1>
                        <a href='/inscription'>
                            SIGNUP
                        </a>
                    </div>
                </>

            ) : ''
            }
        </div>
    )
}
export default Connection;