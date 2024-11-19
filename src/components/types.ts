export type PayloadType = {
  public_key: string;
  version: number;
  action: string;
  amount: number;
  currency: string;
  description: string;
  order_id: string;
  result_url?: string;
};
