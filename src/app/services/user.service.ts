import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class UserService {

    users = [
        { name: 'Test1', status: 'Active' },
        { name: 'Test2', status: 'Active' },
        { name: 'Test3', status: 'Active' }
    ];

    constructor(private logService: LogService) { }

    addUser(name: string, status: string) {
        this.users.push({ name, status });
        this.logService.logStatus(status);
    }

    updateStatus(id: number, status: string) {
        this.users[id].status = status;
        this.logService.logStatus(status);
    }
}