import * as Faker from "faker";

module.exports = {
    status: 200,
    data: {
        "username": Faker.internet.userName(),
        "firstName": Faker.name.firstName(),
        "lastName": Faker.name.lastName(),
        "token": Faker.random.uuid(),
    }
}