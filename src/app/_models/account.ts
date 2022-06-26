import { Role } from './role';

export class Account {
    id: string;
    userName: string;
    fullname: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    role: Role;
    jwtToken?: string;
}