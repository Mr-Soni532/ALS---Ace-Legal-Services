import { Space, Card, Statistic, Typography } from "antd"
import React from "react";
import "../../utlis/admin_css/content.css"
const  Dashborad = ()=>{
    return <div className="container">
            <Card>
                <Statistic title="Lawyer" value={200}/>
            </Card>
            <Card>
                <Statistic title="Customer" value={200}/>
            </Card>
            <Card>
                <Statistic title="Admin" value={50}/>
            </Card>
    </div>
}

export default Dashborad;