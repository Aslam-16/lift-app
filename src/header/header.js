import './header.scss'
import startlift from '../assets/images/start-lift-image.png';

const Header = () => {
    return (
        <nav className="header-container navbar navbar-expand-lg bg-white navbar-light shadow">
            <a className="navbar-logo d-flex align-items-center px-4 px-lg-5">
                <img className="lift-image" src={startlift}/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a className="nav-item nav-link">Home</a>
                    <a className="nav-item nav-link active">About Us</a>
                    <a className="nav-item nav-link">Gallery</a>
                    <a className="nav-item nav-link">Product</a>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Product</a>
                        <div className="dropdown-menu fade-down m-0">
                            <a href="team.html" className="dropdown-item">Lift Type</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        </div>
                    </div> */}
                    <a href="#" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
