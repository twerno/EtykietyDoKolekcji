import * as React from 'react';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { FlexContainer } from './containers/FlexContainer';
import { IOkladkaCountryProps } from './OkladkaMapa';
import { Typ2Container } from './containers/Typ2Container';
import { LabelWithFlag } from './LabelWithFlag';

export interface IOkladkaOpisyProps {
    countryList: IOkladkaCountryProps[];
}

export const OkladkaOpisy = (props: IOkladkaOpisyProps) => {

    return (
        <Typ2Container>
            <FlexContainer flexDirection='column' flexWrap="wrap" height="100%" alignItems="center">
                {
                    props.countryList
                        .sort(sortByNamePl)
                        .map(data =>
                            <LabelWithFlag
                                key={data.countryCode}
                                countryCode={data.countryCode}
                                flagProvider={FlagIconCssProvider}
                                infoList={data.info}
                            />
                        )
                }
            </FlexContainer>
        </Typ2Container>
    );
}

function sortByNamePl(a: IOkladkaCountryProps, b: IOkladkaCountryProps): number {
    const nameA = CountryConverterService.countryCode2NamePl(a.countryCode) || '';
    const nameB = CountryConverterService.countryCode2NamePl(b.countryCode) || '';

    return nameA.localeCompare(nameB);
}
