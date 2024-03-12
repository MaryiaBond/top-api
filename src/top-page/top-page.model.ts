import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export class TopPageAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}
export class hhData {
  @prop()
  count: number;
  @prop()
  juniorSalary: number;
  @prop()
  middleSalary: number;
  @prop()
  seniorSalary: number;
}
export enum TopLevelCategory {
  Courses,
  Servises,
  Books,
  Products,
}
export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;
  @prop()
  secondCategory: string;
  @prop()
  title: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  category: string;
  @prop({ type: () => hhData })
  hh?: hhData;
  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
