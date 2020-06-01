import * as Immer from 'immer';
import * as React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../../../components/utils/FlexContainer';
import { IEtykietaBasicSchema, IListaEtykietSchema } from '../ListaEtykietSchema';
import EtykietaBasicEdytor from './EtykietaBasicEdytor';

export interface IListaEtykietEdytorProps {
    values: IListaEtykietSchema;
    changeHandler: (delta: IListaEtykietSchema) => void;
}

export default ({ values, changeHandler }: IListaEtykietEdytorProps) => {

    const etykietaChangeHandler = (idx: number) =>
        (delta: IEtykietaBasicSchema) => changeHandler(
            Immer.produce(values, draft => { draft.content[idx] = delta })
        );

    const etykietaRemoveHandler = (idx: number) =>
        () => changeHandler(
            Immer.produce(values, draft => { draft.content.splice(idx) })
        );

    const addItemHandler = () => changeHandler(
        Immer.produce(values, draft => {
            draft.content.push(
                { interfaceId: 'IEtykietaBasicSchema', countryCode: '', typ: 'typ20' })
        })
    );

    return (
        <FlexContainer flexDirection="column">
            <EtykietaPozContainer>
                {
                    values.content.map((value, idx) =>
                        <li key={`listaEtykiet_${idx}`}>
                            <EtykietaBasicEdytor
                                value={value}
                                changeHandler={etykietaChangeHandler(idx)}
                                removeHandler={etykietaRemoveHandler(idx)}
                            />
                        </li>)
                }
            </EtykietaPozContainer>
            <button onClick={addItemHandler}>Dodaj</button>
        </FlexContainer>
    );
}

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

const EtykietaPozContainer = styled.ul`
    list-style: none;
    padding-left: 0;

    li {
        padding: 10px 0px;
    }
`;
