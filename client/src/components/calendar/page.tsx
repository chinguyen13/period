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
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    setIsLoading(true);
    Axios.get('/period').then(res => {
      setData(res.data);
      setIsLoading(false);
    })
  }, []);

  const addPeriodAction = (value : any) => {
    setIsLoading(true);
    Axios.post('/period', { "start_date": value }).then(() => {
      Axios.get('/period').then(res => {
        setData(res.data);
        setIsLoading(false);
      })
    })
  }

  return(
    <CalendarComponent data={data} setIsLoading={setIsLoading} isLoading={isLoading} currentDate={currentDate} addPeriod={addPeriodAction}/>
  );
}

export default CalendarPage