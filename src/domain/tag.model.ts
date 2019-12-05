import sequelizeCustom from "../infra/sequelizeCustom";
import Sequelize from "sequelize";

export const TagModel = sequelizeCustom.define('tag', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});
