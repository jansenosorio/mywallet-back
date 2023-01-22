import joi from "joi";

export const tradeSchema = joi.object({
    email: joi.string().required(),
    description: joi.string().required(),
    value: joi.number().required(),
    type: joi.string().required()
})