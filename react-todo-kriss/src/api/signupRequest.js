const signupRequest = async (req, res) => {
    let nom=req.body.nom
    let prenom=req.body.prenom
    let age=req.body.age;
    let password=req.body.password
    let email=req.body.email
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
       await console.log("front");
       await console.log(data)
        return res.end(JSON.stringify({success: data}))
    } catch (err) {
        return res.end(JSON.stringify({"err": err.message}));
    }

}
signupRequest();
 export default signupRequest();