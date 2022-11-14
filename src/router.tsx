import React from 'react';
import type {NonIndexRouteObject} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';

import {OrderEdit, OrderList, Root} from './pages';

export type Router = {
	name: string;
	path: Required<NonIndexRouteObject>['path'];
	children?: Router[];
} & NonIndexRouteObject;

const children: Router[] = [
	{
		name: 'Заказы',
		path: '/orders',
		element: <OrderList />,
	},
	{
		name: 'Изменить заказ',
		path: '/orders/:orderId',
		element: <OrderEdit />,
	},
	{
		name: 'Пользователи',
		path: '/users',
		element: <div>Users</div>,
	},
];

export const browserRouter = createBrowserRouter([{
	path: '/',
	element: <Root routes={children} />,
	children,
}]);
