import Chance from "chance";

const chance = new Chance();

export const fakeUserData = () => {

    const userData = {
        name: chance.name({ middle: true }),
        email: chance.email(),
    };

    console.log(userData);
    return userData; // You can return the generated user data if needed
};
