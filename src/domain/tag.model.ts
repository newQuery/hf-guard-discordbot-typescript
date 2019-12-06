import sequelizeCustom from "../infra/sequelizeCustom";
import Sequelize, {BuildOptions, Model} from "sequelize";

interface tagModel extends Model {
    name?: string;
    description?: string;
    username?: string;
    usage_count: 0;
}

type MyModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): tagModel;
}

export default <MyModelStatic>sequelizeCustom.define('tag', {
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
