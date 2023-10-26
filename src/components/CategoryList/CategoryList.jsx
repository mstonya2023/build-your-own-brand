import './CategoryList.css';

export default function CategoryList({categories, activeCat,  setActiveCat}) {
    const markCats = categories.map(markCat =>
       <li
       key={markCat}
       className={markCat === activeCat ? 'active' :  '' }
       onClick={() => setActiveCat(markCat)}
       >
        {markCat}
       </li>
);
return (
    <ul className="CategoryList">
{markCats}
    </ul>
    );
}