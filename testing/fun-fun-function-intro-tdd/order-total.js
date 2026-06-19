/* Example of using Jest test runner to unit test */

function orderTotal(order){
return order.items.reduce((prev, current) => current.price * (current.quantity || 1) + prev, 0)
}

module.exports = orderTotal 