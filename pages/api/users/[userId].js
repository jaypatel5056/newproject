import {data} from "../../../data/singleblog"
// KE5Ak%L2PYnpYWr%jSF)
export default function handler(req,res){
  const previd=0;
  const nextId=0;
  const {userId}=req.query
  console.log(userId)
  const user=data.find(user=>user.id===userId)
  const currentBlogIndex = data.findIndex(user => user.id === userId);

  // Retrieve the data for the previous/next blog, if it exists
  let previousBlog = null;
  let nextBlog = null;
  if (currentBlogIndex > 0) {
    previousBlog =
data[currentBlogIndex - 1];
}
if (currentBlogIndex < data.length - 1) {
nextBlog = data[currentBlogIndex + 1];
}

// Return the data for the current and previous/next blog
res.status(200).json({
currentBlog: data[currentBlogIndex],
previousBlog,
nextBlog
})

  // console.log("hello");
  // console.log(user)
  // res.status(200).json(currentBlog:user,prevData,nextdata)

}
