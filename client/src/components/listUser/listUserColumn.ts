import type { ColumnsType } from 'antd/es/table';

interface DataType{
  id: number;
  fullName: string;
  department: string;
  company: string;
  email: string;
}

const idColumn = {
  title: "ID",
  dataIndex: 'id',
  width: '10%',
}

const nameColumn = {
  title: "Full Name",
  dataIndex: 'fullName',
  width: '22.5%',
}

const departmentColumn = {
  title: 'Department',
  dataIndex: 'department',
  width: '22.5%',
}

const companyColumn = {
  title: 'Company',
  dataIndex: 'company',
  width: '22.5%',
}

const emailColumn = {
  title: 'Email',
  dataIndex: 'email',
  width: '22.5%',
}

const UserColumn: ColumnsType<DataType> =[
  idColumn,
  nameColumn,
  departmentColumn,
  companyColumn,
  emailColumn
]

export default UserColumn;