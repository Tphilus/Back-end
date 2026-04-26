import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class CreatePostDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  @MaxLength(50, { message: 'Title can not be longer than 50 characters' })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  @IsString({ message: 'Content must be a string' })
  @MinLength(3, { message: 'Content must be at least 3 characters long' })
  content: string;

  @IsNotEmpty({ message: 'Author is required' })
  @IsString({ message: 'Author must be a string' })
  @MinLength(3, { message: 'Author must be at least 3 characters long' })
  @MaxLength(25, { message: 'Author can not be longer than 25 characters' })
  authorName: string;
}
