// import "../styles/globals.css";
// import "../custom/test.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../data/contactformdata";
// import "variables/scss";
// import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';


import Nstyles from "../styles/globals.css";
import { ProSidebarProvider } from 'react-pro-sidebar';  

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
      <ProSidebarProvider>
      {/* <Container> */}
      <Component {...pageProps} />
      {/* </Container> */}
      </ProSidebarProvider>
    </>
  );
}
