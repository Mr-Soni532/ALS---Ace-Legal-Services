import React from "react";
import "./admin_css/content.css";
import "./admin_css/AdminDashboard.css";
import Headers from "../../components/AdminCompo/Headers";
import Typography from "antd/es/typography/Typography";
import Card from "antd/es/card/Card";
import { Space, Statistic } from "antd";
import {
  DashboardFilled,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import BarChart from "../../components/AdminCompo/AdminDashCharts/BarChart";
import { PieChart } from "../../components/AdminCompo/AdminDashCharts/PieChart";

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard">
      <Headers />
      <div className="AdminDashboardParent">
        <Space direction="horizontal" className="TopSpace">
          <DashoardCardAdmin
            icon={
              <MoneyCollectOutlined
                style={{
                  padding: 8,
                  color: "#ffd41f",
                  fontSize: 60,
                  background: "#fafafa",
                  borderRadius: "50%",
                }}
              />
            }
            title={"Revenue"}
            value={`$214534`}
          />
          <DashoardCardAdmin
            icon={
              <UserAddOutlined
                style={{
                  padding: 8,
                  color: "#ffd41f",
                  fontSize: 60,
                  background: "#fafafa",
                  borderRadius: "50%",
                }}
              />
            }
            title={"Customers"}
            value={153754}
          />

          <DashoardCardAdmin
            icon={
              <ShoppingCartOutlined
                style={{
                  padding: 8,
                  color: "#ffd41f",
                  fontSize: 60,
                  background: "#fafafa",
                  borderRadius: "50%",
                }}
              />
            }
            title={"Total Sales"}
            value={`$21,4534`}
          />
          <DashoardCardAdmin
            icon={
              <DashboardFilled
                style={{
                  padding: 8,
                  color: "#ffd41f",
                  fontSize: 60,
                  background: "#fafafa",
                  borderRadius: "50%",
                }}
              />
            }
            title={"Growth"}
            value={`2.47%`}
          />
          <DashoardCardAdmin
            icon={
              <DashboardFilled
                style={{
                  padding: 8,
                  color: "#ffd41f",
                  fontSize: 60,
                  background: "#fafafa",
                  borderRadius: "50%",
                }}
              />
            }
            title={"Stock Price"}
            value={`$2% +`}
          />
        </Space>
      </div>
      <div className="Graps">
        <div data-aos="fade-up">
          <Typography.Title>Appointments Share</Typography.Title>
          <BarChart />
        </div>

        <div style={{ width: "400px", height: "500px" }} data-aos="fade-up">
          <Typography.Title>Meetings Share</Typography.Title>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

function DashoardCardAdmin({ title, value, icon }) {
  return (
    <Card className="AdminBoxes">
      <Space direction="horizonatal">
        {icon}
        <b>
          <Statistic title={title} value={value}></Statistic>
        </b>
      </Space>
    </Card>
  );
}

export default AdminDashboard;
