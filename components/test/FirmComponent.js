import React from "react";
import styles from "../../styles/test/firm.module.scss";
import Image from 'next/image'

const Firm = () => {
  return (
    <div className={styles.section}>
      <div className={styles.main}>
      <h2 class={styles.h2}> What Is a Consulting Firm &amp; What Does</h2>
       <div className={styles.flexsection}>
        <div className={styles.section}>
          <ul>
            <li><h3><strong>01.</strong>Agile</h3></li>
            <li><h3><strong>02.</strong>Cost Transformation</h3></li>
            <li><h3><strong>03.</strong>Learning & Development</h3></li>
            <li><h3><strong>04.</strong>Mergers and Acquisitions</h3></li>
            <li><h3><strong>05.</strong>People and Organization</h3></li>
            <li><h3><strong>06.</strong>Private Equity</h3></li>
          </ul>
          <p class={styles.p1}>Image from <a href="https://freepik.com/photos/backround" className={styles.a} >Freepik</a></p>
          <div className={styles.buttons1} class="buttons"> <a href="#">READ MORE</a> </div>
        </div>
        <div className={styles.section}>
        <ul>
            <li><h3><strong>07.</strong>Mergers and Acquisitions</h3></li>
            <li><h3><strong>08.</strong>Private Equity</h3></li>
            <li><h3><strong>09.</strong>Operations</h3></li>
            <li><h3><strong>10.</strong>Sales and Marketing</h3></li>
            <li><h3><strong>11.</strong>Sustainability & Responsibility</h3></li>
            <li><h3><strong>12.</strong>Transformation</h3></li>
          </ul>
        </div>
        <div className={styles.section3}></div>
        </div>
        <div className={styles.secondsection}>
          <div className={styles.image1}>
          {/* <Image
      src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a12553e956115c89af7ad1bf/fgfgggg.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
          <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a12553e956115c89af7ad1bf/fgfgggg.jpg" alt="" className={styles.image2}></img>
          <div className={styles.rectangle1}>
          <h2 class={styles.h2}> We are bringing ideas to life. </h2>
          <p className={styles.p2}>Nibh tortor id aliquet lectus proin nibh nisl condimentum. Libero id faucibus nisl tincidunt eget nullam. Justo eget magna fermentum iaculis eu non diam phasellus. Arcu risus quis varius quam quisque id diam vel quam.</p>
          <p class={styles.p1}>Image from <a href="https://www.freepik.com/photos/business" class={styles.a1}>Freepik</a>
          </p>
          <div className={styles.buttons1}>
            <div>
        <a href="#">READ MORE</a></div>
        </div>
          </div>
          </div>
        </div>
       </div>
    </div>  );
};

export default Firm;
