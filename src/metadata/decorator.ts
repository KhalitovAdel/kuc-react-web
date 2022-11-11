import { propertyMetadata, propertiesKey } from "./constants";

export interface MetadataOptions {
    type: Function;
    isPartial?: boolean;
    isNullable?: boolean;
    enum?: unknown[];
}

export function M(o: MetadataOptions): PropertyDecorator {
    return (target, key) => {
        Reflect.defineMetadata(propertyMetadata, o, target, key);
        const keys = Reflect.getMetadata(propertiesKey, target) || [];
        Reflect.defineMetadata(propertiesKey, [...keys, key], target);
    }
}