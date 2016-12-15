import * as Faker from "faker";
const app = express();

class Mock {

    multiple (count: Number, method) {
        let res = [];

        for(var i = 0; i < count; i++) {
            res.push(method());
        }
        return res;
    }

    user (type?: string): IUser {
        
        let firstName = Faker.name.firstName();
        let lastName = Faker.name.lastName();
        let domain = Faker.internet.domainName();
        let roles = ['user'];

        if(type) roles.push(type);

        return {
            username: Faker.internet.userName(),
            firstName: firstName,
            lastName: lastName,
            email: `${firstName}.${lastName}@${domain}`.toLowerCase(),
            password: Faker.random.uuid(),
            roles: roles,
            loginAttempts: 0,
            lockUntil: null
        }
    };
    
    users (count: Number): IUser[] {
        return this.multiple(count, this.user);
    };
}

export const mock = new Mock();
