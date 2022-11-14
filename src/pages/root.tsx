import {Container} from '@mui/material';
import React from 'react';
import {Outlet} from 'react-router-dom';

import {Menu} from '../components';

export function Root(p: Parameters<typeof Menu>[0]) {
	return <>
		<Menu routes={p.routes}/>
		<Container sx={{paddingTop: 2, paddingBottom: 2}}>
			<Outlet />
		</Container>
	</>;
}
