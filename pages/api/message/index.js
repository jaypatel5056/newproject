import data from "../../../data/contactformdata";
export default function handler(req, res) {
  const method = req.method;
  if (method === "POST") {
    console.log(data);
    // console.log("hello");
    const data2 = JSON.parse(req.body);
    // console.log(req.body.name);
    const newmessage = {
      name: data2.name,
      email: data2.email,
      message: data2.message,
    };
    console.log(newmessage);
    data.push(newmessage)
    console.log(data)
    res.status(200).json({ hello: "hello" });
    // data.push(newmessage)

    // const data1=req.body.inputData
  }
  //   const user = data.find((user) => user.id === userId);

  //   const currentBlogIndex = data.findIndex((user) => user.id === userId);
  //   res.status(200).json({
  //     currentBlog: data[currentBlogIndex],
  //     previousBlog,
  //     nextBlog,
  //   });
}
