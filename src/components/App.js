import React, { useState } from 'react';
import data from '../data/data.json';
import '../style/style.scss';
import ThemeSelector from './ThemeSelector';
import Theme from './Theme';

import Main from './Main';
import CardList from './CardList';
import Resume from './Resume';
import Footer from './Footer';

const themeNames = { dark: 'dark-theme', light: 'light-theme'};
const dark = themeNames.dark;
const light = themeNames.light;


const App = () => {

  const [themeName, setThemeName] = useState(themeNames.light);
  
  return (
    <div>
      <Theme themeName={themeName}>
        <Main themeName={themeName} dark={dark}>
          <ThemeSelector themeName={themeName} setThemeName={setThemeName} dark={dark} light={light} />
        </Main>
        <CardList cards={data} />
        <Resume />
        <Footer themeName={themeName} dark={dark} />
      </Theme>
    </div>
  );
}

export default App;