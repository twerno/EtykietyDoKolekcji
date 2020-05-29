import * as React from 'react';
import EtykietaTyp35 from '../../components/etykiety/EtykietaTyp35';
import { IEtykietaTyp35Schema } from "../PageSchema";
import { FlagIconCssProvider } from '../../chart/FlagProvider';

export interface IEtykietaTyp35BuilderProps {
    data: IEtykietaTyp35Schema;
}

export default ({ data }: IEtykietaTyp35BuilderProps) => {

    return (
        <EtykietaTyp35
            countryCode={data.countryCode}
            flag={data.customImgUrl || FlagIconCssProvider}
        >
            {data.customLabel}
        </EtykietaTyp35>
    );
}

