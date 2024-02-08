import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart : [],
    showCart : false,
    showCheckoutFlag:false,
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
                if(findProduct ==-1){
                    iteam= {...iteam ,qut :1}
                    state.cart=[...state.cart,iteam]
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
                const temp = state.showCart
                state.showCart = !temp

            },
            showCheckout:(state)=>{
                const temp = state.showCheckoutFlag
                state.showCheckoutFlag = !temp
            },
            totalUpdate:(state,action)=>{
                const total = action.payload
                state.total= total
                
            },

            initialStateCart:(state)=>{

                state.cart = []
                state.total=0
            }
        }
    }
)

export const {addtoCart,removeCart,showModel,showCheckout,totalUpdate,initialStateCart} = mySlice.actions

export default mySlice.reducer