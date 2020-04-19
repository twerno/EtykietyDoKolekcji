import * as React from 'react';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { CountryLabelBig } from './CountryLabelBig';
import { FlexContainer } from './FlexContainer';
import { IOkladkaCountryProps, OkladkaContainer } from './OkladkaMapa';

export interface IOkladkaOpisyProps {
    countryList: IOkladkaCountryProps[];
}

export const OkladkaOpisy = (props: IOkladkaOpisyProps) => {

    return (
        <OkladkaContainer>
            <FlexContainer direction='column'>
                {
                    props.countryList
                        .sort(sortByNamePl)
                        .map(data =>
                            <CountryLabelBig
                                key={data.countryCode}
                                countryData={data}
                                flagProvider={FlagIconCssProvider}
                            />
                        )
                }
            </FlexContainer>
        </OkladkaContainer>
    );
}

function sortByNamePl(a: IOkladkaCountryProps, b: IOkladkaCountryProps): number {
    const nameA = CountryConverterService.countryCode2NamePl(a.countryCode) || '';
    const nameB = CountryConverterService.countryCode2NamePl(b.countryCode) || '';

    return nameA.localeCompare(nameB);
}
