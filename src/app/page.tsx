import { Box } from '@components/Box'
import { Button } from '@components/Button'
import { Field } from '@components/form/Field'

import LogoIcon from '@svg/logo.svg'

export default async function Home() {
    return (
        <section className="flex items-center flex-col justify-center gap-4 h-full">
            <div className="flex flex-col gap-4 items-center">
                <LogoIcon className="mb-12" />
                <Box className="flex flex-col items-center gap-4 min-w-[42rem]">
                    <Field name="login" label={'Login'} placeholder={'Adrian'} className="w-full" />
                    <Field type="password" name="password" label={'Password'} placeholder={'*****'} className="w-full" />

                    <Button intent={'link'} className="mt-12">
                        Don’t have account ?
                    </Button>

                    <Button className="w-full">Login</Button>
                </Box>
            </div>
        </section>
    )
}
