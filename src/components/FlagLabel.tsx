import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { IFlagProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';

export interface IFlagLabelProps {
    flag: string | IFlagProvider;
    countryCode: string;
    label?: string | React.ReactElement;
    variant: LabelWithFlagContainerVariants;
}

export const FlagLabel = ({ flag, countryCode, variant, label }: IFlagLabelProps) => {

    const flagUrl = typeof flag === 'string'
        ? flag
        : flag.provideFlagFor(countryCode).url;

    const namePl = CountryConverterService.countryCode2NamePl(countryCode);

    return (
        <LabelWithFlagContainer variant={variant}>
            <img className="flag" src={flagUrl} alt={countryCode} />

            <div className="label">
                {label || namePl}
            </div>
        </LabelWithFlagContainer>
    );
};

export type LabelWithFlagContainerVariants = 'typ35' | 'typ20' | 'regular';

const labelVariants = variant<object, LabelWithFlagContainerVariants>(
    {
        variants: {
            typ35: css`
                padding: 0px;
                justify-content: flex-start;

                .flag {
                    width: 17mm;
                    margin-top: 5px;
                }

                .label {
                    font-size: 11px; 
                    margin: 4px 0px;
                }
            `,
            typ20: css`
                padding: 0px;

                .flag {
                    width: 30mm;
                }

                .label {
                    font-size: 14px; 
                    margin: 0px;
                    padding: 0px 1px;
                }
            `,
            regular: {}
        }
    });

interface ILabelWithFlagContainerProps {
    variant: LabelWithFlagContainerVariants;
}

const LabelWithFlagContainer = styled.div<ILabelWithFlagContainerProps>((props) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    flex: 1 0 auto;

    .flag {
        width: 30mm;
        outline: 1px solid #cececee6;
        flex: 0 1 auto;
        margin-top: 5%;
    }

    .label {
        font-family: 'Inter', sans-serif; 
        font-size: 17px;
        font-weight: bold;
        
        /* https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space */
        display: flex;
        align-items: center;
        flex: 1;
    }
`, labelVariants);
