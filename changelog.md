## 2.1.0 - 2026-02-04
* feat: add UI component support for offers and locations
* Add support for UI component types in offer and location endpoints to enable
* frontend customization of offer presentations. This enhancement allows clients
* to request specific UI components and receive structured data for rendering
* offers with consistent styling and content organization.
* Key changes:
* Add supportedComponents query parameter to GetLocationsByUserRequest and GetOffersByUserRequest
* Implement UI component handling in RewardsClient for both user location and offer endpoints
* Add new types: ComponentType, ButtonStyle, CtaComponent, and OfferComponents
* Extend OfferCommonFields with optional components field for UI component data
* Support array and single value handling for supportedComponents parameter
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
