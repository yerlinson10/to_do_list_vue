import * as z from 'zod'

export const schemaTask = toTypedSchema(z.object({
    title: z.string().min(2).max(50).required(),
    description: z.string().min(2).max(255),
}))
