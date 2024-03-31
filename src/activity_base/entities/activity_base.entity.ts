import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ActivityBase {

    @Prop({required: true})
    activity: string;

    @Prop({required: true})
    activity_type: string;

    @Prop({required: true})
    ticket_description: string;

    @Prop({required: true})
    admin_activity: string;

    @Prop({required: true})
    fault_type: string;

    @Prop({required: true})
    fault_category: string;

    @Prop({required: true})
    problem_description: string[];

    @Prop({required: true})
    failure_reason: string;

    @Prop({required: true})
    device_name: string;

    @Prop({required: true})
    solution_type: string;

    @Prop({default: "N/A"})
    tools: string;

    @Prop({default: "N/A"})
    supplies: string;

    @Prop({required: true})
    party_name: string;

    @Prop({required: true})
    party_decription: string;

    @Prop({default: "N/A"})
    observations: string;

}

export const ActivityBaseSchema = SchemaFactory.createForClass( ActivityBase );