class StudentService {

    static getStudentsWithCertification(students){
        return students.filter((student) => student.haveCertification );
    }

    static getStudentsWithGreaterCredits(students, credits = 500 ){
        return students.filter((student) => student.credits > credits );
    }

}

module.exports = StudentService;
