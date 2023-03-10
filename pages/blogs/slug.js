import { React, useState, useEffect } from "react";
import Navbar from "../../components/test/NavbarComponent";
import styles from "../../styles/page/macos.module.scss";
// import Footer from "../../components/FooterComponent";
import { useRouter } from "next/router";
import axios, { isCancel, AxiosError } from "axios";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const hello = () => {
  const [hello, setHello] = useState();
  const router = useRouter();
  const value = router.query.slug;
  console.log(value);
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    // const router=useRouter();
    if (value) {
      console.log(`/api/users/${value}`);
      axios
        .get(`/api/users/${value}`)
        .then((res) => {
          setBlogData(res.data);
          console.log(blogData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [value]);
  const { currentBlog, previousBlog, nextBlog } = blogData;
  console.log("hello");
  console.log(currentBlog);

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.main1}>
          <div className={styles.img}>
            {currentBlog && <img src={currentBlog.imgpath} alt=""></img>}
          </div>
          {currentBlog && <h1 class={styles.h1}>{currentBlog.title}</h1>}
          <p class={styles.p1}>Software / Leave a Comment</p>
          <h3 class={styles.h1}>Cursus iaculis etiam in</h3>
          <p class={styles.p1}>
            In nullam donec sem sed consequat scelerisque nibh amet, massa
            egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis
            quis velit, commodo enim aliquet. Nunc volutpat tortor libero at
            augue mattis neque, suspendisse aenean praesent sit habitant laoreet
            felis lorem nibh diam faucibus viverra penatibus donec etiam sem
            consectetur vestibulum purus non arcu suspendisse ac nibh tortor,
            eget elementum lacus, libero sem viverra elementum.
          </p>
          <h3 class={styles.h1}>Magna enim, convallis ornare</h3>
          <p class={styles.p1}>
            Sollicitudin bibendum nam turpis non cursus eget euismod egestas sem
            nunc amet, tellus at duis suspendisse commodo lectus accumsan id
            cursus facilisis nunc eget elementum non ut elementum et facilisi
            dui ac viverra sollicitudin lobortis luctus sociis sed massa
            accumsan amet sed massa lectus id dictum morbi ullamcorper. Morbi ut
            viverra massa mattis vitae blandit ut integer non vestibulum eros,
            diam in in et hac mauris maecenas sed sapien fermentum et eu.
          </p>
          <div className={styles.prevnext}>
            {previousBlog && (
              <Link href={`/blogs/${previousBlog.id}`} className={styles.prev}>
                <div className={styles.prev}>
                  <BsArrowLeft />
                  <h5>Previous Post</h5>
                </div>
              </Link>
            )}
            {nextBlog && (
              <Link href={`/blogs/${nextBlog.id}`} className={styles.next}>
                <div className={styles.next}>
                  <h5>Next Post</h5>
                  <BsArrowRight />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default hello;
