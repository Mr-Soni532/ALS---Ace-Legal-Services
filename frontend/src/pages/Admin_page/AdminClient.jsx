import { useContext, useState } from "react";
import { useEffect } from "react";

import DetailsComUser from "../../components/AdminCompo/userDetails";
import UserContext from "../../context/Admin_page/userFunction/userContext";
import "./admin_css/user.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import Loading from "../../components/AdminCompo/Loading";
import HOST from "../../utils/baseUrl";
import NoDataHere from "../../components/AdminCompo/NoDataHere";
import { notification } from "antd";

const AdminClient = () => {
  const [AllClients, setAllClients] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg) => {
    api.success({
      message: msg,
      description: '"User Has been Deleted Successfully".',
      placement: "top",
    });
  };

  async function GetAllClients() {
    try {
      let res = await fetch(`${HOST}/admin/getAllUsers`);
      let data = await res.json();
      console.log(data);
      setAllClients(data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  const context = useContext(UserContext);

  const keys = ["name", "Email", "UserID"];
  const [query, setQuery] = useState(null);
  const [option, setOption] = useState("name");

  const { getUser, users, setUser, loading, err, deletefun } = context;
  // const [ loadings , setLoading ] = useState(loading)
  let data = [...users];
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

  const deletEele = async (id) => {
    console.log(id);
    try {
      let res = await fetch(`${HOST}/admin/deleteUser/${id}`, {
        method: "DELETE",
      });
      let data = await res.json();
      console.log(data);
      openNotification("Success");
    GetAllClients()
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    GetAllClients();
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

  data = search(users);

  return (
    <div className="UserAdminBoxxx">
      <Headers />
      {contextHolder}
      <div>
        {loading ? (
          <Loading />
        ) : err ? (
          <NoDataHere />
        ) : (
          <>
            <SearchBar
              name="Clients"
              query={query}
              setQuery={setQuery}
              setOption={setOption}
            />
            <div className="contentConatinerCust">
              <DetailsComUser users={AllClients} deletEele={deletEele} />
            </div>

            <div className="PaginationBOXXX">
              <DoubleLeftOutlined
                style={{
                  color: "black",
                  transform: "translateY(5px) translateX(-8px)",
                }}
              />
              <div>
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
              <DoubleRightOutlined
                style={{
                  color: "black",
                  transform: "translateY(5px) translateX(5px)",
                }}
              />
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
