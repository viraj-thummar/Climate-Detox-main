import { Document, ObjectId } from "mongoose";

interface blogInterface extends Document {
    user : ObjectId,
    articleName : string,
    articleHeading : string,
    articleMeta : [],
    articleSlug : string,
    articleURL : string,
    articleBannerImage : string,
    articleContent : string,
    articleAuthor : ObjectId,
    articlePublishDate : string,
    articleStatus : string,
    isCommentAllowed : boolean,
    isReaderCountAllowed : boolean,
    isPostModified : boolean,
    lastModificationDate : string,
    isPublic : boolean,
    isDeleted : boolean,
    updatedBy : ObjectId
}

export default blogInterface;