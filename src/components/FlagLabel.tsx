import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { IFlagProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';

export interface IFlagLabelProps {
    flag: string | IFlagProvider;
    countryCode: string;
    variant: LabelWithFlagContainerVariants;
}

export const FlagLabel = ({ flag, countryCode, variant }: IFlagLabelProps) => {

    const flagUrl = typeof flag === 'string'
        ? flag
        : flag.provideFlagFor(countryCode).url;

    const namePl = CountryConverterService.countryCode2NamePl(countryCode);

    return (
        <LabelWithFlagContainer variant={variant}>
            <img className="flag" src={flagUrl} alt={countryCode} />

            <div className="label">
                {namePl}
            </div>
        </LabelWithFlagContainer>
    );
};

type LabelWithFlagContainerVariants = 'typ35' | 'typ20' | 'regular';

const labelVariants = variant<object, LabelWithFlagContainerVariants>(
    {
        variants: {
            typ35: css`
                justify-content: space-evenly;
                padding: 0px;

                .flag {
                    width: 17mm;
                    margin-top: 4%;
                }

                .label {
                    font-size: 12px; 
                    margin: 0px;
                    margin-top: 5%;
                }
            `,
            typ20: css`
                justify-content: space-evenly;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 5px;

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
        margin: 15px -5px 10px -5px;
        
        /* https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space */
        display: flex;
        flex: 1 1 auto;
        align-items: center;
    }
`, labelVariants);
