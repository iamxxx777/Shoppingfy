import { Link, useParams, useHistory } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getItemDetails } from "../../redux/actions/itemsAction"
import { addToCart } from "../../redux/actions/cartActions"

import Loading from "../Loading/Loading"
import Error from "../Error/Error"

import "./AddNewItem.css"

const AddNewItem = ({ click }) => {
    const { id } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, error, item } = useSelector((state) => state.item);

    useEffect(() => {
        dispatch(getItemDetails(id));
    }, [dispatch, id]);

    const handleClick = () => {
        dispatch(addToCart(item));
        history.replace("/items");
    }


    return (
        <div className="add_new_item">
            {loading ? (<Loading />) : 
                error ? (<Error />) : (
                    <div className="add_container">
                        <button className="back">
                            <Link to="/items" onClick={click}>
                                <div>
                                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                    <span>back</span>
                                </div>
                            </Link>
                        </button>

                        <div className="item_img">
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="name">
                            <h3>Name</h3>
                            <p>{item.name}</p>
                        </div>

                        <div className="category">
                            <h3>Category</h3>
                            <p>{item.category}</p>
                        </div>

                        <div className="note">
                            <h3>Note</h3>
                            <p>{item.note}</p>
                        </div>

                        <div className="add_btns">
                            <button onClick={click}><Link to="/items">cancel</Link></button>
                            <button onClick={handleClick} className="add">Add to list</button>
                        </div>
                    </div>
                )}
            
        </div>
    )
}

export default AddNewItem
