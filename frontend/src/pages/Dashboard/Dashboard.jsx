import { Space, Card, Statistic, Typography } from "antd"
import React from "react";

const  Dashborad = ()=>{
    return <div>
        <div>
        <Typography.Text>Dashborad</Typography.Text>
        </div>
        <Space>
            <Card>
                <Statistic title="Customers" value={200}/>
            </Card>
            <Card>
                <Statistic title="Customers" value={200}/>
            </Card>
        </Space>
    </div>
}

export default Dashborad;