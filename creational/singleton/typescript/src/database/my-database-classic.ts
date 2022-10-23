import { User } from "../interfaces/user.interface";

export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    static getInstance(): MyDatabaseClassic {
        if (this.instance === null) {
            this.instance = new MyDatabaseClassic();
        }

        return this.instance;
    }

    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}