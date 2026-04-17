import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post ()
  create() {
    return 'Create a new song';
  }
  @Get()
  findAll() {
    return 'Find All songs';
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
