import { DataTypes } from "sequelize";
import sequelize from "../db/conncetion";
const post = sequelize.define(
  "post",
  {
    post_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    updatedAt: true,
  }
);

export default post;
