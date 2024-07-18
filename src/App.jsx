import React from 'react'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (

    <div className='w-full flex flex-col justify-center items-center '>
      <header className="fixed pt-3 top-0 flex  justify-center w-full  ">
        <Header />
      </header>

      <main className="w-full ">
        <Main />
      </main>

      <footer className="w-full bg-gray-200/50">
        <Footer/>
      </footer>
    </div>

  )
}

export default App
