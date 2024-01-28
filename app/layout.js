import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
const gellix11 = localFont({ src: "../fonts/gellix-11.ttf" });
const gellix13 = localFont({ src: "../fonts/gellix-13.ttf" });
const mattermedium = localFont({ src: "../fonts/Matter-Medium.ttf" });

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Gbadebo-Oluwarimi",
  description: "Gbadebo Oluwarimi Profile Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={gellix11.style}>
        {children}
      </body>
    </html>
  );
}
