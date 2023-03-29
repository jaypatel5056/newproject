import axios from "axios"
export default async function (req,res){
    try{
     const response=await axios.get("http://localhost/wordpress/wp-json/wp/v2/users",
     {
        headers:{
            Authorization: `Bearer ${process.env.TOKEN1}`
        }
    }
     )
     const userdata=response.data;
     res.status(200).json(userdata);
    }catch(error){
        console.error(error);
    }

}