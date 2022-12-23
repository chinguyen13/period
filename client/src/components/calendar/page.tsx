import React from "react";
import { Axios } from "../..";
import CalendarComponent from "./calendar";
import dayjs from 'dayjs';

interface Data{
  id: number;
  start_date: string;
}

const currentDate = dayjs(new Date());
let cycleStart: string[] = [];
let menstruation: string[] = [];
let ovulation: string[] = [];
let cycleEnd: string[] = [];

const CalendarPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  
  const getDay = (start: string ,day: number) => {
    return new Date(new Date(start).getTime() + day*24*60*60*1000).toLocaleDateString('en-ZA');
  }

  const getDate = (data: any) => {
    cycleStart = [];
    menstruation = [];
    ovulation = [];
    cycleEnd = [];
    data.forEach((item: any) => {
      cycleStart.push(item.start_date);
      for(let i = 1; i< 6; i++)
      {
        menstruation.push(getDay(item.start_date, i))
      }
      for(let i = 11; i < 16; i++)
      {
        ovulation.push(getDay(item.start_date, i));
      }
      cycleEnd.push(getDay(item.start_date, 28));
    });
  }

  React.useEffect(() => {
    setIsLoading(true);
    Axios.get('/period').then(res => {
      console.log(res.data);
      setIsLoading(false);   
      getDate(res.data);     
    })
  }, []);

  const addPeriodAction = (value : any) => {
    setIsLoading(true);
    Axios.post('/period', { "start_date": dayjs(value).format("YYYY/MM/DD") }).then(() => {
      Axios.get('/period').then(res => {
        setIsLoading(false);  
        getDate(res.data); 
      })
    })
  }

  return(
    <CalendarComponent cycleStart={cycleStart} cycleEnd={cycleEnd} menstruation={menstruation} ovulation={ovulation} isLoading={isLoading} currentDate={currentDate} addPeriod={addPeriodAction}/>
  );
}

export default CalendarPage;