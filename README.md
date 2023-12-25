# Paydisini Client for NodeJS

[![CodeFactor](https://www.codefactor.io/repository/github/ibnusyawall/paydisini/badge/main)](https://www.codefactor.io/repository/github/ibnusyawall/paydisini/overview/main)

> Unofficial client library Paydisini API

This library is the abstraction of paydisini API for access from applications written with server-side Javascript.

## Install

Use the stable version:
```
npm install @ibnusyawall/paydisini
```

Then import your code using:
``` ts 
// using ECMAScript
import { Paydisini } from '@ibnusyawall/paydisini'

// or using CommonJS
const { Paydisini } = require('@ibnusyawall/paydisini')
```

## Setup

Get the api key from [Setting Account](https://paydisini.co.id/Pengaturan-Akun)

## Usage

```ts
const client = new Paydisini("YOUR API KEY")
```

### Create Transaction
Create a new transaction

```ts
const createTransaction = await client.createTransaction(options)

console.log(createTransaction) // print result
```

* type the params of options is object
> options create transaction is available [here](https://paydisini.syawal.dev/interfaces/interfaces_paydisini_interface.ICreateTransactionParams.html)

### Check Transaction
Checking the transaction status

```ts
const cancelTransaction = await client.cancelTransaction(options)

console.log(cancelTransaction) // print result
```

* type the params of options is object
> options check transaction is available [here](https://paydisini.syawal.dev/interfaces/interfaces_paydisini_interface.ICheckTransactionParams.html)

### Cancel Transaction
Cancel a transaction

```ts
const cancelTansaction = await client.cancelTransaction(options)

console.log(cancelTansaction) // print result
```

* type the params of options is object
> options cancel transaction is available [here](https://paydisini.syawal.dev/interfaces/interfaces_paydisini_interface.ICancelTransactionParams.html)

### Payment Channel
View available of the payment channel

```ts
const channels = await client.paymentChannel()

console.log(channels) // print result
```

### Payment Guide
View service-specific payment guidance

```ts
const paymentGuide = await client.paymentGuide(options)

console.log(paymentGuide) // print result
```

* type the params of options is object
> options payment guide is available [here](https://paydisini.syawal.dev/interfaces/interfaces_paydisini_interface.IPaymentGuideParams.html)

### Callback Status
Send a POST URL Callback to the user

```ts
const callback = await client.callbackStatus(options)

console.log(callback) // print result
```

* type the params of options is object
> options callback status is available [here](https://paydisini.syawal.dev/interfaces/interfaces_paydisini_interface.ICallbackStatusParams.html)

### Author

[ibnusyawall](https://wa.me/6282299265151)