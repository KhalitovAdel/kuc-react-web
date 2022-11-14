/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/ban-types */
import {Paper, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow as MuiTableRow} from '@mui/material';
import React from 'react';

export type TableRow<T> = {
	label?: string;
	render?: (v: T, emptyValue: string) => JSX.Element;
};

export type TableProps<T extends object> = {
	data: T[];
	renderMap: Map<keyof T, TableRow<T>>;
};
const emptyValue = ' - ';

export function Table<T extends object>({data, renderMap}: TableProps<T>) {
	const mapEntry = Array.from(renderMap.entries());

	return (
		<TableContainer component={Paper}>
			<MuiTable>
				<TableHead>
					<MuiTableRow>
						{mapEntry.map(([key, v], i) => <TableCell key={String(key)} align={i === 0 ? 'left' : 'right'}>{v.label || String(key)}</TableCell>)}
					</MuiTableRow>
				</TableHead>
				<TableBody>
					{data.map(d => (
						<MuiTableRow key={JSON.stringify(d || {})} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
							{mapEntry.map(([key, v], i) => {
								const align = i === 0 ? 'left' : 'right';
								const value: unknown = Reflect.has(d, key) ? Reflect.get(d, key) : undefined;
								const renderValue = v.render && value ? v.render(d, emptyValue) : undefined;

								return <TableCell key={String(key)} align={align}>{renderValue || String(value || emptyValue)}</TableCell>;
							})}
						</MuiTableRow>
					))}
				</TableBody>
			</MuiTable>
		</TableContainer>
	);
}
