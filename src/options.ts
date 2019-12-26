export type RequestOptions<T> = {
    hostname: string,
    apiKey: string,
    marketplaceId: number,
    channelId: number,
    channels: any[],
    path: string,
    data: T
}