import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Header = lazy(() => import("./components/Header"));
const HeroSection = lazy(() => import("./components/HeroSection"))
// const Home = lazy(() => import("./pages/Home"))
const AnimeTrending = lazy(() => import("./pages/AnimeTrending"))
const About = lazy(() => import("./pages/About"))
const PageNotFound = lazy(() => import("./pages/PageNotFound"))
import "./index.css"


function App() {

  const links = [
    // { path: "/", element: <Home /> },
    { path: "/", element: <AnimeTrending /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <PageNotFound /> },
  ]

  return (

    <Router>
      <Suspense  fallback={<div className='w-full h-screen flex justify-center items-center '>...Loading</div>}>
        <Header />

       <section className='w-full    flex items-center justify-center bg-[#282828]'>
       <Routes>
      
      {
          links.map((link, index) => {
            return (
              <Route key={index} path={link.path} element={link.element} />
            )
          })
        }
   
      </Routes>
       </section>
      



      </Suspense>
    </Router>

  )
}

export default App
