import { type SchemaTypeDefinition } from "sanity";
import { profileType } from "./profileType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileType],
};