import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Navbar() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <nav>
        <img src="https://static.klob.id/img/klob_logo_white.png" alt="logo" className="logo" onClick={goToHome}/>
    </nav>
  )
}
