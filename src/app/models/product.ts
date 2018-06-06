export interface Product {
    id: string,
    title: string,
    category: string,
    description: string,
    spec: {
      dimensions: string,
      weight: string
    },
    maxDiscount: string,
    options: {
      name: string,
      price: string, 
    },
    sizes: object[],
    colours: object[],
    images: object[]
  }