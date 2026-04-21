import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alex Mercer',
      email: 'alex.mercer@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Sarah Connor',
      email: 's.connor@example.com',
      role: 'ENGINER',
    },
    {
      id: 3,
      name: 'James Holden',
      email: 'j.holden@example.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Ellen Ripley',
      email: 'eripley@example.com',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINER' | 'ADMIN') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0)
        throw new NotFoundException('User Role Not Found');
      return roleArray; 
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role?: 'INTERN' | 'ENGINER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
