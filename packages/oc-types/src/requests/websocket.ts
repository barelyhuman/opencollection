/**
 * WebSocket request definitions
 */

import type { Auth } from '../common/auth';
import type { Description } from '../common/description';
import type { Scripts } from '../common/scripts';
import type { Variable } from '../common/variables';
import type { Tag } from '../common/tags';
import type { HttpRequestHeader } from './http';

export type WebSocketMessageType = 'text' | 'json' | 'xml' | 'binary';

export interface WebSocketMessage {
  type: WebSocketMessageType;
  data: string;
}

export interface WebSocketMessageVariant {
  title: string;
  selected?: boolean;
  message: WebSocketMessage;
}

export type WebSocketPayload = WebSocketMessage | WebSocketMessageVariant[];

export interface WebSocketRequestSettings {
  timeout?: number | 'inherit';
  keepAliveInterval?: number | 'inherit';
}

export interface WebSocketRequestInfo {
  name?: string;
  description?: Description;
  type?: 'websocket';
  seq?: number;
  tags?: Tag[];
}

export interface WebSocketRequestDetails {
  url?: string;
  headers?: HttpRequestHeader[];
  message?: WebSocketPayload;
  auth?: Auth;
}

export interface WebSocketRequestRuntime {
  variables?: Variable[];
  scripts?: Scripts;
}

export interface WebSocketRequest {
  info?: WebSocketRequestInfo;
  websocket?: WebSocketRequestDetails;
  runtime?: WebSocketRequestRuntime;
  settings?: WebSocketRequestSettings;
  docs?: string;
}
