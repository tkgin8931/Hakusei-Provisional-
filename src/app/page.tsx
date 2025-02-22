"use client"

import MainVisual from "./components/MainVisual"
import EventInfo from "./components/EventsCard"
import StudentSupport from "./components/Support"
import SubVisual from "./components/SubVisual"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function TopPage() {

    return (
        <div>
            <MainVisual />
            <EventInfo />
            <StudentSupport />
            <SubVisual />
            <Contact />
            <Footer />
        </div>
    )
}