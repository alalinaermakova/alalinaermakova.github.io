import darkMoon from '../images/dark-moon.svg';
import lightMoon from '../images/light-moon.svg';


function ThemeSelector({ setThemeName, dark, light, themeName }) {

  const toggleTheme = () => {
   themeName === dark ? setThemeName(light) : setThemeName(dark)
  }

    return <div>
      <button className="btn--toggle" onClick={toggleTheme}><img className="btn__img" alt="theme icon" src={themeName === dark ? lightMoon : darkMoon} /></button>
    </div>
}

export default ThemeSelector;