import './MarketingListItem.css'
export default function MarketingListItem({ markItem, handleAddToCart }) {
    return (
        <div className='MarketingListItem'>
            <h1>{markItem.name}</h1>
            <p>Price: ${markItem.price}</p>
            <button onClick={() => handleAddToCart(markItem._id)}>Add to Cart</button>
        </div>
    )
}
