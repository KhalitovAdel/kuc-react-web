import React from 'react';

import type {ListProps} from '../../components';
import {List} from '../../components';
import type {Order} from '../../entities';
import {BuildType} from '../../entities';

export function OrderList(): JSX.Element {
	const renderMap: ListProps<Order>['renderMap'] = new Map();

	renderMap.set('buildType', {
		valueTranslate: new Map([
			[BuildType.FLAT, 'Квартира'],
			[BuildType.HOUSE, 'Дом'],
		]),
		label: 'Тип недвижимости',
	});
	renderMap.set('area', {label: 'Площадь'});
	renderMap.set('price', {label: 'Стоимость'});
	renderMap.set('userId', {label: 'Идентификатор пользователя'});
	renderMap.set('fullName', {label: 'Имя заказчика'});
	renderMap.set('createdAt', {label: 'Дата создания', render: v => <>{v.createdAt.toLocaleString('ru-RU')}</>});

	return <List renderMap={renderMap} executor={async () => ({count: 1, data: [{
		id: 1,
		price: 10000,
		area: 100,
		buildType: BuildType.FLAT,
		userId: 100,
		fullName: 'Lalka 111 KKK',
		createdAt: new Date(),
	}]})} />;
}
