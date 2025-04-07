'use client';

import { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';
import { ArticleReader } from "./components/article-reader"

export default function Home() {
  useEffect(() => {
    // Tell the client we're ready to show content
    sdk.actions.ready();
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f5f0]">
      <div className="container mx-auto">
        <ArticleReader />
      </div>
    </main>
  );
}
