import "./Shoping.css"

const ShopingBtn = () => {
    return (
        <div className="category_item_btn">
            <button className="hide"><i className="uil uil-trash-alt"></i></button>
            <button className="hide"><i className="uil uil-minus"></i></button>
            <button className="main_btn">3 pcs</button>
            <button className="hide"><i className="uil uil-plus"></i></button>
        </div>
    )
}

export default ShopingBtn
