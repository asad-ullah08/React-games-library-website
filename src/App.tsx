import './App.css'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import type { Genre } from './interfaces'

function App() {
  const [SelectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <div className='nav'> 
        <NavBar isDarkMode={isDarkMode} onToggle={() => setDarkMode(!isDarkMode)} /> 
      </div>
    <div className="container">
     <aside className='aside'>
      <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </aside>

      <main className='main'>
        <GameGrid SelectedGenre={SelectedGenre} />

      </main>
    </div>
</div>

  )
}

export default App