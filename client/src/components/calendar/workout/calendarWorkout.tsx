import React from "react";
import { Calendar, Spin } from "antd";
import type { Dayjs } from 'dayjs';
import "./../calendar.css";
import dayjs from 'dayjs';
import WorkoutForm from "./workoutForm";

interface Props{
  data: any;
  currentDate: Dayjs;
  isLoading: boolean;
  onFinish: any;
}

const currentDate = dayjs(new Date());

const WorkoutCalendar: React.FC<Props> = (props: Props) => {
  const [curValue, setCurValue] = React.useState(props.currentDate);

  const getData = (value: Dayjs) => {
    let data;
    const index = props.data.findIndex((e: any) => e.start_date === value.format("YYYY/MM/DD"));
    if(index >= -1 )
    {
      data = props.data[index];
    }
    return data;
  }

  const customCell = (value: Dayjs) => {
    const displayData = getData(value);
    const formatted = value.format('YYYY/MM/DD');
    return(
      <div
        className={
          "customCell "
          + {formatted}
        }
        style={{ backgroundColor: value.isSame(curValue) ? '#E6F4FF' : '',  borderBottom: value.isSame(curValue) ? '1px solid #E6F4FF' : '', borderTop: value.isSame(currentDate) ? "2px solid #1677ff" : "2px solid #DDD" }}>
        <p style={{textAlign: "right", padding: "10px 10px", color: value.isSame(curValue) ?  "#1677FF" : value.month() !== curValue.month() ? "#00000040" : "#000000"}}>{value.date()}</p>
        {displayData?.workout ? "workout " : ""}
        {displayData?.breakfast ? "breakfast " : ""}
        {displayData?.lunch ? "lunch " : ""}
        {displayData?.dinner ? "dinner " : ""}
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
      <WorkoutForm onFinish={(e:any) => props.onFinish(e, curValue)}/>
    </div>
  );
}

export default WorkoutCalendar;