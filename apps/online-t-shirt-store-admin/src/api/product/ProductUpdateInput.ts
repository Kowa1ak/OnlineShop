import { InputJsonValue } from "../../types";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number | null;
  stockQuantity?: number | null;
};
