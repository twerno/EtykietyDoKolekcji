import * as React from 'react';
import { DoubleSidedElementContainer } from '../../../components/DoubleSidedElement/DoubleSidedElementContainer';
import { DoubleSidedElementController } from '../../../components/DoubleSidedElement/DoubleSidedElementController';
import hookUtils from '../../../helper/hookUtils';
import EtykietaBasicBuilder from './builder/EtykietaBasicBuilder';
import { IListaEtykietSchema } from './ListaEtykietSchema';

export interface IListaEtykietBuilderProp {
    data: IListaEtykietSchema;
}

export default ({ data }: IListaEtykietBuilderProp) => {
    const id = hookUtils.useRandomId();

    const items = data.content.map((item, idx) => item.interfaceId === 'IEtykietaBasicSchema'
        ? <EtykietaBasicBuilder data={item} key={`${id}_${idx}_${item.countryCode}`} />
        : null
    );

    return (
        <DoubleSidedElementController>
            <DoubleSidedElementContainer>
                {items}
            </DoubleSidedElementContainer>
        </DoubleSidedElementController>
    );
}
