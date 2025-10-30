'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText as GSAPSplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, GSAPSplitText)

interface AutoSplitTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  ease?: string
}

const AutoSplitText: React.FC<AutoSplitTextProps> = ({
  children,
  className = '',
  delay = 0.060,
  duration = 0.1,
  ease = 'power3.out'
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const childElements = Array.from(containerRef.current.children) as HTMLElement[]

    childElements.forEach(el => {
      const split = new GSAPSplitText(el, { type: 'chars, words', charsClass: 'split-char' })
      gsap.fromTo(
        split.chars,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: delay,
          duration,
          ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true
          }
        }
      )
    })
  }, [children, delay, duration, ease])

  return <div ref={containerRef} className={className}>{children}</div>
}

export default AutoSplitText
