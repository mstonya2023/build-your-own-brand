import './MarketingList.css';
import MarketingListItem from '../MarketingListItem/MarketingListItem';

export default function MarketingList({markItems, handleAddToCart}) {
    const items = markItems.map(item => 
        <MarketingListItem
        handleAddToCart = {handleAddToCart}
        key={item._id}
        markItem={item}
        />
);
return (
    <main className='MarketingList'>
        {items}
    </main>
    );

}
