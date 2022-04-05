export default function Contact() {
  return (
    <div className="container my-5">
      <div className="card border-0">
        <div className="text-light text-uppercase display-6 pinkBg p-3 fw-bolder rounded">
          <i className="fa fa-envelope me-2 "></i> Contact us.
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control mb-2"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="mx-auto">
              <button type="submit" className="btn btn-dark mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
