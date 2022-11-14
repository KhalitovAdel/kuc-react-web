import {TablePagination} from '@mui/material';
import React, {useCallback, useEffect, useState} from 'react';

type PaginationLimit = 20 | 50 | 100;

export type PaginationData = {
	skip: number;
	limit: PaginationLimit;
};

export type PaginationProps = {
	count: number;
	initialLimit: PaginationLimit;
	onChange: (p: PaginationData) => unknown;
};

export function Pagination({count, onChange, initialLimit}: PaginationProps): JSX.Element {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(initialLimit);

	useEffect(() => {
		onChange({skip: page * rowsPerPage, limit: rowsPerPage});
	}, [page, rowsPerPage]);

	useEffect(() => {
		setPage(0);
	}, [count, rowsPerPage]);

	const handleChangePage = useCallback((_: unknown, page: number) => {
		setPage(page);
	}, []);

	const handleChangeRowsPerPage = useCallback<React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>>(e => {
		setRowsPerPage(Number(e.target.value) as PaginationLimit || initialLimit);
	}, [initialLimit]);

	return <TablePagination
		component='div'
		count={count}
		page={page}
		onPageChange={handleChangePage}
		rowsPerPage={rowsPerPage}
		rowsPerPageOptions={[20, 50, 100]}
		onRowsPerPageChange={handleChangeRowsPerPage}
	/>;
}
