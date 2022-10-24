import styles from '../styles/Navbar.module.css';
import { Menu } from 'antd';
import { MailOutlined, HomeOutlined, ExperimentOutlined } from '@ant-design/icons';
import React from 'react';

// import { Container } from './styles';

function MenuHeader() {

    return (
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}  theme="dark">
            <Menu.Item key="mail" icon={<HomeOutlined />} href="/index.js">
               <a href='/'>Quem Somos</a>
            </Menu.Item>
            <Menu.SubMenu  key="SubMenu" title="Produtos" icon={<ExperimentOutlined />} >
                <Menu.Item key="two">
                   <a href='/produto'>
                    Tinta Marcação Tecidos
                   </a>
                </Menu.Item>
                <Menu.Item key="three">
                   Tratamento Caldeira
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="four" icon={<MailOutlined />}>
                <a href='/contato'>
                Contato
                </a>
            </Menu.Item>
        </Menu>
	 );
  }


export default MenuHeader;