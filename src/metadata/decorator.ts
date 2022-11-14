import {propertyMetadata, propertiesKey} from './constants';

export type MetadataOptions = {
	// eslint-disable-next-line @typescript-eslint/ban-types
	type: Function;
	isPartial?: boolean;
	isNullable?: boolean;
	enum?: unknown[];
};

export function m(o: MetadataOptions): PropertyDecorator {
	return (target, key) => {
		Reflect.defineMetadata(propertyMetadata, o, target, key);
		const keys = Reflect.getMetadata(propertiesKey, target) as string[] || [];
		Reflect.defineMetadata(propertiesKey, [...keys, key], target);
	};
}
