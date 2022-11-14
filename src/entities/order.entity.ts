import {m} from '../metadata';

export enum BuildType {
	FLAT = 'FLAT',
	HOUSE = 'HOUSE',
}

export class Order {
	@m({type: Number})
		id!: number;

	@m({type: Number})
		price!: number;

	@m({type: Number})
		area!: number;

	@m({type: String, enum: Object.values(BuildType)})
		buildType!: BuildType;

	@m({type: Number})
		userId!: number;

	@m({type: String})
		fullName!: string;

	@m({type: Date})
		createdAt!: Date;
}
