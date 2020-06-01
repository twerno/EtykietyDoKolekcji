import * as React from 'react';
import ImmutableUtils from '../../../../helper/ImmutableUtils';
import { IEtykietaBasicSchema, IListaEtykietSchema } from '../ListaEtykietSchema';
import EtykietaBasicEdytor from './EtykietaBasicEdytor';

export interface IListaEtykietEdytorProps {
    values: IListaEtykietSchema;
    changeHandler: (delta: IListaEtykietSchema) => void;
}

export default ({ values, changeHandler }: IListaEtykietEdytorProps) => {

    const etykietaChangeHandler = (idx: number) =>
        (delta: Partial<IEtykietaBasicSchema>) => changeHandler(
            {
                interfaceId: 'IListaEtykietSchema',
                content: ImmutableUtils.updateArray(values.content, idx, delta)
            }
        );

    return (
        <ul>
            {
                values.content.map((value, idx) =>
                    <li key={`listaEtykiet_${idx}`}>
                        <EtykietaBasicEdytor
                            value={value}
                            changeHandler={etykietaChangeHandler(idx)}
                        />
                    </li>)
            }
        </ul>
    );
}