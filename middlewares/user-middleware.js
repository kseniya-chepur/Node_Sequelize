module.exports = {
    
    checkEmailValidity: (req, res, next) => {
        try {
            const user = req.body;
            
            if (!user.email.includes('@')) {
                throw new Error('Email is not valid');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkPasswordValidity: (req, res, next) => {
        try {
            const user = req.body;
            
            if (user.password.length < 3) {
                throw new Error('Your password is too weak');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    
       checkIdValidity: (req, res, next) => {
        try {
            const { userId } = req.params;

            if (userId <= 0) {
                throw new Error('User ID has to be > 0');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }  
};

