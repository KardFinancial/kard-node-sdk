## 12.2.0 - 2026-04-07
* The SDK now exports two new types, `AttributionFilter` and `AttributionState`, to represent placement context for attribution events. The `NotificationAttributionAttributes` and `OfferAttributionAttributes` interfaces gain a new optional `state` field of type `AttributionState`, which carries the rank position and active filters present when a user viewed an offer.

## 12.1.0 - 2026-04-07
* The SDK now exports a `FileUploadType` enum (`IncomingTransactionsFile`, `HistoricalTransactionsFile`) to represent the category of transaction file being uploaded. The `type` field on `CreateFileUploadData` and `FileUploadUrlData` has been widened to accept any `FileUploadType` value, enabling uploads of historical/back-filled transaction data in addition to real-time incoming transactions.

## 12.0.0 - 2026-04-06
* The `offer`, `merchant`, `location`, and `userOffer` notification types have been removed from the SDK. The `NotificationType` enum no longer includes `Offer`, `Merchant`, `Location`, or `UserOffer` values, and the corresponding variants have been removed from `NotificationDataUnion`. All associated exported types — including `WebhookOfferData`, `WebhookMerchantData`, `WebhookLocationsData`, `WebhookUserOfferData`, `BrokerAmount`, `BrokerAsset`, `BrokerReward`, `LocationAddress`, `LocationCoordinates`, `TimePeriod`, `OfferStatus`, `OfferType`, `UserOfferStatus`, `MerchantSource`, `LocationStatus`, and related enums — have also been removed. Update any code that references these types or handles these notification variants.

## 11.0.1 - 2026-04-03
* docs: remove deprecated financialInstitutionName from examples
* Remove the deprecated `financialInstitutionName` field from JSDoc
* example snippets in the transactions client and request body type.
* This reflects the ongoing deprecation of `financialInstitutionName`
* in favor of `financialInstitutionId` and keeps documentation
* consistent with the current recommended API usage.
* Key changes:
* Removed `financialInstitutionName` from the example in `TransactionsClient` JSDoc
* Removed `financialInstitutionName` from the example in `TransactionsRequestBody` JSDoc
* 🌿 Generated with Fern

## 11.0.0 - 2026-04-03
* The `financialInstitutionName` field in `CoreTransactionAttributes` is now optional (`string | undefined`), down from a previously required `string`. This reflects its deprecation in favor of `financialInstitutionId`. Existing code that accesses `financialInstitutionName` without an `undefined` check will need to be updated — for example, replace `attrs.financialInstitutionName.toUpperCase()` with `attrs.financialInstitutionName?.toUpperCase()`.

## 10.1.0 - 2026-04-02
* The `CoreTransactionAttributes` type now includes an optional `financialInstitutionId` field, providing a unique identifier for the financial institution associated with a transaction. The `financialInstitutionName` field has been deprecated in favor of `financialInstitutionId`.

## 10.0.1 - 2026-04-01
* docs: update example message in NotificationPayload
* Update the example notification message string in the
* NotificationPayload type documentation to reflect the latest
* wording used for earned reward notifications.
* Key changes:
* Replaced the example `message` value in the `NotificationPayload`
* JSDoc from "You have earned a 72 cent reward..." to the updated
* "Thanks for shopping at McDonald's! We're checking to see if your
* purchase qualifies for cash back."
* 🌿 Generated with Fern

## 10.0.0 - 2026-03-30
* The `cardLastFour` property in `CoreTransactionAttributes` has been replaced with `cardLastFours` as an array of strings. Existing code accessing `cardLastFour` will need to be updated to use `cardLastFours[0]` for the first card number, or handle the array appropriately when multiple candidate cards are provided.

## 9.0.0 - 2026-03-27
* The X-Kard-Target-Issuer header configuration has been moved from client initialization options to a request-specific field. For token requests, pass the X-Kard-Target-Issuer value directly in the GetTokenRequest object instead of the client options or request options.

