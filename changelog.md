## 2.2.0 - 2026-02-05
* feat: add coreTransaction support for transactions API
* Add support for core banking system transactions with new coreTransaction type and related data structures. This enhancement enables processing of transactions from core banking systems that have limited card-level data while maintaining compatibility with existing transaction types.
* Key changes:
* Add new CoreTransaction, CoreTransactionAttributes, CoreMerchant, and FinancialInstitution types
* Update Transactions union type to include coreTransaction option
* Add comprehensive example usage for coreTransaction in API documentation
* Standardize date format references to ISO 8601 across transaction types
* Simplify rewards API documentation by removing includeLocal parameter references
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
