export interface RayconnectRealtimeEventSubscribtion<
  NEXT_DATA = any,
  ERROR_DATA = any,
  EVENT_CONTEXT_TYPE = any
> {
  next?: RayconnectRealtimeEventNextSubscribtion<NEXT_DATA, EVENT_CONTEXT_TYPE>;
  error?: RayconnectRealtimeEventErrorSubscribtion<
    ERROR_DATA,
    EVENT_CONTEXT_TYPE
  >;
  start?: RayconnectRealtimeEventStartSubscribtion<EVENT_CONTEXT_TYPE>;
  complete?: RayconnectRealtimeEventCompleteSubscribtion<EVENT_CONTEXT_TYPE>;
}

export interface RayconnectRealtimeEventNextSubscribtion<
  NEXT_DATA = any,
  EVENT_CONTEXT_TYPE = any
> {
  (data: NEXT_DATA, context?: EVENT_CONTEXT_TYPE): void;
}

export interface RayconnectRealtimeEventErrorSubscribtion<
  ERROR_DATA = any,
  EVENT_CONTEXT_TYPE = any
> {
  (data: ERROR_DATA, context?: EVENT_CONTEXT_TYPE): void;
}

export interface RayconnectRealtimeEventStartSubscribtion<
  EVENT_CONTEXT_TYPE = any
> {
  (context?: EVENT_CONTEXT_TYPE): void;
}

export interface RayconnectRealtimeEventCompleteSubscribtion<
  EVENT_CONTEXT_TYPE = any
> {
  (context?: EVENT_CONTEXT_TYPE): void;
}

export interface RayconnectRealtimeEvent<EVENT_CONTEXT_TYPE> {
  (name: string): RayconnectRealtimeEventSubject<EVENT_CONTEXT_TYPE>;
}

export interface RayconnectRealtimeEventSubject<EVENT_CONTEXT_TYPE> {
  next: <DATA_TYPE = any>(data: DATA_TYPE) => void;
  error: <DATA_TYPE = any>(data: DATA_TYPE) => void;
  complete: () => void;
  subscribe: <NEXT_DATA = any, ERROR_DATA = any>(
    object:
      | RayconnectRealtimeEventNextSubscribtion<NEXT_DATA, EVENT_CONTEXT_TYPE>
      | RayconnectRealtimeEventSubscribtion<
          NEXT_DATA,
          ERROR_DATA,
          EVENT_CONTEXT_TYPE
        >
  ) => void;
}
