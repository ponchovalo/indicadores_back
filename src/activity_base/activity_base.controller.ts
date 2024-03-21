import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityBaseService } from './activity_base.service';
import { CreateActivityBaseDto } from './dto/create-activity_base.dto';
import { UpdateActivityBaseDto } from './dto/update-activity_base.dto';

@Controller('activity-base')
export class ActivityBaseController {
  constructor(private readonly activityBaseService: ActivityBaseService) {}

  @Post()
  create(@Body() createActivityBaseDto: CreateActivityBaseDto) {
    return this.activityBaseService.create(createActivityBaseDto);
  }

  @Get()
  findAll() {
    return this.activityBaseService.findAll();
  }

  @Get(':device')
  findForDevice(@Param('device') device_name: string) {
    return this.activityBaseService.findForDevice(device_name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityBaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityBaseDto: UpdateActivityBaseDto) {
    return this.activityBaseService.update(+id, updateActivityBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityBaseService.remove(+id);
  }
}
