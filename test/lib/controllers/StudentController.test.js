const StudentController = require("./../../../lib/controllers/StudentController");

describe("Unit test for StudentController class", () => {

    test("Test static method getAllStudents", () => {
        const students = StudentController.getAllStudents();
        expect(students).toBeDefined();
        expect(students.length).toBe(51);
    });

    test("Test static method getStudentsWithCertification", () => {
        const students = StudentController.getStudentsWithCertification();
        expect(students).toBeDefined();
        expect(students.length).toBe(29);
    });

    test("Test static method getStudentsWithGreaterCredits", () => {
        const students = StudentController.getStudentsWithGreaterCredits();
        expect(students).toBeDefined();
        expect(students.length).toBe(27);
    });

});

