const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "John";
            const engineer = new Engineer(name);
            const result = engineer.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 2;
            const engineer = new Engineer(this.id);
            const result = engineer.getId(this.id);
            expect(result).toEqual(this.id);
        });
    });

    describe("getEmail", () => {
        it("should return an email", () => {
            const email = "john@mail.com";
            const engineer = new Engineer(this.email);
            const result = engineer.getEmail(this.email);
            expect(result).toEqual(this.email);
        });
    });

    describe("getGithub", () => {
        it("should return a github", () => {
            const github = "github.com/john";
            const engineer = new Engineer(this.github);
            const result = engineer.getGithub(this.github);
            expect(result).toEqual(this.github);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Engineer";
            const engineer = new Engineer(role);
            const result = engineer.getRole(role);
            expect(result).toEqual(role);
        });
    });

});