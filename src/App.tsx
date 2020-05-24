import * as am4core from "@amcharts/amcharts4/core";
import React from 'react';
import './App.css';
import { MapChart } from './chart/chart';
import { FlagIconCssProvider } from './chart/FlagProvider';
import { A4Page } from './components/containers/A4Page';
import { FlexContainer } from './components/containers/FlexContainer';
import { A4TwoSideMasterContainer, TwoSideContainer } from "./components/containers/TwoSideLabelContainer";
import { Typ3Container } from './components/containers/Typ3Container';
import { EtykietaTyp20, Typ20Label } from './components/etykiety/EtykietaTyp20';
import { EtykietaTyp35, Typ35Label } from './components/etykiety/EtykietaTyp35';
import { LabelWithFlag } from './components/LabelWithFlag';
import { OkładkaA4 } from './components/OkładkaA4';
import { TwoSideVerticalLabel } from "./components/VerticalLabel";
import CurrencyUtils from "./helper/CurrencyUtils";

function App() {

  return (
    <div className="App">

      <A4Page>
        <Typ3Container>
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
            <LabelWithFlag
              countryCode='ju'
              flag='https://etykiety.s3-eu-west-1.amazonaws.com/jugos%C5%82awia.png'
              infoList={[
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
              ]}
              variant='regular'
              label='Jugosławia'
            />
          </FlexContainer>
        </Typ3Container>
      </A4Page>

      <A4TwoSideMasterContainer>
        <FlexContainer fullSize flexDirection='column'>
          <Typ3Container>
            <TwoSideContainer>
              <TwoSideVerticalLabel
                width={30}
                fontSize={7}
                countryCode='ca'
                flag={FlagIconCssProvider}
                label="5 dolarów kanadyjskich"
                sharedInfobox={{
                  items: [
                    { label: 'Wartość', text: CurrencyUtils.convert2PLNFormat(5, 'ca') },
                    { label: 'Rok emisji', text: '2013' },
                    { label: 'Typ', text: 'plastikowy' },
                    { label: 'W obiegu', text: 'tak' },

                  ]
                }}
                frontSideInfo={{
                  items: [
                    { label: 'portret', text: 'sir Wilfrid Laurier - premier Kanady 1896-1911' },
                    { label: 'hologram', text: 'Wieża Mackenzie - najbardziej rozpoznawalna wieża Zachodniego Budynku Parlamentu Kanadyjskiego' }
                  ]
                }}
                backSideInfo={{
                  items: [
                    { label: 'Canadarm2', text: 'mechaniczne, mobilne ramie dźwigu zamontowanego w 2001r. na ISS' },
                    { label: 'Dextre (Canada Hand)', text: 'końcówka do Canadarm2 służąca do prac precyzyjnych' },
                    'Kanadyjski astronauta',
                    { label: 'Tło', text: 'widok na Wielkie Jeziora i zatokę Hudsona' }
                  ]
                }}
              />

              <TwoSideVerticalLabel
                width={35}
                fontSize={7}
                countryCode='au'
                flag={FlagIconCssProvider}
                label="5 dolarów australijskich"
                sharedInfobox={{
                  items: [
                    { label: 'Wartość', text: CurrencyUtils.convert2PLNFormat(5, 'au') },
                    { label: 'Rok emisji', text: '2016' },
                    { label: 'Typ', text: 'plastikowy' },
                    { label: 'W obiegu', text: 'tak' },

                  ]
                }}
                frontSideInfo={{
                  items: [
                    { label: 'portret', text: 'królowa Elżbieta II' },
                    { label: 'hologram', text: 'Miodopijek długodzioby' },
                    { label: 'hologram', text: 'Pawilon federacji - tymczasowa budowla, w której w 1901 r. 6 Brytyjskich kolonii zjednoczyło się tworząc państwo Australia' },
                    { label: 'okienko', text: 'Gwiazda federacji - siedmioramienna (7 ramie dodane w 1908r.) gwiazda symbolizująca stany Australii, gwiazda użyta jest także na herbie Australii' }
                  ]
                }}
                backSideInfo={{
                  items: [
                    { label: 'Budynek Parlamentu', text: 'otwarty w 1988r. przez królową Elżbietę II' },
                    'Mozajka przez budynkiem Parlamentu',
                    'Rzut z góry przedtawiający budynki Parlamentu Australijskiego',
                  ]
                }}
              />

            </TwoSideContainer>
          </Typ3Container>
        </FlexContainer>
      </A4TwoSideMasterContainer>

      <A4TwoSideMasterContainer>
        <TwoSideContainer>
          <EtykietaTyp35 countryCode="us" />
          <EtykietaTyp35 countryCode="bs" />
          <EtykietaTyp35 countryCode="" label='Żeton telefoniczny' flag='https://etykiety.s3-eu-west-1.amazonaws.com/poczta_polska.jpg' />
          <EtykietaTyp35 countryCode="" label='Żeton' flag='https://etykiety.s3-eu-west-1.amazonaws.com/lidl.png' />
          <EtykietaTyp35 countryCode="" label='Żeton' flag='https://etykiety.s3-eu-west-1.amazonaws.com/eurocoin.png' />
          <EtykietaTyp35 countryCode="at" />
          <EtykietaTyp35 countryCode="fr" />
          <EtykietaTyp35 countryCode="sk" />
          <EtykietaTyp35 countryCode="de" />
          <EtykietaTyp35 countryCode="gr" />
          <EtykietaTyp35 countryCode="it" />
          <EtykietaTyp35 countryCode="es" />
          <EtykietaTyp35 countryCode="be" />
          <EtykietaTyp35 countryCode="pt" />
          <EtykietaTyp35 countryCode="nl" label={Typ35Label('Niderlandy', '(Holandia)')} />
          <EtykietaTyp35 countryCode="nl" label={Typ35Label('Niderlandy', '(Holandia)')} />
          <EtykietaTyp35 countryCode="cy" />
          <EtykietaTyp35 countryCode="lu" />
          <EtykietaTyp35 countryCode="hr" />
          <EtykietaTyp35 countryCode="no" />
          <EtykietaTyp35 countryCode="bg" />
          <EtykietaTyp35 countryCode="tr" />
          <EtykietaTyp35 countryCode="sk" />
        </TwoSideContainer>
      </A4TwoSideMasterContainer>

      <A4TwoSideMasterContainer>
        <TwoSideContainer>
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
          <EtykietaTyp20 countryCode='' label={Typ20Label('Temerski Oren', 'Wiedźmin 2')} flag='https://etykiety.s3-eu-west-1.amazonaws.com/wiedzmin_logo.png' />
        </TwoSideContainer>
      </A4TwoSideMasterContainer>

      <OkładkaA4
        mapLabel="Strefa Euro"
        countryList={[
          { countryCode: 'ie', info: ['w UE od 1973', '€ od 1 stycznia 1999'] },
          { countryCode: 'es', info: ['w UE od 1986', '€ od 1 stycznia 1999'] },
          { countryCode: 'fr', info: ['w UE od 1957', '€ od 1 stycznia 1999'] },
          { countryCode: 'be', info: ['w UE od 1957', '€ od 1 stycznia 1999'] },
          {
            countryCode: 'nl',
            label: {
              sortName: 'Niderlandy',
              renderer: Typ35Label('Niderlandy', '(Holandia)')
            }, info: ['w UE od 1957', '€ od 1 stycznia 1999']
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
        countryList={[
          { countryCode: 'ca', info: ['Dolar kanadyjski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('ca')] },
          { countryCode: 'us', info: ['Dolar amerykański', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('us')] },
          { countryCode: 'bs', info: ['Dolar bahamski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('bs')], showPin: true },
          { countryCode: 'au', info: ['Dolar australijski', '1 dolar = 100 centów', CurrencyUtils.currencyRateMsg('au')] },
        ]}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'az', info: ['Manat azerbejdżański', '1 manat = 100 gapików', 'denominacja w 2007 roku', '1 nowy manat = 5000 starych', CurrencyUtils.currencyRateMsg('az')] },
          { countryCode: 'il', info: ['Nowy izraelski szekel', '1 szekel = 100 agor', CurrencyUtils.currencyRateMsg('il')] },
          { countryCode: 'af', info: ['Afgani', '1 afgani = 100 pul', CurrencyUtils.currencyRateMsg('af')] },
        ]}
        includeInView={['pk', 'tr']}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'br', info: ['Real brazylijski', '1 real = 100 centavos', CurrencyUtils.currencyRateMsg('br')] },
        ]}
        includeInView={['br', 'gs', 'pa']}
        minimap="bottom-left"
      />

      <OkładkaA4
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
        countryList={[
          { countryCode: 'bt', info: ['Ngultrum', '1 ngultrum = 100 czetrum', CurrencyUtils.currencyRateMsg('bt', 0.055)] },
          {
            countryCode: 'mm',
            label: {
              sortName: 'Mjanma',
              renderer: Typ35Label('Mjanma', '(Birma)'),
            },
            info: ['Kiat', '1 kiat = 100 pia', CurrencyUtils.currencyRateMsg('mm')]
          },
          { countryCode: 'lk', info: ['Rupia lankijska', '1 rupia = 100 centów', CurrencyUtils.currencyRateMsg('lk')] },
          { countryCode: 'mn', info: ['Tugrik', '1 tugrik = 100 möngö', CurrencyUtils.currencyRateMsg('mn')] },
          { countryCode: 'th', info: ['Bat', '1 bat = 100 satangów', CurrencyUtils.currencyRateMsg('th')] },
          { countryCode: 'la', info: ['Kip', '1 kip = 100 at', CurrencyUtils.currencyRateMsg('la')] },

        ]}
        includeInView={['jp', 'pg']}
        minimap="top-right"
      />

    </div>
  );
}

export default App;
