# Reference
## Attributions
<details><summary><code>client.attributions.<a href="/src/api/resources/attributions/client/Client.ts">internalBulkCreateAttributions</a>({ ...params }) -> KardApi.InternalBulkCreateAttributionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to persist attribution events. A maximum of 100 events can be included in a single request.
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
await client.attributions.internalBulkCreateAttributions({
    data: [{
            type: "offerAttribution",
            attributes: {
                issuerId: "issuerId",
                userId: "userId",
                entityId: "entityId",
                eventCode: "IMPRESSION",
                medium: "BROWSE",
                eventDate: "2024-01-15T09:30:00Z"
            }
        }, {
            type: "offerAttribution",
            attributes: {
                issuerId: "issuerId",
                userId: "userId",
                entityId: "entityId",
                eventCode: "IMPRESSION",
                medium: "BROWSE",
                eventDate: "2024-01-15T09:30:00Z"
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

**request:** `KardApi.InternalBulkCreateAttributionsRequest` 
    
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

<details><summary><code>client.attributions.<a href="/src/api/resources/attributions/client/Client.ts">internalGetAttributions</a>(organizationId, userId, { ...params }) -> KardApi.InternalGetAttributionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of attribution records with optional filtering and pagination.
Returns attribution events that match the specified criteria.
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
await client.attributions.internalGetAttributions("organizationId", "userId");

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

**request:** `KardApi.InternalGetAttributionsRequest` 
    
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

## BillingAgent
<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">createIssuerReward</a>(issuerId, userId, { ...params }) -> KardApi.CreateIssuerRewardResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to create a new reward entry in the ledger.<br/>
<b>Required scopes:</b> `reward:write`
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
await client.billingAgent.createIssuerReward("5e27318c9b346f00087fbb32", "5e27318c9b346f00087fbb32", {
    transactionIds: ["billing.TransactionId.Sample"],
    description: "Reward payout for transaction"
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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` — The ID of the user
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.CreateIssuerRewardRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">revertIssuerReward</a>(issuerId, userId, rewardId) -> KardApi.RevertIssuerRewardResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to revert a reward for the issuer
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
await client.billingAgent.revertIssuerReward("5e27318c9b346f00087fbb32", "5e27318c9b346f00087fbb32", "82ed6e40-f2f6-4f66-be17-52c03ad64414");

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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` — The ID of the user
    
</dd>
</dl>

<dl>
<dd>

**rewardId:** `KardApi.RewardId` — ID of the reward entry
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">getIssuerReward</a>(issuerId, userId, rewardId, { ...params }) -> KardApi.GetIssuerRewardResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to get a reward.<br/>
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
await client.billingAgent.getIssuerReward("5e27318c9b346f00087fbb32", "5e27318c9b346f00087fbb32", "82ed6e40-f2f6-4f66-be17-52c03ad64414");

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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` — The ID of the user
    
</dd>
</dl>

<dl>
<dd>

**rewardId:** `KardApi.RewardId` — ID of the reward entry
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetIssuerRewardRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">getIssuerRewards</a>(issuerId, userId, { ...params }) -> KardApi.GetIssuerRewardsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to list rewards. MUST BE FILTERED<br/>
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
await client.billingAgent.getIssuerRewards("5e27318c9b346f00087fbb32", "5e27318c9b346f00087fbb32");

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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` — The ID of the user
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetIssuerRewardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">getIssuerMatchedTransactionInfo</a>(issuerId, userId, { ...params }) -> KardApi.GetIssuerMatchedTransactionInfoResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to get information on a list of matched transactions
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
await client.billingAgent.getIssuerMatchedTransactionInfo("5e27318c9b346f00087fbb32", "5e27318c9b346f00087fbb32", {
    transactionIds: "123456,876543"
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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` — The ID of the user
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetIssuerMatchedTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">eomUpdates</a>(issuerId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to get information on a list of matched transactions
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
await client.billingAgent.eomUpdates("issuerId", {
    data: [{
            type: "matchedTransaction",
            id: "id",
            attributes: {
                "attributes": {
                    "key": "value"
                }
            }
        }, {
            type: "matchedTransaction",
            id: "id",
            attributes: {
                "attributes": {
                    "key": "value"
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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.EomUpdatesRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingAgent.<a href="/src/api/resources/billingAgent/client/Client.ts">updateMatchedTransaction</a>(issuerId, userId, transactionId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to update a matched transaction with adjusted commission
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
await client.billingAgent.updateMatchedTransaction("5e27318c9b346f00087fbb32", "5e27318c9b346f00087fbb32", "123456", {
    data: {
        issuerAmount: 100,
        cardholderAmount: 100,
        kardFee: 100
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

**issuerId:** `KardApi.IssuerId` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**userId:** `KardApi.UserId` — The ID of the user
    
</dd>
</dl>

<dl>
<dd>

**transactionId:** `KardApi.TransactionId` — The ID of the transaction
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.UpdateMatchedTransactionRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BillingService
<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">createReward</a>({ ...params }) -> KardApi.CreateRewardResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to create a new reward entry in the ledger.<br/>
<b>Required scopes:</b> `rewards:write`
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
await client.billingService.createReward({
    transactionIds: ["5e27318c9b346f00087fbb32"],
    issuerId: "5e27318c9b346f00087fbb32",
    userId: "5e27318c9b346f00087fbb32",
    description: "Reward payout for transaction"
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

**request:** `KardApi.CreateRewardRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">getReward</a>(rewardId, { ...params }) -> KardApi.GetRewardResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to get a reward by its ID.
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
await client.billingService.getReward("abd6e578-d130-44e6-bf4b-8dddb31038b0", {
    entries: true
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

**rewardId:** `KardApi.RewardId` — ID of the reward entry
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetRewardRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">getRewards</a>({ ...params }) -> KardApi.GetRewardsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to list rewards. MUST BE FILTERED<br/>
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
await client.billingService.getRewards();

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

**request:** `KardApi.GetRewardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">getRewardEntries</a>({ ...params }) -> KardApi.GetRewardEntriesResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to list reward entries.<br/>
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
await client.billingService.getRewardEntries();

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

**request:** `KardApi.GetRewardEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">updateReward</a>(rewardId, { ...params }) -> KardApi.UpdateRewardResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to create an adjustment entry in the ledger for a reward.
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
await client.billingService.updateReward("abd6e578-d130-44e6-bf4b-8dddb31038b0", {
    issuerAmount: 0,
    cardHolderAmount: 0,
    kardFees: -50,
    description: "Waive fees for transaction"
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

**rewardId:** `KardApi.RewardId` — ID of the reward entry
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.UpdateRewardRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">revertReward</a>(rewardId) -> KardApi.RevertRewardsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to revert a reward
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
await client.billingService.revertReward("82ed6e40-f2f6-4f66-be17-52c03ad64414");

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

**rewardId:** `KardApi.RewardId` — ID of the reward entry
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">revertRewards</a>({ ...params }) -> KardApi.RevertRewardsResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to revert rewards
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
await client.billingService.revertRewards();

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

**request:** `KardApi.RevertRewardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">uploadInvoiceStatus</a>() -> KardApi.InvoiceStatusFileResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint get a presigned URL that can be used to upload the EOM invoice status file.
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
await client.billingService.uploadInvoiceStatus();

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

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billingService.<a href="/src/api/resources/billingService/client/Client.ts">triggerMerchantInvoice</a>(merchantId, { ...params }) -> KardApi.TriggerMerchantInvoiceResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Triggers the job to issue a merchant invoice
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
await client.billingService.triggerMerchantInvoice("merchantId", {
    startDate: "2024-01-15T09:30:00Z",
    endDate: "2024-01-15T09:30:00Z"
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

**merchantId:** `KardApi.MerchantId` — ID of the reward entry
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.TriggerMerchantInvoiceRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillingServiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Eligibility-Broker
<details><summary><code>client.eligibilityBroker.<a href="/src/api/resources/eligibilityBroker/client/Client.ts">ingest</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send events to be ingested by the eligibility broker to change a user's eligibility.
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
await client.eligibilityBroker.ingest({
    data: [{
            type: "segmentUser",
            attributes: {
                userId: "6FHt5b6Fnp0qdomMEy5AN6PXcSJIeX69",
                issuerId: "00073100",
                segmentId: "5eb2d4a39ce24e00081488c4",
                status: "ACTIVE",
                eventTime: "2021-07-02T17:47:06Z"
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

**request:** `KardApi.IngestRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EligibilityBrokerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Experiments
<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">listExperiments</a>({ ...params }) -> KardApi.ListExperimentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A list of experiments.
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
await client.experiments.listExperiments();

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

**request:** `KardApi.ListExperiments` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">getExperimentById</a>({ ...params }) -> KardApi.ExperimentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an experiment by id.
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
await client.experiments.getExperimentById({
    id: "3fc40dd7-f74e-40fc-8236-027fb98ae8a5"
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

**request:** `KardApi.GetExperimentById` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">createExperiment</a>({ ...params }) -> KardApi.ExperimentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an experiment.
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
await client.experiments.createExperiment({
    type: "experiment",
    attributes: {
        name: "Experiment 1"
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

**request:** `KardApi.ExperimentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">updateExperiment</a>({ ...params }) -> KardApi.ExperimentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an experiment.
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
await client.experiments.updateExperiment({
    id: "3fc40dd7-f74e-40fc-8236-027fb98ae8a5",
    body: {
        type: "experiment",
        attributes: {
            name: "Experiment 1"
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

**request:** `KardApi.UpdateExperiment` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">createOfferLink</a>({ ...params }) -> KardApi.OfferLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an offer link for an experiment.
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
await client.experiments.createOfferLink({
    type: "offer_link",
    attributes: {
        experimentId: "a52cd8d3-a6a3-4819-a7e2-8bb5736f8ac8",
        offerId: "a52cd8d3-a6a3-4819-a7e2-8bb5736f8ac8",
        status: "DRAFT"
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

**request:** `KardApi.OfferLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">listOfferLinks</a>({ ...params }) -> KardApi.ListOfferLinksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all offer links for an experiment.
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
await client.experiments.listOfferLinks({
    experimentId: "3fc40dd7-f74e-40fc-8236-027fb98ae8a5"
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

**request:** `KardApi.ListOfferLinks` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">getOfferLinkById</a>({ ...params }) -> KardApi.OfferLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an offer link by id.
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
await client.experiments.getOfferLinkById({
    id: "a52cd8d3-a6a3-4819-a7e2-8bb5736f8ac8"
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

**request:** `KardApi.GetOfferLinkById` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">updateOfferLink</a>({ ...params }) -> KardApi.OfferLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an offer link for an experiment.
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
await client.experiments.updateOfferLink({
    id: "a52cd8d3-a6a3-4819-a7e2-8bb5736f8ac8",
    body: {
        type: "offer_link",
        attributes: {
            experimentId: "a52cd8d3-a6a3-4819-a7e2-8bb5736f8ac8",
            offerId: "a52cd8d3-a6a3-4819-a7e2-8bb5736f8ac8",
            status: "DRAFT"
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

**request:** `KardApi.UpdateOfferLink` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">deleteOfferLink</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an offer link for an experiment.
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
await client.experiments.deleteOfferLink({
    id: "3fc40dd7-f74e-40fc-8236-027fb98ae8a5"
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

**request:** `KardApi.DeleteOfferLink` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Files
<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">internalSaveFile</a>(organizationId, { ...params }) -> KardApi.SaveFilesMetadataResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to save conciliation file metadata.
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
await client.files.internalSaveFile("organizationId", {
    data: [{
            id: "id",
            type: "earnedRewardApprovedDailyReconciliationFile",
            attributes: {
                fileName: "fileName",
                bucketName: "bucketName",
                lastModified: "lastModified",
                sentAt: "sentAt"
            },
            relationships: {
                "relationships": {
                    data: {
                        type: "type",
                        id: "id"
                    }
                }
            }
        }, {
            id: "id",
            type: "earnedRewardApprovedDailyReconciliationFile",
            attributes: {
                fileName: "fileName",
                bucketName: "bucketName",
                lastModified: "lastModified",
                sentAt: "sentAt"
            },
            relationships: {
                "relationships": {
                    data: {
                        type: "type",
                        id: "id"
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

**request:** `KardApi.SaveFilesMetadataRequest` 
    
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

## Offers
<details><summary><code>client.offers.<a href="/src/api/resources/offers/client/Client.ts">getOffers</a>({ ...params }) -> KardApi.OffersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get offers
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
await client.offers.getOffers();

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

**request:** `KardApi.GetOffersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OffersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.offers.<a href="/src/api/resources/offers/client/Client.ts">getOfferById</a>(offerId, { ...params }) -> KardApi.OfferResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific offer by ID
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
await client.offers.getOfferById("offerId");

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

**offerId:** `string` — Unique identifier of the offer
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetOfferByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OffersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.offers.<a href="/src/api/resources/offers/client/Client.ts">createOffer</a>({ ...params }) -> KardApi.OfferResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new offer
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
await client.offers.createOffer({
    data: {
        type: "offer",
        attributes: {
            name: "name",
            merchantId: "merchantId",
            offerType: "INSTORE",
            isLocationSpecific: true,
            status: "INACTIVE",
            merchantNetwork: "merchantNetwork",
            optInRequired: true,
            qualifiedIssuer: ["qualifiedIssuer", "qualifiedIssuer"],
            commissionType: "FLAT",
            commissionValue: 1.1,
            issuerCommissionsMap: {
                "issuerCommissionsMap": 1.1
            },
            startDate: "2024-01-15T09:30:00Z",
            expirationDate: "2024-01-15T09:30:00Z",
            redeemableOnce: true,
            source: "NATIONAL",
            attribution: {
                isRequired: true,
                events: ["IMPRESSION", "IMPRESSION"]
            }
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

**request:** `KardApi.CreateOfferRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OffersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.offers.<a href="/src/api/resources/offers/client/Client.ts">updateOffer</a>(offerId, { ...params }) -> KardApi.OfferResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing offer (replaces all fields - omitted optional fields will be removed)
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
await client.offers.updateOffer("offerId", {
    data: {
        type: "offer",
        attributes: {
            name: "name",
            merchantId: "merchantId",
            offerType: "INSTORE",
            isLocationSpecific: true,
            status: "INACTIVE",
            merchantNetwork: "merchantNetwork",
            optInRequired: true,
            qualifiedIssuer: ["qualifiedIssuer", "qualifiedIssuer"],
            commissionType: "FLAT",
            commissionValue: 1.1,
            issuerCommissionsMap: {
                "issuerCommissionsMap": 1.1
            },
            startDate: "2024-01-15T09:30:00Z",
            expirationDate: "2024-01-15T09:30:00Z",
            redeemableOnce: true,
            source: "NATIONAL",
            attribution: {
                isRequired: true,
                events: ["IMPRESSION", "IMPRESSION"]
            }
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

**offerId:** `string` — Unique identifier of the offer to update
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.UpdateOfferRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OffersClient.RequestOptions` 
    
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

## Queue Dispatcher
<details><summary><code>client.queueDispatcher.<a href="/src/api/resources/queueDispatcher/client/Client.ts">dispatchEvent</a>(organizationId, issuerName, { ...params }) -> KardApi.GenericNotificationResponseObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to dispatch an event to the notifications service queue.<br/>
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
await client.queueDispatcher.dispatchEvent("organizationId", "issuerName", {
    "X-Kard-IssuerID": "X-Kard-IssuerID",
    body: {
        data: [{
                id: "id",
                type: "type",
                attributes: {
                    "attributes": {
                        "key": "value"
                    }
                },
                relationships: {
                    "relationships": {
                        data: {
                            type: "type",
                            id: "id"
                        }
                    }
                }
            }, {
                id: "id",
                type: "type",
                attributes: {
                    "attributes": {
                        "key": "value"
                    }
                },
                relationships: {
                    "relationships": {
                        data: {
                            type: "type",
                            id: "id"
                        }
                    }
                }
            }]
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

**issuerName:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GenericNotificationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueueDispatcherClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SegmentUsers
<details><summary><code>client.segmentUsers.<a href="/src/api/resources/segmentUsers/client/Client.ts">getStatus</a>(issuerId, referringPartnerUserId, { ...params }) -> KardApi.GetStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check if a user is in a segment
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
await client.segmentUsers.getStatus("issuerId", "referringPartnerUserId", {
    segmentIds: ["segmentIds", "segmentIds"]
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

**issuerId:** `string` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**referringPartnerUserId:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetStatusRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentUsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segmentUsers.<a href="/src/api/resources/segmentUsers/client/Client.ts">getStatuses</a>(issuerId, { ...params }) -> KardApi.GetStatusesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check if users are in segments
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
await client.segmentUsers.getStatuses("issuerId", {
    referringPartnerUserIds: ["referringPartnerUserIds", "referringPartnerUserIds"]
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

**issuerId:** `string` — The id of the issuer
    
</dd>
</dl>

<dl>
<dd>

**request:** `KardApi.GetStatusesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentUsersClient.RequestOptions` 
    
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

## TxnMapService
<details><summary><code>client.txnMapService.<a href="/src/api/resources/txnMapService/client/Client.ts">deleteTxnMap</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Call this endpoint to delete one or many transaction maps entry.
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
await client.txnMapService.deleteTxnMap({
    data: [{
            type: "matchedTransaction",
            id: "id"
        }, {
            type: "matchedTransaction",
            id: "id"
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

**request:** `KardApi.DeleteTxnMapRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TxnMapServiceClient.RequestOptions` 
    
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
