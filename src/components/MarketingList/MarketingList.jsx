import './MarketingList.css';
import MarketingListItem from '../MarketingListItem/MarketingListItem';

export default function MarketingList({markItems}) {
    const items = markItems.map(item => 
        <MarketingListItem
        key={item._id}
        markItems={item}
        />
);
return (
    <main className='MarketingList'>
        {items}
    </main>
    );

}
