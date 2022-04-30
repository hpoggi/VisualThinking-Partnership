const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");

class StudentController {

    static getAllStudents(){
        const students = Reader.readJsonFile("students.json");
        return students;
    }

    static getStudentsWithCertification(){
        const students = Reader.readJsonFile("students.json");
        return StudentService.getStudentsWithCertification(students);
    }

    static getStudentsWithGreaterCredits(){
        const students = Reader.readJsonFile("students.json");
        const credits = 500;
        return StudentService.getStudentsWithGreaterCredits(students, credits);
    }

}

module.exports = StudentController;
