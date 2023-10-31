import sendRequest from "./send-request"; 

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export async function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export async function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')

}
export async function setItemQty(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'POST', {itemId, newQty})

}
export async function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST',)

}
export async function getAllOrders() {
    return sendRequest (BASE_URL)

}