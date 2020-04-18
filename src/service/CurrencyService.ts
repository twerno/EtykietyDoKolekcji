import { AsyncLoader } from "../helper/AsyncLoader";
import CountryConverterService from "./CountryConverterService";

export default {
    countryCode2Rate,
    currencyCode2Rate,
    code2CurrencyNamePl
}

type IStringMap<T> = { [key: string]: T | undefined };
const cache: IStringMap<ICurrencyTableEntry> = {};
const loader = new AsyncLoader(initFn);

async function currencyCode2Rate(currencyCode: string): Promise<number | undefined> {
    await loader.load();
    currencyCode = currencyCode.toUpperCase();
    return cache[currencyCode]?.mid;
}

async function code2CurrencyNamePl(currencyCode: string): Promise<string | undefined> {
    await loader.load();
    currencyCode = currencyCode.toUpperCase();
    return cache[currencyCode]?.currency;
}

async function countryCode2Rate(countryCode: string): Promise<number | undefined> {
    await loader.load();
    const currencyCode = CountryConverterService.countryCode2CurrencyCode(countryCode)?.toUpperCase();
    return currencyCode
        ? cache[currencyCode]?.mid
        : undefined;
}


/* ************************************* */
/* ************************************* */

async function initFn() {

    const fetch1 = fetch("https://api.nbp.pl/api/exchangerates/tables/A?format=json")
        .then(res => res.json())
        .then<INBPExchangeRatesTableAFormat>(res => res[0])
        .then(res => res.rates.forEach(rate => cache[rate.code] = rate));

    const fetch2 = fetch("https://api.nbp.pl/api/exchangerates/tables/B?format=json")
        .then(res => res.json())
        .then<INBPExchangeRatesTableAFormat>(res => res[0])
        .then(res => res.rates.forEach(rate => cache[rate.code] = rate));

    await Promise.all([fetch1, fetch2]);
}

interface ICurrencyTableEntry {
    currency: string,
    code: string,
    mid: number
}

interface INBPExchangeRatesTableAFormat {
    rates: Array<ICurrencyTableEntry>
}