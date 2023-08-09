import mongoose from "mongoose";
import { DynamicLevelModel } from "../models/dynamic-level.model";
import { HomePageModel } from "../models/home-page.model";

export const seedDynamicLevel = async () => {
  DynamicLevelModel.create({
    name: 'test'
  })
};
export const seedHomePageModel = async() => {
  HomePageModel.create({
  dynamicLevel: new mongoose.Types.ObjectId()
  })
}

(async () => {
  await seedDynamicLevel();
  await seedHomePageModel();
})();