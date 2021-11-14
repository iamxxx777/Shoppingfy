import { useDispatch } from "react-redux"
import { cancelCurrentList } from "../../redux/actions/listActions"
import "./Modal.css"

const Modal = ({ click }) => {

    const dispatch = useDispatch();

    const cancelList = async () => {
        await dispatch(cancelCurrentList());
        click();
        window.location.reload();
    }


    return (
        <div className="modal">
            <div className="modal_container">
                <div className="modal_text">
                    <h2>Are you sure you want to cancel the list</h2>
                    <div className="close_btn">
                        <button onClick={click} className="close">x</button>
                    </div>  
                </div>
                <div className="modal_btns">
                    <button onClick={click}>cancel</button>
                    <button onClick={cancelList} className="yes">Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
