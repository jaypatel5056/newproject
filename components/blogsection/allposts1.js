import React from "react";
// import {useState} from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import styles from "../../styles/blog/Allposts.module.scss";
import { AiOutlineUser, AiFillWechat } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import axios from "axios";
import { useEffect, useState } from "react";

const Allposts = ({ post }) => {
  const regex = /<img.+?src="(.+?)".*?>/i;
  const urlmatch = post.content.rendered.match(regex);
  const imageUrl = urlmatch ? urlmatch[1] : null;
  const [categoryName, setCategoryName] = useState("");

  // console.log("url");
  // console.log(imageUrl);
  // console.log("match");
  // console.log(urlmatch);

  useEffect(() => {
    async function getCategoryName() {
      console.log(post.categories[0]);
      const categoryData = await axios.get(
        `/api/category/name/${post.categories[0]}`
      );
      // console.log("iiii");
      // console.log(categoryData);
      // console.log("name");
      // console.log(categoryData.data.name);
      setCategoryName(categoryData.data.name);
    }
    getCategoryName();
  }, [post.categories]);

  return (
    <>
      <html>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body style={{ fontFamily: "Poppins" }}>
          <div>
            <div
              class="three"
              style={{ width: "75%", margin: "auto", marginBottom: "40px" }}
            >
              <div
                class="col-xs-12 col-md-6 firstsection"
                style={{ height: "300px", margin: "0 auto", marginTop: "20px" }}
              >
                <a href={`blogs/${post.id}`} class="a1">
                  <img
                    src={imageUrl}
                    alt=""
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      backgroundSize: "cover",
                    }}
                  ></img>
                </a>
              </div>
              <div
                class="col-xs-12 col-md-6 firstsection"
                style={{ height: "300px", margin: "0 auto", marginTop: "20px" }}
              >
                <div
                  class="content1"
                  style={{ paddingTop: "20px", paddingLeft: "10px" ,marginTop:'70px'}}
                >
                  <p
                    class="p1"
                    style={{
                      color: "#805aed",
                      letterSpacing: "2px",
                      fontFamily: "Sora",
                      textTransform: "uppercase",
                    }}
                  >
                    {categoryName}
                  </p>
                  <a
                    href={`blogs/${post.id}`}
                    class="a1"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "Sora",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    {post.title.rendered && post.title.rendered}
                  </a>
                  <p style={{ color: "orange", fontSize: "16px" ,marginTop:'30px'}}>
                    Cursus iaculis etiam in In nullam donec sem sed consequat
                    scelerisque nibh amet, massa egestas risus, gravida vel
                    amet, imperdiet …
                  </p>
                  <div
                    class="details"
                    style={{
                      marginTop: "5px",
                      color: "black",
                      display: "flex",
                      gap: "15px",
                      fontSize: "0.85rem",
                      marginTop:'40px'
                    }}
                  >
                    <div
                      class="details1"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <div class="icons" style={{ textAlign: "center" }}>
                        <i class="ai ai-outline-user"></i>
                      </div>
                      <a
                        href="https://websitedemos.net/tech-news-04/author/akbarh/"
                        title="Posts by akbarh"
                        rel="author"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        akbarh
                      </a>
                    </div>
                    <div
                      class="details1"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <div class="icons" style={{ textAlign: "center" }}>
                        <i class="sl sl-icon-calendar"></i>
                      </div>
                      <p>July 7, 2021</p>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Allposts;
