import React from 'react'
import Navbar from "../../components/Navbar"
import styles from "../../styles/Macos.module.scss"
import Footer from "../../components/Footer"
import { useRouter } from 'next/router'

const hello = () => {
  const router=useRouter();
  const value=router.query.slug
  return (
    <div>
    <Navbar/>
    <div className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.img}> </div>
        <h1 class={styles.h1} >{value}</h1> 
        <p class={styles.p1}>Software / Leave a Comment</p>
        <h3 class={styles.h1} >Cursus iaculis etiam in</h3>    
        <p class={styles.p1}>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.
         Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>
   </div>
      <h3 class={styles.h1}>Magna enim, convallis ornare</h3>
      <p class={styles.p1}>Sollicitudin bibendum nam turpis non cursus eget euismod egestas sem nunc amet, tellus at duis suspendisse commodo lectus accumsan id cursus facilisis nunc eget elementum non ut elementum et facilisi dui ac viverra sollicitudin lobortis luctus sociis sed massa accumsan amet sed massa lectus id dictum morbi ullamcorper.
Morbi ut viverra massa mattis vitae blandit ut integer non vestibulum eros, diam in in et hac mauris maecenas sed sapien fermentum et eu.
</p>
       </div>
    </div>  )
}

export default hello