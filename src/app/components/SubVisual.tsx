"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const SubVisualImages = [
    { src: "/top_slide01.png", alt: "1" },
    { src: "/top_slide02.png", alt: "2" },
    { src: "/top_slide03.png", alt: "3" },
    { src: "/top_slide04.png", alt: "4" },
    { src: "/top_slide05.png", alt: "5" },
    { src: "/top_slide06.png", alt: "6" },
]

function SlideImage() {
    return (
        <>
            {SubVisualImages.map((img, index) => (
                <Image
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="inline-block mr-4"
                />
            ))}
        </>
    )
}

export default function SubVisual() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current
            const scrollWidth = scrollContainer.scrollWidth
            const animationDuration = scrollWidth / 50 // スピードを調整

            scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`)
            scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`)
            setIsLoaded(true)
        }
    }, [])

    return (
        <section className="w-full py-2 bg-gray-100 overflow-hidden">
            <div 
                ref={scrollRef} 
                className={`flex ${isLoaded ? 'animate-scroll' : ''}`}
            >
                <SlideImage />
                <SlideImage />
            </div>
        </section>
    )
}
