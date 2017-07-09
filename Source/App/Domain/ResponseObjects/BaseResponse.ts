module BuildingBlocksWeb.Domains.ResponseObjects {

    export interface IBaseResponse {
        contentLength: number;
        contentType: string;
        contentTypeCharSet: string;
        expires: Date;
        lastModified: Date;
        data: any;
    }

    export class BaseResponse<T> implements IBaseResponse {
        public contentLength: number;
        public contentType: string;
        public contentTypeCharSet: string;
        public expires: Date;
        public lastModified: Date;
        public data: T;
    }
}
