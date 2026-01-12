# Reference
## Auth
<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getToken</a>({ ...params }) -> KardApi.TokenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getToken({
    client_id: "client_id",
    client_secret: "client_secret"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `KardApi.GetTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Files
<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">getMetadata</a>(organizationId, { ...params }) -> KardApi.GetFilesMetadataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves metadata for files associated with a specific issuer/organization.
This endpoint supports pagination and sorting options to efficiently navigate 
through potentially large sets of file metadata.
<b>Required scopes:</b> `files.read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.getMetadata("organization-123", {
    "page[size]": 5,
    "filter[dateFrom]": "2025-02-20T21:56:23Z",
    "filter[dateTo]": "2025-03-20T21:56:23Z",
    "filter[fileType]": "earnedRewardApprovedDailyReconciliationFile",
    sort: "-sentDate"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetFilesMetadataRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Subscriptions
<details><summary><code>client.notifications.subscriptions.<a href="/src/api/resources/notifications/resources/subscriptions/client/Client.ts">get</a>(organizationId, { ...params }) -> KardApi.SubscriptionsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to fetch the subscriptions of the provided issuer.<br/>
<b>Required scopes:</b> `notifications:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.subscriptions.get("organization-123");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.notifications.GetSubscriptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.subscriptions.<a href="/src/api/resources/notifications/resources/subscriptions/client/Client.ts">create</a>(organizationId, { ...params }) -> KardApi.CreateSubscriptionsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to subscribe to notification events.<br/>
<b>Required scopes:</b> `notifications:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.subscriptions.create("organization-123", {
    data: [{
            type: "subscription",
            attributes: {
                eventName: "earnedRewardApproved",
                webhookUrl: "https://webhookUrl.com/post",
                enabled: true
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.SubscriptionRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.subscriptions.<a href="/src/api/resources/notifications/resources/subscriptions/client/Client.ts">update</a>(organizationId, subscriptionId, { ...params }) -> KardApi.UpdateSubscriptionsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to update existing notification subscriptions.<br/>
<b>Required scopes:</b> `notifications:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.subscriptions.update("organization-123", "subscription-123", {
    data: {
        type: "subscription",
        attributes: {
            eventName: "earnedRewardApproved",
            webhookUrl: "https://webhookUrl.com/post",
            enabled: true
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**subscriptionId:** `KardApi.SubscriptionId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.UpdateSubscriptionRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ping
<details><summary><code>client.ping.<a href="/src/api/resources/ping/client/Client.ts">ping</a>() -> KardApi.PingResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to verify network connectivity and service availability.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ping.ping();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transactions
<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">create</a>(organizationId, { ...params }) -> KardApi.TransactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to send all transactions made by all your enrolled users in your rewards program. The request body will depend on the transaction type.<br/>
Please use the correct type when calling the endpoint:
- `transaction`: These incoming transactions will be processed and matched by the Kard system. Learn more about the [Transaction CLO Matching](https://github.com/kard-financial/kard-postman#c-transaction-clo-matching) flow here.
- `matchedTransaction`: For pre-matched transactions that need validation on match by the Kard system.<br/>

<b>Required scopes:</b> `transaction:write`<br/>
<b>Note:</b> `Maximum of 500 transactions can be created per request`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.create("organization-123", {
    data: [{
            type: "transaction",
            id: "309rjfoincor3icno3rind093cdow3jciwjdwcm",
            attributes: {
                userId: "6FHt5b6Fnp0qdomMEy5AN6PXcSJIeX69",
                status: "APPROVED",
                amount: 1000,
                subtotal: 800,
                currency: "USD",
                direction: "DEBIT",
                paymentType: "CARD",
                description: "ADVANCEAUTO",
                description2: "ADVANCEAUTO",
                mcc: "1234",
                cardBIN: "123456",
                cardLastFour: "4321",
                authorizationDate: "2021-07-02T17:47:06Z",
                merchant: {
                    id: "12345678901234567",
                    name: "ADVANCEAUTO",
                    addrStreet: "125 Main St",
                    addrCity: "Philadelphia",
                    addrState: "PA",
                    addrZipcode: "19147",
                    addrCountry: "United States",
                    latitude: "37.9419429",
                    longitude: "-73.1446869",
                    storeId: "12345"
                },
                authorizationCode: "123456",
                retrievalReferenceNumber: "100804333919",
                acquirerReferenceNumber: "1234567890123456789012345678",
                systemTraceAuditNumber: "333828",
                transactionId: "2467de37-cbdc-416d-a359-75de87bfffb0",
                cardProductId: "1234567890123456789012345678",
                processorMids: {
                    processor: "VISA",
                    mids: {
                        vmid: "12345678901",
                        vsid: "12345678"
                    }
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.TransactionsRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">createFraudMarkers</a>(organizationId, { ...params }) -> KardApi.FraudulentTransactionObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to flag a submitted transaction as fraudulent. This will prevent it from being rewarded.<br/>

<b>Required scopes:</b>&nbsp;&nbsp;`transaction:write`<br/>
<b>Note:</b> `Maximum of 500 fraudulent transactions can be created per request`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.createFraudMarkers("organization-123", {
    data: [{
            id: "myTxnId12345",
            type: "fraudulentTransaction",
            attributes: {
                userId: "userId123"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.FraudulentTransactionRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">createAudits</a>(organizationId, userId, { ...params }) -> KardApi.CreateAuditResponseBody</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to request that a particular transaction be audited further by the Kard system, in the event of a missing cashback claim, incorrect cashback amount claim or other mis-match claims.<br/>
<b>Required scopes:</b> `audit:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.createAudits("organization-123", "user-123", {
    data: [{
            type: "audit",
            attributes: {
                auditCode: 8001,
                merchantName: "Caribbean Goodness",
                auditDescription: "duplicate transaction",
                transactionId: "issuerTransaction123"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `string` — The ID of the user as defined on the issuers system
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.CreateAuditRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">getEarnedRewards</a>(organizationId, userId, { ...params }) -> KardApi.GetEarnedRewardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve rewarded transaction history for a specific user. Returns only SETTLED transactions within the last 12 months.
<br/>
<b>Required scopes:</b> `transaction:read`
<br/>
<b>Query Limit:</b> Maximum of 12 months of transaction data can be queried.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.getEarnedRewards("org-123", "user-456", {
    "page[size]": 10
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `string` — The ID of the user as defined on the issuers system
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetEarnedRewardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">create</a>(organizationId, { ...params }) -> KardApi.CreateUsersObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to enroll a specified user into your rewards program.<br/>

<b>Required scopes:</b>&nbsp;&nbsp;`user:write`<br/>
<b>Note:</b> `Maximum of 100 users can be created per request`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.create("organization-123", {
    data: [{
            type: "user",
            id: "1234567890",
            attributes: {
                zipCode: "11238",
                enrolledRewards: ["CARDLINKED"]
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.CreateUsersObject` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>(organizationId, userId, { ...params }) -> KardApi.UpdateUserObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to update the details on a specified user.<br/>

<b>Required scopes:</b> `user:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.update("organization-123", "user-123", {
    data: {
        type: "user",
        id: "1234567890",
        attributes: {
            zipCode: "11238",
            enrolledRewards: ["CARDLINKED"]
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.UpdateUserObject` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(organizationId, userId) -> KardApi.DeleteUserResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to delete a specified enrolled user from the rewards program and Kard's system. Users can be re-enrolled into rewards by calling the [Create User](/2024-10-01/api/users/create) endpoint using the same `id` from before.<br/>

<b>Required scopes:</b> `user:delete`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.delete("organization-123", "user-123");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(organizationId, userId) -> KardApi.UpdateUserObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to fetch the details on a specified user.<br/>
<br/>
<b>Required scopes:</b>&nbsp;&nbsp;`user:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.get("organization-123", "user-123");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Attributions
<details><summary><code>client.users.attributions.<a href="/src/api/resources/users/resources/attributions/client/Client.ts">create</a>(organizationId, userId, { ...params }) -> KardApi.CreateAttributionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to send attribution events made by a single enrolled user for processing. A maximum of 100 events can be included in a single request.

<b>Required scopes:</b> `attributions:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.attributions.create("organization-123", "user-123", {
    data: [{
            type: "offerAttribution",
            attributes: {
                entityId: "60e4ba1da31c5a22a144c075",
                eventCode: "VIEW",
                medium: "SEARCH",
                eventDate: "2025-01-01T00:00:00Z"
            }
        }, {
            type: "offerAttribution",
            attributes: {
                entityId: "60e4ba1da31c5a22a144c077",
                eventCode: "IMPRESSION",
                medium: "EMAIL",
                eventDate: "2025-01-01T00:00:00Z"
            }
        }, {
            type: "notificationAttribution",
            attributes: {
                entityId: "60e4ba1da31c5a22a144c076",
                eventCode: "IMPRESSION",
                medium: "PUSH",
                eventDate: "2025-01-01T00:00:00Z"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.CreateAttributionRequestObject` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttributionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Rewards
<details><summary><code>client.users.rewards.<a href="/src/api/resources/users/resources/rewards/client/Client.ts">offers</a>(organizationId, userId, { ...params }) -> KardApi.OffersResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve national brand offers that a specified user is eligible for. Call this endpoint to build out your
[targeted offers UX experience](/2024-10-01/api/getting-started#b-discover-a-lapsed-customer-clo). Local offers details
can be found by calling the [Get Eligible Locations](/2024-10-01/api/rewards/locations) endpoint with the
`includeLocal` query parameter.<br/>
<b>Required scopes:</b> `rewards:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.rewards.offers("organization-123", "user-123", {
    "page[size]": 1,
    "filter[isTargeted]": true,
    sort: "-startDate"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.users.GetOffersByUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RewardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.rewards.<a href="/src/api/resources/users/resources/rewards/client/Client.ts">locations</a>(organizationId, userId, { ...params }) -> KardApi.LocationsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve national and local geographic locations that a specified user has eligible in-store offers at. To
include local locations, add the `includeLocal` query parameter to your api call. Use this endpoint to build
out your [map-specific UX experiences](/2024-10-01/api/getting-started#c-discover-clos-near-you-map-view). Please note
that Longitude and Latitude fields are prioritized over State, City and Zipcode and are the recommended search
pattern.<br/>
<br/>
<b>Required scopes:</b> `rewards:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.rewards.locations("organization-123", "user-123", {
    "page[size]": 1,
    "filter[latitude]": 39.9419429,
    "filter[longitude]": -75.1446869,
    "filter[radius]": 10,
    include: "offers,categories"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.users.GetLocationsByUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RewardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Uploads
<details><summary><code>client.users.uploads.<a href="/src/api/resources/users/resources/uploads/client/Client.ts">create</a>(organizationId, userId, { ...params }) -> KardApi.CreateUploadResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to create an upload session and retrieve an upload ID. Using the upload ID in the [Add Upload 
Part](/api/uploads/create-upload-part) endpoint, historical transactions can be sent in batches for further processing.
<b>Required scopes:</b> `transaction:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.uploads.create("organization-123", "user-123", {
    data: {
        type: "historicalTransactionStart",
        attributes: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `string` — The ID of the user as defined on the issuers system
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.CreateUploadRequestObject` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UploadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.uploads.<a href="/src/api/resources/users/resources/uploads/client/Client.ts">createPart</a>(organizationId, userId, uploadId, { ...params }) -> KardApi.CreateUploadPartResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint using the upload ID provided in the [Create Upload](/api/uploads/create-upload) endpoint to add parts to your upload. Currently, this endpoint supports adding historical transactions.
<b>Required scopes:</b> `transaction:write`
<b>Note:</b> `Maximum of 500 transactions can be uploaded per request`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.uploads.createPart("organization-123", "user-123", "upload-123", {
    data: [{
            type: "historicalTransaction",
            id: "309rjfoincor3icno3rind093cdow3jciwjdwcm",
            attributes: {
                userId: "6FHt5b6Fnp0qdomMEy5AN6PXcSJIeX69",
                status: "APPROVED",
                amount: 1000,
                subtotal: 800,
                currency: "USD",
                direction: "DEBIT",
                paymentType: "CARD",
                description: "ADVANCEAUTO",
                description2: "ADVANCEAUTO",
                mcc: "1234",
                cardBIN: "123456",
                cardLastFour: "4321",
                authorizationDate: "2021-07-02T17:47:06Z",
                merchant: {
                    id: "12345678901234567",
                    name: "ADVANCEAUTO",
                    addrStreet: "125 Main St",
                    addrCity: "Philadelphia",
                    addrState: "PA",
                    addrZipcode: "19147",
                    addrCountry: "United States",
                    latitude: "37.9419429",
                    longitude: "-73.1446869",
                    storeId: "12345"
                },
                authorizationCode: "123456",
                retrievalReferenceNumber: "100804333919",
                acquirerReferenceNumber: "1234567890123456789012345678",
                systemTraceAuditNumber: "333828",
                transactionId: "2467de37-cbdc-416d-a359-75de87bfffb0"
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `string` — The ID of the user as defined on the issuers system
    
</dd>
</dl>

<dl>
<dd>

**uploadId:** `string` — The upload ID identifying the upload session to add parts
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.CreateUploadPartRequestObject` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UploadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.uploads.<a href="/src/api/resources/users/resources/uploads/client/Client.ts">update</a>(organizationId, userId, uploadId, { ...params }) -> KardApi.UpdateUploadResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to update your upload session. Currently, you can signal completing a historical transactions upload.
<b>Required scopes:</b> `transaction:write`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.uploads.update("organization-123", "user-123", "upload-123", {
    data: {
        type: "historicalTransactionComplete",
        id: "7e382223-b9a5-4825-91fb-436c8957a2e7",
        attributes: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `KardApi.OrganizationId` 
    
</dd>
</dl>

<dl>
<dd>

**userId:** `string` — The ID of the user as defined on the issuers system
    
</dd>
</dl>

<dl>
<dd>

**uploadId:** `string` — The upload ID identifying the upload session to update
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.UpdateUploadRequestObject` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UploadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
