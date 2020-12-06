const db = require('../dataBase').getInstance();

module.exports = {
    
    addUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    findUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    findUserById: (user_id) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');
        
        return CarModel.findAll({
            where: { user_id },
            include: [{ model: UserModel, as: 'user' }]
        });       
    },
    
    changeUser: (id, user) => {
        const UserModel = db.getModel('User');

        return UserModel.update(user, {           
            where: { id }
        });
    },

    destroyUser: (id) => {
        const UserModel = db.getModel('User');

        return UserModel.destroy({
            where: { id }
        });
    }
};
