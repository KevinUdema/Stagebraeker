import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="backgroundblack">
      <Header ></Header>
      <section className="notFoundPage vh-100 d-flex justify-content-center">
        <div className="text-center text-white">
          <h1 className="display-1">404</h1>
          <h2 className="display-4">Page Not Found</h2>
          <p className="lead">Sorry, the page you are looking for does not exist.</p>
          <Link to={"/"} className="btn btn-primary mt-3">
            Go to Home
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default NotFoundPage;
