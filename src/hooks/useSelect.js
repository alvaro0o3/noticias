import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    const [categoria, setCategoria] = useState(stateInicial);

    const SelectCategoria = () => (
        <select
            className="browser-default"
            value={categoria}
            onChange={ e => setCategoria(e.target.value) }
        >
            <option value=""> -- Selecione categoría -- </option>
            {opciones.map(opcion => (
                <option value={opcion.value} key={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [ categoria, SelectCategoria ];
}
 
export default useSelect;