import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }
  const filteredMovies = movies.filter(movies => {
    return movies.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='container'>
        <h1>POPCORN</h1>

        <form className='form-inline my-2 my-lg-0 w-75'>
          <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
        </form>

        <div className='row'>
          {filteredMovies.map(movies => (
            <div className='col-sm-4 mb-4' key={movies.name}>
              <div className='card'>
                <img className='card-img-top' src={`https://api.tvmaze.com/shows/${movies.url.split('/')[6]}.png`} alt={movies.name} />
                <div className='card-body'>
                  <h4 className='card-title'>{movies.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