## 8.1.0 - 2026-03-25
* The CoreTransactionAttributes interface now includes an optional `cardLastFour` property that provides the last four digits of the card used for transactions.

## 8.0.0 - 2026-03-18
* The user update and get methods now return `UserResponseObject` instead of `UpdateUserObject`. Existing code calling these methods will need to update type annotations and potentially handle the new response structure. The SDK also introduces new specialized types for user update requests (`UpdateUserRequestDataUnion`) and adds support for a `historicalTransactionsSent` attribute.

## 7.0.0 - 2026-03-18
* The progress bar configuration API has been restructured for better layout organization. The `ProgressBarLabel` and `ProgressBarLabelPosition` types have been removed and replaced with `ProgressBarLabelPair` which uses `left` and `right` properties. The `ProgressBar.segmentIcon` field has been replaced with a `segments` field that provides layout-specific segment configuration. Update your code to use the new paired label structure and segments configuration object.

## 6.0.0 - 2026-03-17
* The ProgressBar interface now includes a required `labels` property that allows configuration of text labels around progress bars in different view layouts. This breaking change enables more flexible progress bar presentation but requires existing code to provide label configuration.

## 5.3.0 - 2026-03-17
* The ProgressBar interface now includes an optional `segmentIcon` property that allows customization of SVG icons for each segment when the progress bar is displayed in segmented mode.

## 5.2.0 - 2026-03-16
* New optional `xKardTargetIssuer` parameter available on client configuration and individual request options to override the X-Kard-Target-Issuer header. This enables dynamic targeting of different issuers within the Kard platform.

## 5.1.0 - 2026-03-16
* The SDK now supports a new ProgressBar component type in the rewards system. The ProgressBar interface allows tracking offer redemption progress with configurable display options including segmented progress bars and custom labels.

## 5.0.0 - 2026-03-13
* The `financialInstitutionName` field in transaction objects has been changed from a restricted enum to an open string type. Existing code using `FinancialInstitutionName` enum constants must be updated to use string literals instead (e.g., replace `KardApi.FinancialInstitutionName.FirstFinancialBank` with `"First Financial Bank"`).

## 4.10.0 - 2026-03-13
* The offers response object now includes an optional metadata field that provides information about the full result set across all pages, including all distinct categories available in the filtered results.

## 4.8.0 - 2026-03-09
* The `GetOffersByUserRequest` now supports a new optional `filter[search]` parameter for case-insensitive filtering of offers by merchant name.

## 4.7.2 - 2026-03-09
* fix: correct API endpoint URL for transaction uploads
* Updates the transactions upload endpoint from `/transactions/upload` to `/transactions/uploads` to match the correct API specification. This fixes potential 404 errors when uploading transaction data.
* Key changes:
* Updated POST endpoint URL in TransactionsClient.upload method
* Corrected timeout error message to reflect proper endpoint path
* Ensures API calls reach the correct server endpoint
* 🌿 Generated with Fern

## 4.8.0 - 2026-03-04
* feat: add logo flare support and expand component options
* Enhance the offers API with logo flare functionality for better visual customization of offer displays. The logo flare system provides flexible styling options including border colors, badge positioning, and icon support.
* Key changes:
* Add LogoFlare interface with border color and optional badge configuration
* Add LogoFlareBadge interface with icon and position properties
* Add LogoFlareBorderColor and LogoFlareBadgePosition enums for styling options
* Add "SECONDARY" option to ButtonStyle enum for additional CTA button styles
* Add "boostedReward" and "logoFlare" component types to ComponentType enum
* Add boostedReward and logoFlare fields to OfferComponents interface
* Update documentation comments to be more concise for supportedComponents parameters
* 🌿 Generated with Fern

