export interface ICreateTransactionParams {
    unique_code: string;
    service: number;
    amount: number;
    note: string;
    valid_time?: number;
    ewallet_phone: string;
    type_fee?: number;
}

export interface ICheckTransactionParams {
    unique_code: string;
}

export interface ICancelTransactionParams {
    unique_code: string;
}

export interface IPaymentGuideParams {
    service: number;
}

export interface ICallbackStatusParams {
    unique_code: string;
    status: string;
}