import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsComUser from "../../components/AdminCompo/userDetails";
import UserContext from "../../context/Admin_page/userFunction/userContext";
import "./admin_css/user.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";

const AdminClient = () => {
  const context = useContext(UserContext);

  const keys = ["name", "Email", "UserID"];
  const [ query , setQuery ] = useState(null)
  const [ option, setOption ] =useState('name')

  const { getUser, users, setUser, loading, err, deletefun } = context;
  // const [ loadings , setLoading ] = useState(loading)
  let data = [...users]
  const [currentPage, setCurrentPage] = useState(1);
  const userPerpage = 8;
  const totalPages = Math.ceil(data.length / userPerpage);

  const sliceTodos = () => {
    const indexOfLastTodo = currentPage * userPerpage;
    const indexOfFirstTodo = indexOfLastTodo - userPerpage;
    return data.slice(indexOfFirstTodo, indexOfLastTodo);
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

  const search = (data) => {

    return data.filter((item) => {
      if (!query) {
        return item;
      } else {
        return keys.some(() => item[option].toLowerCase().includes(query));
      }
    });
      
  };

  data= search(users)

  return (
    <div className="UserAdminBoxxx">
      <Headers />
      <SearchBar name="Clients" query={query} setQuery={setQuery} setOption={setOption}/>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : err ? (
          <h1>Something went wrong</h1>
        ) : (
          <>
            <div className="contentConatinerCust">
              <DetailsComUser users={sliceTodos()} deletEele={deletEele} />
            </div>
            <div style={{ textAlign: "right" ,margin: '2%'}}>
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
