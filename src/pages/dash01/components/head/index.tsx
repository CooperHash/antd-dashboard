import { AppstoreOutlined, InboxOutlined, MailOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Form, Menu } from 'antd';
import { useState } from 'react';
import './index.css'
import Icon from '@ant-design/icons/lib/components/Icon';
import { Input } from 'antd';
import inbox from '../../../../assets/inbox.svg'
import type { SearchProps } from 'antd/es/input/Search';

const items: MenuProps['items'] = [
  {
    key: 'mail',
    icon: <Icon component={inbox} style={{ fontSize: '24px', color: 'black' }} />,
  },
  {
    label: 'Dashboard',
    key: 'app',
  },
  {
    label: 'Orders',
    key: 'SubMenu',
  },
  {
    label: 'Products',
    key: 'products'
  },
  {
    label: 'Customers',
    key: 'customers',
  },
  {
    label: 'Analytics',
    key: 'analytics',
  }
];

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


const Head = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="dash-head">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        //="18"
        className='menu'
      />
      <div className='head-right'>
        <Form
          className='head-form'
        >
          <div className='head-search'>
            <SearchOutlined className='search-icon' />
            <Input placeholder="Search Products..." className='search-input' />
          </div>
        </Form>
        <Button className='head-button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user h-5 w-5">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Head

