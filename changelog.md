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
