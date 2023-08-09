import mongoose from 'mongoose';

run()

async function run() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test_mongoose');

  const homePageSchema = new mongoose.Schema({
    dynamicLevel: { type: mongoose.Schema.Types.ObjectId, ref: 'DynamicLevel', required: true }
  }, {
    collection: 'pageHome',
    strict: true,
    strictQuery: true,
    autoCreate: false,
    timestamps: true
  });

  const dynamicLeveLSchema = new mongoose.Schema({
    name: String
  }, {
    collection: 'dynamicLevel',
    strict: true,
    strictQuery: true,
    autoCreate: false,
    timestamps: true
  });

  const HomePageModel = mongoose.model('HomePage', homePageSchema);

  const DynamicLevelModel = mongoose.model('DynamicLevel', dynamicLeveLSchema);

  const dynamicLevel = await DynamicLevelModel.create({
    name: 'test'
  })

  const test = await HomePageModel.create({
    dynamicLevel: dynamicLevel._id
  })

  const homePage = await HomePageModel.findOne({ _id: test._id })

  console.log("before populate"+homePage);
  
  await homePage!.populate('dynamicLevel')

  console.log("after populate"+homePage);

  console.log('Done');
  process.exit(0);
}