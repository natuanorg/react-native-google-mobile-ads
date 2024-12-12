"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeAd = void 0;
var _common = require("../../common");
var _validateAdRequestOptions = require("../../validateAdRequestOptions");
var _NativeGoogleMobileAdsNativeModule = _interopRequireDefault(require("../../specs/modules/NativeGoogleMobileAdsNativeModule"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * A class for loading Native Ads.
 */
class NativeAd {
  constructor(adUnitId, props) {
    this.adUnitId = adUnitId;
    Object.assign(this, props);
  }

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
  static async createForAdRequest(adUnitId, requestOptions) {
    if (!(0, _common.isString)(adUnitId)) {
      throw new Error("NativeAd.createForAdRequest(*) 'adUnitId' expected an string value.");
    }
    let options = {};
    try {
      options = (0, _validateAdRequestOptions.validateAdRequestOptions)(requestOptions);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`NativeAd.createForAdRequest(_, *) ${e.message}.`);
      }
    }
    const props = await _NativeGoogleMobileAdsNativeModule.default.load(adUnitId, options);
    return new NativeAd(adUnitId, props);
  }
}
exports.NativeAd = NativeAd;
//# sourceMappingURL=NativeAd.js.map