import puppeter from 'puppeteer'
import ReactDOMServer from 'react-dom/server'
import Allposts from "../../components/blogsection/allPosts"
import Allposts1 from "../../components/blogsection/allposts1"
import axios from 'axios'
import handlebars from "handlebars";
// import sass from 'node-sass';
import PrintPreview from '../printcheck'
import Try1 from "../../contactform/try1.html"
import styles from "../../styles/blog/Allposts.module.scss"
import styles1 from "../../contactform/allposts.css"
import fs from "fs";

export default async function(req,res){
 try {
  const {id} = req.query;

  const posts = await getBlogPostById1(id);
//   console.log(posts);

  const html = ReactDOMServer.renderToString(<Allposts1 post={posts.data} />);
// const printHtml = ReactDOMServer.renderToString(
//     <PrintPreview html={html} />
//   );
//   res.setHeader("Content-Type", "text/html");
//   res.end(printHtml);
const path1=require('path');
// const htmlFilePath = path1.join(__dirname, "..","..","..","..", "styles", "blog","allposts.css");
const htmlFilePath = path1.join(__dirname, "..","..","..","..", "contactform", "allposts.css");
console.log('path');
console.log(htmlFilePath);
// const css = sass.renderSync({
//   file: scssFilePath
// }).css.toString();

// const styleTags = `
// <link rel="stylesheet" type="text/scss" href="${htmlFilePath}">
// `;
// console.log('stylestage');
// console.log(styleTags);
// const styleTags = `
// <style type="text/css">
//   ${css}
// </style>
// `;
// console.log('csss');
// console.log(css);
const cssFilePath = path1.join(__dirname, "..","..","..","..", "contactform", "allposts.css");
// const cssContent = fs.readFileSync(cssFilePath, 'utf8');
const cssContent=`<link rel="stylesheet" href="${cssFilePath}" />`;

const styleTags = `
  <style>
    ${cssContent} 
  </style>
`;
const bodyStyle = { backgroundColor: "red" };
const content3 = `
      <!DOCTYPE html>
      <html>
        <head>
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <link rel="stylesheet" type="text/scss" href="${cssFilePath}"> 
          </head>
        <body style={{fontFamily: 'Poppins'}}>
        ${html}
         <div>Hello </div>
        </body>
      </html>
    `;


  console.log('html');
  console.log(html)

  const browser = await puppeter.launch();
  const page= await browser.newPage();
  const html1='<h1>Hello</h1>'; 
  const content1 =`${cssContent} ${html}`;
  await page.setContent(html, { waitUntil: 'networkidle0' });
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