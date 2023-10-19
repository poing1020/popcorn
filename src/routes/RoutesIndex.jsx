import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import about from '../pages/about'
import MoviesDetail from '../pages/MoviesDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<about />} />
      <Route path='/filmes/:id' element={<MoviesDetail />} />
    </Routes>
  )
}
export default RoutesIndex
