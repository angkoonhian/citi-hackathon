export class stockDTO {
  stockId: string;
  stockName: string;
  stockPrice: number;
  stockQuantity: number;
  stockActions: [string];
}

export class stockActionDTO {
  stockId: string;
  stockName: string;
  stockSymbol: string;
  stockPrice: number;
  stockQuantity: number;
  action: string;
}
