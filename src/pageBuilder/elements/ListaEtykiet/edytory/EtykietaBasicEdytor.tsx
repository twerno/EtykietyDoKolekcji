import * as React from 'react';
import { FlexContainer } from '../../../../components/utils/FlexContainer';
import StringUtils from '../../../../helper/StringUtils';
import { countryList } from '../../../../service/CountryNameData';
import { IEtykietaBasicSchema } from '../ListaEtykietSchema';

export interface IEtykietaBasicEdytorProps {
    value: IEtykietaBasicSchema;
    changeHandler: (delta: Partial<IEtykietaBasicSchema>) => void;
}

export default ({ value, changeHandler }: IEtykietaBasicEdytorProps) => {

    const countryData = countryList
        .filter(i => StringUtils.lowerCaseCompare(i.code, value?.countryCode))[0];

    return (
        <FlexContainer>
            <FlexContainer flexDirection="column">
                <label>Typ</label>
                <select
                    value={value.typ || 'Typ20'}
                    onChange={ev => changeHandler({ typ: ev.target.value as any })}
                >
                    <option value="typ20">Typ20</option>
                    <option value="typ35">Typ35</option>
                </select>
            </FlexContainer>

            <FlexContainer flexDirection="column">
                <label>Państwo</label>
                <select
                    onChange={ev => changeHandler({ countryCode: ev.target.value })}
                    value={value.countryCode.toUpperCase() || ''}
                >
                    <option value="">Brak</option>
                    {countryList.map(item => <option
                        value={item.code}
                        key={`option_${item.code}`}>
                        {item.name_pl}
                    </option>)
                    }
                </select>
            </FlexContainer>

            <FlexContainer flexDirection="column">
                <label>Flaga</label>
                <input
                    type="text"
                    onChange={ev => changeHandler({ customImgUrl: ev.target.value })}
                    value={value.customImgUrl || ''}
                    placeholder={countryData ? 'Flaga państwa' : 'brak'}
                />
            </FlexContainer>

            <FlexContainer flexDirection="column">
                <label>Nazwa państwa</label>
                <input
                    type="text"
                    onChange={ev => changeHandler({ customLabel: ev.target.value })}
                    value={value.customLabel || ''}
                    placeholder={countryData?.name_pl}
                />
            </FlexContainer>

        </FlexContainer>

    );
}