import express from 'express'
import color from 'console-color-node'
import config from './config/host.js'

const app = express()

app.listen(config.port, (err) => {
    if (err) {
        console.error(color('red', '服务器启动失败: ', err, 'end'))
        return
    }
    console.log(color('green', '服务器启动成功: ', `http://${config.host}:${config.port}`, 'end'))
})