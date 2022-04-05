export default function Login() {
  return (
    <div class="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login</h2>
          <div className="text-center mb-5 text-dark">Welcome back</div>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/03/00/42/chef-hat-309146_960_720.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-4"
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
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-outline-dark py-3 mb-5 w-50">
                  Login
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Not Registered?{" "}
                <a href="/Register" className="text-dark fw-bold">
                  {" "}
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
