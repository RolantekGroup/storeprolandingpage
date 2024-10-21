
import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Middle from './components/middleSection/Middle'
import Contact from './components/contact/Contact'
import Product from './components/products/Product'
import Banner from './components/banner/Banner'
import Tool from './components/tools/Tools'
import Analytics from './components/Analytics'
import NewsletterBox from './components/newsletter/Newsletter'


function App() {
 

  return (
    <>
    <div className='w-full mx-auto h-auto '>
    <Header />
    {/* <HeroSection /> */}
    <div className="max-w-screen-2xl mx-auto px-6">
    <Banner />
    <AboutSection />
    <Contact />
    <Tool/>
    <Analytics />
    <NewsletterBox />
    </div>
   
    
    {/* <Middle />
    <Product /> */}
    
    <Footer />
    </div>
   
    </>
  )
}

export default App
