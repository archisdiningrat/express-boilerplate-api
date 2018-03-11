module.exports = {
    up: (queryInterface, DataTypes) => {
        const schema = queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'id'
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'name'
            },
            username: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
                field: 'username'
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'password'
            },
            refreshToken: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'refresh_token'
            },
            tokenValidity: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'token_validity'
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'updated_at'
            }
        });

        return schema;
    },

    down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};