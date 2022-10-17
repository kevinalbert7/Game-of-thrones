import React, { Component } from 'react'

class Continents extends Component {
    constructor() {
        super()

        this.state = {
            continents: []
        }
    }

    componentDidMount() {
        fetch('https://thronesapi.com/api/v2/Continents')
        .then(response => response.json())
        .then(result => this.setState({ continents : result }))
        .catch(error => console.error(error))
    }

    render() {
        const { continents } = this.state

        return (
            <div>
                <h2>Continents</h2>
                {continents.map((continent, index) => {
                    return <p key={index}>{continent.name}</p>
                })}
            </div>
        )
    }
}

export default Continents