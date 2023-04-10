import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsCom from "../../components/AdminCompo/lawyersDetails";
import LawyerContext from "../../context/Admin_page/lawyercontext/lawyerContext";
import "../../components/AdminCompo/lawyer.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";
import Loading from "../../components/AdminCompo/Loading";
import "./admin_css/AdminDashboard.css";
import { notification } from "antd";
import HOST from "../../utils/baseUrl";
import NoDataHere from "../../components/AdminCompo/NoDataHere";

const AdminLawyer = () => {
  const [AllLawyers, setAllLawyers] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg) => {
    api.success({
      message: msg,
      description: '"Lawyer Has been Deleted Successfully".',
      placement: "top",
    });
  };

  async function GetAllLawyers() {
    try {
      let res = await fetch(`${HOST}/admin/getAllLawyers`);
      let data = await res.json();
      console.log(data);
      setAllLawyers(data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  const context = useContext(LawyerContext);

  const [query, setQuery] = useState("");
  const [option, setOption] = useState("name");
  const keys = ["name", "profession", "experience"];
  const { getLawyer, err, loading, lawyers, deletefun } = context;
  const [currentPage, setCurrentPage] = useState(1);
  const userPerpage = 4;
  let data = [...lawyers];

  const totalPages = Math.ceil(data.length / userPerpage);

  function sliceTodos() {
    const indexOfLastTodo = currentPage * userPerpage;
    const indexOfFirstTodo = indexOfLastTodo - userPerpage;
    return data.slice(indexOfFirstTodo, indexOfLastTodo);
  }
  console.log(lawyers);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deletEele = async (id) => {
    try {
      let res = await fetch(`${HOST}/admin/deleteLawyer/${id}`, {
        method: "DELETE",
      });
      let data = await res.json();
      console.log(data);
      openNotification("Success");
      GetAllLawyers()
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetch(`${HOST}/lawyer/searchLawyer`, {
      method: "POST",
      // authorization: "bearer " + JSON.stringify(localStorage.getItem("token")),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: option || "",
        value: query?.toLowerCase() || "",
      }),
    })
      .then((data) => data.json())
      .then((data) => setAllLawyers(data.data));
  }, [AllLawyers]);
  
  // const search = (data) => {
  //   return data.filter((item) => {
  //     if (!query) {
  //       return item;
  //     } else {
  //       return keys.some(() => item[option].toLowerCase().includes(query));
  //     }
  //   });
  // };

  data = query;
  useEffect(() => {
    GetAllLawyers();
    getLawyer();
  }, []);

    //! =============> DEBOUNCE
    function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }
    function saveInput(e) {
      setQuery(e.target.value)
    }
    const processChange = debounce((e) => saveInput(e));
    //! ===================================================>

  return (
    <div>
      {contextHolder}
      <Headers />
      <SearchBar
        name="Lawyers"
        query={query}
        setQuery={setQuery}
        setOption={setOption}
        processChange={processChange}
      />
      <div>
        {loading ? (
          <Loading />
        ) : err ? (
          <NoDataHere />
        ) : (
          <>
            <div className="contentConatiner">
              {/* <DetailsCom users={sliceTodos()} deletEele={deletEele} /> */}
              <DetailsCom users={AllLawyers} deletEele={deletEele} />
            </div>
            {/* <div style={{ textAlign: "right" }}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  className="peginationBtn"
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};
export default AdminLawyer;

// deletEele={deletEele}
