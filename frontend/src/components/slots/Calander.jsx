import React from 'react'
import { Calendar, Col, Radio, Row, Select, Typography } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';
dayjs.extend(dayLocaleData);
const Calander = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
  return (
    <Calendar
      fullscreen={true}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        const year = value.year();
        const month = value.month();
        const current_Date = new Date()
        const start = year === current_Date.getFullYear() ? current_Date.getMonth(): 0;
        const monthOptions = [];
        let current = value.clone();
        const localeData = value.localeData();
        const months = [];
        for (let i = start; i < 12; i++) {
          current = current.month(i);
          months.push(localeData.monthsShort(current));
        }
        for (let i = start; i < 12-start; i++) {
          monthOptions.push(
            <Select.Option key={i} value={i} className="month-item">
              {months[i]}
            </Select.Option>,
          );
        }
        const options = [];
        for (let i = current_Date.getFullYear() ; i < year + 10; i += 1) {
          options.push(
            <Select.Option key={i} value={i} className="year-item">
              {i}
            </Select.Option>,
          );
        }
        return (
          <div
            style={{
              padding: 8,
            }}
          >
            <Typography.Title level={4}>Custom header</Typography.Title>
            <Row gutter={8}>
              <Col>
                <Radio.Group
                  size="small"
                  onChange={(e) => onTypeChange(e.target.value)}
                  value={type}
                >
                  {/* <Radio.Button value="month">Month</Radio.Button>
                  <Radio.Button value="year">Year</Radio.Button> */}
                </Radio.Group>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  value={year}
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                >
                  {options}
                </Select>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={month}
                  onChange={(newMonth) => {
                    const now = value.clone().month(newMonth);
                    onChange(now);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
            </Row>
          </div>
        );
      }}
      onPanelChange={onPanelChange}
      onChange={(value)=> console.log(value.format('YYYY-MM-DD'))}
    />
  )
}

export default Calander