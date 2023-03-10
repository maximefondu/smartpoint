import { useQuery } from 'react-query'
import { readProducts } from '@features/product/queries/read-products'

export const useReadProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: readProducts
    })
}
