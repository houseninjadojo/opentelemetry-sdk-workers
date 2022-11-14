import type { DiagLogger } from '@opentelemetry/api';

/** Interface configuration for a Datadog buffer. */
export interface DatadogBufferConfig {
  /** Maximum size of a buffer. */
  maxQueueSize?: number;
  maxTraceSize?: number;
  /** Max time for a buffer can wait before being sent */
  bufferTimeout?: number;
  logger?: DiagLogger;
}
