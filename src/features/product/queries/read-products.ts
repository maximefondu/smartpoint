export const readProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10', {
        method: 'GET'
    })

    return response.json()
}
