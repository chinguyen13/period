import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './header.css';

const Header = Layout.Header;
const items: MenuProps['items'] = [
  {
    label: 'Period',
    key: '1'
  },
  {
    label: 'Workout',
    key: '2'
  }
]
const HeaderComponent: React.FC = () => {
  const navigate = useNavigate()
  const [curMenu, serCurMenu] = React.useState('1');

  const onClickMenu = (value: any) => {
    if(value.key === curMenu)
    {
      return;
    }
    switch(value.key){
      case '1': 
        navigate('/');
        break;
      case '2':
        navigate('/workout');
        break;
      default:
        break;
    }
    serCurMenu(value.key);

  }

  return(
    <Header className='headerStyle' style={{ top: 0, zIndex: 1, width: '100%'}}>
        <Menu
          className='menu-nav'
          mode="horizontal"
          onClick={e => onClickMenu(e)}
          defaultSelectedKeys={['1']}
          items={items}
        />
    </Header>
  )
}

export default HeaderComponent;