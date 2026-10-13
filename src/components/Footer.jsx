export default function Footer() {
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
