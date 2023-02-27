<Col lg={6} xl={4} className={`  ${styles.hello}`}>
  <motion.div
    initial={{ y: 400, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    // animate={{ y: 0,}}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, viewport: 0.5 }}
    class={styles.try1}
  >
    <motion.h2
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, delay: 1 }}
      // animate= {{y: 0, opacity: 1}}
      // transition ={{duration: 1.5}}
      class={styles.h2}
    >
      Research
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ rotate: [45, 0], opacity: [0, 0.25, 0.75, 1] }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      class={styles.p1}
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </motion.p>

    {/* <p class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      // transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: false }}
      className={styles.icon}
    >
      <HiOutlineArrowNarrowRight size={70} color="#5576fb" />
    </motion.div>
  </motion.div>
</Col>;
