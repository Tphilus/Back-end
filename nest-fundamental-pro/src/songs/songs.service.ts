import { Injectable } from '@nestjs/common';

export interface Cat {
  name: string;
}

@Injectable()
export class SongsService {
  private readonly songs: Cat[] = [];

  create(song: any) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }
}
