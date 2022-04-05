export default function Contact() {
  return (

    <div class="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Contact Us</h2>
          <div className="text-center mb-5 text-dark">We want to hear from you</div>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-4">
            <div className="text-center">
                <img
                  src="https://pixabay.com/get/gea7c54199d69fbac4e76cde2c152fa8e7955497140b6eee627e45aa15a00e9a4af8d58fae928279d79cd9cb56ec7105c_1280.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-4"
                  width="200px"
                  alt="contact us"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Use className"
                  aria-describedby="emailHelp"
                  placeholder="Name & Surname"
                />
              </div>
              <div className="mb-3">
              <input
                  type="text"
                  className="form-control"
                  id="Use className"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                </div>
                <div className="form-group mb-3">
              <textarea
                className="form-control"
                id="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
            </div>
              <div className="text-center py-4">
                <button type="submit" className="btn btn-outline-dark py-3 mb-5 w-50">
                Submit
                </button>
              </div>
              <div className="form-text text-center text-dark"
              >
                Not Registered?{" "}
                <a href="/Register" className="text-dark fw-bold">
                  {" "}
                  Create an Account
                </a>
              </div>
              <div className="form-text text-center mb-3 text-dark"
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

















// <div className="container my-5"> 
//       <div className="card border-0">
//         <div className="text-light text-uppercase display-6 pinkBg p-3 fw-bolder rounded">
//           <i className="fa fa-envelope me-2 "></i> Contact us.
//         </div>
//         <div className="card-body">
//           <form>
//             <div className="form-group">
//               <label for="name">Name</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 id="name"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label for="email">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter email"
//                 required
//               />
//               <small id="emailHelp" className="form-text text-muted">
//                 We'll never share your email with anyone else.
//               </small>
//             </div>
//             <div className="form-group">
//               <label for="message">Message</label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 rows="6"
//                 required
//               ></textarea>
//             </div>
//             <div className="mx-auto">
//               <button type="submit" className="btn btn-dark mt-3">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>