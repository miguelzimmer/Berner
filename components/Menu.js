
import { Menu } from 'antd';
import {  HomeOutlined, ExperimentOutlined, ToolOutlined } from '@ant-design/icons';
import React from 'react';

// import { Container } from './styles';

function MenuHeader() {
    return (
        <Menu mode="horizontal"   theme="light">
            <Menu.Item key="myhome" icon={<HomeOutlined />} >
               <a href='/'>Inicio</a>
            </Menu.Item>
            <Menu.Item key="mail" icon={<ExperimentOutlined />}>
               <a href='/produto'>Produtos</a>
            </Menu.Item>
            <Menu.Item key="service" icon={<ToolOutlined />}>
               <a href='/servico'>Serviços</a>
            </Menu.Item>
        </Menu>
	 );
  }


export default MenuHeader;