import mongoose from "mongoose";

export const homePageSchema = new mongoose.Schema({
  dynamicLevel: { type: mongoose.Schema.Types.ObjectId, ref: 'DynamicLevel', required: true }
}, {
  collection: 'pageHome',
  strict: true,
  strictQuery: true,
  autoCreate: false,
  timestamps: true
});

export const HomePageModel = mongoose.model('HomePage', homePageSchema);