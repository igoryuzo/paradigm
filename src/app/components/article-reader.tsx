"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from 'lucide-react'
import { ArticleSection } from "./article-section"
import { TypewriterTitle } from "./typewriter-title"
import Image from "next/image"
import { articleContent } from "../data/article-content"

export function ArticleReader() {
  const [visibleSections, setVisibleSections] = useState(1)
  const totalSections = articleContent.length

  // Update progress bar as user scrolls
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      const progressBar = document.getElementById('progress-bar')
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`
      }
    }

    window.addEventListener('scroll', updateProgressBar)
    return () => window.removeEventListener('scroll', updateProgressBar)
  }, [])

  const loadMoreSections = () => {
    setVisibleSections(Math.min(visibleSections + 1, totalSections))
  }

  return (
    <div className="max-w-[430px] mx-auto pb-16 relative font-mono">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-paper border-b border-[#e0dcd3] px-4 py-3 flex items-center justify-between">
        <div className="text-sm text-[#6b6b6b]">Colossus Review</div>
        <a 
          href="https://joincolossus.com/article/paradigm-shifts-matt-huang/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-[#4a7aa7] hover:underline transition-colors"
        >
          View Original
        </a>
      </header>

      {/* Article Content */}
      <div className="px-5 py-8">
        <div className="mb-10">
          <div className="text-base text-[#6b6b6b] mb-4">Firm Profile</div>
          
          <div className="mb-6">
            <Image
              src="/images/firm-profile.png"
              alt="Matt Huang portrait against dark background"
              width={430}
              height={430}
              className="w-full rounded-lg"
              priority
            />
          </div>

          <TypewriterTitle />
          <div className="text-base text-ink mb-6">
            Inside one of crypto&apos;s most trusted institutions with Co-founder and Managing Partner Matt Huang
          </div>
          <div className="space-y-1">
            <div className="text-sm text-[#6b6b6b]">
              By Dom Cooke
            </div>
            <div className="text-sm text-[#6b6b6b]">
              April 2025
            </div>
            <div className="text-sm text-[#6b6b6b]">
              Issue 02
            </div>
          </div>
        </div>

        {/* Article Sections */}
        {Array.from({ length: visibleSections }, (_, i) => (
          <ArticleSection key={i + 1} sectionId={i + 1} />
        ))}
        
        {/* Load More Button */}
        {visibleSections < totalSections && (
          <button 
            onClick={loadMoreSections}
            className="flex items-center justify-center w-full py-3 mt-8 border border-ink rounded-md text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Read More <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-[#e0dcd3]">
        <div id="progress-bar" className="h-full bg-ink w-0 transition-all duration-300"></div>
      </div>
    </div>
  )
} 