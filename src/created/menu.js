import { Link } from "react-router-dom";

function Menu(){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ABC Automobiles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" data-testid="menu-content">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vehicle-List">vehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">contact us</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>

    )
}

export default Menu;