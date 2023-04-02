import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsCom from "../../components/AdminCompo/lawyersDetails";
import LawyerContext from "../../context/Admin_page/lawyercontext/lawyerContext";
import "../../components/AdminCompo/lawyer.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";

const AdminLawyer = () => {
  const context = useContext(LawyerContext);

  const [ query , setQuery ] = useState(null)
  const [ option, setOption ] =useState('name')
  const keys = ["name", "profession", "experience"];
  const { getLawyer , err , loading , lawyers , deletefun } = context;
  const [currentPage, setCurrentPage] = useState(1);
  const userPerpage = 4;
  let data = [...lawyers]
  
  const totalPages = Math.ceil(data.length / userPerpage);

  function sliceTodos() {
    const indexOfLastTodo = currentPage * userPerpage;
    const indexOfFirstTodo = indexOfLastTodo - userPerpage;
    return data.slice(indexOfFirstTodo, indexOfLastTodo);
  }
  console.log(lawyers)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deletEele = (el) => {
    deletefun(el);
  };

  const search = (data) => {

    return data.filter((item) => {
      if (!query) {
        return item;
      } else {
        return keys.some(() => item[option].toLowerCase().includes(query));
      }
    });
      
  };

  data= search(lawyers)
  useEffect(() => {
    getLawyer();
  }, []);

  return (<div>
    <Headers/>
    <SearchBar name="Lawyers" query={query} setQuery={setQuery} setOption={setOption}/>
    <div>
        {loading?(<h1>Loading...</h1>):
        err?(<h1>Something went wrong</h1>):(
            <>
        <div className="contentConatiner"><DetailsCom users={sliceTodos()} deletEele={deletEele}/></div>
        <div style={{textAlign: 'right'}}>
            {Array.from({ length: totalPages }, (_, index) => (
                <button className="peginationBtn" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                </button>
            ))}
        </div>
        </>
        )}
    </div>
    </div>)
};
export default AdminLawyer;

// deletEele={deletEele}
