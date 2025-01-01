"use client";

import Image from "next/image";
import hoodie from "@/public/images/hoodie.png";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { useState } from "react";


/*
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
*/

export default function Home() {
  // const session = await getServerSession(authOptions);
 // const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted)
       }}
      >
        Show
      </button>
    </main>
  );
}

//export async function generateMetadata(): Promise<Metadata> {
//const product = await fetch ('');

// return {
//  title: '...',
//  description: '...'
//  }
//}
