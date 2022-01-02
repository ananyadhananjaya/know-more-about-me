import Image from "next/image";
import { useEffect, useState } from "react";
import background from "../public/background.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="bgWrap">
        <Image src={background} layout="fill" objectFit="cover" />
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white opacity-80 m-auto">
        <div className="px-6 py-2">
          <span>Hey. I&apos;m AX. I&apos;m a 23 year old woman. I like learing something new all the time. And, these are my current interestes - </span> <br />
 <span>1. Quantum Mechanics ( A huge Brian Greene fan )</span> <br />
 <span>2. Urban Sketching </span> <br />
 <span>3. Web 3.0  </span><br />
  <br /> 
        </div>
        <div className="px-6 py-2">
          <span>Link to Github &#160;
          
            <Link href="https://github.com/ananyadhananjaya"><a target="_blank"><img  src="/github.svg" alt="github" width="30px" height="30px" className="inline-block" /></a></Link>
          </span>
        </div>
      </div>
    </div>
  );
}