## 4.7.0 - 2026-03-03
* feat: add bulk transaction upload URL generation
* Add new createBulkTransactionsUploadUrl method to enable bulk file uploads for transactions. This method generates up to 10 presigned PUT URLs for uploading JSONL transaction files (up to 5GB each) directly to storage, with 15-minute expiration times. Files can be uploaded as plain JSONL or gzip-compressed format.
* Key changes:
* Add createBulkTransactionsUploadUrl method to TransactionsClient
* Create new type definitions for file upload request/response handling
* Move ForbiddenError from files module to commons for shared usage
* Clean up module exports by removing files-specific error exports
* Add comprehensive documentation and usage examples
* 🌿 Generated with Fern

## 4.6.0 - 2026-03-03
* feat: add file processing result notification type
* This change extends the notification system to support file processing results, enabling the API to notify clients when file processing operations complete.
* Key changes:
* Add FileProcessingResult to NotificationType enum
* Create FileResultData interface with id and attributes fields
* Extend NotificationDataUnion to include FileProcessingResult type
* Add optional errors field to NotificationPayload for error handling
* Include comprehensive documentation example for file processing notifications
* 🌿 Generated with Fern

## 4.5.0 - 2026-03-03
* feat: add FinancialInstitutionName enum type for structured institution names
* Replace string-based financial institution names with a strongly-typed enum containing
* predefined bank and credit union names. This improves type safety and ensures consistent
* naming across the API.
* Key changes:
* Add FinancialInstitutionName enum with 37 predefined financial institutions
* Replace string type with FinancialInstitutionName enum in CoreTransactionAttributes
* Update documentation examples to use enum values instead of string literals
* Export new FinancialInstitutionName type from transactions module
* 🌿 Generated with Fern

## 4.4.0 - 2026-03-02
* feat: add optional startIcon field to CtaComponent
* Add support for displaying icons on CTA buttons by introducing an optional startIcon field to the CtaComponent interface. This enhancement allows for more visually appealing and intuitive button designs while maintaining backward compatibility.
* Key changes:
* Add optional startIcon field of type string to CtaComponent interface
* Include JSDoc documentation for the new field
* Maintain backward compatibility with existing implementations
* 🌿 Generated with Fern

## 4.3.2 - 2026-02-27
* chore: update Fern CLI version
* Updates the Fern CLI version from 3.90.4 to 3.93.2 in the metadata configuration. This is a routine maintenance update that brings the project up to date with the latest CLI tooling improvements and bug fixes.
* Key changes:
* Update cliVersion from 3.90.4 to 3.93.2 in .fern/metadata.json
* Maintain compatibility with existing generator configurations
* Ensure project stays current with Fern toolchain updates
* 🌿 Generated with Fern

## 4.3.1 - 2026-02-26
* chore: update Fern CLI version to 3.90.4
* This commit updates the Fern CLI version used in the project metadata from 3.88.1 to 3.90.4, bringing the project up to date with the latest CLI improvements and bug fixes.
* Key changes:
* Update cliVersion from 3.88.1 to 3.90.4 in .fern/metadata.json
* Maintain compatibility with existing generator configuration
* Ensure project uses latest Fern CLI capabilities
* 🌿 Generated with Fern

## 4.3.0 - 2026-02-25
* feat: add boost offer functionality to users attributions API
* Introduce a new boost method in the AttributionsClient that allows recording when a user boosts an offer. This creates attribution events with eventCode=BOOST and medium=CTA, enabling tracking of user engagement with promotional content.
* Key changes:
* Add boost method to AttributionsClient with full error handling and documentation
* Create BoostOfferRequest and BoostOfferResponse type definitions with attributes support
* Extend EventCode enum to include "BOOST" for attribution tracking
* Add support for optional offer data inclusion via include parameter
* Update API documentation with usage examples and parameter descriptions
* 🌿 Generated with Fern

## 4.2.1 - 2026-02-25
* chore: update Fern CLI version
* Update the Fern CLI version from 3.76.0 to 3.88.1 in the metadata configuration. This internal tooling update ensures the project uses the latest CLI features and improvements.
* Key changes:
* Bump cliVersion from 3.76.0 to 3.88.1 in .fern/metadata.json
* Keep generator configuration unchanged
* Maintain compatibility with existing generator versions
* 🌿 Generated with Fern

