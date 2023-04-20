import { Router } from 'express'
import custumers from './app/controllers/CustomersController'

const routes = new Router()

routes.get('/customers', custumers.index)
routes.get('/customers/:id', custumers.show)
routes.post('/customers', custumers.create)
routes.put('/customers/:id', custumers.update)
routes.delete('/customers/:id', custumers.destroy)

export default routes
