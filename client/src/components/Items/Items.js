import Category from "../ItemsComponent/Category"

import "./Items.css"

const Products = ({ click, items }) => {

    const categories = items.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];

    return (
        <main className="main">
                <div className="main_container">
                    <div className="header">
                        <h1>
                            <span>Shoppingfy </span>
                            allows you to take your shopping list wherever you go
                        </h1>
                        <div className="search_form">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="#"><i className="fa fa-search" aria-hidden="true"></i></label>
                                <input type="text" name="search" placeholder="search item" />
                            </form>
                        </div>
                    </div>

                    <section className="categories">
                        {uniqueCategories.map((category) => (
                            <Category items={items} key={category} category={category} click={click} />
                        ))}
                    </section>
                    
                </div>
            </main>
    )
}

export default Products
