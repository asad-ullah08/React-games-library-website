import './App.css'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import type { Genre } from './interfaces'

function App() {
  const [SelectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="container">
      <div className='nav'> <NavBar /> </div>
      <aside className='aside'>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </aside>

      <main className='main'>
        <GameGrid SelectedGenre={SelectedGenre} />

      </main>

    </div>


  )
}

export default App