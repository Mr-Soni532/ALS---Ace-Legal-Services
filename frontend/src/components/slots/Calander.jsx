import React from 'react'
import { Calendar, Col, Radio, Row, Select, Typography } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment'
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';
dayjs.extend(dayLocaleData);
const Calander = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  function disabledDate(current) {
    console.log(current)
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  return (
    <Calendar
      disabledDate={disabledDate}
      fullscreen={false}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        const year = value.year();
        const month = value.month();
        const current_Date = new Date()
        const monthOptions = [];
        let current = value.clone();
        const localeData = value.localeData();
        const months = [];
        for (let i = 0; i < 12; i++) {
          current = current.month(i);
          months.push(localeData.monthsShort(current));
        }
        for (let i = 0; i < 12 ; i++) {
          monthOptions.push(
            <Select.Option key={i} value={i} className="month-item">
              {months[i]}
            </Select.Option>,
          );
        }
        const options = [];
        for (let i = current_Date.getFullYear(); i < year + 10; i += 1) {
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
            <Typography.Title level={4}>Select Date</Typography.Title>
            <Row gutter={8}>
              <Col>
                <Select
                  size="large"
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
                  size="large"
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
      onChange={(value) => console.log(value.format('YYYY-MM-DD'))}
    />
  )
}

export default Calander