import React from 'react'
import { render } from 'react-dom'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import './styles.css'

render(
  <div style={{ height: '100vh' }}>
    <Header />
    <div style={{ height: '100vh' }} />
    <Footer style={{ marginTop: 500 }} />
  </div>,
  document.getElementById('root')
)
