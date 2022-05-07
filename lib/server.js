const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Visual-thinking Partnership Api welcome!" });
});

app.get("/v1/students", (request, response) => {
    const students =StudentController.getAllStudents();
    response.json(students);
});

app.get("/v1/students/certificated", (request, response) => {
    const studentsCertificated = StudentController.getStudentsWithCertification();
    response.json(studentsCertificated);
});

app.get("/v1/students/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const students = StudentController.getStudentsWithGreaterCredits(credits);
    response.json({credits: request.params.credits, students: students});
});

app.listen(port);

module.exports = app;
