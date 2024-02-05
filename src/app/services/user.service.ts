export class UserService {
    users = [
        { name: 'Test1', status: 'Active' },
        { name: 'Test2', status: 'Active' },
        { name: 'Test3', status: 'Active' }
    ];

    addUser(name: string, status: string) {
        this.users.push({ name, status });
    }

    updateStatus(id: number, status: string) {
        this.users[id].status = status;
    }
}