import { DataTypes } from "sequelize";
import sequelize from "../db/conncetion";
const comment = sequelize.define(
  "comment",
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    updatedAt: true,
  }
);

export default comment;
