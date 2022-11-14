import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Character from "./components/Character";
import Continents from "./components/Continents";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      favorites: [],
      isFavorite: false,
      onglets: "Personnages",
    };

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.displayFavorites = this.displayFavorites.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.tabOnglets = this.tabOnglets.bind(this);
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ characters: result });
      })
      .catch((error) => console.error(error));
  }

  handleFavoriteClick(index) {
    const { id, fullName, title } = this.state.characters[index];

    const newFavorite = {
      id: id,
      fullName: fullName,
      title: title,
    };

    this.setState({ favorites: [...this.state.favorites, newFavorite] });
  }

  displayFavorites() {
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  deleteFavorite(index) {
    const filteredFavorites = this.state.favorites.filter(
      (favorite, i) => i !== index
    );

    this.setState({ favorites: filteredFavorites });
  }

  tabOnglets(str) {
    this.setState({ onglets: str });
  }

  render() {
    const { characters, favorites, isFavorite, onglets } = this.state;

    return (
      <div className="container">
        <div className="row m-5">
          <h1 className="text-center">Game of thrones</h1>
        </div>
        <div className="row m-5">
          <div className="row d-flex justify-content-around">
            <button
              className="col-5 btn bg-primary bg-gradient text-white"
              onClick={() => this.tabOnglets("Personnages")}
            >
              Personnages
            </button>
            <button
              className="col-5 btn bg-dark bg-gradient text-white"
              onClick={() => this.tabOnglets("Continents")}
            >
              Continents
            </button>
          </div>
        </div>

        {onglets === "Personnages" ? (
          <>
            {isFavorite ? (
              <>
                <div className="row text-center">
                  <h2 className="mb-5">
                    <ins>Liste des favoris</ins>
                  </h2>
                </div>
                <div className="row">
                  {favorites.map((favorite, index) => (
                    <div className="col-3 mb-5">
                      <Character
                        key={favorite.index}
                        id={favorite.id}
                        index={index}
                        name={favorite.fullName}
                        title={favorite.title}
                        deleteFavorite={this.deleteFavorite}
                        isInFavorites
                      />
                    </div>
                  ))}
                </div>
                <div className="row mb-5 d-flex justify-content-center">
                  <div className="col-3 d-flex justify-content-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={this.displayFavorites}
                    >
                      Revenir aux personnages
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row mb-5 d-flex justify-content-center">
                  <div className="col-3 d-flex justify-content-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={this.displayFavorites}
                    >
                      Afficher les favoris
                    </button>
                  </div>
                </div>

                <div className="row">
                  {characters.map((character, index) => (
                    <div className="col-3 mb-5">
                      <Character
                        key={index}
                        id={character.id}
                        index={index}
                        name={character.fullName}
                        title={character.title}
                        image={character.imageUrl}
                        handleFavoriteClick={this.handleFavoriteClick}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="row text-center">
              <h2 className="mb-5">
                <ins>Continents</ins>
              </h2>
            </div>
            <Continents />
          </>
        )}
      </div>
    );
  }
}

export default App;
