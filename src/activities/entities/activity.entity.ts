import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Activity {

    id: string;

    @Prop({required: true})
    date: Date;

    @Prop({required: true})
    activity: string;

    @Prop({required: true})
    ticket_id: string;

    @Prop({required: true})
    client: string;

    @Prop({required: true})
    initial_date_time: Date;

    @Prop({required: true})
    final_date_time: Date;

    @Prop({required: true})
    time_out_food: string;

    @Prop({required: true})
    time_out_transfer: string;

    @Prop({required: true})
    time_out_access: string;

    @Prop({required: true})
    time_out_code: string;

    @Prop({required: true})
    time_out_store: string;

    @Prop({required: true})
    time_out_total: string;

    @Prop({required: true})
    total_efective_activity: string;

    @Prop({required: true})
    total_real_activity: string;

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
    problem_description: string;

    @Prop({required: true})
    failure_reason: string;

    @Prop({required: true})
    device_name: string;

    @Prop({required: true})
    solution_type: string;

    @Prop({required: true})
    tools: string;

    @Prop({required: true})
    supplies: string;

    @Prop({required: true})
    party_name: string;

    @Prop({required: true})
    party_description: string;

    @Prop({required: true})
    area_id: string;

    @Prop({required: true})
    area_name: string;

    @Prop({required: true})
    unit_id: string;

    @Prop({required: true})
    unit_name: string;

    @Prop({required: true})
    user_name: string;

    @Prop({required: true})
    user_position: string;

    @Prop({required: true})
    user_workshift: string;

    @Prop({required: true})
    user_working_hours: string;

    @Prop({required: true})
    observation: string;

}

export const ActivitySchema = SchemaFactory.createForClass( Activity );
