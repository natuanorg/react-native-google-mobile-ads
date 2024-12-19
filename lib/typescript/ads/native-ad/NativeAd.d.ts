import { NativeAdRequestOptions } from '../../types';
import { NativeAdImage, NativeAdProps, NativeMediaContent } from '../../specs/modules/NativeGoogleMobileAdsNativeModule';
/**
 * A class for loading Native Ads.
 */
export declare class NativeAd {
    adUnitId: string;
    responseId: string;
    advertiser: string | null;
    body: string | null;
    callToAction: string | null;
    headline: string | null;
    price: string | null;
    store: string | null;
    starRating: number | null;
    icon: NativeAdImage | null;
    images: Array<NativeAdImage> | null;
    mediaContent: NativeMediaContent | null;
    extras: Record<string, unknown> | null;
    constructor(adUnitId: string, props: NativeAdProps);
    /**
     * Creates a new NativeAd instance.
     *
     * #### Example
     *
     * ```js
     * import { NativeAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
     *
     * const nativeAd = await NativeAd.createForAdRequest(TestIds.NATIVE, {
     *   requestAgent: 'CoolAds',
     * });
     * ```
     *
     * @param adUnitId The Ad Unit ID for the Native Ad. You can find this on your Google Mobile Ads dashboard.
     * @param requestOptions Optional RequestOptions used to load the ad.
     */
    static createForAdRequest(adUnitId: string, requestOptions?: NativeAdRequestOptions): Promise<NativeAd>;
}
//# sourceMappingURL=NativeAd.d.ts.map