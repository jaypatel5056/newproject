
import axios from 'axios'
import { BsCloudFog } from 'react-icons/bs';

export default async function(req,res){
  console.log('boada');
  console.log(req.body);
  const {id} =req.body;
  console.log('id in api')
  console.log(id);
    try {
      //   const response = await axios.post(`https://testapivai.000webhostapp.com/wp-json/wp/v2/users/5`, 
      //  {
      //    headers:{'Content-Type':'application/x-www-form-urlencoded',
      //    'Authorization': `Bearer ${process.env.TOKEN}`}
      //  }
      //  );
      const response=await axios.get(`https://testapivai.000webhostapp.com/wp-json/wp/v2/users/${id}?context=edit`,
      {
          headers:{
              Authorization: `Bearer ${process.env.TOKEN}`
          }
      }
      );
      
       console.log('in api');
       console.log(response.data.roles==='admin');
       const data=response.data;
       console.log(response.data);
      //  res.status(500).json(response);
      res.json(data);

     } catch(error){
        console.error(error);
     }
}