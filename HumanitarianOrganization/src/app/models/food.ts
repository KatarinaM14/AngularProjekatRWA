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
    category : '',
    name : '',
    donor : '',
    image : '',
    like: 0,
};
