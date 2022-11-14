import React from 'react';

import {Order} from '../../entities';
import {Form} from '../../form';
import {propertiesKey} from '../../metadata';

export type OrderEditProps = {
	children?: JSX.Element;
};

export function OrderEdit({children}: OrderEditProps): JSX.Element {
	const renderMap = (Reflect.getMetadata(propertiesKey, Order.prototype) as string[] || []).reduce((acc, curr) => {
		acc.set(curr as keyof Order, {label: curr + '1'});

		return acc;
	}, new Map<keyof Order, {label?: string}>());
	return <Form renderMap={renderMap} validate={() => undefined} onSubmit={v => {
		console.log(v);
	}}/>;
}
