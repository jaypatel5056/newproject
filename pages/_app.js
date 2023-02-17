import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/variables.scss'
// import '@/styles/updates.scss'

import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
