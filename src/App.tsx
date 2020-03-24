import React from 'react';
import './App.css';
import { OkładkaA4 } from './components/OkładkaA4';

function App() {
  return (
    <div className="App">

      <OkładkaA4
        countryList={[
          { countryCode: 'se', info: ['Korona szwedzka', '1 korona = 100 öre'] },
          { countryCode: 'cz', info: ['Korona czeska', '1 korona = 100 halerzy'] },
          { countryCode: 'sk', info: ['Korona słowacka', '1 korona = 100 halerzy', 'Euro od 1 stycznia 2009'] },
          { countryCode: 'hr', info: ['Kuna', '1 kuna = 100 lip'] },
          { countryCode: 'bg', info: ['Lew', '1 lew = 100 stotinek'] },
        ]}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'ca', info: ['Dolar kanadyjski', '1 dolar = 100 centów'] },
          { countryCode: 'us', info: ['Dolar amerykański', '1 dolar = 100 centów'] },
          { countryCode: 'bs', info: ['Dolar bahamski', '1 dolar = 100 centów'], showPin: true },
          { countryCode: 'au', info: ['Dolar australijski', '1 dolar = 100 centów'] },
        ]}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'tr', info: ['Lira turecka', '1 lira = 100 kuruszy'] },
          { countryCode: 'il', info: ['Nowy izraelski szekel', '1 szekel = 100 agor'] },
        ]}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'br', info: ['Real brazylijski', '1 real = 100 centavos'] },
        ]}
        includeInView={['br', 'gs', 'pa']}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'mu', info: ['Rupia maurytyjska', '1 rumia = 100 centów'] },
        ]}
        includeInView={['mg', 'mz']}
        minimap="bottom-left"
      />

      <OkładkaA4
        countryList={[
          { countryCode: 'bt', info: ['Ngultrum', '1 ngultrum = 100 czetrum'] },
          { countryCode: 'mm', label: 'Mjanma/Birma', info: ['Kiat', '1 kiat = 100 pia'] },
          { countryCode: 'lk', info: ['Rupia lankijska', '1 rupia = 100 centów'] },
          { countryCode: 'kh', info: ['Riel kambodżański', '1 riel = 100 senów'] },
          { countryCode: 'af', info: ['Afgani', '1 afgani = 100 pul'] },
          { countryCode: 'mn', info: ['Tugrik', '1 tugrik = 100 möngö'] },
        ]}
        minimap="top-left"
      />

    </div>
  );
}

export default App;
