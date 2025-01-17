
/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

// JS to Native bridges
// set to lazy
Object.defineProperty(jsb, "reflection", {
    get: function () {
        if (jsb.__bridge !== undefined) return jsb.__bridge;
        if (window.JavascriptJavaBridge && cc.sys.os === cc.sys.OS.ANDROID) {
            jsb.__bridge = new JavascriptJavaBridge();
        } else if (window.JavaScriptObjCBridge && (cc.sys.os === cc.sys.OS.IOS || cc.sys.os === cc.sys.OS.OSX)) {
            jsb.__bridge = new JavaScriptObjCBridge();
        }else   {
            jsb.__bridge = null;
        }
        return jsb.__bridge;
    },
    enumerable: true,
    configurable: true,
    set: function (value) {
        jsb.__bridge = value;
    }
})