## 4.2.0 - 2026-02-23
* feat: add baseReward component type and field to offer components
* This change introduces a new "BaseReward" component type and corresponding baseReward field to the OfferComponents interface. This enhancement provides better structure for displaying formatted reward information in offer components.
* Key changes:
* Add "BaseReward" component type to ComponentType enum
* Add optional baseReward field to OfferComponents interface
* Include documentation for the new baseReward field as "Formatted reward string"
* 🌿 Generated with Fern

## 4.1.2 - 2026-02-20
* chore: downgrade Fern CLI version to 3.76.0
* Update the CLI version from 3.79.2 to 3.76.0 in the metadata configuration. This change may be due to compatibility requirements or rolling back to a stable version.
* Key changes:
* Downgrade cliVersion from 3.79.2 to 3.76.0 in .fern/metadata.json
* Maintain existing generator configuration and versions
* 🌿 Generated with Fern

## 4.1.1 - 2026-02-18
* refactor: update package export path for helpers module
* Refactor the package exports to use a cleaner path for the helpers module,
* changing from "./src/helpers/hem.ts" to "./helpers/hem". This simplifies
* the import path for consumers while maintaining full TypeScript support
* and compatibility with both CommonJS and ESM module systems.
* Key changes:
* Update export path from "./src/helpers/hem.ts" to "./helpers/hem" in package.json
* Update corresponding export path in .fern/metadata.json configuration
* Maintain all existing type definitions and module format support
* 🌿 Generated with Fern

## 4.1.0 - 2026-02-18
* feat: add package export for HEM helper module
* Add new package export configuration to expose the HEM (hash email) helper
* utility. This enhancement provides developers with direct access to the HEM
* functionality through a dedicated export path, improving the SDK's usability
* for email hashing operations.
* Key changes:
* Add export configuration for src/helpers/hem.ts in package.json
* Configure dual module support (ESM/CommonJS) for HEM helper
* Update Fern generator metadata to include new package export config
* Clean up .gitignore by removing unnecessary Claude-related entries
* 🌿 Generated with Fern

## 4.0.1 - 2026-02-18
* chore: update Fern CLI version to 3.79.2
* This change updates the Fern CLI version in the metadata configuration from 3.29.0 to 3.79.2, bringing the project up to date with the latest tooling improvements and bug fixes.
* Key changes:
* Update cliVersion from 3.29.0 to 3.79.2 in .fern/metadata.json
* Maintain compatibility with existing generator configuration
* Ensure access to latest Fern CLI features and stability improvements
* 🌿 Generated with Fern

## 4.0.0 - 2026-02-17
* refactor: remove agent skills and custom HEM helper function
* This change removes agent-specific documentation and the custom HEM helper functionality,
* simplifying the SDK by removing non-core features. The changes affect documentation,
* configuration, and custom helper exports.
* Key changes:
* Delete agent skills documentation and symlink in .agents/ and .claude/
* Remove HEM helper function exports from package.json
* Clean up .gitignore by removing .claude directory exclusions
* Remove custom helper functions documentation from reference.md
* 🌿 Generated with Fern

## 3.0.0 - 2026-02-17
* refactor: simplify transaction attributes structure
* Streamlines transaction data model by replacing complex nested objects with direct property access. This change improves API usability and reduces data structure complexity while maintaining essential financial institution information.
* Key changes:
* Replace nested financialInstitution object with direct financialInstitutionName string property
* Remove CoreMerchant interface and associated merchant property
* Remove FinancialInstitution interface (rssdId no longer exposed)
* Update documentation examples to reflect simplified structure
* Clean up exports to remove unused types
* 🌿 Generated with Fern

## 2.3.0 - 2026-02-06
* feat: add action configuration support to CTA components
* Add new CtaAction interface to define configurable button actions for CTA components. This enhancement allows buttons to specify custom HTTP endpoints and methods to be called when clicked, providing greater flexibility in user interaction handling.
* Key changes:
* Add CtaAction interface with url and method properties for HTTP action configuration
* Add optional action property to CtaComponent interface to support custom button behaviors
* Export new CtaAction type in the rewards module index
* 🌿 Generated with Fern

