import { Box } from '@components/Box'
import { Field } from '@components/form/Field'

export default function () {
    return (
        <section>
            <h1 className="text-xl font-bold mb-12">Settings</h1>
            <Box>
                <h2 className="text-xl font-bold">Route</h2>
                <p className="text-grey-800">Read products</p>

                <Field
                    className="mt-8"
                    name="route-items"
                    placeholder="https://smartpoint.be/products"
                    defaultValue="https://fakestoreapi.com/products?limit=10"
                />
            </Box>
        </section>
    )
}
