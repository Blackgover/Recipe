import { Fragment, React } from "react"
import { Link } from "react-router-dom"
import YouTube from "react-youtube";

// class vid extends React.Component {
//     render() {
//         const opts = {
//             height: '390',
//             width: '640',
//             playerVars: {
//                 autoplay: 1
//             },
//         };
//         return <YouTube videoId="" opts={opts} onReady={this._onReady} />;
//     }
//     _onReady(event) {
//         event.target.pauseVideo();
//     }
// }

export const List = () => {

    <Fragment>
      <div className="container">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="category">
          <span>category: beef</span>
          <span>country: British</span>
        </div>
        <div className="ingredients">
          <ul>
            <li>onions</li>
            <li>tomatoes</li>
            <li>1/2 kg of meat</li>
            <li>pinch of salt</li>
            <li>oil</li>
            <li>water</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="procedure">
          <ul>
            <li>boil meat to tender</li>
            <li>fry onions to golden brown</li>
            <li>add salt</li>
            <li>steam for 10 minutes</li>
          </ul>
        </div>
        <div className="link">
          <Link to="https://www.youtube.com/watch?v=GDi68mpRCf8">YouTube</Link>
        </div>
      </div>
    </Fragment>;
}