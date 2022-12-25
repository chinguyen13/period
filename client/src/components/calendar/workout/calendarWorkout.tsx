import React from "react";
import { Calendar, Spin } from "antd";
import type { Dayjs } from 'dayjs';
import "./../calendar.css";
import dayjs from 'dayjs';

interface Props{
  data: any;
  currentDate: Dayjs;
  isLoading: boolean;
}

const currentDate = dayjs(new Date());

const WorkoutCalendar: React.FC<Props> = (props: Props) => {
  const [curValue, setCurValue] = React.useState(props.currentDate);

  const getData = (value: Dayjs) => {
    let data: string = '';
    const index = props.data.findIndex((e: any) => e.currentDate === value.format("YYYY/MM/DD"));
    if(index >= -1 )
    {
      data = props.data.message;
    }
    return data;
  }

  const customCell = (value: Dayjs) => {
    const message = getData(value);
    const formatted = value.format('YYYY/MM/DD');
    return(
      <div
        className={
          "customCell "
          + {formatted}
        }
        style={{ backgroundColor: value.isSame(curValue) ? '#E6F4FF' : '',  borderBottom: value.isSame(curValue) ? '1px solid #E6F4FF' : '', borderTop: value.isSame(currentDate) ? "2px solid #1677ff" : "2px solid #DDD" }}>
        <p style={{textAlign: "right", padding: "10px 10px", color: value.isSame(curValue) ?  "#1677FF" : value.month() !== curValue.month() ? "#00000040" : "#000000"}}>{value.date()}</p>
        <div>
          <p>{message}</p>
        </div>
      </div>
    )
  }

  return(
    <div style={{padding: '10px 20px'}}>
      {props.isLoading ? <Spin style={{position:'fixed', top:'50%', left:'50%'}}/> : null}
      <Calendar 
        validRange={[dayjs("2022-11-01"), dayjs(new Date(new Date().setMonth(new Date(props.currentDate.toString()).getMonth() + 1)))]}
        value={curValue}
        style={{ margin: '10px 0px'}}
        onSelect={(date) => {
          setCurValue(date);
        }} 
        dateFullCellRender={customCell}
      />
    </div>
  );
}

export default WorkoutCalendar;