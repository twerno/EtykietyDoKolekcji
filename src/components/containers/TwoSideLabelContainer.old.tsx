import * as React from 'react';
import { A4Page } from './A4Page';
import { FlexContainer } from './FlexContainer';
import styled, { css, CSSObject } from 'styled-components';
import StyledHelper from '../utils/StyledHelper';

const TwoSideLabelContainerContext = React.createContext(false);

export const A4TwoSideLabelContainer: React.FC<{}> = ({ children }) => {
    const [side, setSide] = React.useState<boolean>(true);

    return (
        <A4Page>
            <TwoSideLabelStyledContainer
                flexWrap="wrap"
                flexDirection="row"
                fullSize
                side={side ? 'front' : 'back'}
                onClick={_ => setSide(v => !v)}
            >
                <TwoSideLabelContainerContext.Provider value={side}>
                    {children}
                </TwoSideLabelContainerContext.Provider>
            </TwoSideLabelStyledContainer>
        </A4Page>
    );
};

export const TwoSideLabelContainer: React.FC<{}> = ({ children }) => {
    const [side, setSide] = React.useState<boolean>(true);

    return (
        <TwoSideLabelStyledContainer
            flexWrap="wrap"
            flexDirection="row"
            fullSize
            side={side ? 'front' : 'back'}
            onClick={_ => setSide(v => !v)}
        >
            <TwoSideLabelContainerContext.Provider value={side}>
                {children}
            </TwoSideLabelContainerContext.Provider>
        </TwoSideLabelStyledContainer>
    );
}

interface ITwoSideComponentProps {
    front: React.ReactElement;
    back: React.ReactElement;
}

export const TwoSideComponent = ({ front, back }: ITwoSideComponentProps) => {
    return (
        <>
            <div className='front'>{front}</div>
            <div className='back'>{back}</div>
        </>
    )
}


export const TwoSideLabelStyledContainer = styled(FlexContainer)<{ side?: 'front' | 'back'; }>(props => css`
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

        .front {
            display: ${_ => props.side === 'back' ? 'none' : 'block'}
        }

        .back {
            display: ${_ => props.side === 'front' ? 'none' : 'block'}
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
                    justifyContent: 'center',
                    alignContent: 'baseline',
                })
            )(props.side === 'front')
        },
    ]));
