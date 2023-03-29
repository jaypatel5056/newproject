import puppeter from 'puppeteer'
import ReactDOMServer from 'react-dom/server'
import Allposts from "../../components/blogsection/allPosts"
import axios from 'axios'
import PrintPreview from '../printcheck'
import Try1 from "../../contactform/try1.html"
import styles from "../../styles/blog/Allposts.module.scss"

export default async function(req,res){
 try {
  const {id} = req.query;

  const posts = await getBlogPostById1(id);
//   console.log(posts);

  const html = ReactDOMServer.renderToString(<Allposts post={posts.data} />);
// const printHtml = ReactDOMServer.renderToString(
//     <PrintPreview html={html} />
//   );
//   res.setHeader("Content-Type", "text/html");
//   res.end(printHtml);
const styleTags = `
<link rel="stylesheet" type="text/scss" href="../../styles/blog/Allposts.module.scss">
`;


  console.log('html');
  console.log(html)

  const browser = await puppeter.launch();
  const page= await browser.newPage();
  const html1='<h1>Hello</h1>';
  
  await page.setContent(`${styleTags} ${html}`, { waitUntil: 'networkidle0' });
  // await page.goto(`data:text/html,${html}`, { waitUntil: 'networkidle0' });

// await page.waitForNavigation({
//   waitUntil: 'networkidle0',
// });
  // await page.waitForTimeout(2000);
  const content= await page.content();
  console.log('oooii');
  console.log(content);
  
  // console.log(page); 

  // await page.goto(`data:text/html,${html}`, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({
    path:'testpdf',
    format: 'A4',
    printBackground: true,
    // timeout: 60000
  });
console.log(`Rendered HTML length: ${html.length}`);

  // await page.emulateMediaType('screen');
  
  // await page.goto('http://localhost:3000/printcheck', { waitUntil: 'networkidle0' });
// const pdf = await page.pdf({ 
//   format: 'A4',
//   printBackground: true,
// });

  // const pdf = await page.pdf();
  console.log(`Generated PDF length: ${pdf.length}`);
  
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${posts.slug}.pdf`);
  res.send(pdf);
  await browser.close();
  
 } catch (error) {
    console.log('sdad');
   console.error(error);
   res.status(500).send('Internal server error');
 }
}


async function getBlogPostById1(id) {
  try {
    const posts = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`,
    {
      headers:{  
        Authorization: `Bearer ${process.env.TOKEN1}`
      }
  }
);
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// async function getBlogPostById(id) {
//   try {
//     const token1='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE';
//     const posts = await axios.get(`https://testapivai.000webhostapp.com/wp-json/wp/v2/posts/${id}`,
//     {
//       headers:{  
//         Authorization: `Bearer ${token1}`
//       }
//     }
//   );
//     return posts;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }