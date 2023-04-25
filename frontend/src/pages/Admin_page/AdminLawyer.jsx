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
// import NoDataHere from "../../components/AdminCompo/NoDataHere";

const AdminLawyer = () => {
  const [AllLawyers, setAllLawyers] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const context = useContext(LawyerContext);
  const { getLawyer, err, lawyers, deletefun } = context;
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState("name");

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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const keys = ["name", "profession", "experience"];
  // const [currentPage, setCurrentPage] = useState(1);
  // const userPerpage = 4;
  let data = [...AllLawyers];

  // const totalPages = Math.ceil(data.length / userPerpage);

  // function sliceTodos() {
  //   const indexOfLastTodo = currentPage * userPerpage;
  //   const indexOfFirstTodo = indexOfLastTodo - userPerpage;
  //   return data.slice(indexOfFirstTodo, indexOfLastTodo);
  // }
  // console.log(lawyers);
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };
  const search = (data) => {
    return data.filter((item) => {
      if (!query) {
        return item;
      } else {
        return keys.some(() => item[option].toLowerCase().includes(query));
      }
    });
  };

  const deletEele = async (id) => {
    setLoading(true);
    try {
      let res = await fetch(`${HOST}/admin/deleteLawyer/${id}`, {
        method: "DELETE",
      });
      let data = await res.json();
      // console.log(data);
      openNotification("Success");
      GetAllLawyers();
    } catch (error) {
      console.log(error);
      alert(error.message);
      setLoading(false);
    }
  };

  function SearchLawyer() {
    setLoading(true);
    fetch(`${HOST}/lawyer/searchLawyer`, {
      method: "POST",
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
    setLoading(false);
  }

  useEffect(() => {
    // GetAllLawyers();
    getLawyer();
    SearchLawyer();
  }, []);

  //! =============> DEBOUNCE
  function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function saveInput(e) {
    setQuery(e.target.value);
    SearchLawyer();
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
        ) : (
          <div className="contentConatiner">
            {/* <DetailsCom users={sliceTodos()} deletEele={deletEele} /> */}
            <DetailsCom users={AllLawyers} deletEele={deletEele} />
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminLawyer;

// deletEele={deletEele}
