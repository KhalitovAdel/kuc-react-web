import { M } from "../metadata";

export enum BuildType {
    FLAT = 'FLAT', 
    HOUSE = 'HOUSE',
}

export class Order {
    @M({type: Number})
    id!: number;

    @M({type: Number})
    price!: number;

    @M({type: Number})
    area!: number;

    @M({type: String, enum: Object.values(BuildType)})
    buildType!: BuildType;

    @M({type: Number})
    userId!: number;

    @M({type: String})
    fullName!: string;

    @M({type: Date})
    createdAt!: Date;
}