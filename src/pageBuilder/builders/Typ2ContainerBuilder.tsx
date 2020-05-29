import * as React from 'react';
import { Typ2ContainerSchema } from "../PageSchema";
import OkienkoDlaStrony_203x257 from "../../components/klocki/OkienkoDlaStrony_203x257";
import ListaEtykietBuilder from './ListaEtykietBuilder';

export interface ITyp2ContainerBuilderProps {
    data: Typ2ContainerSchema;
}

export default ({ data }: ITyp2ContainerBuilderProps) => {
    return <OkienkoDlaStrony_203x257.Typ2>
        {/* <ListaEtykietBuilder data={data.content} /> */}
    </OkienkoDlaStrony_203x257.Typ2>;
}