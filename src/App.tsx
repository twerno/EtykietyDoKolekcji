import React, { useState } from 'react';
import './App.css';
import { OkładkaA4 } from './components/OkładkaA4';
import CurrencyService from './service/CurrencyService';
import CountryConverterService from './service/CountryConverterService';
import { A4Page } from './components/containers/A4Page';
import { Typ35Container } from './components/containers/Typ35Container';
import { FlagLabel } from './components/FlagLabel';
import { FlagIconCssProvider } from './chart/FlagProvider';
import { Typ20Container } from './components/containers/Typ20Container';
import { FlexContainer } from './components/containers/FlexContainer';
import { EtykietaTyp35 } from './components/etykiety/EtykietaTyp35';
import { EtykietaTyp20 } from './components/etykiety/EtykietaTyp20';

const currencyRate = async (countryCode: string, staticRate?: number) => {
  const currencyCode = CountryConverterService.countryCode2CurrencyCode(countryCode);
  if (currencyCode === undefined) { return '' }
  const rate = await CurrencyService.currencyCode2Rate(currencyCode) || staticRate;
  if (rate === undefined) { return '' }
  return `1 ${currencyCode.toLocaleUpperCase()} = ${rate.toPrecision(3)} PLN`;
}

const currencyName = async (countryCode: string) => {
  const currencyCode = CountryConverterService.countryCode2CurrencyCode(countryCode);
  if (currencyCode === undefined) { return '' }
  return await CurrencyService.code2CurrencyNamePl(currencyCode) || '';
}

function App() {
  const [side, setSide] = useState<boolean>(true);

  return (
    <div className="App">

      <A4Page>
        <FlexContainer center flexWrap="wrap" flexDirection="row" height="100%" side={side ? 'front' : 'back'}
          onClick={_ => setSide(v => !v)}>
          <EtykietaTyp35 countryCode="us" />
          <EtykietaTyp35 countryCode="bs" />
          <EtykietaTyp20 countryCode="il" />
          <EtykietaTyp20 countryCode="il" />
          <EtykietaTyp20 countryCode="mu" />
          <EtykietaTyp20 countryCode="lk" />
          <EtykietaTyp20 countryCode="th" />
          <EtykietaTyp35 countryCode="at" />
          <EtykietaTyp35 countryCode="fr" />
          <EtykietaTyp35 countryCode="sk" />
          <EtykietaTyp35 countryCode="de" />
          <EtykietaTyp35 countryCode="gr" />
          <EtykietaTyp35 countryCode="it" />
          <EtykietaTyp35 countryCode="es" />
          <EtykietaTyp35 countryCode="be" />
          <EtykietaTyp35 countryCode="pt" />
          <EtykietaTyp35 countryCode="nl" />
          <EtykietaTyp35 countryCode="nl" />
          <EtykietaTyp35 countryCode="cy" />
          <EtykietaTyp35 countryCode="lu" />
          <EtykietaTyp20 countryCode="fr" />
          <EtykietaTyp20 countryCode="de" />
          <EtykietaTyp35 countryCode="hr" />
          <EtykietaTyp35 countryCode="no" />
          <EtykietaTyp35 countryCode="bg" />
          <EtykietaTyp35 countryCode="tr" />
          <EtykietaTyp20 countryCode="tr" />
          <EtykietaTyp35 countryCode="sk" />
          <EtykietaTyp20 countryCode="se" />
          <EtykietaTyp20 countryCode="cz" />
        </FlexContainer>
      </A4Page>

      <OkładkaA4
        countryList={[
          { countryCode: 'hr', info: ['Kuna', '1 kuna = 100 lip', currencyRate('hr')] },
          { countryCode: 'cz', info: ['Korona czeska', '1 korona = 100 halerzy', currencyRate('cz')] },
          { countryCode: 'no', info: ['Korona norweska', '1 korona = 100 öre', currencyRate('no')] },
          { countryCode: 'se', info: ['Korona szwedzka', '1 korona = 100 öre', currencyRate('se')] },
          { countryCode: 'sk', info: ['Korona słowacka', '1 korona = 100 halerzy', 'Euro od 1 stycznia 2009'] },
          { countryCode: 'bg', info: ['Lew', '1 lew = 100 stotinek', currencyRate('bg')] },
          { countryCode: 'tr', info: ['Lira turecka', '1 lira = 100 kuruszy', currencyRate('tr')] },
        ]}
        includeInView={["is"]}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'ca', info: ['Dolar kanadyjski', '1 dolar = 100 centów', currencyRate('ca')] },
          { countryCode: 'us', info: ['Dolar amerykański', '1 dolar = 100 centów', currencyRate('us')] },
          { countryCode: 'bs', info: ['Dolar bahamski', '1 dolar = 100 centów', currencyRate('bs')], showPin: true },
          { countryCode: 'au', info: ['Dolar australijski', '1 dolar = 100 centów', currencyRate('au')] },
        ]}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'az', info: ['Manat azerbejdżański', '1 manat = 100 gapików', currencyRate('az')] },
          { countryCode: 'il', info: ['Nowy izraelski szekel', '1 szekel = 100 agor', currencyRate('il')] },
          { countryCode: 'af', info: ['Afgani', '1 afgani = 100 pul', currencyRate('af')] },
        ]}
        includeInView={['pk', 'tr']}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'br', info: ['Real brazylijski', '1 real = 100 centavos', currencyRate('br')] },
        ]}
        includeInView={['br', 'gs', 'pa']}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'mu', info: ['Rupia maurytyjska', '1 rumia = 100 centów', currencyRate('mu')], showPin: true },
          { countryCode: 'na', info: ['Dolar namibijski', '1 dolar = 100 centów', currencyRate('na')] },
          { countryCode: 'ao', info: ['Kwanza', '1 kwanza  = 100 centymów', currencyRate('ao')] },
          { countryCode: 'ng', info: ['Naira', '1 naira = 100 kobo', currencyRate('ng')] },
          { countryCode: 'ke', info: ['Szyling kenijski', '1 szyling = 100 centów', currencyRate('ke')] },
        ]}
        includeInView={['za', 'ma']}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'bt', info: ['Ngultrum', '1 ngultrum = 100 czetrum', currencyRate('bt', 0.055)] },
          { countryCode: 'mm', label: 'Mjanma/Birma', info: ['Kiat', '1 kiat = 100 pia', currencyRate('mm')] },
          { countryCode: 'lk', info: ['Rupia lankijska', '1 rupia = 100 centów', currencyRate('lk')] },
          // { countryCode: 'kh', info: ['Riel kambodżański', '1 riel = 100 senów', currencyRate('kh')] },
          { countryCode: 'mn', info: ['Tugrik', '1 tugrik = 100 möngö', currencyRate('mn')] },
          { countryCode: 'th', info: ['Bat', '1 bat = 100 satangów', currencyRate('th')] },
          { countryCode: 'la', info: ['Kip', '1 kip = 100 at', currencyRate('la')] },

        ]}
        includeInView={['jp']}
        minimap="top-left"
      />

    </div>
  );
}

export default App;
