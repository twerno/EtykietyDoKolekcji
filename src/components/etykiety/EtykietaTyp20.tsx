import * as React from 'react';
import { FlagIconCssProvider } from '../../chart/FlagProvider';
import { FlagLabel } from '../FlagLabel';
import { StronaQuatro } from '../containers/Okienko';

interface IEtykietaTyp20Props {
    flag?: string;
    label?: string | React.ReactElement;
    countryCode: string;
}

export const EtykietaTyp20 = ({ flag, countryCode, label }: IEtykietaTyp20Props) => {
    return (
        <StronaQuatro.OkienkoTyp20>
            <FlagLabel
                variant="typ20"
                countryCode={countryCode}
                flag={flag || FlagIconCssProvider}
                label={label}
            />
        </StronaQuatro.OkienkoTyp20>
    )
};

export const Typ20Label = (firstLine: string, extraLine?: string) => {
    return (
        <div>
            {firstLine}
            {extraLine
                ? <div style={{ fontSize: '11px', width: '100%' }}>
                    {extraLine}
                </div>
                : null
            }
        </div>
    );
};