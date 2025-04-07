"use client"

import { useState, useEffect } from "react"

export function AnimatedTitle() {
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const title = "Paradigm Shifts"
  const typingSpeed = 100 // milliseconds per character

  useEffect(() => {
    if (isTyping && typedText.length < title.length) {
      const timeout = setTimeout(() => {
        setTypedText(title.substring(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (typedText.length === title.length) {
      setIsTyping(false)
    }
  }, [typedText, isTyping, title])

  return (
    <h1 className="text-3xl font-bold text-[#2d2d2d] font-serif">
      {typedText}
      {isTyping && <span className="cursor inline-block w-2 h-6 bg-[#2d2d2d] ml-0.5 animate-blink"></span>}
    </h1>
  )
} 