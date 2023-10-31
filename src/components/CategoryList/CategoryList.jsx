import './CategoryList.css';

export default function CategoryList({categories, activeCat,  setActiveCat}) {
    const markCats = categories.map(markCat =>
       <ul
       key={markCat}
       className={markCat === activeCat ? 'active' :  '' }
       onClick={() => setActiveCat(markCat)}
       >
        <br />
        {markCat}
       </ul>
);
return (
    <div className="CategoryList">
       
{markCats}
   </div>
    );
}
