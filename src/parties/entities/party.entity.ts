import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Party {

    @Prop({unique:true, required: true})
    name: string;
    @Prop({unique:true, required: true})
    description: string

}

export const PartySchema = SchemaFactory.createForClass( Party );