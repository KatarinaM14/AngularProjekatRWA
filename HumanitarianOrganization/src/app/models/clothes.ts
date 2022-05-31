export interface Clothes {
    id: number,
    category: string,
    donor : string,
    description : string,
    image: string,
    like: number
}

export var ClothesModel: Clothes = {
    id: 0,
    category: '',
    donor : '',
    description : '',
    image: '',
    like: 0
}