import { IPageSchema } from "./PageSchema";

export const pageData: IPageSchema[] =
    [
        {
            name: 'Typ35 elements',
            content:
            {
                interfaceId: 'IListaEtykietSchema',
                content: [
                    {
                        interfaceId: "IEtykietaBasicSchema",
                        typ: 'typ20',
                        countryCode: 'us',
                    },
                    {
                        interfaceId: 'IEtykietaBasicSchema',
                        typ: 'typ35',
                        countryCode: '',
                        customImgUrl: 'https://etykiety.s3-eu-west-1.amazonaws.com/poczta_polska.jpg',
                        customLabel: 'Żeton telefoniczny'
                    }
                ]
            }
        }
    ];

