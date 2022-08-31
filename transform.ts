export interface RayconnectRealtimeTransform<DATA_TYPE = any> {
    type: RayconnectRealtimeTransformType;
    event: string;
    data?: DATA_TYPE;
  }
  
  export type RayconnectRealtimeTransformType = "next" | "error" | "complete";
  