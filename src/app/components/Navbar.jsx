'use client'
import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { ImUserTie } from 'react-icons/im'
import { FiUsers, FiShoppingBag } from 'react-icons/fi'
import { SlUserFemale } from 'react-icons/sl'
import { BsPeople } from 'react-icons/bs'
import { AiOutlinePercentage } from 'react-icons/ai'
import { TbCategoryPlus } from 'react-icons/tb'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { GoHome } from 'react-icons/go'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { MenuOutlined } from '@ant-design/icons'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { HiOutlineDocumentReport } from 'react-icons/hi'

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link href={'/'}>Home</Link>, '1', <GoHome />),
  getItem('Master', 'sub1', <MenuOutlined />, [
    getItem(<Link href={'/items'}>Items</Link>, '2', <LiaShoppingBagSolid />),
    getItem(<Link href={'/categories'}>Categories</Link>, '3', <TbCategoryPlus />),
    getItem(<Link href={'/satuan'}>Satuan</Link>, '4', <AiOutlinePercentage />),
    getItem(<Link href={'/suppliers'}>Suppliers</Link>, '5', <BsPeople />),
    getItem(<Link href={'/customers'}>Customers</Link>, '6', <SlUserFemale />),
    getItem(<Link href={'/employees'}>Employees</Link>, '7', <ImUserTie />),
    getItem(<Link href={'/users'}>Users</Link>, '8', <FiUsers />),
  ]),
  getItem('Transaksi', 'sub2', <MenuOutlined />, [
    getItem(<Link href={'/purchases'}>Purchases</Link>, '9', <FiShoppingBag />),
    getItem(<Link href={'/sales'}>Sales</Link>, '10', <BiPurchaseTagAlt />)
  ]),
  getItem('Hutang/Piutang', 'sub3', <MenuOutlined />, [
    getItem(<Link href={'/piutang'}>Piutang</Link>, '11', <GiReceiveMoney />),
    getItem(<Link href={'/hutang'}>Hutang</Link>, '12', <GiPayMoney />)
  ]),
  getItem(<Link href={'/report'}>Laporan</Link>, '13', <HiOutlineDocumentReport />)
];

const Navbar = () => {
  return (
    <>
    <Menu
    style={{
        width: 200,
    }}
    defaultSelectedKeys={['1']}
    mode={'vertical'}
    theme={'dark'}
    items={items}
    />
    </>
  );
};
export default Navbar;
