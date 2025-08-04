
// Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log("\nShopee Cart TOTAL IS:");
    console.log(`🎁Total: ${result}`);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1)
        userCart.splice(index, 1);
}

// Remover um item diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(p => p.name === item.name);

    if (indexFound === -1) {
        console.log("Item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
    }
    else if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
    }
}

async function displayCard(userCart) {
    console.log("\nShopee Cart List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCard
}