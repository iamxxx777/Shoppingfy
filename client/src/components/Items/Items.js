import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import Category from "../ItemsComponent/Category"

import { getItems } from "../../redux/actions/itemsAction"

import "./Items.css"

const Products = ({ click }) => {

    const dispatch = useDispatch();
    const { loading, error, items } = useSelector((state) => state.items);

    const categories = items.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);



    return (
        <main className="main">
                <div className="main_container">
                    <div className="header">
                        <h1>
                            <span>Shoppingfy </span>
                            allows you to take your shopping list wherever you go
                        </h1>
                        <div className="search_form">
                            <form>
                                <label htmlFor="#"><i className="fa fa-search" aria-hidden="true"></i></label>
                                <input type="text" name="search" placeholder="search item" />
                            </form>
                        </div>
                    </div>

                    {loading ? (<h2>Loading...</h2>) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        <section className="categories">
                            {uniqueCategories.map((category) => (
                                <Category items={items} key={category} category={category} click={click} />
                            ))}
                        </section>
                    )}

                    
                </div>
            </main>
    )
}

export default Products
