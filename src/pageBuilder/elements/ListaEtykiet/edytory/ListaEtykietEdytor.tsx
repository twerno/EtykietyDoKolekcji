import * as Immer from 'immer';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import styled from 'styled-components';
import { FlexContainer } from '../../../../components/utils/FlexContainer';
import ArrayUtils from '../../../../helper/ArrayUtils';
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
                { interfaceId: 'IEtykietaBasicSchema', countryCode: '', typ: 'typ20', fontSize: 11 })
        })
    );

    const etykietaMoveHandler = (idx: number, direction: 'next' | 'prev') =>
        () => {
            const idx2 = direction === 'prev'
                ? idx - 1
                : idx + 1;
            const content = ArrayUtils.immutableSwitchArrayElement(values.content, idx, idx2);
            changeHandler({ ...values, content });
        };

    return (
        <FlexContainer flexDirection="column">
            <Card>
                <Card.Body>
                    <Card.Title>Lista Etykiet</Card.Title>
                    <EtykietaPozContainer>
                        {
                            values.content.map((value, idx, arr) =>
                                <li key={`listaEtykiet_${idx}`}>
                                    <Card>
                                        <Card.Header>

                                            <FormLabel>Typ</FormLabel>
                                            <FormControl as="select" custom size="sm"
                                                value={value.typ || 'Typ20'}
                                                onChange={ev => changeHandler(
                                                    Immer.produce(values,
                                                        draft => { draft.content[idx].typ = ev.target.value as any })
                                                )}
                                            >
                                                <option value="typ20">Typ20</option>
                                                <option value="typ35">Typ35</option>
                                            </FormControl>
                                        </Card.Header>

                                        <Card.Body>
                                            <EtykietaBasicEdytor
                                                value={value}
                                                changeHandler={etykietaChangeHandler(idx)}
                                            />
                                        </Card.Body>
                                        <Card.Footer>

                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={etykietaRemoveHandler(idx)}
                                            >
                                                Usuń
                                            </Button>

                                            <Button
                                                className="ml-2"
                                                size="sm"
                                                variant="outline-dark"
                                                disabled={idx <= 0}
                                                onClick={etykietaMoveHandler(idx, 'prev')}
                                            >
                                                <i className="fas fa-arrow-up"></i> Przesuń w górę
                                            </Button>

                                            <Button
                                                className="ml-2"
                                                size="sm"
                                                variant="outline-dark"
                                                disabled={idx >= arr.length - 1}
                                                onClick={etykietaMoveHandler(idx, 'next')}
                                            >
                                                <i className="fas fa-arrow-down" /> Przesuń w dół
                                            </Button>

                                        </Card.Footer>
                                    </Card>
                                </li>)
                        }
                    </EtykietaPozContainer>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="outline-primary"
                        onClick={addItemHandler}
                    >
                        Dodaj
                    </Button>
                </Card.Footer>
            </Card>

        </FlexContainer >
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
