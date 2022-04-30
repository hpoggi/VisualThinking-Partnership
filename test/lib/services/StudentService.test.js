const Reader = require("./../../../lib/utils/Reader");
const StudentService = require("./../../../lib/services/StudentService");

describe("Unit test for StudentService class", () => {

    test("Test static method getStudentsWithCertification", () => {
        const students = Reader.readJsonFile("./test/data/test.json");
        const studentsWithCertification = StudentService.getStudentsWithCertification(students);
        expect(studentsWithCertification.every(student => student.haveCertification === true)).toBe(true);
        expect(studentsWithCertification.length).toBe(29);
    });

    test("Test static method getStudentsWithGreaterCredits", () => {
        const students = Reader.readJsonFile("./test/data/test.json");
        const credits = 500;
        const studentsWithGreaterCredits = StudentService.getStudentsWithGreaterCredits(students, credits);
        expect(studentsWithGreaterCredits.every(student => student.credits > credits)).toBe(true);
        expect(studentsWithGreaterCredits.length).toBe(27);
    });

});
