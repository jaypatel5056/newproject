import React from "react";
import styles from "../styles/try.module.scss";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion, variants } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fas } from "@fortawesome/free-solid-svg-icons";

const cardVariants = {
  offscreen: {
    y: -200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay:  2, 
    },
  },
};
const RSC = () => {
  return (
    <Container fluid>
    <Row>
    {/* <motion.div
     initial={{ x: -50 }}
     whileInView={{ x: 0 }}
     transition={{ duration:  0.5, delay:  0.0  }}
     // transition={{ duration: 0.5 }}
     viewport={{ once: false,  }} 
    > */}
    
    <Col lg={6}  xl={4} className={` ${styles.hello}`}>
    <motion.div
          initial={{ y: 400 ,opacity:0}}
          whileInView={{y:0,opacity:1}}
          // animate={{ y: 0,}}
          transition={{ duration: 0.5}}
          viewport={{once: false,viewport: 0.5}}
          class={styles.try}
        >
      
        <motion.h2
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false,  delay: 1}}
          // animate= {{y: 0, opacity: 1}}
          // transition ={{duration: 1.5}}
          class={styles.h2}
        >
          Research
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ rotate: [45, 0], opacity: [0,0.25,0.75,1] }}
          transition={{ duration:  0.5, delay: 1}}
          viewport={{ once: false, amount:0.8 }}
          class={styles.p1}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </motion.p>
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration:  0.5, delay:  1.0  }}
          // transition={{ duration: 0.5 }}
          viewport={{ once: false,  }}
          className={styles.icon}//association means one object knows about other objects  aggregation means one object reprents as a whole and is made of other objects which are rferred to it as its parts aggregation is knows as a has a relationship
          
          //asociation means one object knows about the other object it represents the relationship between two objects and they communicate which ither.
         >
          <HiOutlineArrowNarrowRight size={70} color="white" />
        </motion.div>
        </motion.div>
      </Col>
      {/* </motion.div> */}
      <Col lg={6} xl={4} className={`  ${styles.hello}`}>  
      <motion.div
           initial={{ y: 400 ,opacity:0}}
           whileInView={{y:0,opacity:1}}
           // animate={{ y: 0,}}
           transition={{ duration: 0.5}}
           viewport={{once: false,viewport: 0.5}}
           class={styles.try1}
        >
        {/* <motion.h2
          // variants={cardVariants}
          initial={{y:-200}}
          animate={{y:0}}
          // whileInView="onscreen"
          viewport={{ once: false, amount:0.8 }}
          transition={{ duration: 1 ,delay: 2}}
          //  variants={cardVariants}
          //  initial={{
          //   y: -200, opacity: 0
          // }}
          //  whileInView={{y: 0, opacity: 1,
          //  transition: {
          //    duration: 1.5,
          //    delay: 2
          //  }}}
          class={styles.h2}
        >
          {" "}
          Strategy{" "}
        </motion.h2> */}
         <motion.h2
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false,  delay: 1}}
          // animate= {{y: 0, opacity: 1}}
          // transition ={{duration: 1.5}}
          class={styles.h2}
        >
          Research
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ rotate: [45, 0], opacity: [0,0.25,0.75,1] }}
          transition={{ duration:  0.5, delay:  1}}
          viewport={{ once: false, amount:0.8 }}
          class={styles.p1}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </motion.p>

        {/* <p class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration:  0.5, delay:  1 }}
          // transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: false,  }}
          className={styles.icon}
        >
          <HiOutlineArrowNarrowRight size={70} color="#5576fb" />
        </motion.div>
        </motion.div>
      </Col>
      
      <Col lg={6} xl={4} className={`  ${styles.hello}`}>
          
      <motion.h2
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false,  delay: 1}}
          // animate= {{y: 0, opacity: 1}}
          // transition ={{duration: 1.5}}
          class={styles.h2}
        >
          Research
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ rotate: [45, 0], opacity: [0,0.25,0.75,1] }}
          transition={{ duration: 0.5, delay:  1}}
          viewport={{ once: false, amount:0.5 }}
          class={styles.p1}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </motion.p> 
      
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration:  0.5, delay:  0.5  }}
          // transition={{ duration: 0.5, delay: 2 }}
          viewport={{ once: false}}
          className={styles.icon}
        >
          <HiOutlineArrowNarrowRight size={70} color="#5576fb" />
        </motion.div>
      </Col>
      <div className={styles.strategy}></div>
      <div className={styles.consulting}></div>
    </Row>
    </Container>
  );
};

export default RSC;
