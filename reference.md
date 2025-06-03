# Reference

## Attributions

<details><summary><code>client.attributions.<a href="/src/api/resources/attributions/client/Client.ts">createAttributionEvents</a>(organizationId, userId, { ...params }) -> KardApi.CreateAttributionResponse</code></summary>
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
await client.attributions.createAttributionEvents("{organizationId}", "{userId}", {
    data: [
        {
            type: "offerAttribution",
            attributes: {
                entityId: "60e4ba1da31c5a22a144c075",
                eventCode: "VIEW",
                medium: "SEARCH",
                eventDate: "2025-01-01T00:00:00Z",
            },
        },
        {
            type: "notificationAttribution",
            attributes: {
                entityId: "60e4ba1da31c5a22a144c076",
                eventCode: "IMPRESSION",
                medium: "PUSH",
                eventDate: "2025-01-01T00:00:00Z",
            },
        },
    ],
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

**requestOptions:** `Attributions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Rewards

<details><summary><code>client.eligibility.<a href="/src/api/resources/eligibility/client/Client.ts">getOffersByUser</a>(organizationId, userId, { ...params }) -> KardApi.OffersResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve national brand offers that a specified user is eligible for. Call this endpoint to build out your
[targeted offers UX experience](/2024-10-01/api/getting-started#b-discover-a-lapsed-customer-clo). Local offers details
can be found by calling the [Get Eligible Locations](/2024-10-01/api/eligibility/get-locations-by-user) endpoint with the
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
await client.eligibility.getOffersByUser("{organizationId}", "{userId}", {
    "page[size]": 1,
    "filter[isTargeted]": true,
    sort: "-startDate",
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

**request:** `KardApi.GetOffersByUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eligibility.<a href="/src/api/resources/eligibility/client/Client.ts">getLocationsByUser</a>(organizationId, userId, { ...params }) -> KardApi.LocationsResponseObject</code></summary>
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
await client.eligibility.getLocationsByUser("{organizationId}", "{userId}", {
    "page[size]": 1,
    "filter[latitude]": 39.9419429,
    "filter[longitude]": -75.1446869,
    "filter[radius]": 10,
    include: "offers,categories",
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

**request:** `KardApi.GetLocationsByUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notifications

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">createSubscriptions</a>(organizationId, { ...params }) -> KardApi.CreateSubscriptionsResponseObject</code></summary>
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
await client.notifications.createSubscriptions("{organizationId}", {
    data: [
        {
            type: "subscription",
            attributes: {
                eventName: "earnedRewardApproved",
                webhookUrl: "https://webhookUrl.com/post",
                enabled: true,
            },
        },
    ],
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

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Transactions

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">createIncomingTransactions</a>(organizationId, { ...params }) -> KardApi.TransactionsResponse</code></summary>
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
await client.transactions.createIncomingTransactions("{organizationId}", {
    data: [
        {
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
                    storeId: "12345",
                },
                authorizationCode: "123456",
                retrievalReferenceNumber: "100804333919",
                acquirerReferenceNumber: "1234567890123456789012345678",
                systemTraceAuditNumber: "333828",
                transactionId: "2467de37-cbdc-416d-a359-75de87bfffb0",
                cardProductId: "1234567890123456789012345678",
            },
        },
    ],
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

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createUsers</a>(organizationId, { ...params }) -> KardApi.CreateUsersObject</code></summary>
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
await client.users.createUsers("{organizationId}", {
    data: [
        {
            type: "user",
            id: "1234567890",
            attributes: {
                zipCode: "11238",
                enrolledRewards: ["CARDLINKED"],
            },
        },
    ],
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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateUser</a>(organizationId, userId, { ...params }) -> KardApi.UpdateUserObject</code></summary>
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
await client.users.updateUser("{organizationId}", "{userId}", {
    data: {
        type: "user",
        id: "1234567890",
        attributes: {
            zipCode: "11238",
            enrolledRewards: ["CARDLINKED"],
        },
    },
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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteUser</a>(organizationId, userId) -> KardApi.DeleteUserResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to delete a specified enrolled user from the rewards program and Kard's system. Users can be re-enrolled into rewards by calling the [Create User](/2024-10-01/api/users/create-users) endpoint using the same `id` from before.<br/>

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
await client.users.deleteUser("{organizationId}", "{userId}");
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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getUserById</a>(organizationId, userId) -> KardApi.UpdateUserObject</code></summary>
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
await client.users.getUserById("{organizationId}", "{userId}");
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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
