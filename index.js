const PORT = process.env.PORT || 5000
const Application = require('./framework/application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseURL = require('./framework/parseUrl')
const app = new Application() 



app.addRouter(userRouter)
app.useMiddleWare(parseURL('http://localhost:5000'))
app.useMiddleWare(jsonParser)
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
