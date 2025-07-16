import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CompletedPage from './pages/CompletedPage'
import HandedOverPage from './pages/HandedOverPage'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/handed-over" element={<HandedOverPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 