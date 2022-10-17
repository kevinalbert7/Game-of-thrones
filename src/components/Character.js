import React from 'react'

class Character extends React.Component {
	render() {
        console.log("props favorites dans le render de Character", this.props.favorites)

        const {image, title, name, index} = this.props

		return(
            <div 
                className='card' 
                style={{
                    height: "500",
                    width: '18rem'
                    }}
                >
                <div 
                    src={image} 
                    style={{
                        height: '18rem',
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div className='card-body '>
                    <h5 className='card-title text-center'>{title}</h5>
                    <p className='card-text text-center'>{name}</p>
                    <div className='d-flex justify-content-center'>
                    <button 
                        className='btn btn-outline-secondary'
                        onClick={() => this.props.handleFavoriteClick(index)}
                    >
                        Favorite
                    </button>

                    </div>
                </div>
            </div>
		)
	}
}

export default Character