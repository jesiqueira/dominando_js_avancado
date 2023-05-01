/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('customers', 'status', {
            type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
            allowNull: false,
            defaultValue: 'ACTIVE',
        })
    },

    down(queryInterface) {
        return queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.removeColumn('customers', 'status', { transaction })
            await queryInterface.sequelize.query('DROP TYPE enum_customers_status', { transaction })
        })
        // await queryInterface.removeColumn('customers', 'status')
    },
}
