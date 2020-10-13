import React, {useState, useEffect} from "react";
import ModalContent from "../elements/modal/ModalContent";



const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="



function ModalPage() {
//     let { data } = props;
// const [page, setPage] = useState(1)
// const [activePage, setActivePage] = useState(1);

//   useEffect(() => {
//     fetch(`${api}${page}`)
//       .then((res) => res.json())
//       .then((res) => setData(res.results))
//       .catch((error) => console.error(error));
//   }, [page]);
  
  


//   console.log(data)
    return <div className="modal-page">
      jhfyjcfgyuibj
    <ModalContent />
    {/* //   data={data}
    //   activePage={activePage}
    //   setActivePage={setActivePage}
    //   setPage={setPage} */}
    
  </div>;
}

export default ModalPage;
