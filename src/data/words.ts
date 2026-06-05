import answers from "./answers.json";
import dictionary from "./dictionary.json";

export const ANSWERS = answers as string[];

export const DICTIONARY = dictionary as string[];

export const DICTIONARY_SET =
  new Set(DICTIONARY);