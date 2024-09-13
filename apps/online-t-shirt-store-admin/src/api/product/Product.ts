import { JsonValue } from "type-fest";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  stockQuantity: number | null;
  updatedAt: Date;
};
