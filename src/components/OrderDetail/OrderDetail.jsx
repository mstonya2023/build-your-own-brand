import MarkItem from '../MarkItem/MarkItem';
import './OrderDetail.css';

//Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const markItems = order && order.lineItems.map(item =>
    <MarkItem
    handleChangeQty={handleChangeQty}
      lineItem={item}
      isPaid={order.isPaid}
      key={item._id}
    />
  );

return (
  <div className='OrderDetail'>
    <div className='section-heading'>
      {order.isPaid ?
        <span>ORDER <span className='smaller'></span>{order.orderId}</span>
        :
        <span className='NewOrder'>NEW ORDER</span>
      
      }
      {/* <span>{newDate(order.updatedAt).toLocalDateString()}</span> */}
    </div>
    <div className='mark-item-container flex-ctr-ctr flex-col scroll-y'>
      {markItems.length ?
        <>
          {markItems}
          <section className='total'>
            {order.isPaid ?
              <span className='right'>TOTAL&nbsp:&nbsp;</span>
              :
              <button
                className='btn-sm'
                onClick={handleCheckout}
                disable={!markItems.length}
              >CHECKOUT</button>
            }
            <span>{order.totalQty}</span>
            <span className='right'>${order.orderTotal.toFixed(2)}</span>
          </section>
        </>
        :
        <div className='choice'>Choice?</div>
      }
    </div>
  </div>
);
    }
 











