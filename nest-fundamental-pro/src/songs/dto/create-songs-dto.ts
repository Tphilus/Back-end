import { IsArray, IsNotEmpty, IsString } from 'class-validator';
export class CreateSongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string | undefined;
  @IsNotEmpty()
  @IsArray()
  readonly artists: string[] | undefined;

  readonly releaseDate: Date | undefined;

  readonly duration: Date | undefined;
}
