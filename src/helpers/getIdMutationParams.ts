export type TypeMutationParams = { params: { id: string } }

export const getIdMutationParams = (body: TypeMutationParams): number => {
    return Number(body.params.id)
}
