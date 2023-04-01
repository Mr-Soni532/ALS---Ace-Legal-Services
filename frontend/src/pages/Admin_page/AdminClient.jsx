import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsComUser from "../../components/AdminCompo/userDetails";
import UserContext from "../../context/Admin_page/userFunction/userContext";
import "./admin_css/user.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";

const AdminClient = () => {
  const context = useContext(UserContext);
  const { getUser, users, setUser, loading, err, deletefun } = context;
  const [data, setData] = useState([...users]);
  const [errors, setError] = useState(err);
  // const [ loadings , setLoading ] = useState(loading)

  const [currentPage, setCurrentPage] = useState(1);
  const userPerpage = 8;
  const totalPages = Math.ceil(data.length / userPerpage);
  const sliceTodos = () => {
    const indexOfLastTodo = currentPage * userPerpage;
    const indexOfFirstTodo = indexOfLastTodo - userPerpage;
    return users.slice(indexOfFirstTodo, indexOfLastTodo);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deletEele = (el) => {
    deletefun(el);
  };

  useEffect(() => {
    getUser();
  }, []);

  const searchFun = (e) => {
    // let searchValue = document.querySelector("#search").value;
    let filterData = users.filter((el) => {
      let x = e.target.value;
      return el.name.toLowerCase().includes(x.toLowerCase());
    });
    // // console.log(filterData)
    setUser(filterData);
    // setUser(filterData)
    // console.log(filterData)
    // console.log(e.target.value)
  };

  return (
    <div className="UserAdminBoxxx">
      <Headers />
      <SearchBar name="Clients" searchFun={searchFun} />
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : errors ? (
          <h1>Something went wrong</h1>
        ) : (
          <>
            <div className="contentConatiner">
              <DetailsComUser users={sliceTodos()} deletEele={deletEele} />
            </div>
            <div style={{ textAlign: "right" }}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  className="peginationBtn"
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default AdminClient;

// function searchItem(){
//     let searchValue = document.querySelector("#search").value;
//     let filterData =wholeData.filter((e)=>{
//           return e.title.toLowerCase().includes(searchValue.toLowerCase())
//     })
//     displayData(filterData)
//     }
