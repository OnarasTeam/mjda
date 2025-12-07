import { Link, useNavigate } from 'react-router-dom'
import mjdaLogo from '../assets/mjda.png'
import './Header.css'

export default function Header() {
  const nav = useNavigate()
  return (
    <div className='header'>
      <img src={mjdaLogo} className='main-logo' alt='mjda logo' onClick={() => nav('/')} />
      <div>
        <Link to='/games'>Juegos</Link>
        <Link to='/awards'>Premios</Link>
      </div>
    </div>
  )
}
