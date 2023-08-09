import mongoose from "mongoose";

export const dynamicLeveLSchema = new mongoose.Schema({
  name: String
}, {
  collection: 'dynamicLevel',
  strict: true,
  strictQuery: true,
  autoCreate: false,
  timestamps: true
});

export const DynamicLevelModel = mongoose.model('DynamicLevel', dynamicLeveLSchema);

