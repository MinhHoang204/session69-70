// khởi tạo interface các type (kiểu dữ liệu)
export interface Product{
    id:number,
    name:string,
    description:string,
    price:number,
    stock:number,
    image:string
}

export interface ProductCart{
    id: number,
    name:string,
    description:string,
    price:number,
    stock:number,
    image:string,
    quantity:number
}