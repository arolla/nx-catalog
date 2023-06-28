const loginRequest = async (req, res) => {
    let password=req.body.password
    let email=req.body.email
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
        const url = 'http://localhost:3004/connection/login'

        const response = await fetch(url, options);
        const data = await response.json();
        await console.log("front");
        await console.log(data)
        return res.end(JSON.stringify({success: data}))
    } catch (err) {
        return res.end(JSON.stringify({"err": err.message}));
    }

}
loginRequest();
export default loginRequest();