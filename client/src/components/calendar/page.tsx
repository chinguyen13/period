import React from "react";
import { Axios } from "../..";
import CalendarComponent from "./calendar";
import dayjs from 'dayjs';
interface Data{
  id: number;
  start_date: string;
}

const currentDate = dayjs(new Date());

const CalendarPage: React.FC = () => {
  const [data, setData] = React.useState<Data[]>([]);

  React.useEffect(() => {
    Axios.get('/period').then(res => {
      setData(res.data);
    })
  },[])

  const addPeriodAction = (value : any) => {
    Axios.post('/period', { "start_date": value }).then(() => {

    })
  }

  return(
    <CalendarComponent data={data} currentDate={currentDate} addPeriod={addPeriodAction}/>
  );
}

export default CalendarPage