import { Fragment } from 'react';
import { 
    Outlet,
    Link
} from 'react-router-dom';


import './nav.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo" to="/">
            Recipe
          </Link>
          <div className="nav-link-container">
            <Link className="nav-link" to="/hot">
                What's Hot!
            </Link>
          </div>
          <div className="nav-link-container">
            <Link className="nav-link" to="/trending">
              Trending
            </Link>
          </div>
          <div className="nav-link-container">
            <Link className="nav-link" to="/categories">
              Categories
            </Link>
          </div>
          <div className="nav-link-container">
            <Link className="nav-link" to="/recent">
                Recent
            </Link>
          </div>
          <div className="nav-link-container">
            <Link className="nav-link" to="/favorite">
              favorites
            </Link>
          </div>
          {/* <div className="nav-link-container">
            <Link className="nav-link" to=""></Link>
          </div> */}
        </div>
        <Outlet />
      </Fragment>
    );
}

export default Navigation