import {  useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import MarketingList from '../../components/MarketingList/MarketingList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
export default function NewOrderPage({user, setUser}) {
  const [markItems, setmarkItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  console.log(categoriesRef)
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      console.log(items)
      categoriesRef.current = [...new Set (items.map(item => item.category.name))];
      setmarkItems(items);
      setActiveCat(categoriesRef.current[0]);

    }
    getItems();
  }, []);
  console.log('NewOrderPage Rendered');
return (
  <main className="NewOrderPage">
  <div>NewOrderPage</div>
  <aside>
    {/* <Logo /> */}
    <CategoryList
      categories={categoriesRef.current}
      activeCat={activeCat}
      setActiveCat={setActiveCat}
    />
    <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
    {/* <UserLogOut user={user} setUser={setUser} /> */}
  </aside>
  <MarketingList
    markItems={markItems.filter(item => item.category.name === activeCat)}
  />
  <OrderDetail />
</main>
    
    
  );
}