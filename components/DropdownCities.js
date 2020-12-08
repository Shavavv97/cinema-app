import { Component } from 'react';

export class DropdownCities extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                { this.props.children }
                <select>
                    { this.props.cities.map((city) =>{
                        return <options key={city.Clave}>{city.Nombre}</options>
                    }) }
                </select>
            </div>
        )
    }
}
