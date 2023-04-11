import axios from 'axios'


export default async function(req, res) {
  const { id, title, content, categories } = req.body;

  try {
    const response = await axios.get(`https://testapivai.000webhostapp.com/wp-json/wp/v2/categories?slug=${categories}`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN1}`
      }
    });

    let categoryId;
    if (response.data.length > 0) {
      categoryId = response.data[0].id;
    } else {
      const categoryResponse = await axios.post('https://testapivai.000webhostapp.com/wp-json/wp/v2/categories', {
        name: categories
      }, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN1}`
        }
      });

      categoryId = categoryResponse.data.id;
    }

    const postResponse = await axios.post(`https://testapivai.000webhostapp.com/wp-json/wp/v2/posts/${id}`, {
      title: title,
      content: content,
      categories: [categoryId]
    }, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN1}`
      }
    });

    res.status(200).json(postResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating post' });
  }
}


// export default async function (req,res){
//     const {id,title,content,categoryname} = req.body;
//     let categoryId=getCategoryId(categoryname);
//     console.log('category id');
//     console.log(categoryId);
//     try{
//     // const response=axios.get('http://localhost/wordpress/wp-json/wp/v2/posts',{
//     //     headers:{
//     //         Authorization:`Bearer ${process.env.TOKEN1}`
//     //     }
//     // })
//     const response = await axios.post(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`,
//     {
//         title:title,
//         categories:categoryId
//     },{ 
//       headers:{  
//         Authorization: `Bearer ${process.env.TOKEN1}`
//       }
//     }
//   );
//   res.status(200).json(response.data)
// }
// catch(error){
//     console.error(error);
//     res.status(500).json({message:"Error loading posts"})
// }

// }
async function getCategoryId(categoryname){
    try{
    const response=await axios.post('http://localhost/wordpress/wp-json/wp/v2/categories',
    {
        name:`Apps`
    },
    { 
        headers:{  
          Authorization: `Bearer ${process.env.TOKEN1}`
        }
      }
    )
    let id=response.data.id
    return id;
}
catch(error)
{console.error(error);
}
}