// import React, {useState, Component } from "react";
// import ReactDOM from "react-dom";
// import Pagination from "react-js-pagination";
// // require("bootstrap/less/bootstrap.less");

// class PostPagination extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activePage: 2
//     };
//   }

//   handlePageChange(pageNumber) {
//     console.log(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=${pageNumber}`);
//     this.setState({activePage: pageNumber});
//   }

//   render() {
//     return (
//       <div>
//             <Pagination
//           itemClass="page-item"
//                 linkClass="page-link"
//                 prevPageText='prev'
//       nextPageText='next'
//       firstPageText='first'
//       lastPageText='last'
//           activePage={this.state.activePage}
//           itemsCountPerPage={5}
//           totalItemsCount={64}
//           pageRangeDisplayed={5}
//           onChange={this.handlePageChange.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Pagination />, document.getElementById("root"));
// export default PostPagination
