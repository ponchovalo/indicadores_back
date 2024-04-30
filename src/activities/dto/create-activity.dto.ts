import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateActivityDto {

    @IsDateString()
    date: Date;

    @IsString()
    activity: string;

    @IsString()
    ticket_id: string;

    @IsString()
    client: string;

    @IsDateString()
    initial_date_time: Date;

    @IsDateString()
    final_date_time: Date;

    @IsString()
    time_out_food: string;

    @IsString()
    time_out_transfer: string;

    @IsString()
    time_out_access: string;

    @IsString()
    time_out_code: string;

    @IsString()
    time_out_store: string;

    @IsString()
    time_out_total: string;

    @IsString()
    total_efective_activity: string;

    @IsString()
    total_real_activity: string;

    @IsString()
    activity_type: string;

    @IsString()
    ticket_description: string;

    @IsString()
    admin_activity: string;

    @IsString()
    fault_type: string;

    @IsString()
    fault_category: string;

    @IsString()
    problem_description: string;

    @IsString()
    failure_reason: string;

    @IsString()
    device_name: string;

    @IsString()
    solution_type: string;

    @IsString()
    tools: string;

    @IsString()
    supplies: string;

    @IsString()
    party_name: string;

    @IsString()
    party_description: string;

    @IsString()
    area_id: string;

    @IsString()
    area_name: string;

    @IsString()
    unit_id: string;

    @IsString()
    unit_name: string;

    @IsString()
    user_name: string;

    @IsString()
    user_position: string;

    @IsString()
    user_workshift: string;

    @IsString()
    user_working_hours: string;

    @IsString()
    observation: string;


}
