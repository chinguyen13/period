import React, { useState } from "react";
import { Button, Table } from 'antd';
import UserColumn from './listUserColumn';
import SearchComponent from "../search/searchUser";
import { Axios } from "../..";

const ListUserTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSources, setDataSources] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  

  React.useEffect(()=> {
    setLoading(true);
    Axios.get('/users/count', ).then( res => {
      setTotalUser(res.data)
    });
    Axios.get('/users/all', {params: {
      name: search,
      page: currentPage,
    }}).then( res => {
      setDataSources(res.data);
      setLoading(false);
      setSelectedRowKeys([]);
    });
  },[search, currentPage])

  const deleteUser = () => {
    setLoading(true);
    Axios.delete('/users', {
      params: {
        ids: selectedRowKeys,
      }
    }).then(() => {
      Axios.get('/users/count', ).then( res => {
        setTotalUser(res.data)
      });
      Axios.get('/users/all', {params: {
        name: search,
        page: currentPage,
      }}).then( res => {
        setDataSources(res.data);
        setLoading(false);
      });
    })
  };

  const onSelectChange = (values: any) => {
    setSelectedRowKeys(values);
  };

  const rowSelection = {
    columnTitle: <div>Delete</div>,
    hideSelectAll: true,
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const onFinish = (values: any) => {
    setSearch(values.name);
  }

  return (
    <div>
      <SearchComponent onFinish={onFinish}/>
      <Button href="/add" type="primary" style={{display:'block', float:'right', top:'50', right: '20'}}>Add</Button>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={deleteUser} disabled={!hasSelected} loading={loading}>
          Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} users` : ''}
        </span>
      </div>
      <Table 
        scroll= {{ x: '100%' }}
        loading={loading}
        rowSelection={rowSelection}
        rowKey="id"
        columns={UserColumn}
        dataSource={dataSources}
        pagination={{
          position: ['bottomLeft'],
          pageSize: 10,
          total: totalUser,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`,
          onChange: (page) => {
            setCurrentPage(page)
          }
        }}
        />
    </div>
  );

};

export default ListUserTable;