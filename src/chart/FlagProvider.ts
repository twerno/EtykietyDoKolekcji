export interface IFlagProvider {
    provideFlagFor(countryId: string): { url: string, width: number, height: number };
}

export const FlagIconCssProvider: IFlagProvider = {
    provideFlagFor: (countryId: string) => {
        return {
            url: `https://lipis.github.io/flag-icon-css/flags/4x3/${countryId.toLowerCase()}.svg`,
            height: 480,
            width: 600
        };
    }
}