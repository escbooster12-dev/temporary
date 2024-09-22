function calculateTotalPrice(cartItems: any[], taxRate: number): number {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let price = cartItems[i].price;
        let quantity = cartItems[i].quantity;
        let discount = 0;
        
        if (cartItems[i].category === 'electronics') {
            discount = 0.1;
        } else if (cartItems[i].category === 'clothing') {
            discount = 0.2;
        } else if (cartItems[i].category === 'food') {
            discount = 0.05;
        }

        total += (price * quantity) - (price * quantity * discount);
    }
    
    total = total + (total * taxRate);
    
    return total;
}