import { RayconnectRealtimeEventSubscribtion } from "./event";
import { RayconnectRealtimeTransform } from "./transform";

export interface RayconnectRealtimeTransporterPublishParam<DATA_TYPE = any>
  extends RayconnectRealtimeTransform<DATA_TYPE> {
  options?: {
    room?: string;
  };
}

export abstract class RayconnectRealtimeTransporter<CONTEXT_TYPE = any> {
  protected context: CONTEXT_TYPE;

  constructor(context: CONTEXT_TYPE) {
    this.context = context;
  }

  abstract publish<DATA_TYPE = any>(
    param: RayconnectRealtimeTransporterPublishParam<DATA_TYPE>
  ): void;

  abstract subscribe<NEXT_DATA = any, ERROR_DATA = any>(
    event: string,
    subscription: RayconnectRealtimeEventSubscribtion<NEXT_DATA, ERROR_DATA>
  ): void;
}
