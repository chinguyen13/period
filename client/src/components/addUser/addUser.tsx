import { Button, Form, Input } from 'antd';
import React from 'react';
import { Axios } from '../..';
import { useNavigate } from 'react-router-dom';


const AddUserComponent: React.FC = () => {
  const navigate = useNavigate()
  const addUser = (values: any) => {
    Axios.post("/users", values).then(res => {
      navigate("/", {replace: true});
    })
  }
  return(
    <Form
      name="add-user"
      labelCol={{ span: 1 }}
      wrapperCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={addUser}
      autoComplete="on"
      style={{marginTop: 20}}
    >
      <Form.Item
        name="firstName"
        style={{ fontSize: 20 }}
      >
          <Input size="large" placeholder='First Name' autoFocus/>
      </Form.Item>
      <Form.Item
        name="lastName"
        style={{ fontSize: 20 }}
      >
          <Input size="large" placeholder='Last Name'/>
      </Form.Item>
      <Form.Item
        name="department"
        style={{ fontSize: 20 }}
      >
          <Input size="large" placeholder='Department'/>
      </Form.Item>
      <Form.Item
        name="company"
        style={{ fontSize: 20 }}
      >
          <Input size="large" placeholder='Company'/>
      </Form.Item>
      <Form.Item
        name="email"
        style={{ fontSize: 20 }}
      >
          <Input size="large" placeholder='Email'/>
      </Form.Item>
      <Form.Item
        name="submit"
        style={{ fontSize: 20 }}
      >
        <Button size="large" type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddUserComponent;