import React from "react";
import { Button, Calendar, Popconfirm, Spin } from "antd";
import type { Dayjs } from 'dayjs';
import "./calendar.css";
import dayjs from 'dayjs';

interface Data{
  id: number;
  start_date: string;
}

interface Props{
  data: Data[];
  addPeriod: any;
  currentDate: Dayjs;
  isLoading: boolean;
  setIsLoading: any;
}
let cycleStart: Date;

const currentDate = dayjs(new Date());

const CalendarComponent: React.FC<Props> = (props: Props) => {
  const [curValue, setCurValue] = React.useState(props.currentDate);
  const getListData = (value: Dayjs) => {
    props.data.forEach(item => {  
      if(value.isSame(dayjs(item.start_date), 'dates'))
      {
        cycleStart = new Date(value.toString());
        return;
      }
    });
    return;
  }

  const customCell = (value: Dayjs) => {
    getListData(value);
    return(
      <div
        className={
          "customCell "
          + (cycleStart && value.isSame(cycleStart, 'dates') ? "period " : '')
          // + (value.day() % 6 === 0 ? "weekendCell " : "" )
          + (value.isSame(currentDate) || value.isAfter(currentDate) ? "futureCell " : "")
          + (cycleStart && value.isAfter(cycleStart, 'dates') && value.isBefore(dayjs(new Date().setDate(cycleStart.getDate() + 6)), 'dates') ? "menstruation " : "")
          + (cycleStart && value.isAfter(dayjs(new Date().setDate(cycleStart.getDate() + 10)), 'dates') && value.isBefore(dayjs(new Date().setDate(cycleStart.getDate() + 16)), 'dates') ? "ovulation" : "")
        }
        style={{ backgroundColor: value.isSame(curValue) ? '#E6F4FF' : '', borderTop: value.isSame(currentDate) ? "2px solid #1677ff" : "2px solid #DDD" }}>
        <p style={{textAlign: "right", padding: "10px 10px", color: value.isSame(curValue) ?  "#1677FF" : value.month() !== curValue.month() ? "#00000040" : "#000000"}}>{value.date()}</p>
      </div>
    )
  }

  const confirmation = () => {
    props.addPeriod(curValue);
    return;
  }

  return(
    <div style={{padding: '10px 20px'}}>
      {props.isLoading ? <Spin/> : null}
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
        onConfirm={confirmation}
        okText="Yes"
        cancelText="No"
      >
        <Button style={{ float:'right', marginBottom: 10 }} type="primary" >Start Period</Button>
      </Popconfirm>
    </div>
  );
}

export default CalendarComponent;