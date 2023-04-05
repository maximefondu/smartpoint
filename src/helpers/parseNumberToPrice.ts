export const parseNumberToPrice = (price: string | number): string => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
