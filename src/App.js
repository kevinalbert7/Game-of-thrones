import React from 'react'

import Character from './components/Character'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      characters: [],
      favorites: [],
      isFavorite: false
    }
    
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleListOfFavoritesClick = this.handleListOfFavoritesClick.bind(this)
  }


  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(data => data.json())
    .then(data => {
      this.setState({ characters : data })
    })
    .catch(error => console.error(error))
  }
  
  handleFavoriteClick(index) {
    const { fullName, title, imageUrl } = this.state.characters[index]
    const newFavorite = {
      fullName: fullName,
      title: title,
      image: imageUrl,
    }

    this.setState({ favorites: [...this.state.favorites, newFavorite] })
  }
  
  handleListOfFavoritesClick() {
    this.setState({ isFavorite: !this.state.isFavorite })
    console.log(this.state.isFavorite)
  }

	render() {
    const { characters, favorites, isFavorite } = this.state

		return (
      <div className='container'>
        <div className='row m-5'>
          <h1 className='text-center'>Game of thrones</h1>
        </div>
        
        {isFavorite ? (
          <>
            <div className='row mb-5 d-flex justify-content-center'>
              <div className='col-3'>
                <button 
                  className='btn btn-outline-secondary'
                  onClick={this.handleListOfFavoritesClick}
                >
                  Revenir aux personnages
                </button>
              </div>    
            </div>
            <div class='row'>
              {favorites.map(favorite => (
                <div class='col-3 mb-5'>
                  <Character
                    name={favorite.fullName}
                    title={favorite.title}
                    image={favorite.imageUrl}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='row mb-5 d-flex justify-content-center'>
              <div className='col-3'>
                <button 
                  className='btn btn-outline-success'
                  onClick={this.handleListOfFavoritesClick}
                >
                  Afficher les favoris
                </button>
              </div>    
            </div>
            <div class='row'>
              {characters.map(character => (
                <div class='col-3 mb-5'>
                  <Character
                    name={character.fullName}
                    title={character.title}
                    image={character.imageUrl}
                    handleFavoriteClick={this.handleFavoriteClick}
                    isFavorite={this.state.favorites.isAdd}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
		)
	}
}

export default App