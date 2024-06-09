"use client"

import { notFound } from "next/navigation";
import { Metadata } from "next"; 
//Dynamic meta data 
type Props = {
    params :{
        itemId:string
    }
}
const generateRandomNumber =  (count : number)=>{
    return Math.floor(Math.random()*count)
}
// export function generateMetadata({params}:Props):Metadata {
//     return {
//         title: {
//             default :`Product - ${params.itemId}`,
//             absolute:'Dummy absolute',
//             template:'%s | Blog'
//         }
//     }
// }

export default function ItemDetails({params}:Props) {
    const randomNumber = generateRandomNumber(2)
    if(randomNumber == 1){
        throw new Error(`Item not found in the database : ${params.itemId}` )
    }
    const itemFound: boolean = true;
    if (itemFound) {
        return <h1>Item found - {params.itemId}</h1>
    } else {
        notFound()
    }
}