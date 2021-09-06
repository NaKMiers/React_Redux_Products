import types from '../CONSTANTS/ActionTypes'

// let initialState = getData() ? getData() : []

let initialState = [
   {
      product: {
         id: 3,
         name: 'Airpods 4 Pro',
         image: 'https://cf.shopee.vn/file/7d6d9f3f072c31c7d35e596c005c25cd',
         description: 'Make in America',
         price: '750',
         inventory: '200',
         rating: 4
      },
      quantity: 5
   },
   {
      product: {
         id: 2,
         name: 'Macbook Pro',
         image: 'https://www.xtmobile.vn/vnt_upload/news/07_2021/20/macbook-pro-2021-khi-nao-ra-mat-xtmobile.jpg',
         description: 'Make in America',
         price: '2000',
         inventory: '150',
         rating: 3
      },
      quantity: 2
   }
]

// function getData() {
//    return JSON.parse(localStorage.getItem('CART'))
// }
// function setData(data) {
//    return localStorage.setItem('CART', JSON.stringify(data))
// }

function cartReducer(state = initialState, action) {
   switch (action.types) {
      case types.ADD_TO_CART:
         console.log(action)
         return state
      default:
         return state
   }
}

export default cartReducer
