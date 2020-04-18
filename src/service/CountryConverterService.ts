import { countryList } from "./CountryNameData"
import { countryData } from "./CountryData";


export default {
    countryCode2NamePl,
    countryCode2CurrencyCode,
}

function countryCode2NamePl(countryCode: string): string | undefined {
    countryCode = countryCode.toLocaleUpperCase();
    return countryList
        .find(d => d.code === countryCode)?.name_pl;
}

function countryCode2CurrencyCode(countryCode: string): string | undefined {
    countryCode = countryCode.toLocaleUpperCase();
    return countryData.countries.country
        .find(d => d.countryCode === countryCode)?.currencyCode;
}