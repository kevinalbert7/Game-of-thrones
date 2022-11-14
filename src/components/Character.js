import React from "react";

class Character extends React.Component {
  render() {
    const {
      image,
      title,
      name,
      index,
      isInFavorites,
      handleFavoriteClick,
      deleteFavorite,
    } = this.props;

    return (
      <>
        {isInFavorites ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">{title}</h5>
              <p className="card-text text-center">{name}</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteFavorite(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card" style={{ height: "450px", width: "18rem" }}>
            {!isInFavorites && (
              <div
                style={{
                  height: "18rem",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "5px 5px 0 0",
                }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title text-center">{title}</h5>
              <p className="card-text text-center">{name}</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleFavoriteClick(index)}
                >
                  Add to favorites
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Character;
