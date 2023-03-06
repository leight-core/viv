import {z} from "zod";

/////////////////////////////////////////
// TRANSLATION SCHEMA
/////////////////////////////////////////

export const TranslationSchema = z.object({
    id:     z.string().cuid(),
    locale: z.string(),
    label:  z.string(),
    text:   z.string(),
    hash:   z.string(),
});

export type Translation = z.infer<typeof TranslationSchema>

// TRANSLATION PARTIAL SCHEMA
//------------------------------------------------------

export const TranslationPartialSchema = TranslationSchema.partial();

export type TranslationPartial = z.infer<typeof TranslationPartialSchema>

export default TranslationSchema;
