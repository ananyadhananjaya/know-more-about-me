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

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white opacity-90 m-auto">
        <div class="px-6 py-2">
          <span>Hey. I'm AX. I'm 23. To know more about me, click About. </span>{" "}
          <br /> <br />
          <span class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white">
            About
          </span>
        </div>
        <div className="px-6 py-2">
          <span>Witness my works on Github. </span> <br /> 
          <span>
            <Link href="https://github.com/ananyadhananjaya"><a target="_blank"><img  src="/github.svg" alt="github" className="inline-block" /></a></Link>
          </span>
        </div>
      </div>
    </div>
  );
}
