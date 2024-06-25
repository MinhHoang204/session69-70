// khởi tạo state
import { Product } from "../../interface"
const products:Product[] = [
    {
        id:1,
        image:"https://images7.alphacoders.com/596/596343.jpg",
        name:"piza1",
        price:30000,
        stock:5,
        description:"piza1"
    },
    {
        id:2,
        image:"https://riotfest.org/wp-content/uploads/2016/10/151_1stuffed_crust_pizza.jpg",
        name:"piza2",
        price:35000,
        stock:3,
        description:"piza2"
    },
    {
        id:3,
        image:"https://media.timeout.com/images/103437036/image.jpg",
        name:"piza3",
        price:40000,
        stock:4,
        description:"piza3"
    },
    {
        id:4,
        image:"https://www.cuisinart.com/globalassets/catalog/appliances/food-processors/complete-chef-cooking-food-processor/pepperonipizza_ss656275903.jpg",
        name:"piza4",
        price:50000,
        stock:6,
        description:"piza4"
    }
]
// khởi tạo hàm product reducer
const productReducer=(state = products, action:any)=>{
    switch (action.type) {
        case "":
            
            return [...state];
    
        default:
            return [...state];
    }
};
export default productReducer;