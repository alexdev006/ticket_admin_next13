import Image from 'next/image.js';
import Link from 'next/link.js';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav>
        <Image
          src="/yellowMonkey.jpg"
          alt="logo"
          width={70}
          height={70}
          quality={100}
        />
        <h1>helpDesk</h1>
        <Link href="/">dashboard</Link>
        <Link href="/tickets">tickets</Link>
      </nav>
    </div>
  );
}
