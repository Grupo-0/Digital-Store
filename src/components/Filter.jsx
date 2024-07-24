const Filter = () => {
    return (
        <div className="mb-5">
            <label>Ordenar por:</label>
            <select name="" id="" className="ml-3 border-solid border-2 border-dark-gray rounded">
                <option value="">Maior Preço</option>
                <option value="">Menor Preço</option>
            </select>
            
        </div>
    );
}

export default Filter