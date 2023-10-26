import './MarketingList.css';
import MarketingListItem from '../MarketingListItem/MarketingListItem';

export default function MarketingList({markItems}) {
    const items = markItems.map(item => 
        <MarketingListItem
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
