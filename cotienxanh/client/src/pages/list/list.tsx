import React from 'react';
import { Axios } from '../..';


const ListComponent: React.FC = () => {
  const [list, setList] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(()=> {
    setLoading(true);
    Axios.get('/botranh').then(res => {
      setList(res.data);
      setLoading(false);
    })
  }, [])
  return(
    <div>
      List
      {list.map(item => {
        return (<div key={item.id}>{item.name}</div>)
      })}
    </div>
  )
}

export default ListComponent;