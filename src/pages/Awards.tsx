import { useState } from 'react'
import './Games.css'
import Header from '../components/Header'

export default function AwardsPage() {
  const [filter, setFilter] = useState<string>('')

  const games = [
    {
      id: 'a',
      name: 'premioA',
    },
    {
      id: 'b',
      name: 'premioB',
    },
    {
      id: 'c',
      name: 'premioC',
    },
    {
      id: 'd',
      name: 'premioD',
    },
    {
      id: 'e',
      name: 'premioE',
    },
    {
      id: 'f',
      name: 'premioF',
    },
  ]

  return (
    <>
      <Header />
      <input
        className='filter'
        aria-label='search awards'
        placeholder='Buscar premios'
        value={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
      />
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
