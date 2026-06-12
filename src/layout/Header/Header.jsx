
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo.png';
import SearchInput from '../../components/SearchInput/SearchInput';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { ThemeContext } from '../../contexts/AppContext';
import DarkModeSwitch from '../../components/DarkModeSwicth/DarkModeSwitch';




export default function Header({sx}) {
	const { loading, isLogIn, logInHandler, logInOnly } = useContext(ThemeContext);

  return (
		<AppBar position="sticky" sx={sx}>
			<Container>
				<Toolbar disableGutters>
					<Box
						sx={{
						flexGrow: 1,
						display: 'flex',
						alignItems: 'center'
						}}>
						<Typography component="h1" sx={{ display: 'flex'}}>
							<img src={Logo} alt="Coder School" width="150" />
						</Typography>
						{logInOnly && <SearchInput sx={{display: { xs: 'none', md: 'block' }}}/>}
					</Box>
					<Stack direction="row" spacing={2}>
						<Button variant="contained" color="error" onClick={logInHandler} loading={loading}>
							{isLogIn ? 'Đăng xuất' : 'Đăng nhập'}
						</Button>
						<DarkModeSwitch/>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
  );
}