import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Party {

    @Prop({unique:true, required: true})
    party_name: string;
    @Prop({unique:true, required: true})
    party_description: string

}

export const PartySchema = SchemaFactory.createForClass( Party );