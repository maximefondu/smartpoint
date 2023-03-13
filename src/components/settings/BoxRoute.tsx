import { Button } from '@components/Button'
import { Box } from '@components/Box'

export const BoxRoute = () => {
    return (
        <Box>
            <h2 className="text-xl font-bold">Routes</h2>
            <p className="text-grey-800">Configure your api routes.</p>

            <Button href="/settings/route" className="mt-8">
                Configure
            </Button>
        </Box>
    )
}
