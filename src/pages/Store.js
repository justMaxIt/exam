// import React, {useState, useEffect} from "react";



// const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="



// function Store() {
// const[data, setData] = useState([]);
// const [page, setPage] = useState(1)
// const [activePage, setActivePage] = useState(1);

//   useEffect(() => {
//     fetch(`${api}${page}`)
//       .then((res) => res.json())
//       .then((res) => setData(res.results))
//       .catch((error) => console.error(error));
//   }, [page]);
  
  


//   return <div className="store">

//     <MainPage
//       data={data}
//       activePage={activePage}
//       setActivePage={setActivePage}
//       setPage={setPage}
//     />
//   </div>;
// }

// export default Store;
