const app = require('./app')
const CONFIG = require('./config/config')

app.listen(CONFIG.port, (req, res) => console.log(`Server listening to ${CONFIG.port} port`))