import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Row from 'react-bootstrap/Row';
import StringUtils from '../../../../helper/StringUtils';
import { countryList } from '../../../../service/CountryNameData';
import { IEtykietaBasicSchema } from '../ListaEtykietSchema';

export interface IEtykietaBasicEdytorProps {
    value: IEtykietaBasicSchema;
    changeHandler: (delta: IEtykietaBasicSchema) => void;
}

export default ({ value, changeHandler }: IEtykietaBasicEdytorProps) => {

    const change = (delta: Partial<IEtykietaBasicSchema>) => changeHandler({ ...value, ...delta });

    const countryData = countryList
        .filter(i => StringUtils.lowerCaseCompare(i.code, value?.countryCode))[0];

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                            <FormLabel>Państwo</FormLabel>
                            <FormControl as="select" custom size="sm"
                                onChange={ev => change({ countryCode: ev.target.value })}
                                value={value.countryCode.toUpperCase() || ''}
                            >
                                <option value="">Brak</option>
                                {countryList.map(item => <option
                                    value={item.code}
                                    key={`option_${item.code}`}>
                                    {item.name_pl}
                                </option>)
                                }
                            </FormControl>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FormLabel>Flaga</FormLabel>
                            <FormControl
                                size="sm"
                                type="text"
                                onChange={ev => change({ customImgUrl: ev.target.value })}
                                value={value.customImgUrl || ''}
                                placeholder={countryData ? 'Flaga państwa' : 'brak'}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FormLabel>Nazwa państwa</FormLabel>
                            <FormControl
                                size="sm"
                                onChange={ev => change({ customLabel: ev.target.value })}
                                value={value.customLabel || ''}
                                placeholder={countryData?.name_pl}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>

            <Col>
                <Form.Group>
                    <FormLabel>Wielkość czcionki</FormLabel>
                    <FormControl
                        size="sm"
                        type="number"
                        onChange={ev => change({ fontSize: ev.target.value as any })}
                        value={value.fontSize || ''}
                    />
                </Form.Group>
            </Col>
        </>
    );
}