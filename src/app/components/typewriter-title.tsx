"use client"

import { useState, useEffect } from "react"

export function TypewriterTitle() {
  const [text, setText] = useState("")
  const fullText = "Paradigm Shifts"
  const typingSpeed = 100 // milliseconds per character

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <h1 className="text-4xl font-bold mb-4 text-ink relative">
      {text}
      {text !== fullText && (
        <span className="cursor inline-block w-[2px] h-[1.1em] bg-ink ml-1 animate-blink" />
      )}
    </h1>
  )
} 