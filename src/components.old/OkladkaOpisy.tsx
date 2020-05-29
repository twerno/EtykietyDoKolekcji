import * as React from 'react';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import ElementGridContainer from '../components/klocki/GridItemsContainer';
import { LabelWithInfobox } from '../components/label/LabelWithInfobox';
import CountryConverterService from '../service/CountryConverterService';
import { IOkladkaCountryProps, isRendererWithSortName } from './OkladkaMapa';

export interface IOkladkaOpisyProps {
    width: number;
    fontSize: number;
    countryList: IOkladkaCountryProps[];
}

export const OkladkaOpisy = (props: IOkladkaOpisyProps) => {

    const useGrid = props.countryList.length > 4;

    return (
        <ElementGridContainer
            mode={useGrid ? 'grid' : 'flexBox'}
            width={props.width}
            items={
                props.countryList
                    .sort(sortByNamePl)
                    .map(data =>
                        <LabelWithInfobox
                            key={data.countryCode}
                            countryCode={data.countryCode}
                            flag={FlagIconCssProvider}
                            infoBoxes={[
                                {
                                    items: data.info
                                }
                            ]}
                            fontSize={props.fontSize}
                            width={useGrid ? undefined : props.width}
                            paddingTop="none"
                        >
                            {isRendererWithSortName(data.label) ? data.label.renderer : data.label}
                        </LabelWithInfobox>
                    )
            } />
    );
}

// //////////////////////////////////////////////////////
// private
// //////////////////////////////////////////////////////

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
