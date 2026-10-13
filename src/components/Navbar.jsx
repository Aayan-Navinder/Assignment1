export default function Navbar() {
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
