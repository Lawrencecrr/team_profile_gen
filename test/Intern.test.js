const Intern = require('../lib/Intern');

describe("Intern", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "Judy";
            const intern = new Intern(name);
            const result = intern.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 3;
            const intern = new Intern(this.id);
            const result = intern.getId(this.id);
            expect(result).toEqual(this.id);
        });
    });

    describe("getEmail", () => {
        it("should return an email", () => {
            const email = "judy@mail.com";
            const intern = new Intern(this.email);
            const result = intern.getEmail(this.email);
            expect(result).toEqual(this.email);
        });
    });
    
    describe("getSchool", () => {
        it("should return school", () => {
            const school = "UTA";
            const intern = new Intern(this.school);
            const result = intern.getSchool(this.school);
            expect(result).toEqual(this.school);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Intern";
            const intern = new Intern(role);
            const result = intern.getRole(role);
            expect(result).toEqual(role);
        });
    });

});