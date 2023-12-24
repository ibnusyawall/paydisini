import axios from 'axios'
import Helpers from '../helpers/index.js'

import { ICreateTransactionParams, ICheckTransactionParams, ICancelTransactionParams, IPaymentGuideParams, ICallbackStatusParams } from '../interfaces/paydisini.interface.js'

/**
 * Unofficial Paydisini API
 * @author Ibnusyawall <https://wa.me/6282299265151>
 */
export class Paydisini {
    baseURL: string = 'https://paydisini.co.id/api/';
    key: string;

    /**
     * api key merchant
     * @param {string} key:string
     * @returns {any}
     */
    constructor(key: string){
        this.key = key
    }

   /**
     * Create New Transaction
     * @param {Object} options - The create transaction options
     * @param {string} options.unique_code unique code of transaction
     * @param {number} options.service code service of payment channel
     * @param {number} options.amount amount transaction
     * @param {string} options.note optional note transaction 
     * @param {number} [options.valid_time=10800] optional valid time in second | min: 1800, max: 10800 | default: 10800 = 3 Hours
     * @param {string} options.ewallet_phone required if type of service is e-wallet
     * @param {number} [options.type_fee=1] fee type, 1 for fee borne by customer, 2 for Fee borne by merchant | default: 1
     * @returns {Promise<any>}
     */
    createTransaction({
        unique_code,
        service,
        amount,
        note,
        valid_time = 10800,
        ewallet_phone,
        type_fee = 1,
    }: ICreateTransactionParams): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                let signature = Helpers.generateSignature(`${this.key}${unique_code}${service}${amount}${valid_time}${'NewTransaction'}`);
                let { data } = await axios.post(this.baseURL, {
                    key: this.key,
                    request: 'new',
                    unique_code,
                    service,
                    amount,
                    note,
                    valid_time,
                    ewallet_phone,
                    type_fee,
                    signature
                }, {
                    headers: {'Content-Type': 'multipart/form-data'}
                });
                resolve(data);
            } catch ({ response }) {
                reject(response);
            }
        });
    }

    /**
     * Check Transaction
     * @param {Object} options - The check transaction options
     * @param {string} options.unique_code unique code of transaction
     * @returns {Promise<any>}
     */
    checkTransaction({
        unique_code,
    }: ICheckTransactionParams): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                let signature = Helpers.generateSignature(`${this.key}${unique_code}${'StatusTransaction'}`)
                let { data } = await axios.post(this.baseURL, {
                    key: this.key,
                    request: 'status',
                    unique_code,
                    signature
                }, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                resolve(data)
            } catch ({ response }) {
                reject(response)
            }
        })
    }

    /**
     * Cancel Transaction
     * @param {Object} options - The cancel transaction options
     * @param {string} options.unique_code unique code of transaction
     * @returns {Promise<any>}
     */
    cancelTransaction({
        unique_code,
    }: ICancelTransactionParams): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                let signature = Helpers.generateSignature(`${this.key}${unique_code}${'CancelTransaction'}`)
                let { data } = await axios.post(this.baseURL, {
                    key: this.key,
                    request: 'cancel',
                    unique_code,
                    signature
                }, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                resolve(data)
            } catch ({ response }) {
                reject(response)
            }
        })
    }

    /**
     * View Payments Channel 
     * @returns {Promise<any>}
     */
    paymentChannel(): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                let signature = Helpers.generateSignature(`${this.key}${'PaymentChannel'}`)
                let { data } = await axios.post(this.baseURL, {
                    key: this.key,
                    request: 'payment_channel',
                    signature
                }, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                resolve(data)
            } catch ({ response }) {
                reject(response)
            }
        })
    }
    
    /**
     * View Payment Guide 
     * @param {Object} options - The view transaction options
     * @param {number} options.service code service of payment channel
     * @returns {Promise<any>}
     */
    paymentGuide({
        service,
    }: IPaymentGuideParams): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                let signature = Helpers.generateSignature(`${this.key}${service}${'PaymentGuide'}`)
                let { data } = await axios.post(this.baseURL, {
                    key: this.key,
                    request: 'payment_guide',
                    service,
                    signature
                }, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                resolve(data)
            } catch ({ response }) {
                reject(response)
            }
        })
    }

    /**
     * Callback status of payment
     * @param {Object} options - The callback transaction options
     * @param {string} options.unique_code unique code of transaction
     * @param {string} options.status status: Success or Canceled
     * @returns {Promise<any>}
     */
    callbackStatus({
        unique_code,
        status,
    }: ICallbackStatusParams): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                let signature = Helpers.generateSignature(`${this.key}${unique_code}${'CallbackStatus'}`)
                let { data } = await axios.post(this.baseURL, {
                    key: this.key,
                    unique_code,
                    status,
                    signature
                }, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                resolve(data)
            } catch ({ response }) {
                reject(response)
            }
        })
    }
}