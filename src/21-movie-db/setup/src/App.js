import React from 'react'
import { Switch, BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Error from './error'

function App() {
  return (
    <main>
        <Routes>
          <Route path='/21-movie-db' element={<Home />} />
          <Route path='/21-movie-db/movies/:id' element={<Movie />} />
          <Route path='21-movie-db/*' element={<Error />} />
        </Routes>
    </main>
  )
}

export default App
