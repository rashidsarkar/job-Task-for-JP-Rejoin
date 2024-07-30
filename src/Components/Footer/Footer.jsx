import React from "react";

function Footer() {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">Sections</h6>
        <a href="#colleges" className="link link-hover">
          Colleges
        </a>
        <a href="#research" className="link link-hover">
          Research Papers
        </a>
        <a href="#reviews" className="link link-hover">
          Reviews
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a href="#about" className="link link-hover">
          About Us
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
        <a href="#jobs" className="link link-hover">
          Jobs
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a href="#terms" className="link link-hover">
          Terms of Use
        </a>
        <a href="#privacy" className="link link-hover">
          Privacy Policy
        </a>
        <a href="#cookie" className="link link-hover">
          Cookie Policy
        </a>
      </nav>
      <form className="hidden lg:block">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-info join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