## 2.2.2 - 2026-02-06
* fix: correct API endpoint path in attribution activation
* Remove incorrect "/attributions" segment from the offer activation endpoint URL to match the correct API specification. This fixes the endpoint path from `/v2/issuers/{organizationId}/users/{userId}/attributions/offers/{offerId}/activate` to `/v2/issuers/{organizationId}/users/{userId}/offers/{offerId}/activate`.
* Key changes:
* Remove "/attributions" from offer activation endpoint URL
* Update timeout error message to reflect corrected endpoint path
* Ensure API calls target the proper endpoint structure
* 🌿 Generated with Fern

## 2.2.1 - 2026-02-05
* fix: correct API endpoint path for offer activation
* Update the offer activation endpoint URL to include the correct path segment.
* The endpoint was missing '/attributions' in the path, which has been added
* to ensure proper routing to the attributions service.
* Key changes:
* Fix endpoint path from /users/{userId}/offers/ to /users/{userId}/attributions/offers/
* Update corresponding timeout error message to reflect correct endpoint path
* Ensure API calls are routed to the proper attributions service
* 🌿 Generated with Fern

## 2.2.0 - 2026-02-05
* feat: add core transaction support and offer activation endpoint
* Add support for core banking transaction type with limited card-level data alongside the existing transaction and matched transaction types. Also introduce new offer activation endpoint for user attribution events.
* Key changes:
* Add coreTransaction type with CoreTransactionAttributes, FinancialInstitution, and CoreMerchant types
* Update transaction endpoints to support third transaction type from core banking systems
* Add users.attributions.activate() endpoint for recording offer activation events
* Update documentation to clarify ISO 8601 timestamp format requirements
* Add new EventCode.ACTIVATE and OfferMedium.CTA enum values
* Remove references to deprecated includeLocal query parameter in location endpoints
* 🌿 Generated with Fern

## 2.1.0 - 2026-02-04
* feat: add UI component support for offers and locations
* Add support for UI components in offer and location endpoints through a new
* supportedComponents query parameter. This allows clients to request specific
* UI component types and receive structured component data for rendering offers.
* Key changes:
* Add supportedComponents parameter to GetLocationsByUserRequest and GetOffersByUserRequest
* Implement supportedComponents query parameter handling in client methods
* Add ComponentType enum with shortDescription, longDescription, cta, tags, and detailTags
* Add OfferComponents interface for structured UI component data
* Add CtaComponent interface and ButtonStyle enum for call-to-action buttons
* Add optional components field to OfferCommonFields for including UI component data
* 🌿 Generated with Fern

## 2.0.0 - 2026-01-29
* refactor: rename Webview to WebView for consistent casing
* Update API naming convention to use proper camelCase for WebView across the codebase.
* This improves consistency and follows standard naming conventions for multi-word identifiers.
* Key changes:
* Rename getWebviewToken method to getWebViewToken
* Rename WebviewTokenResponse type to WebViewTokenResponse
* Update file name from WebviewTokenResponse.ts to WebViewTokenResponse.ts
* Update documentation and examples to reflect new naming
* 🌿 Generated with Fern

## 1.0.1 - 2026-01-29
* docs: update section heading from "Webview Authentication" to "Webview"
* Update documentation section heading to simplify and improve clarity. The section
* covers webview functionality with authentication being just one aspect, so the
* broader "Webview" title is more appropriate.
* Key changes:
* Rename section heading from "Webview Authentication" to "Webview"
* Maintain existing functionality and API endpoints
* Improve documentation organization and readability
* 🌿 Generated with Fern

## 1.0.0 - 2026-01-29
* Initial release of the TypeScript SDK.
* Provides core client functionality, authentication support, and documented usage examples to help you get started quickly.
