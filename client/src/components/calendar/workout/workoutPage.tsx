import React from "react";
import { Axios } from "../../..";
import dayjs from 'dayjs';
import WorkoutCalendar from "./calendarWorkout";
import type { Dayjs } from 'dayjs';

const currentDate = dayjs(new Date());

const WorkoutPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    Axios.get('/workout').then(res => {
      setData(res.data);
      setIsLoading(false);      
    })
  }, []);

  const onFinish = (value: any, curDate: Dayjs) => {
    console.log(value);
    const inputData = {
      start_date: curDate.format("YYYY/MM/DD"),
      workout: value.includes('Workout'),
      breakfast: value.includes('Breakfast'),
      lunch: value.includes('Lunch'),
      dinner: value.includes('Dinner'),
    }
    
    Axios.post('/workout', inputData).then(() => {
      Axios.get('/workout').then(res => {
        setData(res.data);
        setIsLoading(false); 
      })
    })
  }

  return(
    <>
      <WorkoutCalendar  isLoading={isLoading} currentDate={currentDate} data={data} onFinish={onFinish}/>
    </>
  );
}

export default WorkoutPage;