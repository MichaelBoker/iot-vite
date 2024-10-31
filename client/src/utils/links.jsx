import React from "react";

import { TbDevicesPlus } from "react-icons/tb";
import { TbDevicesSearch } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";



const links = [
    {text: 'Add Device', path: 'addDevice', icon: <TbDevicesPlus/>},
    {text: 'All Devices', path: 'allDevices', icon: <TbDevicesSearch/>},
    {text: 'Stats', path: '.', icon: <ImStatsBars/>},
]

export default links;