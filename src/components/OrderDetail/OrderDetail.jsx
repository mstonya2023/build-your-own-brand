import './OrderDetail.css';

//Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order }) {
  if (!order) return null;

  const markItems = order.markItem.map(item =>
    <markItem
      markItem={item}
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
        <span>NEW ORDER</span>
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
                onClick={() => alert('clicked')}
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
 











