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