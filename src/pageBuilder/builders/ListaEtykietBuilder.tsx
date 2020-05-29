import * as React from 'react';
import { DoubleSidedElementContainer } from '../../components/DoubleSidedElement/DoubleSidedElementContainer';
import { DoubleSidedElementController } from '../../components/DoubleSidedElement/DoubleSidedElementController';
import hookUtils from '../../helper/hookUtils';
import { IListaEtykietSchema } from "../PageSchema";
import EtykietaTyp20Builder from './EtykietaTyp20Builder';
import EtykietaTyp35Builder from './EtykietaTyp35Builder';

export interface IListaEtykietBuilderProp {
    data: IListaEtykietSchema;
}

export default ({ data }: IListaEtykietBuilderProp) => {
    const id = hookUtils.useRandomId();

    const items = data.content.map((item, idx) => item.interfaceId === 'IEtykietaTyp20'
        ? <EtykietaTyp20Builder data={item} key={`${id}_${idx}_${item.countryCode}`} />
        : <EtykietaTyp35Builder data={item} key={`${id}_${idx}_${item.countryCode}`} />
    );

    return (
        <DoubleSidedElementController>
            <DoubleSidedElementContainer>
                {items}
            </DoubleSidedElementContainer>
        </DoubleSidedElementController>
    );
}

