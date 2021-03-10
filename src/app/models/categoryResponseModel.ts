import { category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:category[]
}