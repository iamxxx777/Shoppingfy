import React from 'react'
import EditCategory from './EditCategory'

const CartEdit = ({data, categories}) => {
    return (
        <form className="edit_form">
            {categories.map(((category) => <EditCategory key={category} data={data} category={category} />))}
        </form>
    )
}

export default CartEdit
