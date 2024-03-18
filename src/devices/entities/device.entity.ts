import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Device {

    @Prop({unique:true, required: true})
    device_name: string;

    @Prop({unique:true, required: true})
    device_description: string;

    @Prop({required: true})
    party_name: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
