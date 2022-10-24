import { Button, Space, DatePicker, Card, Menu } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';
import MenuHeader from '../components/Menu';
import { Content } from 'antd/lib/layout/layout';
import { Layout } from 'antd';

export default function Home() {
  const onChange = () => {};
  return (
   
    <div>
      <Content> 
        <Space direction="vertical">
          <Button type="primary">Primary Button</Button>
          <Button type="ghost">Ghost Button</Button>
          <DatePicker onChange={onChange} />
          <CiCircleFilled />
        </Space>
      </Content>
    </div>
  );
}