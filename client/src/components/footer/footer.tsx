import { Layout } from 'antd';
import React from 'react';

const Footer = Layout.Footer;

const FooterComponent: React.FC = () => {
  return(
    <Footer style={{ textAlign: 'center', backgroundColor: '#C1C8E4' }}>Ant Design ©2022 Created by Brian</Footer>
  )
}

export default FooterComponent;