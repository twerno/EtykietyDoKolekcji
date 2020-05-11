import * as React from 'react';
import { A4Page } from './A4Page';
import { FlexContainer } from './FlexContainer';
import styled, { css, CSSObject } from 'styled-components';
import StyledHelper from '../utils/StyledHelper';

export const A4TwoSideLabelContainer: React.FC<{}> = ({ children }) => {
    const [side, setSide] = React.useState<boolean>(true);

    return (
        <A4Page>
            <TwoSideLabelContainer
                center
                flexWrap="wrap"
                flexDirection="row"
                height="100%"
                side={side ? 'front' : 'back'}
                onClick={_ => setSide(v => !v)}
            >
                {children}
            </TwoSideLabelContainer>
        </A4Page>
    );
};

export const TwoSideLabelContainer = styled(FlexContainer)<{ side?: 'front' | 'back'; }>(props => css`
    position: relative;

    @media screen {
        &::before {
            content: ${_ => props.side ? `'${props.side}'` : undefined};
            position: absolute;
            margin-top: -15px;
            margin-left: -15px;
            background: white;
            box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.51);
            z-index: 1000;
            border: 1px solid black;
            padding: 5px 10px;
            border-radius: 8px;
            left: 0px;
            transition: all 0.2s;
        }

        &:hover::before {
            background: #a3ffa3f0;
        }
    }
    `,
    StyledHelper.cssMerge([
        {
            condition: props => !!props.side,
            formatter: props => (
                (isFront): CSSObject => ({
                    display: 'flex',
                    flexDirection: isFront ? 'row' : 'row-reverse',
                    justifyContent: isFront ? 'flex-start' : 'end',
                    alignContent: 'normal'
                })
            )(props.side === 'front')
        },
    ]));
