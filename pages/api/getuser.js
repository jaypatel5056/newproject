import axios from "axios"
export default async function (req,res){
    try{
    //  const response1=await axios.get("http://localhost/wordpress/wp-json/wp/v2/users",
    //  {
    //     headers:{
    //         Authorization: `Bearer ${process.env.TOKEN1}`
    //     }
    // }
    //  )
     const response=await axios.get('https://testapivai.000webhostapp.com/wp-json/wp/v2/users',
    {
        headers:{
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    }
    )
     const userdata=response.data;
     res.status(200).json(userdata);
     console.log('usewr data');
     console.log(userdata)
    }catch(error){
        console.error(error);
    }

}