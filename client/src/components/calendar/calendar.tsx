import React from "react";
import { Button, Calendar, Popconfirm } from "antd";
import type { Dayjs } from 'dayjs';
import "./calendar.css";
import dayjs from 'dayjs';
import Strawberry from "../../images/strawberry.png";

interface Data{
  id: number;
  start_date: string;
}

interface Props{
  data: Data[];
  addPeriod: any;
  currentDate: Dayjs;
}

const currentDate = dayjs(new Date());

const CalendarComponent: React.FC<Props> = (props: Props) => {
  const [curValue, setCurValue] = React.useState(props.currentDate);
  

  const getListData = (value: Dayjs) => {
    let listData;
    props.data.forEach(item => {  
      if(value.isSame(dayjs(item.start_date)))
      {
        listData = item;
        return;
      }
    });
    return listData || undefined;
  }

  const customCell = (value: Dayjs) => {
    const listData = getListData(value);
    return(
      <div
        className={
          "customCell "
          + (listData ? "period " : '')
          + (value.day() % 6 === 0 ? "weekendCell " : "" )
          + (value.isSame(currentDate) || value.isAfter(currentDate) ? "futureCell" : "") 
        }
        style={{ backgroundColor: value.isSame(curValue) ? '#E6F4FF' : '', borderTop: value.isSame(currentDate) ? "2px solid #1677ff" : "2px solid #DDD" }}>
        <p style={{textAlign: "right", padding: "10px 10px", color: value.isSame(curValue) ?  "#1677FF" : value.month() !== curValue.month() ? "#00000040" : "#000000"}}>{value.date()}</p>
      </div>
    )
  }

  return(
    <div style={{padding: '10px 20px'}}>
      
      <Calendar 
        validRange={[dayjs("2022-11-27"), dayjs("2023-12-31")]}
        value={curValue}
        style={{ margin: '10px 0px' }}
        onSelect={(date) => {
          setCurValue(date.isBefore(currentDate) ? dayjs(currentDate) : date);
        }} 
        dateFullCellRender={customCell}
      />
        <Popconfirm
        placement="topRight"
        title={"Are you sure to add period?"}
        onConfirm={props.addPeriod(curValue)}
        okText="Yes"
        cancelText="No"
      >
        <Button style={{ float:'right', marginBottom: 10 }} type="primary" >Start Period</Button>
      </Popconfirm>
    </div>
  );
}

export default CalendarComponent;