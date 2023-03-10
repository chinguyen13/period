import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import { Layout } from 'antd';
import FooterComponent from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './components/calendar/page';

function App() {
  const Content = Layout.Content;
  return (
      <Layout>
      <HeaderComponent/>
      <Content style={{ minHeight: 'calc(100vh - 128px)'}}>
        <Router>
          <Routes>    
            <Route path="" element={<CalendarPage />}/>
          </Routes>
        </Router>
      </Content>
      <FooterComponent/>
    </Layout>
    
  );
}

export default App;
