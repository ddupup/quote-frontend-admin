import React, {useEffect} from 'react';
import Link from 'next/link';

import {Menu} from 'antd';
import {BookOutlined, FileImageOutlined} from '@ant-design/icons';
import type {MenuProps, MenuTheme} from 'antd/es/menu';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

interface Props {}
const LayoutMenu: React.FunctionComponent<Props> = () => {
    useEffect(() => {}, []);

    const items: MenuItem[] = [
        getItem(
            <Link href="/article">
                <a>Article</a>
            </Link>,
            'article',
            <BookOutlined />
        ),
        getItem(
            <Link href="/image">
                <a>Image</a>
            </Link>,
            'image',
            <FileImageOutlined />
        ),
    ];

    return (
        <div className="h-full w-[256px]">
            <Menu
                style={{width: '100%', height: '100%'}}
                defaultSelectedKeys={['article']}
                defaultOpenKeys={['article']}
                mode={'inline'}
                theme={'dark'}
                items={items}
            />
        </div>
    );
};
export default LayoutMenu;
