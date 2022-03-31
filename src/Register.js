export default function Register() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Register</h2>
            <div className="text-center mb-5 text-dark">Please complete all fields</div>
            <div className="card my-5">
              <form className="card-body cardbody-color p-lg-5">
                <div className="text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/07/18/17/16/black-2516434_960_720.jpg"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
  
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Use className"
                    aria-describedby="emailHelp"
                    placeholder="Create username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Name & Surname"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Create password"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                    Create Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Already Registered?{""}
                  <a href="/Login" className="text-dark fw-bold">
                    {" "}
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  