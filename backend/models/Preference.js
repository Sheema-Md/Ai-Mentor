import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";
class Preference extends Model { }
Preference.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    explanation_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "balanced", // ✅ Added default value to prevent NOT NULL error
    },
    learning_style: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "step_by_step", // ✅ Added default value
    },
    teaching_pace: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "moderate", // ✅ Added default value
    },
    example_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "real_life", // ✅ Added default value
    },
    focus_area: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "concepts", // ✅ Added default value
    },
  },
  {
    sequelize,
    modelName: "Preference",
    tableName: "Preferences",
    timestamps: true,
  }
);
export default Preference;
