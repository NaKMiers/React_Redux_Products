// import types from '../CONSTANTS/message'

let initialState = [
   {
      id: 1,
      name: 'Iphone 8 Plus',
      image: 'https://img.websosanh.vn/v2/users/review/images/snsbo0bd995h0.jpg?compress=85',
      description: 'Make in America',
      price: '1000',
      inventory: '100',
      rating: 5
   },
   {
      id: 2,
      name: 'Macbook Pro',
      image: 'https://www.xtmobile.vn/vnt_upload/news/07_2021/20/macbook-pro-2021-khi-nao-ra-mat-xtmobile.jpg',
      description: 'Make in America',
      price: '2000',
      inventory: '150',
      rating: 3
   },
   {
      id: 3,
      name: 'Airpods 4 Pro',
      image: 'https://cf.shopee.vn/file/7d6d9f3f072c31c7d35e596c005c25cd',
      description: 'Make in America',
      price: '750',
      inventory: '200',
      rating: 4
   }
]

function productsReducer(state = initialState, action) {
   switch (action.types) {
      default:
         return state
   }
}

export default productsReducer
