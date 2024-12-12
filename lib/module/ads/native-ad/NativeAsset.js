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

import React, { useContext, useEffect, useRef } from 'react';
import { findNodeHandle } from 'react-native';
import { NativeAdContext } from './NativeAdContext';
import { Commands } from '../../specs/components/GoogleMobileAdsNativeViewNativeComponent';
export let NativeAssetType = /*#__PURE__*/function (NativeAssetType) {
  NativeAssetType["ADVERTISER"] = "advertiser";
  NativeAssetType["BODY"] = "body";
  NativeAssetType["CALL_TO_ACTION"] = "callToAction";
  NativeAssetType["HEADLINE"] = "headline";
  NativeAssetType["PRICE"] = "price";
  NativeAssetType["STORE"] = "store";
  NativeAssetType["STAR_RATING"] = "starRating";
  NativeAssetType["ICON"] = "icon";
  NativeAssetType["IMAGE"] = "image";
  return NativeAssetType;
}({});
export const NativeAsset = props => {
  const {
    assetKey,
    children
  } = props;
  const {
    viewRef
  } = useContext(NativeAdContext);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !viewRef.current) {
      return;
    }
    const reactTag = findNodeHandle(node);
    if (reactTag) {
      Commands.registerAsset(viewRef.current, assetKey, reactTag);
    }
    // TODO: unregister asset in cleanup?
  }, [viewRef]);
  if (! /*#__PURE__*/React.isValidElement(children)) {
    return null;
  }
  const childrenRef = getElementRef(children);
  return /*#__PURE__*/React.cloneElement(children, {
    // @ts-ignore
    ref: composeRefs(ref, childrenRef)
  });
};
/**
 * Access the ref using the method that doesn't yield a warning.
 *
 * Before React 19 accessing `element.props.ref` will throw a warning and suggest using `element.ref`
 * After React 19 accessing `element.ref` does the opposite.
 * https://github.com/facebook/react/pull/28348
 */
function getElementRef(element) {
  var _Object$getOwnPropert, _Object$getOwnPropert2;
  // React <=18 in DEV
  let getter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(element.props, 'ref')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.get;
  let mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }

  // React 19 in DEV
  getter = (_Object$getOwnPropert2 = Object.getOwnPropertyDescriptor(element, 'ref')) === null || _Object$getOwnPropert2 === void 0 ? void 0 : _Object$getOwnPropert2.get;
  mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }

  // Not DEV
  return element.props.ref || element.ref;
}
function composeRefs(...refs) {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref !== null && ref !== undefined) {
        ref.current = value;
      }
    });
  };
}
//# sourceMappingURL=NativeAsset.js.map