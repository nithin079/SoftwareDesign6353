export interface FuelQuote {
    id: string;
    gallonsRequested: number;
    deliveryAddress: string;
    deliveryDate: Date;
    suggestedPrice: number;
    totalAmountDue: string;
}