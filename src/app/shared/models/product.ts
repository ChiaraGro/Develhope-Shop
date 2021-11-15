
export type exitYear = number | Date;

export interface IProduct{
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  exitYear:exitYear;
  productHeight: number;
  productWeight: number;
  itemsProduced: number
}
