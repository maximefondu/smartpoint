import { prisma } from '@libs/prisma'
import { NextResponse } from 'next/server'

import { TypeMutationParams, getIdMutationParams } from '@helpers/getIdMutationParams'

export async function PUT(request: Request, params: TypeMutationParams) {
    const id = getIdMutationParams(params)
    const data = await request.json()

    const routeKey = await prisma.routeKey.update({
        where: { id },
        data
    })

    return NextResponse.json(routeKey)
}
