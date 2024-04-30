import { Activity } from "../entities/activity.entity";

export class ResponseActivityDto {
    activities: Activity[];
    msg: string;
    errors: string;
}