export default function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <footer className="text-center text-lg-start">
        <div className="container d-flex justify-content-center py-2">
          <button type="button" className="btn btn-pink btn-md mx-3">
            <i className="fa fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-pink btn-md mx-3">
            <i className="fa fa-youtube"></i>
          </button>
          <button type="button" className="btn btn-pink btn-md mx-3">
            <i className="fa fa-instagram"></i>
          </button>
          <button type="button" className="btn  btn-pink btn-md mx-3">
            <i className="fa fa-twitter"></i>
          </button>
        </div>

        <div className="text-center text-white pb-2">
          © 2020 Copyright:
          <a className="text-white mx-2" href="https://mdbootstrap.com/">
            Ren Boyles Food & Co
          </a>
        </div>
      </footer>
    </div>
  );
}
