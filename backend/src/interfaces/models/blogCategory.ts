import { Document, ObjectId } from "mongoose";

interface blogCategoryInterface extends Document {
    categoryName : string,
    categoryImage : string,
    categoryParent : ObjectId,
    createdBy : ObjectId,
    updatedBy : ObjectId
}

export default blogCategoryInterface;