"use client"

import Image from "next/image"

function ExternalLink({ text } : { text: string } ){

    return (
    <li>
    <button className="hover:scale-125 text-bold text-2xl underline decoration-[#002B96] underline-offset-4">{text}</button>
    </li>
    )
    }


function RelationCard({ src } : { src: string }) {
    return (
        <li>
            <button className="border border-black rounded hover:scale-110">
                <Image 
                    src={src}
                    alt={src}
                    width={160}
                    height={128}
                />
            </button>
        </li>
    )
}

export default function Contact() {
    const relationImages = [
        "/science.jpg",
        "/logo2.png",
        "/logo3.png",        
    ]

    return (
        <section className="py-8 bg-gray-100">
            <h2 className="text-center mb-8">
                <span className="block text-3xl font-bold">お問い合わせ</span>
                <span className="text-[#002B96] text-sm">Contact</span>
            </h2>
            <div className="px-8 flex justify-center">
                <ul className="flex space-x-8 py-8">
                    <ExternalLink text="白星会とは?　　" />
                    <ExternalLink text="メールでお問い合わせ　　" />
                    <ExternalLink text="会員情報　　" />
                </ul>
            </div>
            <div className="px-8 flex justify-center">
                <ul className="flex space-x-6 py-4 items-center">
                    {relationImages.map((src, index) => (
                        <RelationCard key={index} src={src}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}
