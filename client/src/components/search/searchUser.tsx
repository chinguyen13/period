import { Button, Form, Input, Space } from 'antd';
import React from 'react';

interface Props{
  onFinish: any;
}

const SearchComponent: React.FC<Props> = (props: Props) => {

  return(
    <Form
      name="search"
      labelCol={{ span: 1 }}
      wrapperCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={props.onFinish}
      autoComplete="on"
      style={{marginTop: 10}}
    >
      <Form.Item
        name="name"
        style={{ fontSize: 20 }}
      >
        <Space>
          <Input size="large" placeholder='Name'/>
          <Button size="large" type="primary" htmlType="submit">
            Search
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default SearchComponent;