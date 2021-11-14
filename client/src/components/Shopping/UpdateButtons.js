import { useDispatch } from "react-redux"
import { completeCurrentList } from "../../redux/actions/listActions"

const UpdateButtons = ({ showModal }) => {
    const dispatch = useDispatch();

    const handleComplete = async () => {
        await dispatch(completeCurrentList());
        window.location.reload();
    }

    return (
        <div className="edit_btns">
            <button onClick={showModal}>cancel</button>
            <button onClick={handleComplete} className="complete">complete</button>
        </div>
    )
}

export default UpdateButtons
