import { useState } from 'react'
import mjdaLogo from '../assets/mjda.png'
import './Games.css'

export default function GamesPage() {
  const [filter, setFilter] = useState<string>('')

  const games = [
    {
      id: 'a',
      name: 'nameA',
    },
    {
      id: 'b',
      name: 'nameB',
    },
    {
      id: 'c',
      name: 'nameC',
    },
    {
      id: 'd',
      name: 'nameD',
    },
    {
      id: 'e',
      name: 'nameE',
    },
    {
      id: 'f',
      name: 'nameF',
    },
  ]

  return (
    <>
      <div className='header'>
        <img src={mjdaLogo} className='main-logo' alt='mjda logo' />
        <>Juegos</a>
        <a>Premios</a>
      </div>
      <div className='filter'>
        <input
          aria-label='search games'
          placeholder='Buscar juegos'
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
      </div>
      <div className='content'>
        {games
          .filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
          .map((e) => {
            return (
              <div className='card' key={e.id}>
                <h2>{e.name}</h2>
              </div>
            )
          })}
      </div>
    </>
  )
}
