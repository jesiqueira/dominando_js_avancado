import Customer from '../models/Customer'

const customers = [
    { id: 1, name: 'Dev Samurai', site: 'http://devsamurai.com.br' },
    { id: 2, name: 'Google', site: 'http://google.com' },
    { id: 3, name: 'UOL', site: 'http://uol.com.br' },
]

class CustomersController {
    // Listagem dos customer
    async index(req, res) {
        try {
            const data = await Customer.findAll({
                limit: 1000,
            })
            return res.json(data)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }

    // recupera um customer
    show(req, res) {
        const id = parseInt(req.params.id, 10)
        const customer = customers.find((item) => item.id === id)
        const status = customer ? 200 : 404
        return res.status(status).json(customer)
    }

    // cria um customer
    create(req, res) {
        const { name, site } = req.body
        const id = customers[customers.length - 1].id + 1

        const newCustomer = { id, name, site }
        customers.push(newCustomer)

        res.status(201).json(newCustomer)
    }

    // atualiza um customer
    update(req, res) {
        const id = parseInt(req.params.id, 10)
        const { name, site } = req.body

        const index = customers.findIndex((item) => item.id === id)
        const status = index >= 0 ? 200 : 404

        if (index >= 0) {
            customers[index] = { id, name, site }
        }

        return res.status(status).json(customers[index])
    }

    // exclui um customer
    destroy(req, res) {
        const id = parseInt(req.params.id, 10)

        const index = customers.findIndex((item) => item.id === id)
        const status = index >= 0 ? 200 : 404

        if (index >= 0) {
            customers.splice(index, 1)
        }

        return res.status(status).json()
    }
}

export default new CustomersController()
