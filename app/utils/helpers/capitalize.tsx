export const capitalize = (word: string) => word.toLowerCase().replace(/\w/, firstLetter => firstLetter.toUpperCase());