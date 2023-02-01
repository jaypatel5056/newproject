import React from 'react'
import styles from './rsc.module.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { HiOutlineArrowNarrowRight } from 'react-icons/Hi';

const RSC = () => {
  return (
    <div className={styles.rsc}> 
     <div className={styles.square1}>
     <h2 class={styles.h2}>Research</h2>
     <p class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={styles.icon}>  
      <HiOutlineArrowNarrowRight  size={70}  color="white"/>
      </div>
      
      </div>       
      <div className={styles.square}>
     <h2 class={styles.h2}>Strategy</h2>
     <p class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={styles.icon}>  
      <HiOutlineArrowNarrowRight size={70}  color="#5576fb"/>
      </div>
      
      </div>   
      <div className={styles.square}>
     <h2 class={styles.h2}>Consulting</h2>
     <p class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={styles.icon}>  
      <HiOutlineArrowNarrowRight size={70}  color="#5576fb"/>
      </div>
      
      </div>    
     <div className={styles.strategy}></div>
     <div className={styles.consulting}></div>
        
        </div>
  )
}

export default RSC