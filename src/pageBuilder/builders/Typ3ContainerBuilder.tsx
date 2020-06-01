import * as React from 'react';
import { Typ2ContainerSchema as Typ3ContainerSchema } from "../state/PageSchema";
import OkienkoDlaStrony_203x257 from "../../components/klocki/OkienkoDlaStrony_203x257";
import ListaEtykietBuilder from '../elements/ListaEtykiet/ListaEtykietBuilder';

export interface ITyp3ContainerBuilderProps {
    data: Typ3ContainerSchema;
}

export default ({ data }: ITyp3ContainerBuilderProps) => {
    return <OkienkoDlaStrony_203x257.Typ3>
        {/* <ListaEtykietBuilder data={data.content} /> */}
    </OkienkoDlaStrony_203x257.Typ3>;
}