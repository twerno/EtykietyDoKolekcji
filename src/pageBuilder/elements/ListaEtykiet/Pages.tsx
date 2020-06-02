import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/rootReducer';
import { PageBuilder } from '../../PageBuilder';
import { IPageSchema } from '../../state/PageSchema';
import { pageSlice } from '../../state/pageSlice';
import ListaEtykietEdytor from './edytory/ListaEtykietEdytor';
import { IListaEtykietSchema } from './ListaEtykietSchema';
import { store } from '../../../state/store';
import { FlexContainer } from '../../../components/utils/FlexContainer';

export interface IPagesProps {

}

export const Pages = (props: IPagesProps) => {

    const pages = useSelector<RootState, IPageSchema[]>(rootState => rootState.pages);

    const listaEtykietChangeHandler = (idx: number) =>

        (content: IListaEtykietSchema) =>
            store.dispatch(
                pageSlice.actions.pageUpdate({
                    idx,
                    delta: { content }
                })
            );


    return <>
        {
            pages.map((page, idx) =>
                <FlexContainer key={`page_${idx}`} position="fixed" width="100%">
                    <PageBuilder pageData={page} />

                    <FlexContainer height='100vh' overflowY='scroll' width='100%' isPrintable={false}>
                        <ListaEtykietEdytor
                            values={page.content}
                            changeHandler={listaEtykietChangeHandler(idx)}
                        />

                    </FlexContainer>
                </FlexContainer>
            )
        }
    </>;

}