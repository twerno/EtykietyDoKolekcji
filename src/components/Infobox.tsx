import * as React from 'react';
import styled from 'styled-components';
import { AsyncTextRenderer } from './utils/AsyncTextRenderer';

export interface IInfoboxItem {
    label: string;
    text: string | Promise<string>;
}

export interface IInfoboxProps {
    items?: Array<IInfoboxItem | string | Promise<string>>;
}

export default ({ items }: IInfoboxProps) => {
    return (
        <InfoBoxContainer>
            {items?.map(item => <InfoboxItemRenderer item={item} />)}
        </InfoBoxContainer>
    );
}

const InfoBoxContainer = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
    margin: 0px 3px;
    position: relative;
    margin-bottom: 8px;

    ::after {
        content: '';
        border-bottom: 1px solid #d1d1d1;
        width: 70%;
        position: absolute;
        left: 15%;
        bottom: -7px;
    }

    li {
        text-align: left;
        padding-top: 3px;
    }

    li:empty {
        border-bottom: none;
        height: 10px;
    }

    li:not(':first-child') {
        margin-top: 1px;
    }

    .label {
        font-weight: bold;
    }

    .label::after {
        content: ': ';
    }
`;

interface IInfoboxItemRendererProps {
    item: IInfoboxItem | string | Promise<string>;
}

const InfoboxItemRenderer = (props: IInfoboxItemRendererProps) => {
    const item = isIInfoboxItem(props.item)
        ? <>
            <span className="label">{props.item.label}</span>
            <AsyncTextRenderer provider={props.item.text} />
        </>
        : <AsyncTextRenderer provider={props.item} />;

    return <li>{item}</li>;
}

function isIInfoboxItem(x: any): x is IInfoboxItem {
    return x.hasOwnProperty('label') && x.hasOwnProperty('text');
}