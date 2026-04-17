import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}

  @Post()
  create() {
    // return 'Create a new song';
    return this.SongsService.create('Animals by Martin Garrix');
  }
  @Get()
  findAll() {
    // return 'Find All songs';
    return this.SongsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'Find one song based on ID';
  }

  @Put(':id')
  update() {
    return 'Update song beased on ID';
  }

  @Delete(':id')
  delete() {
    return 'Delete song based on ID';
  }
}
