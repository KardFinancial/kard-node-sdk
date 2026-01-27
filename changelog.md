## 0.2.0 - 2026-01-27
* feat: add webview authentication endpoint for OAuth token retrieval
* This change introduces a new webview authentication system that allows applications to obtain OAuth tokens for user authentication within webview contexts. The implementation provides a standardized way to handle authentication flows in embedded browser environments.
* Key changes:
* Add new auth client with getWebviewToken method for OAuth token generation
* Create WebviewTokenResponse type with access_token, expires_in, and token_type fields
* Integrate auth client into the users resource hierarchy
* Add comprehensive documentation and usage examples for the new endpoint
* 🌿 Generated with Fern

