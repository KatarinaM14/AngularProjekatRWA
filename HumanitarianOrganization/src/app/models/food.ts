export interface Food{
    id: number,
    category : string | null,
    name : string | null,
    donor : string | null,
    image : string | null,
    like : number ,
}

export var FoodModel: Food = {
    id: 0,
    category : null,
    name : null,
    donor : null,
    image : null,
    like: 0,
};
