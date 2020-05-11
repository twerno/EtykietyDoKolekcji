import * as React from 'react';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { FlexContainer } from './containers/FlexContainer';
import { Typ2Container } from './containers/Typ2Container';
import { LabelWithFlag } from './LabelWithFlag';
import { IOkladkaCountryProps, isRendererWithSortName } from './OkladkaMapa';

export interface IOkladkaOpisyProps {
    countryList: IOkladkaCountryProps[];
}

export const OkladkaOpisy = (props: IOkladkaOpisyProps) => {

    const variant = props.countryList.length > 12
        ? 'typ35'
        : 'regular';
    const flexDirection = variant === 'regular' ? 'column' : 'row';

    return (
        <Typ2Container>
            <FlexContainer flexDirection={flexDirection} flexWrap="wrap" height="100%" alignItems="center" justifyContent="space-between">
                {
                    props.countryList
                        .sort(sortByNamePl)
                        .map(data =>
                            <LabelWithFlag
                                key={data.countryCode}
                                countryCode={data.countryCode}
                                flagProvider={FlagIconCssProvider}
                                infoList={data.info}
                                variant={variant}
                                label={isRendererWithSortName(data.label) ? data.label.renderer : data.label}
                            />
                        )
                }
            </FlexContainer>
        </Typ2Container>
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
