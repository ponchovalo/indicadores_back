import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    _id?: string;

    @Prop({unique:true, required: true})
    username: string;

    @Prop({required:true})
    name: string;

    @Prop({required:true})
    departamento: string;

    @Prop({required:true})
    puesto: string;

    @Prop({required:true})
    password?: string;

    @Prop({default:true})
    isActive: boolean;

    @Prop({type: [String], default:['user']})
    roles: string[];

}

export const UserSchema = SchemaFactory.createForClass( User );