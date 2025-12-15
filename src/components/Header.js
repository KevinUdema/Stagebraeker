import { Link } from "react-router";
// Header component for the website
function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="row align-items-center">
        <div className="logo col-sm-6 offset-md-3 col-10">
         <Link to={"/#"}>
            <img
              src="/Logo.svg"
              alt="Stagebreaker"
              className="img-fluid"
            />
          </Link> 
        </div>
        <div className="col-2 nav stageNav navbar-dark navbar-expand-lg">            
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        </div>
          <nav className="col-md-12 nav stageNav navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse justify-content-center" id="navbarToggleExternalContent">
              <li>
                <Link to={"/#"} className="nav-link text-white">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to={"/Dashboard"} className="nav-link text-white">
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to={"/#"} className="nav-link text-white">
                  <p>Orders</p>
                </Link>
              </li>
              <li>
                <Link to={"/#"} className="nav-link text-white">
                  <p>Products</p>
                </Link>
              </li>
              <li>
                <Link to={"/#"} className="nav-link text-white">
                  <p>Customers</p>
                </Link>
              </li>
            </div>
          </nav>
        </div>
        </div>
    </section>
  );
}

export default Header;
