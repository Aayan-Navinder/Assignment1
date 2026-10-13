export default function StudentCard({ student, onDelete }) {
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

        <button className="btn btn-outline-primary btn-sm me-2" onClick={() => window.alert(`${student.name}\nMajor: ${student.major}\nGPA: ${student.gpa.toFixed(1)}`)}>
          View Profile
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
