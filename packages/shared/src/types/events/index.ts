// WebSocket event types will be exported here

export interface WebSocketEvent<T = unknown> {
  type: string;
  payload: T;
  timestamp: string;
}
