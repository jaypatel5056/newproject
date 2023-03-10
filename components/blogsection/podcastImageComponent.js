import React from 'react'
import styles from "../../styles/podcastimage.module.scss"

const PodcastImageComponent = () => {
  return (
    <div className={styles.image4}>
        <div className={styles.section1}>   
            <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/teh-news-podcast-cta-figure-img.png" alt=""/>
        </div>
        <div className={styles.section2}>
        <h6 class="elementor-heading-title elementor-size-default">TechWire Podcast</h6>
        <h3 class="elementor-heading-title elementor-size-default">Listen to daily tech news podcast</h3>
        <p>Maecenas potenti non, turpis eget turpis gravida maecenas.</p>
        </div>
        <div className={styles.section3}>
        <div className={styles.buttons1}>
                  <div>
                    <a href="#">Listen Now</a>
                  </div>
                </div>



        </div>





    </div>
  )
}

export default PodcastImageComponent