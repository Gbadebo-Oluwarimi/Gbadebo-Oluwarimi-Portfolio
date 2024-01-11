"use client";

import Image from "next/image";
import localFont from "next/font/local";

const gellix11 = localFont({ src: "../fonts/gellix-11.ttf" });
const gellix13 = localFont({ src: "../fonts/gellix-13.ttf" });
const Mattermedium = localFont({ src: "../fonts/Matter-Medium.ttf" });

export default function Home() {
  return (
    <main style={gellix13.style} className="main min-h-screen text-xl">
      <nav className=" max-w-6xl m-auto">
        <div> Gbadebo Oluwarimi</div>
        <ul>
          <li></li>
        </ul>
      </nav>
    </main>
  );
}
