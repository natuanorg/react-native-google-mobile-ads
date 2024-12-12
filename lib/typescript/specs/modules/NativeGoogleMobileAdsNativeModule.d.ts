import type { TurboModule } from 'react-native';
import type { Double, Float, UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';
export type NativeAdProps = {
    responseId: string;
    advertiser: string | null;
    body: string | null;
    callToAction: string | null;
    headline: string | null;
    price: string | null;
    store: string | null;
    starRating: Double | null;
    icon: NativeAdImage | null;
    images: Array<NativeAdImage> | null;
    mediaContent: NativeMediaContent;
    extras: UnsafeObject | null;
};
export type NativeAdImage = {
    url: string;
    scale: Double;
};
export type NativeMediaContent = {
    aspectRatio: Float;
    hasVideoContent: boolean;
    duration: Float;
};
export interface Spec extends TurboModule {
    load(adUnitId: string, requestOptions: UnsafeObject): Promise<NativeAdProps>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeGoogleMobileAdsNativeModule.d.ts.map