
export const getMqttOptions = () => {
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}` 
    console.log(`mqtt client id - ${clientId}`)
    const options = {
        clientId,
        clean: true,
        connectTimeout: 4000,
        username: 'emqx',
        password: 'public',
        reconnectPeriod: 1000,
    }

    return options
}

export const getConnectionURL = () => {
    return `mqtt://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`
}

