import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón cocido'],
            calorias: 400
        };
        return (
        // <React.Fragment>
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) => {
                            console.log(ingredientes);
                            return (
                                <li>
                                    {ingredientes}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        // </React.Fragment>
        );
    }
}

export default MiComponente;