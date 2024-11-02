import React from 'react'
import Banner from '../components/banner/Banner'
import AboutSection from '../components/AboutSection'
import Contact from '../components/contact/Contact'
import Tool from '../components/tools/Tools'
import Analytics from '../components/Analytics'
import NewsletterBox from '../components/newsletter/Newsletter'



function Home() {
    return (
         <div>
        <div className="max-w-screen-2xl mx-auto px-6">
            <Banner />
            <AboutSection />
            <Contact />
            <Tool/>
            <Analytics />
            <NewsletterBox />
            </div>
         </div>
    )
}

export default Home
