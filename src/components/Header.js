// Header component for the website
function Header() {
  return (
    <section className="header">
      <div className="container-md d-flex flex-wrap">
        <div className="logo col-sm-6 offset-md-3">
          <img
            src="/Logo.svg"
            alt="Stagebreaker"
            className="img-fluid"
          />
        </div>
        <div className="col-md-12">
          <nav className="nav stageNav navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center col-xs-12" id="navbarToggleExternalContent">
              <li>
                <a href="#" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  Customers
                </a>
              </li>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
