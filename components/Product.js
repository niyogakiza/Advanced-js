 /*************************************************************
* Reusable component
* ***********************************************************/

 // We pass Id in handleClick we target product id

export const Product = ({ id,  name, cost, description, handleClick}) => (
    <div>
    {name} ${cost} ${description}
    <button onClick={() => handleClick(id)}>Add to cart </button>

    </div>
)
