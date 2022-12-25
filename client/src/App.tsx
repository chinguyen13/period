import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import { Layout } from 'antd';
import FooterComponent from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeriodPage from './components/calendar/period/periodPage';
import WorkoutPage from './components/calendar/workout/workoutPage';

function App() {
  const Content = Layout.Content;
  return (
    <Layout>
      <Router>
        <HeaderComponent/>
        <Content style={{ minHeight: 'calc(100vh - 128px)'}}>

            <Routes>    
              <Route path="" element={<PeriodPage />}/>
              <Route path="/workout" element={<WorkoutPage />}/>
            </Routes>
        </Content>
        <FooterComponent/>
      </Router>
    </Layout>
    
  );
}

export default App;
