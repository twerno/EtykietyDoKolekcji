import { IPageSchema } from "./PageSchema";

export const pageData: IPageSchema =
{
    interfaceId: 'IPageSchema',
    name: 'Typ35 elements',
    content:
    {
        interfaceId: 'IListaEtykiet',
        content: [
            {
                interfaceId: "IEtykietaTyp20",
                countryCode: 'us',
            },
            {
                interfaceId: 'IEtykietaTyp35',
                countryCode: '',
                customImgUrl: 'https://etykiety.s3-eu-west-1.amazonaws.com/poczta_polska.jpg',
                customLabel: 'Żeton telefoniczny'
            }
        ]
    }
};

