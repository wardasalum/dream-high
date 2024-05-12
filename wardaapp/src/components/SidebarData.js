import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'


export const SidebarData =[
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },

    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/report1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 2',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 3',
                path: '/reports/report3',
                icon: <IoIcons.IoIosPaper />,
            },

        ]
    },
    {
        title :'Products',
        path : '/product',
        icon: <FaIcons.FaCartPlus/>,

    }




]