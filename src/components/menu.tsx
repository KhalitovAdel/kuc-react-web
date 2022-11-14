import {Menu as MenuIcon} from '@mui/icons-material';
import {AppBar, Box, Drawer, IconButton, Link, Stack, Toolbar, Typography} from '@mui/material';
import React, {useState} from 'react';

import type {Router} from '../router';

export const Menu = ({routes}: {routes: Router[]}): JSX.Element => {
	const [isOpen, setOpen] = useState(false);
	return <Box>
		<AppBar position='relative'>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='open drawer'
					sx={{mr: 2}}
					onClick={() => {
						setOpen(true);
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant='h6'
					noWrap
					component='div'
					sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
				>
					KUC
				</Typography>
			</Toolbar>
		</AppBar>
		<Drawer anchor='left' open={isOpen} onClose={() => {
			setOpen(false);
		}}>
			<Stack spacing={2} padding={2}>
				{routes.map(el => <Box key={el.name}>
					<Link href={el.path}><Typography align='center'>{el.name}</Typography></Link>
				</Box>)}
			</Stack>
		</Drawer>
	</Box>;
};
