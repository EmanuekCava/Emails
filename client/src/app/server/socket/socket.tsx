import { io } from "socket.io-client";

import { host_dev, host_prod } from "../../config/config";

const url = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? `${host_dev}` : `${host_prod}`

export const socket = io(url)