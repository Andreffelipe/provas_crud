import * as mongoose from 'mongoose';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

export interface IHeroModel extends mongoose.Document {
  name: string;
  power: string;
  amountPeopleSaved: number;
  createdAt: Date;
  modifiedAt: Date;
}

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  amountPeopleSaved: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    required: false
  },
  modifiedAt: {
    type: Date,
    required: false
  }
}).pre('save', function (next) {
  if (this._doc) {
    let doc = <IHeroModel>this._doc;
    let now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
  }
  next();
  return this;
});

export let HeroSchema = mongoose.model<IHeroModel>('hero', schema, 'heroes', true);

export class HeroModel {

  private _heroModel: IHeroModel;

  constructor(heroModel: IHeroModel) {
    this._heroModel = heroModel;
  }
  get name (): string {
    return this._heroModel.name;
  }

  get power (): string {
    return this._heroModel.power;
  }

  get amountPeopleSaved (): number {
    return this._heroModel.amountPeopleSaved;
  }

  static createHero (name: string, power: string): Promise.IThenable<IHeroModel> {
    let p = new Promise((resolve, reject) => {

      let repo = new HeroRepository();

      let hero = <IHeroModel>{
        name: name,
        power: power,
        amountPeopleSaved: 0
      };

      repo.create(hero, (err, res) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(res);
        }
      });

    });

    return p;

  }

  static findHero (name: string): Promise.IThenable<IHeroModel> {
    let p = new Promise((resolve, reject) => {
      let repo = new HeroRepository();

      repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
        if (err) {
          reject(err);
        }
        else {
          if (res.length) {
            resolve(res[0]);
          }
          else {
            resolve(null);
          }
        }
      });
    });

    return p;
  }

}

Object.seal(HeroModel);

export interface IRead<T> {
  retrieve: (callback: (error: any, result: any) => void) => void;
  findById: (id: string, callback: (error: any, result: T) => void) => void;
  findOne (cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T>;
  find (cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]>;
}

export interface IWrite<T> {
  create: (item: T, callback: (error: any, result: any) => void) => void;
  update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
  delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

export class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

  private _model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }

  create (item: T, callback: (error: any, result: T) => void) {
    this._model.create(item, callback);
  }

  retrieve (callback: (error: any, result: T) => void) {
    this._model.find({}, callback);
  }

  update (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    this._model.update({ _id: _id }, item, callback);
  }

  delete (_id: string, callback: (error: any, result: any) => void) {
    this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
  }

  findById (_id: string, callback: (error: any, result: T) => void) {
    this._model.findById(_id, callback);
  }

  findOne (cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T> {
    return this._model.findOne(cond, callback);
  }

  find (cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]> {
    return this._model.find(cond, options, callback);
  }

  private toObjectId (_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }

}

export class HeroRepository extends RepositoryBase<IHeroModel> {
  constructor() {
    super(HeroSchema);
  }
}

Object.seal(HeroRepository);

let uri = 'mongodb://localhost/heroes';
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
  else {
    console.log('Connected to MongoDb');
  }
});

HeroModel.createHero('Steve', 'Flying').then((res) => {
  console.log('### Created Hero ###');
  console.log(res);

  HeroModel.findHero('Steve').then((res) => {
    console.log('### Found Hero ###');
    console.log(res);

    // now update the Hero
    let hero = <IHeroModel>res;
    hero.power = 'Invisibility';
    hero.save((err, res) => {
      if (err) {
        console.log(err.message);
        console.log(err);
      }
      else {
        console.log(res);
      }
    });
  }, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
}, (err) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
});
