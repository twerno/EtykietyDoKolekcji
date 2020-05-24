import CountryConverterService from "../service/CountryConverterService";
import CurrencyService from "../service/CurrencyService";

export default {
    currencyRateMsg,
    currencyName,
    getCurrencyCode,
    convert2PLNFormat,
}

async function currencyRate(currencyCode: string, staticRate?: number) {
    return await CurrencyService.currencyCode2Rate(currencyCode) || staticRate;
}

async function currencyRateMsg(countryCode: string, staticRate?: number) {
    const currencyCode = getCurrencyCode(countryCode);
    if (currencyCode === undefined) { return '' }
    const rate = await currencyRate(currencyCode, staticRate);
    if (rate === undefined) { return '' }
    return `1 ${currencyCode.toLocaleUpperCase()} = ${rate.toPrecision(3)} PLN`;
}

function getCurrencyCode(countryCode: string) {
    return CountryConverterService.countryCode2CurrencyCode(countryCode);
}

async function currencyName(countryCode: string) {
    const currencyCode = CountryConverterService.countryCode2CurrencyCode(countryCode);
    if (currencyCode === undefined) { return '' }
    return await CurrencyService.code2CurrencyNamePl(currencyCode) || '';
}

async function convert2PLNFormat(amount: number, countryCode: string, staticRate?: number) {
    const currencyCode = getCurrencyCode(countryCode);
    if (currencyCode === undefined) { return '' }
    const pln = await convert2PLN(amount, currencyCode, staticRate);
    if (pln === null) { return '' }
    return `${pln.toPrecision(3)} zł`;
}

async function convert2PLN(amount: number, currencyCode: string, staticRate?: number) {
    const rate = await currencyRate(currencyCode, staticRate);
    if (rate === undefined) { return null }
    return amount * rate;
}