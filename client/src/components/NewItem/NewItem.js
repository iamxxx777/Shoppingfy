import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Link } from "react-router-dom"

import { newItem as addItem } from "../../redux/actions/itemsAction"

import "./NewItem.css"

const NewItem = ({ click }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, newItem, error } = useSelector((state) => state.newItem);

    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const details = {name, note, image, category};

        dispatch(addItem(details));
    }

    useEffect(() => {
        if (newItem.success) {
            history.push("/items");
        }
    }, [history, newItem.success])

    return (
        <div className="new_item">
            <h2>Add a new item</h2>
            <form onSubmit={handleSubmit}>
                {error && (<small>{error}</small>)}
                <div className="form_control">
                    <label>Name</label>
                    <input required 
                        type="text" 
                        name="name" 
                        placeholder="Enter a name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form_control">
                    <label>Note (optional)</label>
                    <textarea 
                        name="note" 
                        placeholder="Give a short description"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                </div>

                <div className="form_control">
                    <label>Image (optional)</label>
                    <input 
                        type="text" 
                        name="image" 
                        placeholder="Enter a url" 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div className="form_control">
                    <label>Category</label>
                    <input 
                        required 
                        type="text" 
                        list="category" 
                        name="category" 
                        placeholder="Enter a category" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <datalist id="category">
                        <option value="Fruits and vegetables" />
                        <option value="Fish and Meats" />
                        <option value="Beers and Wines" />
                        <option value="Cookies and Candy" />
                    </datalist>
                </div>

                <div className="add_item_btns">
                    <button onClick={click ? click : history.goBack()} style={loading ? {pointerEvents: "none", background: "gray"} : null}><Link to="/items">cancel</Link></button>
                    <button type="submit" className="save" 
                        style={loading ? {pointerEvents: "none", background: "gray"} : null}
                    >Save</button>
                </div>
            </form>
        </div>
    )
}

export default NewItem
