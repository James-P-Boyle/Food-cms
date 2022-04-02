export default function Footer() {
  return (
    <div className="container bg-light p-2 d-flex justify-content-center text-center border-top">
      <footer className="row py-3 d-flex align-items-center">
        <div className="col-4">
          <h1>LOGO</h1>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-pink btn-md">
            <i className="fa fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-pink btn-md">
            <i className="fa fa-youtube"></i>
          </button>
          <button type="button" className="btn btn-pink btn-md">
            <i className="fa fa-instagram"></i>
          </button>
          <button type="button" className="btn  btn-pink btn-md">
            <i className="fa fa-twitter"></i>
          </button>
        </div>
        <div className="col-4 text-dark fw-bold">2022 FRESH © </div>
      </footer>
    </div>
  );
}
