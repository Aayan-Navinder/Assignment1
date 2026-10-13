import { useState } from "react";

const startingStudents = [
  { id: 101, name: "Aayan", major: "Computer Science", year: 2, gpa: 3.5 },
  { id: 102, name: "Abishai", major: "Medical", year: 2, gpa: 3.2 },
  { id: 103, name: "Prayag", major: "Engineering", year: 2, gpa: 3.4 },
  { id: 104, name: "Ahaan", major: "Commerce", year: 2, gpa: 3.8 },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand" href="#">StudentPortal</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link active" href="#">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
          </ul>
          <form className="d-flex" role="search" onSubmit={(event) => event.preventDefault()}>
            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function StudentCard({ student, onDelete }) {
  return (
    <div className="card student-card h-100 shadow-sm">
      <div className="student-avatar">
        <div className="avatar-head"></div>
        <div className="avatar-body"></div>
      </div>
      <div className="card-body">
        <h2 className="h5 card-title">{student.name}</h2>
        <p className="card-text small mb-1">ID: {student.id}</p>
        <p className="card-text small mb-1">Major: {student.major}</p>
        <p className="card-text small mb-1">Year: {student.year}</p>
        <p className="card-text small">GPA: {student.gpa.toFixed(1)}</p>
        <button
          className="btn btn-outline-primary btn-sm me-2 mb-1"
          onClick={() => window.alert(`${student.name}\nMajor: ${student.major}\nYear: ${student.year}\nGPA: ${student.gpa.toFixed(1)}`)}
        >
          View Profile
        </button>
        <button
          className="btn btn-outline-danger btn-sm mb-1"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container row mx-auto">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <h2 className="h6">Links</h2>
          <div><a className="footer-link" href="#">Home</a></div>
          <div><a className="footer-link" href="#">Computer Science</a></div>
          <div><a className="footer-link" href="#">Courses</a></div>
          <div><a className="footer-link" href="#">Reports</a></div>
        </div>
        <div className="col-sm-6">
          <h2 className="h6">Contact Info</h2>
          <div>Contact Us</div>
          <div>+1: 123 456 7890</div>
          <div>trm@studentportal.com</div>
        </div>
      </div>
      <div className="container text-center border-top border-secondary mt-3 pt-3 small">
        © 2024 StudentPortal. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const [students, setStudents] = useState(startingStudents);

  function addStudent() {
    const newStudent = {
      id: Date.now(),
      name: "New Student",
      major: "Computer Science",
      year: 1,
      gpa: 3.5,
    };
    setStudents([...students, newStudent]);
  }

  function deleteStudent(studentId) {
    setStudents(students.filter((student) => student.id !== studentId));
  }

  return (
    <>
      <Navbar />

      <main className="container my-4">
        <div className="bg-dark text-white rounded px-3 py-2 small mb-3">
          Home / Students / <strong>Directory</strong>
        </div>

        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h1 className="h3 mb-0">Student Directory</h1>
          <button className="btn btn-primary btn-sm" onClick={addStudent}>
            Add New Student
          </button>
        </div>

        <div className="row g-3">
          {students.map((student) => (
            <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
              <StudentCard student={student} onDelete={deleteStudent} />
            </div>
          ))}
        </div>

        <div className="alert alert-info mt-4" role="alert">
          Student records have been successfully updated.
        </div>
      </main>

      <Footer />
    </>
  );
}
