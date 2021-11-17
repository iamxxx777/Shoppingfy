import CartCategory from "../Cart/CartCategory"
import CartEdit from "./CartEdit"

import "../Cart/Shoping.css"

const ShoppingCart = ({ data, click, edit }) => {
    const categories = data.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];


    return (
        <div className="shopping_list">
            <div className="shopping_header">
                <h2>Shopping list</h2>
                <button onClick={click}><i className="fa fa-pencil" aria-hidden="true"></i></button>
            </div>
            {!edit && uniqueCategories.map((category) => (
                <CartCategory key={category} data={data} category={category} />
            ))}

            {edit && <CartEdit data={data} categories={uniqueCategories} />}
        </div>
    )
}

export default ShoppingCart
