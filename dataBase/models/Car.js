module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            }           
        },
        {
            tableName: 'cars_',
            timestamps: false
        }
    );
    const User = require('./User')(client, DataTypes);
    Car.belongsTo(User, { foreignKey: 'user_id', as: 'user'});

    return Car;
};



