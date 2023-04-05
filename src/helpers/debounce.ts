import { useCallback } from 'react'

export const debounce = (fn: any, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>

    return function (this: any, ...args: []) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}

export const useDebounce = (fn: any, ms = 300) => {
    return useCallback(debounce(fn, ms), [])
}
