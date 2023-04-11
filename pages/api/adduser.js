
import axios from "axios"
export default async function(req,res)
{
    const data= req.body;
    console.log('data from api');
    console.log(data);
    const {firstName,lastName,userName,email,password}=req.body;
   try{
    const response=await axios.post('https://testapivai.000webhostapp.com/wp-json/wp/v2/users',{
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        password: password,
    },
    {
        headers:{
            Authorization: `Bearer ${process.env.TOKEN1}`,
            'Content-Type':'application/x-www-form-urlencoded'
        }
    }
    )
    res.status(200).json(response.data)
   }
   catch(error)
   {console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
}
}