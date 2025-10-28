import { z } from "zod";

const EmailPayloadSchema = z.object({
    from: z.email(),
    replyTo: z.string().optional(),
    to: z.array(z.string()).min(1),
    subject: z.string(),
    html: z.string()
})

export type EmailPayload = z.infer<typeof EmailPayloadSchema>

export class ValidationService {
    
    static validateEmailPayload(payload: any): { errors: string[]; data?: EmailPayload } {
        try{
            const result = EmailPayloadSchema.parse(payload)
            return {
                errors: [],
                data: result,
            }
        } catch(e) {
            if (e instanceof z.ZodError) {
                return {
                    errors: e.issues.map(err => `'${err.path.join('.')}': ${err.message}`),
                }
            }
            return {
                errors: ['Unknown validation error'],
            }
        }
    }
}