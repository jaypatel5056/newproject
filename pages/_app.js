// import "../styles/globals.css";
// import "../custom/test.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../data/contactformdata";
// import "variables/scss";

import Nstyles from "../styles/globals.css";
// import "..styles/css"
// import '@/variables.scss'
import "../custom/variables.scss";
// import 
// import '@/styles/updates.scss'

import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  function GStyles() {
    return (
      <style jsx global>  
        {Nstyles}
      </style>
    );
  }

  return (
    <>
      {/* <Nstyles jsx></Nstyles> */}

      {/* <GStyles></GStyles> */}
      <Component {...pageProps} />
    </>
  );
}
