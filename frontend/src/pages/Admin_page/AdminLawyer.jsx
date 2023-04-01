import { Typography,Table, Space } from "antd";

import "../../utlis/admin_css/lawyer.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import DetailsCom from "../../component/AdminCompo/lawyersDetails";
import LawyerContext from "../../context/Admin_page/lawyercontext/lawyerContext";
import "../../utlis/admin_css/content.css"
import Headers from "../../component/AdminCompo/Headers";
import SearchBar from "../../component/AdminCompo/SearchCompo";

const UserDetails  = () =>{
    
    const context= useContext(LawyerContext)

    // const [ loading , setLoading ] = useState(false)
    // const [ err, setError ] =useState(false)

    const {getLawyer , lawyers, deletefun ,setLawyers ,err , loading } = context
    const [currentPage, setCurrentPage] = useState(1);
    const userPerpage = 4;
    const totalPages = Math.ceil(lawyers.length / userPerpage);

    function sliceTodos() {
        const indexOfLastTodo = currentPage * userPerpage;
        const indexOfFirstTodo = indexOfLastTodo - userPerpage;
        return lawyers.slice(indexOfFirstTodo, indexOfLastTodo);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const deletEele = (el)=>{
        deletefun(el)
    }

    useEffect(()=>{
        getLawyer()
    },[])

    return (<div>
        <Headers/>
        <SearchBar name='Lawyers'/>
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
}
export default UserDetails;

// deletEele={deletEele}
