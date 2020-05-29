import * as React from 'react';
import EtykietaTyp20 from '../../components/etykiety/EtykietaTyp20';
import { IEtykietaTyp20Schema } from "../PageSchema";
import { FlagIconCssProvider } from '../../chart/FlagProvider';

export interface IEtykietaTyp20BuilderProps {
    data: IEtykietaTyp20Schema;
}

export default ({ data }: IEtykietaTyp20BuilderProps) => {

    return (
        <EtykietaTyp20
            countryCode={data.countryCode}
            flag={data.customImgUrl || FlagIconCssProvider}
        >
            {data.customLabel}
        </EtykietaTyp20>
    );
}

