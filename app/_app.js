import { localFont } from "next/font";
import "../styles/globals.css";

const gellix11 = localFont({ src: "../fonts/gellix-11.ttf" });
const gellix13 = localFont({ src: "../fonts/gellix-13.ttf" });
const mattermedium = localFont({ src: "../fonts/Matter-Medium.ttf" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
