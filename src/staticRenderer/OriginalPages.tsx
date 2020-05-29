import * as React from 'react';
import { MapChart } from '../chart/chart';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import { OkładkaA4 } from '../components.old/OkładkaA4';
import { A4Page } from '../components/A4Page';
import { DoubleSidedElementContainer } from '../components/DoubleSidedElement/DoubleSidedElementContainer';
import { DoubleSidedElementController } from '../components/DoubleSidedElement/DoubleSidedElementController';
import EtykietaTyp20 from '../components/etykiety/EtykietaTyp20';
import EtykietaTyp35 from '../components/etykiety/EtykietaTyp35';
import OkienkoDlaStrony_203x257 from '../components/klocki/OkienkoDlaStrony_203x257';
import { DoubleSidedLabelWithInfobox } from '../components/label/DoubleSidedLabelWithInfobox';
import { LabelWithInfobox } from '../components/label/LabelWithInfobox';
import { FlexContainer } from '../components/utils/FlexContainer';
import CurrencyUtils from '../helper/CurrencyUtils';
import * as am4core from "@amcharts/amcharts4/core";

export default (props: {}) => <>

    <A4Page>
        <OkienkoDlaStrony_203x257.Typ3>
            <FlexContainer flexDirection="row" height="100%">
                <MapChart
                    countryDataList={[
                        { countryCode: 'si' },
                        { countryCode: 'hr' },
                        { countryCode: 'ba' },
                        { countryCode: 'rs' },
                        { countryCode: 'me' },
                        { countryCode: 'mk' },
                        { countryCode: 'xk' },
                        { countryCode: 'me' },
                    ]}
                    includeInView={['gr', 'pl', 'fr']}
                    minimap='bottom-left'
                    flagProvider={FlagIconCssProvider}
                    backgroundColor={am4core.color('red')}
                />
                <LabelWithInfobox
                    countryCode='ju'
                    flag='https://etykiety.s3-eu-west-1.amazonaws.com/jugos%C5%82awia.png'
                    infoBoxes={[
                        {
                            items: [
                                'Dinar jugosłowiański',
                                '1 dinar = 100 para',
                                '',
                                'rozpad Jugosławi w 1991r.',
                                '',
                                'Teren byłej Jugosławii zajmują:',
                                '- Bośnia i Harcegowina',
                                '- Chorwacja',
                                '- Kosowo',
                                '- Monteregro',
                                '- Macedonia',
                                '- Serbia',
                                '- Słowenia',
                            ]
                        }
                    ]}
                    fontSize={9}
                    width={45}
                    paddingTop="none"
                >
                    Jugosławia
            </LabelWithInfobox>
            </FlexContainer>
        </OkienkoDlaStrony_203x257.Typ3>
    </A4Page>

    <A4Page>
        <DoubleSidedElementController>
            <FlexContainer fullSize flexDirection='column' alignItems="center">
                <OkienkoDlaStrony_203x257.Typ3>
                    <DoubleSidedElementContainer>
                        <DoubleSidedLabelWithInfobox
                            width={30}
                            fontSize={7}
                            countryCode='ca'
                            flag={FlagIconCssProvider}
                            children="5 dolarów kanadyjskich"
                            paddingTop="single"
                            border
                            sharedInfobox={{
                                showSeparator: true,
                                interspace: 'loose',
                                items: [
                                    { label: 'Wartość', text: CurrencyUtils.convert2PLNFormat(5, 'ca') },
                                    { label: 'Rok emisji', text: '2013' },
                                    { label: 'Typ', text: 'plastikowy' },
                                    { label: 'W obiegu', text: 'tak' },

                                ]
                            }}
                            frontSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'portret', text: 'sir Wilfrid Laurier - premier Kanady 1896-1911' },
                                    { label: 'hologram', text: 'Wieża Mackenzie - najbardziej rozpoznawalna wieża Zachodniego Budynku Parlamentu Kanadyjskiego' },
                                    { label: 'okienko', text: 'liść klonu' }

                                ]
                            }}
                            backSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'Canadarm2', text: 'mechaniczne, mobilne ramie dźwigu zamontowanego w 2001r. na ISS' },
                                    { label: 'Dextre (Canada Hand)', text: 'końcówka do Canadarm2 służąca do prac precyzyjnych' },
                                    'Kanadyjski astronauta',
                                    { label: 'Tło', text: 'widok na Wielkie Jeziora i zatokę Hudsona' }
                                ]
                            }}
                        />

                        <DoubleSidedLabelWithInfobox
                            width={40}
                            fontSize={7}
                            countryCode='au'
                            flag={FlagIconCssProvider}
                            children="5 dolarów australijskich"
                            paddingTop="single"
                            border
                            sharedInfobox={{
                                showSeparator: true,
                                interspace: 'loose',
                                items: [
                                    { label: 'Wartość', text: CurrencyUtils.convert2PLNFormat(5, 'au') },
                                    { label: 'Rok emisji', text: '2016' },
                                    { label: 'Typ', text: 'plastikowy' },
                                    { label: 'W obiegu', text: 'tak' },
                                ]
                            }}
                            frontSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'portret', text: 'królowa Elżbieta II' },
                                    { label: 'hologram', text: 'Miodopijek długodzioby' },
                                    { label: 'hologram', text: 'Pawilon federacji - tymczasowa budowla, w której 1 stycznia 1901 r. 6 brytyjskich kolonii oficjalnie utworzyło Związek Australijski' },
                                    { label: 'okienko', text: 'Gwiazda federacji - siedmioramienna (oryginalnie 6-ramienna, 7 ramie dodane w 1908r.) gwiazda symbolizująca stany Australii; gwiazda użyta jest także na herbie Australii' },
                                    { label: 'motyw roślinny', text: 'gatunek akacji pochodzący z południowo-wschodniej Australii' }
                                ]
                            }}
                            backSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'Budynek Parlamentu', text: 'otwarty w 1988r. przez królową Elżbietę II' },
                                    'Mozajka przez budynkiem Parlamentu',
                                    { label: 'Widok z lotu ptaka na budynek Parlamentu', text: 'w tym Izby Reprezentantów, Senatu i obiektów sportowych' },
                                ]
                            }}
                        />

                        <DoubleSidedLabelWithInfobox
                            width={25}
                            fontSize={7}
                            countryCode='us'
                            flag={FlagIconCssProvider}
                            children="1 dolar amerykański"
                            paddingTop="single"
                            border
                            sharedInfobox={{
                                showSeparator: true,
                                interspace: 'loose',
                                items: [
                                    { label: 'Wartość', text: CurrencyUtils.convert2PLNFormat(1, 'us') },
                                    { label: 'Rok emisji', text: '2013' },
                                    { label: 'Typ', text: 'papierowy' },
                                    { label: 'W obiegu', text: 'tak' },
                                ]
                            }}
                            frontSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'portret', text: 'George Washington - pierwszy prezydent USA (1789 - 1797)' },
                                ]
                            }}
                            backSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'Wielka Pieczęć Stanów Zjednoczonych', text: '' },
                                ]
                            }}
                        />

                        <DoubleSidedLabelWithInfobox
                            width={25}
                            fontSize={7}
                            countryCode='us'
                            flag={FlagIconCssProvider}
                            children="5 dolarów amerykańskich"
                            paddingTop="single"
                            border
                            sharedInfobox={{
                                showSeparator: true,
                                interspace: 'loose',
                                items: [
                                    { label: 'Wartość', text: CurrencyUtils.convert2PLNFormat(5, 'us') },
                                    { label: 'Rok emisji', text: '2013' },
                                    { label: 'Typ', text: 'papierowy' },
                                    { label: 'W obiegu', text: 'tak' },
                                ]
                            }}
                            frontSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'portret', text: 'Abraham Lincoln - 16-sty prezydent USA (1861 - 1865)' },
                                ]
                            }}
                            backSideInfo={{
                                interspace: 'loose',
                                items: [
                                    { label: 'Mauzoleum Abrahama Lincolna', text: 'budynek przypominający wyglądem klasyczną grecką świątynię, zbudowany na planie prostokąta, otoczony kolumnami doryckimi. We wnętrzu znajduje się posąg Lincolna.' },
                                ]
                            }}
                        />
                    </DoubleSidedElementContainer>
                </OkienkoDlaStrony_203x257.Typ3>
            </FlexContainer>
        </DoubleSidedElementController>
    </A4Page>

    <A4Page>
        <DoubleSidedElementController>
            <DoubleSidedElementContainer>
                <EtykietaTyp35 countryCode="us" />
                <EtykietaTyp35 countryCode="bs" />
                <EtykietaTyp35 flag='https://etykiety.s3-eu-west-1.amazonaws.com/poczta_polska.jpg'>
                    Żeton telefoniczny
            </EtykietaTyp35>
                <EtykietaTyp35 flag='https://etykiety.s3-eu-west-1.amazonaws.com/lidl.png'>
                    Żeton
            </EtykietaTyp35>
                <EtykietaTyp35 flag='https://etykiety.s3-eu-west-1.amazonaws.com/eurocoin.png'>
                    Żeton
            </EtykietaTyp35>
                <EtykietaTyp35 countryCode="at" />
                <EtykietaTyp35 countryCode="fr" />
                <EtykietaTyp35 countryCode="sk" />
                <EtykietaTyp35 countryCode="de" />
                <EtykietaTyp35 countryCode="gr" />
                <EtykietaTyp35 countryCode="it" />
                <EtykietaTyp35 countryCode="es" />
                <EtykietaTyp35 countryCode="be" />
                <EtykietaTyp35 countryCode="pt" />
                <EtykietaTyp35 countryCode="nl">
                    <FlexContainer flexDirection="column"><div>Niderlandy</div><small>(Holandia)</small></FlexContainer>
                </EtykietaTyp35>
                <EtykietaTyp35 countryCode="nl">
                    <FlexContainer flexDirection="column"><div>Niderlandy</div><small>(Holandia)</small></FlexContainer>
                </EtykietaTyp35>
                <EtykietaTyp35 countryCode="cy" />
                <EtykietaTyp35 countryCode="lu" />
                <EtykietaTyp35 countryCode="hr" />
                <EtykietaTyp35 countryCode="no" />
                <EtykietaTyp35 countryCode="bg" />
                <EtykietaTyp35 countryCode="tr" />
                <EtykietaTyp35 countryCode="sk" />
            </DoubleSidedElementContainer>
        </DoubleSidedElementController>
    </A4Page>

    <A4Page>
        <DoubleSidedElementController>
            <DoubleSidedElementContainer>
                <EtykietaTyp20 countryCode="es" />
                <EtykietaTyp20 countryCode="il" />
                <EtykietaTyp20 countryCode="il" />
                <EtykietaTyp20 countryCode="mu" />
                <EtykietaTyp20 countryCode="lk" />
                <EtykietaTyp20 countryCode="th" />
                <EtykietaTyp20 countryCode="fr" />
                <EtykietaTyp20 countryCode="de" />
                <EtykietaTyp20 countryCode="cz" />
                <EtykietaTyp20 countryCode="se" />
                <EtykietaTyp20 countryCode="tr" />
                <EtykietaTyp20 flag='https://etykiety.s3-eu-west-1.amazonaws.com/wiedzmin_logo.png'>
                    <FlexContainer flexDirection="column"><div>Temerski Oren</div><small>(Wiedźmin 2)</small></FlexContainer>
                </EtykietaTyp20>
            </DoubleSidedElementContainer>
        </DoubleSidedElementController>
    </A4Page>

    <OkładkaA4
        mapLabel="Strefa Euro"
        fontSize={8}
        width={23}
        countryList={[
            { countryCode: 'ie', info: ['w UE od 1973', '€ od 1 stycznia 1999'] },
            { countryCode: 'es', info: ['w UE od 1986', '€ od 1 stycznia 1999'] },
            { countryCode: 'fr', info: ['w UE od 1957', '€ od 1 stycznia 1999'] },
            { countryCode: 'be', info: ['w UE od 1957', '€ od 1 stycznia 1999'] },
            {
                countryCode: 'nl',
                label: {
                    sortName: 'Niderlandy',
                    renderer: <>Niderlandy</>
                }, info: ['dawniej Holandia', 'w UE od 1957', '€ od 1 stycznia 1999']
            },
            { countryCode: 'de', info: ['w UE od 1957', '€ od 1 stycznia 1999'] },
            { countryCode: 'dk', info: ['w UE od 1973', '€ od 1 stycznia 1999'] },
            { countryCode: 'fi', info: ['w UE od 1995', '€ od 1 stycznia 1999'] },
            { countryCode: 'ee', info: ['w UE od 2004', '€ od 1 stycznia 2011'] },
            { countryCode: 'lv', info: ['w UE od 2004', '€ od 1 stycznia 2015'] },
            { countryCode: 'lt', info: ['w UE od 2004', '€ od 1 stycznia 2014'] },
            { countryCode: 'it', info: ['w UE od 1957', '€ od 1 stycznia 1999'] },
            { countryCode: 'gr', info: ['w UE od 1981', '€ od 1 stycznia 1999'] },
            { countryCode: 'at', info: ['w UE od 1995', '€ od 1 stycznia 1999'] },
            { countryCode: 'sk', info: ['w UE od 2004', '€ od 1 stycznia 2009'] },
            { countryCode: 'si', info: ['w UE od 2004', '€ od 1 stycznia 2007'] },
            { countryCode: 'pt', info: ['w UE od 1986', '€ od 1 stycznia 1999'] },
            { countryCode: 'cy', info: ['w UE od 2004', '€ od 1 stycznia 2008'], showPin: true },
            { countryCode: 'lu', info: ['w UE od 1957', '€ od 1 stycznia 1999'], showPin: true },
            { countryCode: 'mt', info: ['w UE od 2004', '€ od 1 stycznia 2008'], showPin: true },
            { countryCode: 'ad', info: ['nie jest członkie UE', '€ od 1 stycznia 2015'], showPin: true },
            { countryCode: 'mc', info: ['nie jest członkie UE', '€ od 1 stycznia 2002'], showPin: true },
            { countryCode: 'sm', info: ['nie jest członkie UE', '€ od 1 stycznia 2002'], showPin: true },
            { countryCode: 'va', info: ['nie jest członkie UE', '€ od 1 stycznia 2002'], showPin: true },
            { countryCode: 'me', info: ['nie jest członkie UE', '€ bez umowy z UE'] },
            { countryCode: 'xk', label: "Kosowo", info: ['nie jest członkie UE', '€ bez umowy z UE'] },
        ]}
        minimap="bottom-left"
    />

    <OkładkaA4
        fontSize={11}
        width={45}
        countryList={[
            { countryCode: 'hr', info: ['Kuna', '1 kuna = 100 lip', CurrencyUtils.currencyRateMsg('hr')] },
            { countryCode: 'cz', info: ['Korona czeska', '1 korona = 100 halerzy', CurrencyUtils.currencyRateMsg('cz')] },
            { countryCode: 'no', info: ['Korona norweska', '1 korona = 100 öre', CurrencyUtils.currencyRateMsg('no')] },
            { countryCode: 'se', info: ['Korona szwedzka', '1 korona = 100 öre', CurrencyUtils.currencyRateMsg('se')] },
            { countryCode: 'sk', info: ['Korona słowacka', '1 korona = 100 halerzy', 'Euro od 1 stycznia 2009'] },
            { countryCode: 'bg', info: ['Lew', '1 lew = 100 stotinek', CurrencyUtils.currencyRateMsg('bg')] },
            { countryCode: 'tr', info: ['Lira turecka', '1 lira = 100 kuruszy', CurrencyUtils.currencyRateMsg('tr')] },
        ]}
        includeInView={["is"]}
        minimap="bottom-left"
    />

    <OkładkaA4
        fontSize={11}
        width={45}
        countryList={[
            { countryCode: 'ca', info: ['Dolar kanadyjski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('ca')] },
            { countryCode: 'us', info: ['Dolar amerykański', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('us')] },
            { countryCode: 'bs', info: ['Dolar bahamski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('bs')], showPin: true },
            { countryCode: 'au', info: ['Dolar australijski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('au')] },
        ]}
        minimap="bottom-left"
    />

    <OkładkaA4
        fontSize={11}
        width={45}
        countryList={[
            { countryCode: 'az', info: ['Manat azerbejdżański', '1 manat = 100 gapików', 'denominacja w 2007 roku', '1 nowy manat = 5000 starych', CurrencyUtils.currencyRateMsg('az')] },
            { countryCode: 'il', info: ['Nowy izraelski szekel', '1 szekel = 100 agor', CurrencyUtils.currencyRateMsg('il')] },
            { countryCode: 'af', info: ['Afgani', '1 afgani = 100 pul', CurrencyUtils.currencyRateMsg('af')] },
        ]}
        includeInView={['pk', 'tr']}
        minimap="bottom-left"
    />

    <OkładkaA4
        fontSize={11}
        width={45}
        countryList={[
            { countryCode: 'br', info: ['Real brazylijski', '1 real = 100 centavos', CurrencyUtils.currencyRateMsg('br')] },
        ]}
        includeInView={['br', 'gs', 'pa']}
        minimap="bottom-left"
    />

    <OkładkaA4
        fontSize={11}
        width={45}
        countryList={[
            { countryCode: 'mu', info: ['Rupia maurytyjska', '1 rumia = 100 centów', CurrencyUtils.currencyRateMsg('mu')], showPin: true },
            { countryCode: 'na', info: ['Dolar namibijski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('na')] },
            { countryCode: 'ao', info: ['Kwanza', '1 kwanza  = 100 centymów', CurrencyUtils.currencyRateMsg('ao')] },
            { countryCode: 'ng', info: ['Naira', '1 naira = 100 kobo', CurrencyUtils.currencyRateMsg('ng')] },
            { countryCode: 'ke', info: ['Szyling kenijski', '1 szyling = 100 centów', CurrencyUtils.currencyRateMsg('ke')] },
        ]}
        includeInView={['za', 'ma']}
        minimap="bottom-left"
    />

    <OkładkaA4
        fontSize={11}
        width={45}
        countryList={[
            { countryCode: 'bt', info: ['Ngultrum', '1 ngultrum = 100 czetrum', CurrencyUtils.currencyRateMsg('bt', 0.055)] },
            {
                countryCode: 'mm',
                label: {
                    sortName: 'Mjanma',
                    renderer: <>Mjanma</>,
                },
                info: ['dawniej Birma', 'Kiat', '1 kiat = 100 pia', CurrencyUtils.currencyRateMsg('mm')]
            },
            { countryCode: 'lk', info: ['Rupia lankijska', '1 rupia = 100 centów', CurrencyUtils.currencyRateMsg('lk')] },
            { countryCode: 'mn', info: ['Tugrik', '1 tugrik = 100 möngö', CurrencyUtils.currencyRateMsg('mn')] },
            { countryCode: 'th', info: ['Bat', '1 bat = 100 satangów', CurrencyUtils.currencyRateMsg('th')] },
            { countryCode: 'la', info: ['Kip', '1 kip = 100 at', CurrencyUtils.currencyRateMsg('la')] },

        ]}
        includeInView={['jp', 'pg']}
        minimap="top-right"
    />


</>