"use client"

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function NavItem( {href,text} : { href: string, text: string }){
    return (
        <li className="flex space-x-4 items-center">
            <a href={href} className="text-black font-semibold">
                <button className="transition hover:scale-110">{text}</button>
            </a>
        </li>
    )
}

// function MobileMenu() {
//     const [ isMenuOpen, setIsMenuOpen] = useState(false);
//     return (
//         <button onClick={ () => setIsMenuOpen(!isMenuOpen) } >
//             { isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//     )
// }

// function MobileNavItem( { href, text } : { href: string, text: string } ){
//     return (
//         <li className="flex flex-col space-y-4 items-center">
//             <a href={href} className="text-white font-semibold">{text}</a>
//         </li>
//     )
// }

function ContactButton( { text , iconUrl } : { text: string, iconUrl: string} ){
    return (
        <li>            
            <button className="transition hover:scale-110 border-2 border-black-500 bg-white text-black font-bold py-2 px-4 rounded-full">
                <div className="flex items-center space-x-4 py-1">
                    <Image                
                        src={iconUrl}
                        alt="mail-icon"
                        width={20}
                        height={20}
                    />
                    <span>{text}</span>
                </div>
            </button>

        </li>
    )
}

function LogoFrame( { imageUrl } : { imageUrl: string} ){
    return (
        <div className="flex items-center px-8">
            <div className="relative w-24 h-24">
                <Image
                    // className="w-12 h-12"
                    src={imageUrl}
                    alt="Logo"
                    fill
                    style={{ objectFit:  'contain'}}
                />
            </div>
        </div>
    )
}


function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const HeroSectionImages =[
        "/hero-image-1.jpg",
        "/hero-image-2.jpg",
        "/hero-image-3.jpg",
        "/hero-image-4.jpg",
        "/hero-image-5.jpg",
    ]
    

    useEffect(() => {
        const interval =setInterval( () => { setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HeroSectionImages.length )},3000);

        return () => clearInterval(interval);
    },[]);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {HeroSectionImages.map( (src,index)  => (
                <Image 
                    key={src}
                    src={src}
                    alt={`Hero Image ${index + 1}`}
                    fill
                    style = {{
                        objectFit: "cover",
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: "opacity 1s ease-in-out"
                    }}
                    priority={index === 0}    
                />
            ))}
        </div>
    );
}

export default function MainVisual() {
    // const [ isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="relative">
        <header className="absolute top-0 z-10 w-full">    
            <nav className="container mx-auto flex items-center justify-between px-8 py-1">
                <div className="flex">
                    <LogoFrame imageUrl="/logo.png" />
                </div>
                <div className="flex justify-end">
                    <ul className="hidden md:flex space-x-6 h-16 flex space-x-8 items-center">
                            <NavItem href="https://github.com/" text="団体概要" />
                            <NavItem href="https://github.com/" text="会員の集い" />
                            <NavItem href="https://github.com/" text="学生支援 " />
                            <NavItem href="https://github.com/" text="リンク集" />
                            <NavItem href="https://github.com/" text="会員情報" />
                            <ContactButton iconUrl="/mail-icon.png" text="お問い合わせ" />
                    </ul>
                </div>
                {/* <div className="md:hidden">
                    <MobileMenu />
                    { isMenuOpen  && (
                    <ul className="md:hidden flex flex-col items-center">
                        <MobileNavItem href="https://github.com" text="団体概要" />
                        <MobileNavItem href="https://github.com" text="会員の集い" />
                        <MobileNavItem href="https://github.com" text="学生支援" />
                        <MobileNavItem href="https://github.com" text="リンク集" />
                        <MobileNavItem href="https://github.com" text="会員情報" />
                        <ContactButton iconUrl="/mail-icon.png" text="お問い合わせ" /> 
                    </ul>
                    )}
                </div>   */}
            </nav>
        </header>
        <HeroSection />
        </div>
    )
}
