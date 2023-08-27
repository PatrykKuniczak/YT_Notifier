import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    displayName: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    avatar: string;

    @Column()
    refreshToken: string;
}
