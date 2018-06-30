export interface Product {
    id: string,
    categories: object[],
    title: string,
    price: string,
    discountPrice: string,
    description: string,
    offers: number,
    vid: string,
    coverImg: string,
    imgs: object[],
    options: {
      group: string,
      name: string,
      price: string, 
    },
    fullDetails: string,
    features: object[],
    spec: {
      dimensions: string,
      weight: string
    },
    relatedProducts: object[]
  }

  // {
  //   "id": "",
  //   "categories": [],
  //   "title": "",
  //   "price": 0,
  //   "discountPrice": 0,
  //   "description": "",
  //   "offers": 0,
  //   "vid": "",
  //   "coverImg": "",
  //   "imgs": [],
  //   "option1": [
  //     {
  //       "name": "",
  //       "price": ""
  //     }
  //   ],
  //   "option2": [
  //     {
  //       "name": "",
  //       "price": ""
  //     }
  //   ],
  //   "fullDetails": "",
  //   "features": [],
  //   "spec": [
  //     {
  //       "name": "",
  //       "value": ""
  //     }
  //   ],
  //   "relatedProducts": []
  // }