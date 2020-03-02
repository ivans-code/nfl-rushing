/* tslint:disable */
import { prop, Typegoose } from 'typegoose';

class Rushing extends Typegoose {
    @prop()
    '1st': number;
    @prop()
    '1st%': number;
    @prop()
    '20+': number;
    @prop()
    '40+': number;
    @prop()
    Att: number;
    @prop()
    AttPG: number;
    @prop()
    Avg: number;
    @prop()
    Fum: number;
    @prop()
    Lng: number;
    @prop()
    Player: string;
    @prop()
    Pos: string;
    @prop()
    TD: number;
    @prop()
    Team: string;
    @prop()
    Yds: number;
    @prop()
    YdsPG: number;
    @prop()
    LngIsTD: boolean;
}

export const RushingModel = new Rushing().getModelForClass(Rushing);
