import React from 'react';
import './App.css';
import { Okladka } from './components/Okladka';
import { A4Page } from './components/A4Page';

function App() {
  return (
    <div className="App">
      <A4Page>
        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'se' },
            { countryCode: 'cz' },
            { countryCode: 'hr' },
            { countryCode: 'sk' },
            { countryCode: 'bg' },
          ]}
          minimap="bottom-left"
        />

        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'us' },
            { countryCode: 'ca' },
            { countryCode: 'au' },
          ]}
          minimap="bottom-left"
        />
      </A4Page>

      <A4Page>
        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'bs' },
          ]}
          zoomToCountriesList={['pa', 'cu', 'pr']}
          minimap="bottom-left"
        />

        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'tr' },
            { countryCode: 'il' },
          ]}
          minimap="bottom-left"
        />
      </A4Page>

      <A4Page>
        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'br' },
          ]}
          minimap="bottom-left"
        />

        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'mu' },
          ]}
          zoomToCountriesList={['mu', 'mg', 'mz']}
          minimap="bottom-left"
        />
      </A4Page>

      <A4Page>
        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'bt' },
            { countryCode: 'mm' },
            { countryCode: 'lk' },
            { countryCode: 'kh' },
          ]}
          minimap="top-left"
        />

        <Okladka
          direction="row"
          labelList={[
            { countryCode: 'af' },
            { countryCode: 'mn' },
          ]}
          minimap="bottom-right"
        />
      </A4Page>

    </div>
  );
}

export default App;
