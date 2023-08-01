// Converter from number to local currency
export let CurrencyConvertor = (number:number, language:string, currency: string) => (
    new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currency,
        maximumSignificantDigits: 3,
    }).format(number)
);