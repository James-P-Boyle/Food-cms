export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white text-uppercase display-6">
              <i className="fa fa-envelope me-2"></i> Contact us.
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
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
                  <button
                    type="submit"
                    className="btn btn-primary text-right mt-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card bg-light h-100 mb-3">
            <div className="card-header bg-success text-white text-uppercase display-6">
              <i className="fa fa-home me-2"></i> Address
            </div>
            <div className="card-body">
              <p>3 rue des Champs Elysées</p>
              <p>75008 PARIS</p>
              <p>France</p>
              <p>Email : email@example.com</p>
              <p>Tel. +33 12 56 11 51 84</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
