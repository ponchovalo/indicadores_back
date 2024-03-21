import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Unit } from "../interfaces/location.interface";

@Schema()
export class Location {

    @Prop({ require: true})
    known_location: string;

    @Prop({ require: true})
    area_id: string;

    @Prop({ require: true})
    area_name: string;

    @Prop({ require: true})
    units: Unit[];
}

export const LocationSchema = SchemaFactory.createForClass(Location);
