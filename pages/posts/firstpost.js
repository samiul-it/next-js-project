import Link from 'next/link';
import React from 'react';

const FirstPost = () => {
    return (
      <div>
        <h1> First Post</h1>
        <Link href="/">
          <a> Back To Home</a>
        </Link>
      </div>
    );
};

export default FirstPost;