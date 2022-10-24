import { MealCompositeI } from "../interfaces/meal-composite.interface";
import { AbstractMealEntity } from "./abstract-meal.entity";

export class MealBoxEntity implements MealCompositeI {
    getPrice(): number {
        throw new Error("Method not implemented.");
    }
}