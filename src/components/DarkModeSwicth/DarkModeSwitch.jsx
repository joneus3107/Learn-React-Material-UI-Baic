import {useContext} from 'react';
import { ThemeContext } from '../../contexts/AppContext';
import { ModeSwitch } from '../../custom-modules'

function DarkModeSwitch() {
	const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);



	return (
		<ModeSwitch onChange={() => setIsDarkTheme(prev => !prev)} checked={isDarkTheme}/>
	)
}

export default DarkModeSwitch
