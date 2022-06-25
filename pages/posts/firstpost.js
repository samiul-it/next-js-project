import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Head from "next/head";

const FirstPost = () => {
    return (
      <div>
        <Head>
          <title>Image</title>
          <link rel="icon" href="/photo-photography-image-picture_108525.ico" />
        </Head>
        <h1> First Post</h1>
        <Image
          src="/images/40948-Samiul.jpg"
          height={80} // Desired size with correct aspect ratio
          width={80} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Image
          src="/images/40948-Samiul.jpg"
          height={80} // Desired size with correct aspect ratio
          width={80} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Image
          src="/images/40948-Samiul.jpg"
          height={80} // Desired size with correct aspect ratio
          width={80} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <Link href="/">
          <a> Back To Home</a>
        </Link>
      </div>
    );
};

export default FirstPost;