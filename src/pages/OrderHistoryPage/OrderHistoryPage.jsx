import '../OrderHistoryPage/OrderHistoryPage.css';
import {useState, useEffect} from 'react';
import * as ordersAPI from '../../utilities/orders-api';
export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  useEffect(function() {
    async function getOrders() {
      const allOrders = await ordersAPI.getAllOrders();
      console.log(allOrders)
      setOrders(allOrders);
    }
    getOrders();
  }, []);
 
  return (
    <>
      <h1 className='OrderHistoryPage'>OrderHistoryPage</h1>
      { 
        orders.map(order => (
          <div>
            <h3 className='OrderNumber'>Order Number: {order.orderId}</h3>
            <p className='TotalPrice'>Total Price: ${order.orderTotal}</p>
            {
              order.lineItems.map( item => (
                <p>{item.qty} - {item.item.name}</p>
              ))
            }
          </div>
        ))
      }
     
    </>
  );
}