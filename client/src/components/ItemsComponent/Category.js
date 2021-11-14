import Item from "./Item"

import "../Items/Items.css"

const Category = ({ items, category, click }) => {
    const categoryItems = items.filter((item) => item.category === category);

    return (
        <div className="category">
            <h2>{category}</h2>
            <div className="items">
                {categoryItems.map((item, i) => <Item item={item} key={i} click={click} />)}
            </div>
        </div>
    )
}

export default Category
