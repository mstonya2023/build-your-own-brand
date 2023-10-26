import './MarketingListItem.css'

export default function MarketingListItem({markItem, isPaid}) {
    return (
        <div className='markItem'>
        <div className='flex-ctr-ctr'>{markItem.item.image}</div>
        <div className='flex-ctr-ctr flex-col'>
            <span className='align-ctr'>{markItem.item.name}</span>
            <span>{markItem.item.price.toFixed}</span>
        </div>
           <div className='qty' style={{ justifyContent: isPaid && 'center'}}>
            {!isPaid &&
            <button
            className='btn-xs'
            onClick={() => alert('clicked')}
            >-</button>
            }
           <span>{markItem.qty}</span>
           {!isPaid &&
            <button
            className='btn-xs'
            onClick={() => alert('clicked')}
            >+</button>
            }
           </div>
           <div className='ext-price'>${markItem.extPrice.toFixed(2)}</div>
           </div> 
    );
}