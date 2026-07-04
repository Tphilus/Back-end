import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'First',
      content: 'First Post content',
      authorName: 'Tphilus',
      createdAt: new Date(),
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    const singlePost = this.posts.find((post) => post.id === id);

    if (!singlePost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return singlePost;
  }

  create(createPostData: CreatePostDto): Post {
    const newPost: Post = {
      id: this.getNextId(),
      ...createPostData,
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePostData: UpdatePostDto): Post {
    const currentPostIndexToEdit = this.posts.findIndex(
      (post) => post.id === id,
    );

    if (currentPostIndexToEdit === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    this.posts[currentPostIndexToEdit] = {
      ...this.posts[currentPostIndexToEdit],
      ...updatePostData,
      UpdatedAt: new Date(),
    };

    return this.posts[currentPostIndexToEdit];
  }

  delete(id: number): { message: string } {
    const currentPostIndex = this.posts.findIndex((post) => post.id === id);

    if (currentPostIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    this.posts.splice(currentPostIndex, 1);
    return { message: `Post with ID ${id} has been deleted` };
  }

  private getNextId(): number {
    return this.posts.length > 0
      ? Math.max(...this.posts.map((post) => post.id)) + 1
      : 1;
  }
}
