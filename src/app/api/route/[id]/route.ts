import { prisma } from '@libs/prisma'
import { NextResponse } from 'next/server'

import { TypeMutationParams, getIdMutationParams } from '@features/helpers/getIdMutationParams'

export async function PUT(request: Request, params: TypeMutationParams) {
    const id = getIdMutationParams(params)
    const data = await request.json()

    const route = await prisma.route.update({
        where: { id },
        data
    })

    return NextResponse.json(route)
}
