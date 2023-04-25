import { useContext, useState } from "react";
import { useEffect } from "react";

import DetailsComUser from "../../components/AdminCompo/userDetails";

import "./admin_css/user.css";
import Headers from "../../components/AdminCompo/Headers";
import SearchBar from "../../components/AdminCompo/SearchCompo";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import Loading from "../../components/AdminCompo/Loading";
import HOST from "../../utils/baseUrl";
import NoDataHere from "../../components/AdminCompo/NoDataHere";
import { notification } from "antd";
import { UserContext } from "../../context/Admin_page/userFunction/userState";

const AdminClient = () => {
  const [AllClients, setAllClients] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const processChange = debounce((e) => saveInput(e));
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
    GetAllClients();
  }

  const openNotification = (msg) => {
    api.success({
      message: msg,
      description: '"User Has been Deleted Successfully".',
      placement: "top",
    });
  };
  useEffect(() => {
    GetAllClients();
  }, []);

  async function GetAllClients() {
    try {
      let res = await fetch(`${HOST}/admin/getAllUsers`);
      let data = await res.json();
      // console.log(data);
      setAllClients(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  const context = useContext(UserContext);

  const keys = ["name", "Email", "UserID"];

  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);
  const [query, setQuery] = useState(null);
  const [option, setOption] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deletEele = async (id) => {
    setloading(true);
    console.log(id);
    try {
      let res = await fetch(`${HOST}/admin/deleteUser/${id}`, {
        method: "DELETE",
      });
      let data = await res.json();
      console.log(data);
      openNotification("Success");
      GetAllClients();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // const search = (data) => {
  //   return data.filter((item) => {
  //     if (!query) {
  //       return item;
  //     } else {
  //       return keys.some(() => item[option].toLowerCase().includes(query));
  //     }
  //   });
  // };

  // data = search(users);

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
              processChange={processChange}
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
                {Array.from({ length: 2 }, (_, index) => (
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
