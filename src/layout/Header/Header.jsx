import { useContext } from 'react';
// MUI
import { AppBar, Box, Container, Toolbar, Typography, Button, Stack } from '@mui/material';
// Images
import Logo from '../../assets/logo.png';
// Components
import {SearchInput, DarkModeSwitch} from '../../components';
// React-router
import { Link } from 'react-router';
// Context
import { ThemeContext } from '../../contexts/AppContext';




export default function Header({sx}) {
	const { loading, logInHandler, logInOnly } = useContext(ThemeContext);

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
							<Link to="/">
								<img src={Logo} alt="Coder School" width="150" />
							</Link>
						</Typography>
						{logInOnly && <SearchInput sx={{display: { xs: 'none', md: 'block' }}}/>}
					</Box>
					<Stack direction="row" spacing={2}>
						<Button variant="contained" color="error" onClick={logInHandler} loading={loading}>Đăng nhập</Button>
						<DarkModeSwitch/>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
  );
}