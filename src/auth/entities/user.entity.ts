import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    _id?: string;

    @Prop({unique:true, required: true})
    username: string;

    @Prop({required:true})
    password?: string;

    @Prop({required:true})
    email: string;

    @Prop({required:true})
    name: string;

    @Prop({required:true})
    department: string;

    @Prop({required:true})
    position: string;

    @Prop({type: String, default:'GUARDIA TA'})
    workshift: string;

    @Prop({type: String, default:'08:00 - 20:00'})
    working_hours: string;

    @Prop({default:true})
    isActive: boolean;

    @Prop({type: [String], default:['user']})
    roles: string[];

}

export const UserSchema = SchemaFactory.createForClass( User );