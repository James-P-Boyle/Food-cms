export default function Footer() {
  return (
    <div className="container-fluid mt-5 bg-dark fixed-bottom footer-margin">
      <footer className="text-center text-lg-start">
        <div className="container d-flex justify-content-center py-4">
          <button type="button" className="btn btn-primary btn-lg mx-3">
            <i className="fa fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg mx-3">
            <i className="fa fa-youtube"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg mx-3">
            <i className="fa fa-instagram"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg mx-3">
            <i className="fa fa-twitter"></i>
          </button>
        </div>

        <div className="text-center text-white pb-4">
          © 2020 Copyright:
          <a className="text-white mx-2" href="https://mdbootstrap.com/">
            Ren Boyles Food & Co
          </a>
        </div>
      </footer>
    </div>
  );
}
