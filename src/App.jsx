
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Blog'

import Terms_C from './pages/Terms_C'
import Privacy_policy from './pages/Privacy_policy'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
 

  return (
    <>
    <div className='flex flex-col min-h-screen '>
    <Header />
  
  

    <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/terms' element={<Terms_C />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/privacy' element={<Privacy_policy />} />
          <Route  path='/about' element={<About/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          
         
         </Routes>
   
      
        </div>

        <Footer />
    </>
  )
}

export default App
