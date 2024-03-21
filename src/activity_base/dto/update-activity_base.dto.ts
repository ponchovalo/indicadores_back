import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityBaseDto } from './create-activity_base.dto';

export class UpdateActivityBaseDto extends PartialType(CreateActivityBaseDto) {}
