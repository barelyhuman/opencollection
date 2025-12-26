/**
 * Proxy configuration for HTTP and gRPC requests
 */

export interface ProxyConnectionAuth {
  disabled?: boolean;
  username?: string;
  password?: string;
}

export interface ProxyConnectionConfig {
  protocol?: string;
  hostname?: string;
  port?: number;
  auth?: ProxyConnectionAuth;
  bypassProxy?: string;
}

export interface Proxy {
  disabled?: boolean;
  inherit?: boolean;
  config?: ProxyConnectionConfig;
}
