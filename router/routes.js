import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const routes = [
    {
        label: '菜单项一',
        key: '/about',
        icon: <MailOutlined />,
    }, // 菜单项务必填写 key
    {
        label: '菜单项二',
        key: '/other',
        icon: <AppstoreOutlined />,
    },
    {
        label: '子菜单',
        key: 'submenu',
        icon: <SettingOutlined />,
        children: [
            {
                label: '子菜单项',
                key: '/item',
            }],
    },
];

export default routes