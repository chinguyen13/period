import React from "react";
import { Axios } from "../../..";
import dayjs from 'dayjs';
import WorkoutCalendar from "./calendarWorkout";

const currentDate = dayjs(new Date());

const PeriodPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    Axios.get('/workout').then(res => {
      setData(res.data);
      setIsLoading(false);      
    })
  }, []);

  return(
    <WorkoutCalendar  isLoading={isLoading} currentDate={currentDate} data={data}/>
  );
}

export default PeriodPage;