import * as React from 'react';
import { IPageSchema } from './state/PageSchema';
import { A4Page } from '../components/A4Page';
import ListaEtykietBuilder from './elements/ListaEtykiet/ListaEtykietBuilder';

export interface IPageBuilderProps {
    pageData: IPageSchema;
}

export const PageBuilder = ({ pageData }: IPageBuilderProps) => {

    return <A4Page>
        <PageContentBuilder pageData={pageData} />
    </A4Page>;
}

export const PageContentBuilder = ({ pageData }: IPageBuilderProps) => {

    return <ListaEtykietBuilder data={pageData.content} />
}
