import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class ProductsCharacteristic {
  @prop()
  name: string;
  @prop()
  value: string;
}

export interface ProductsModel extends Base {}
export class ProductsModel extends TimeStamps {
  @prop()
  image: string;
  @prop()
  title: string;
  @prop()
  price: number;
  @prop()
  oldPrice: number;
  @prop()
  credit: number;
  @prop()
  calculatedRating: number;
  @prop()
  description: string;
  @prop()
  advantages: string;
  @prop()
  disAdvantages: string;
  @prop({ type: () => [String] })
  categories: string[];
  @prop({ type: () => [String] })
  tags: string[];
  @prop({ type: () => [ProductsCharacteristic], _id: false })
  characteristics: ProductsCharacteristic[];
}
