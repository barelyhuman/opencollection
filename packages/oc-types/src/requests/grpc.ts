/**
 * gRPC request definitions
 */

import type { Auth } from '../common/auth';
import type { Description } from '../common/description';
import type { Assertion } from '../common/assertions';
import type { Scripts } from '../common/scripts';
import type { Variable } from '../common/variables';
import type { Tag } from '../common/tags';

export interface GrpcMetadata {
  name: string;
  value: string;
  description?: Description;
  disabled?: boolean;
}

export interface GrpcRequestMessage {
  description?: Description;
  message: string;
}

export type GrpcMessage = string;

export interface GrpcMessageVariant {
  title: string;
  selected?: boolean;
  message: GrpcMessage;
}

export type GrpcMessagePayload = GrpcMessage | GrpcMessageVariant[];

export type GrpcMethodType =
  | 'unary'
  | 'client-streaming'
  | 'server-streaming'
  | 'bidi-streaming';

export interface GrpcRequestInfo {
  name?: string;
  description?: Description;
  type?: 'grpc';
  seq?: number;
  tags?: Tag[];
}

export interface GrpcRequestDetails {
  url?: string;
  method?: string;
  methodType?: GrpcMethodType;
  protoFilePath?: string;
  metadata?: GrpcMetadata[];
  message?: GrpcMessagePayload;
  auth?: Auth;
}

export interface GrpcRequestRuntime {
  variables?: Variable[];
  scripts?: Scripts;
  assertions?: Assertion[];
}

export interface GrpcRequest {
  info?: GrpcRequestInfo;
  grpc?: GrpcRequestDetails;
  runtime?: GrpcRequestRuntime;
  docs?: string;
}
