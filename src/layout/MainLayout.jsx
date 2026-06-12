// import React from 'react'
// Context
// import { ThemeContext } from '../contexts/AppContext';
// Components
import Header from './Header/Header';
// Routes
import { Outlet } from "react-router";
//MUI
import { Container, Box } from '@mui/material';

function MainLayout({theme}) {

	return (
		<>
			<Header sx={{ backgroundColor: theme.palette.header.backgroundColor, boxShadow: theme.palette.header.shadow, color: theme.palette.primary.main }}/>
			<Box component="main" sx={{ paddingBlock: '50px'}}>
				<Container>
					<Outlet/>
				</Container>
			</Box>
		</>
	)
}

export default MainLayout
