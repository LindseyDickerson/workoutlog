module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};