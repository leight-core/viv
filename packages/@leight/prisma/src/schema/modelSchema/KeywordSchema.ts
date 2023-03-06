import {z} from "zod";

/////////////////////////////////////////
// KEYWORD SCHEMA
/////////////////////////////////////////

export const KeywordSchema = z.object({
    id:   z.string().cuid(),
    text: z.string(),
});

export type Keyword = z.infer<typeof KeywordSchema>

// KEYWORD PARTIAL SCHEMA
//------------------------------------------------------

export const KeywordPartialSchema = KeywordSchema.partial();

export type KeywordPartial = z.infer<typeof KeywordPartialSchema>

export default KeywordSchema;
