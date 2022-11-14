/* eslint-disable @typescript-eslint/naming-convention */
import {createTheme} from '@mui/material';

export const theme = createTheme({
	components: {
		MuiFormControl: {
			defaultProps: {
				size: 'small',
			},
		},
	},
});
