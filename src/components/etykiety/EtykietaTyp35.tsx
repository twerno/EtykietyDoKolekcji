import * as React from 'react';
import { FlagLabel } from '../FlagLabel';
import { FlagIconCssProvider } from '../../chart/FlagProvider';
import { StronaQuatro } from '../containers/Okienko';

interface IEtykietaTyp35Props {
    flag?: string;
    countryCode: string;
    label?: string | React.ReactElement;
}

export const EtykietaTyp35 = ({ flag, countryCode, label }: IEtykietaTyp35Props) => {
    return (
        <StronaQuatro.OkienkoTyp35>
            <FlagLabel
                variant="typ35"
                countryCode={countryCode}
                flag={flag || FlagIconCssProvider}
                label={label}
            />
        </StronaQuatro.OkienkoTyp35>
    )
};

export const Typ35Label = (firstLine: string, extraLine?: string) => {
    return (
        <div>
            {firstLine}
            {extraLine
                ? <div style={{ fontSize: '10px', margin: '-2px 0', width: '100%' }}>
                    {extraLine}
                </div>
                : null
            }
        </div>
    );
};
