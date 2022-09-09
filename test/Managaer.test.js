const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "Tom";
            const manager = new Manager(name);
            const result = manager.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 4;
            const manager = new Manager(this.id);
            const result = manager.getId(this.id);
            expect(result).toEqual(this.id);
        });
    });

    describe("getEmail", () => {
        it("should return an email", () => {
            const email = "tom@mail.com";
            const manger = new Manager(this.email);
            const result = manger.getEmail(this.email);
            expect(result).toEqual(this.email);
        });
    });

    describe("getOfficeNumber", () => {
        it("should return office number", () => {
            const officeNumber = "111-111-1111";
            const manager = new Manager(this.officeNumber);
            const result = manager.getOfficeNumber(this.officeNumber);
            expect(result).toEqual(this.officeNumber);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Manager";
            const manager = new Manager(role);
            const result = manager.getRole(role);
            expect(result).toEqual(role);
        });
    });

});