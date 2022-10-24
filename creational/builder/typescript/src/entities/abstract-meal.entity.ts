import { MealCompositeI } from "../interfaces/meal-composite.interface";

export abstract class AbstractMealEntity implements MealCompositeI {
    constructor(private name: string, private price: number) {

    }

    getPrice(): number {
        return this.price;
    }
}