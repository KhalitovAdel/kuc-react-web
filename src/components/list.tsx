/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/ban-types */
import React, {useEffect, useState} from 'react';

import type {PaginationData} from './pagination';
import {Pagination} from './pagination';
import type {TableRow} from './table';
import {Table} from './table';

export type ListResult<T extends object> = {
	count: number;
	data: T[];
};

export type ListTableMeta = {
	valueTranslate?: Map<unknown, string>;
};

export type ListProps<T extends object> = {
	executor: (pagination: PaginationData) => Promise<ListResult<T>>;
	renderMap: Map<keyof T, TableRow<T> & ListTableMeta>;
};

export function List<T extends object>({renderMap, executor}: ListProps<T>): JSX.Element {
	const [pagination, setPagination] = useState<PaginationData>({limit: 20, skip: 0});
	const [count, setCount] = useState(0);
	const [data, setData] = useState<T[]>([]);

	useEffect(() => {
		renderMap.forEach((v, key, map) => {
			const {valueTranslate} = v;

			if (valueTranslate && !v.render) {
				map.set(key, {...v, render: (e, d) => <>{
					Reflect.get(e, key)
						? valueTranslate.get(Reflect.get(e, key)) || Reflect.get(e, key)
						: d
				}</>});
			}
		});
	}, [renderMap]);

	useEffect(() => {
		executor(pagination).then(r => {
			if (count !== r.count) {
				setCount(r.count);
			}

			setData(r.data);
		}, e => {
			console.error(e);
		});
	}, [pagination]);

	return <>
		<Table renderMap={renderMap} data={data} />
		<Pagination count={count} onChange={setPagination} initialLimit={pagination.limit} />
	</>;
}
