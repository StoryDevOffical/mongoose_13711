import mongoose from 'mongoose';
import { HomePageModel } from './models/home-page.model';
import { DynamicLevelModel } from './models/dynamic-level.model';

run()

async function run() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test_mongoose');

  const homePage = await HomePageModel.findOne().exec();

  console.log("before populate"+homePage);
  try {
  await homePage!.populate('dynamicLevel'); 
  }
  catch(error) {
    console.log("original error from my post");
    console.log("// Schema hasn't been registered for model DynamicLevel\n"+error);
  }

  await homePage!.populate(
      { path : 'dynamicLevel', model: DynamicLevelModel } // yeh it work
  ); 
  console.log("after populate"+homePage);

  console.log('Done');
  process.exit(0);
}