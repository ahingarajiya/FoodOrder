import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart : [],
    showCart : false,
    showCheckout:false,
    total:0
       
}
let i=0

export const mySlice = createSlice(
    {
        name : "storeSlice",
        initialState,
        reducers:{
            addtoCart:(state,action)=>{
                let { iteam } = action.payload;
                const findProduct = state.cart.findIndex(
                    (single) => single.id === iteam.id
                );
                console.log(findProduct)
                if(findProduct ==-1){
                    iteam= {...iteam ,qut :1}
                    state.cart.push(iteam)
                }else{
                    state.cart[findProduct].qut = state.cart[findProduct].qut+1
                }
            },
            removeCart:(state,action)=>{
                let { iteam } = action.payload;
                const findProduct = state.cart.findIndex(
                    (single) => single.id === iteam.id
                );
                const currentIteam = state.cart[findProduct]

                if(currentIteam.qut ==1){
                    state.cart.splice(findProduct,1)
                }else{
                    state.cart[findProduct].qut = state.cart[findProduct].qut-1

                }
            },
            showModel:(state)=>{
                i++
                console.log(state.showCart , "aa" ,i);
                const temp = state.showCart
                state.showCart = !temp
                console.log(state.showCart,"aa" , i);

            },
            showCheckout:(state)=>{
                i++
                console.log(state.showCheckout , "aa" ,i);
                const temp = state.showCheckout
                state.showCheckout = !temp
                console.log(state.showCheckout,"aa" , i);
            },
            totalUpdate:(state,action)=>{
                const total = action.payload
                state.total= total
                
            }
        }
    }
)

export const {addtoCart,removeCart,showModel,showCheckout,totalUpdate} = mySlice.actions

export default mySlice.reducer