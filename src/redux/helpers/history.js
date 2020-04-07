import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// import {withRouter} from "react-router-dom";
// // 具体是哪个 react-router react-router-dom 哪个包不记得了，名字应该是这个，你搜搜看，太久没用了
// export default withRouter(function App({history}){
//    return <button onClick={()=> history.push("/about")}></button>
// })

// import React from "react";
// import {withRouter} from "react-router-dom";

// class MyComponent extends React.Component {

//   myFunction() {
//     this.props.history.push("/some/Path");
//   }

// }
// export default withRouter(MyComponent);
