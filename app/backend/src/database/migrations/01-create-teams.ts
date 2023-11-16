import { DataTypes, Model, QueryInterface } from 'sequelize';
import Team from '../../Interfaces/ITeam';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Team>>('teams', {
          id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          teamName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'team_name',
          },
        });
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('teams');
    },
}
