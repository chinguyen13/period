import React from "react";
import { Button, Calendar, Popconfirm, Spin } from "antd";
import type { Dayjs } from 'dayjs';
import "./calendar.css";
import dayjs from 'dayjs';


interface Props{
  addPeriod: any;
  deletePeriod: any;
  currentDate: Dayjs;
  isLoading: boolean;
  cycleStart: string[];
  cycleEnd: string[];
  menstruation: string[];
  ovulation: string[];
}

const currentDate = dayjs(new Date());

const CalendarComponent: React.FC<Props> = (props: Props) => {
  const [curValue, setCurValue] = React.useState(props.currentDate);

  const checkInPeriod = (formatted: string) => {
    for(let i = 0; i < props.cycleStart.length ; i++)
    {
      if(props.cycleStart[i] < formatted && props.cycleEnd[i] >= formatted)
      {
        return true;
      }
    }
    return false;
  } 

  const customCell = (value: Dayjs) => {
    const formatted = value.format('YYYY/MM/DD');
    return(
      <div
        className={
          "customCell "
          + (props.cycleStart.includes(formatted) ? "period " : '')
          // + (value.day() % 6 === 0 ? "weekendCell " : "" )
          // + (value.isSame(currentDate) || value.isAfter(currentDate) ? "futureCell " : "")
          + (props.menstruation.includes(formatted)  ? "menstruation " : "")
          + (props.ovulation.includes(formatted) ? "ovulation " : "")
          + (checkInPeriod(formatted) ? "inPeriod " : "")
        }
        style={{ backgroundColor: value.isSame(curValue) ? '#E6F4FF' : '',  borderBottom: value.isSame(curValue) ? '1px solid #E6F4FF' : '', borderTop: value.isSame(currentDate) ? "2px solid #1677ff" : "2px solid #DDD" }}>
        <p style={{textAlign: "right", padding: "10px 10px", color: value.isSame(curValue) ?  "#1677FF" : value.month() !== curValue.month() ? "#00000040" : "#000000"}}>{value.date()}</p>
      </div>
    )
  }

  const confirmation = () => {
    props.addPeriod(curValue);
    return;
  }

  const deleteComfirmation = () => {
    props.deletePeriod(curValue);
  }

  return(
    <div style={{padding: '10px 20px'}}>
      {props.isLoading ? <Spin style={{position:'fixed', top:'50%', left:'50%'}}/> : null}
      <Calendar 
        validRange={[dayjs("2022-11-01"), dayjs("2023-12-31")]}
        value={curValue}
        style={{ margin: '10px 0px'}}
        onSelect={(date) => {
          setCurValue(date);
        }} 
        dateFullCellRender={customCell}
      />
       <Popconfirm
        placement="topLeft"
        title={"Are you sure to DELETE this month?"}
        onConfirm={deleteComfirmation}
        okText="Yes"
        cancelText="No"
      >
        <Button style={{ float:'left', marginBottom: 10 }} type="primary" >Delete This Month</Button>
      </Popconfirm>
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