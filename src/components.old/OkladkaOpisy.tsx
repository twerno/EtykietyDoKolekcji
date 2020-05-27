import * as React from 'react';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { FlexContainer } from '../components/utils/FlexContainer';
import { LabelWithFlag } from './LabelWithFlag';
import { IOkladkaCountryProps, isRendererWithSortName } from './OkladkaMapa';
import OkienkaNaStronie_203x257 from './OkienkoDlaStrony_203x257';

export interface IOkladkaOpisyProps {
    countryList: IOkladkaCountryProps[];
}

export const OkladkaOpisy = (props: IOkladkaOpisyProps) => {

    const variant = props.countryList.length > 12
        ? 'typ35'
        : 'regular';

    return (
        <OkienkaNaStronie_203x257.Typ2>
            <FlexContainer flexDirection="row" flexWrap="wrap" height="100%" alignItems="base-line" alignContent="space-evenly">
                {
                    props.countryList
                        .sort(sortByNamePl)
                        .map(data =>
                            <LabelWithFlag
                                key={data.countryCode}
                                countryCode={data.countryCode}
                                flag={FlagIconCssProvider}
                                infoList={data.info}
                                variant={variant}
                                label={isRendererWithSortName(data.label) ? data.label.renderer : data.label}
                            />
                        )
                }
            </FlexContainer>
        </OkienkaNaStronie_203x257.Typ2>
    );
}

function sortByNamePl(a: IOkladkaCountryProps, b: IOkladkaCountryProps): number {
    const nameA = typeof a.label === 'string'
        ? a.label
        : isRendererWithSortName(a.label)
            ? a.label.sortName
            : CountryConverterService.countryCode2NamePl(a.countryCode) || '';

    const nameB = typeof b.label === 'string'
        ? b.label
        : isRendererWithSortName(b.label)
            ? b.label.sortName
            : CountryConverterService.countryCode2NamePl(b.countryCode) || '';

    return nameA.localeCompare(nameB);
}
