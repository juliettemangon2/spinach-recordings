(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PageShell.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "centered": "PageShell-module__9zokjG__centered",
  "content": "PageShell-module__9zokjG__content",
  "header": "PageShell-module__9zokjG__header",
  "page": "PageShell-module__9zokjG__page",
  "subtitle": "PageShell-module__9zokjG__subtitle",
  "title": "PageShell-module__9zokjG__title",
});
}),
"[project]/components/PageShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageShell",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/PageShell.module.css [app-client] (css module)");
;
;
function PageShell({ children, title, subtitle, centered = false, fullBleed = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            (title || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} ${centered ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centered : ''}`,
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/PageShell.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/PageShell.tsx",
                        lineNumber: 23,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PageShell.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${fullBleed ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentFullBleed : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} ${centered ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centered : ''}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/PageShell.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PageShell.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PageShell;
var _c;
__turbopack_context__.k.register(_c, "PageShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/about/about.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carouselArrow": "about-module__-i9KWa__carouselArrow",
  "carouselTrack": "about-module__-i9KWa__carouselTrack",
  "carouselWrapper": "about-module__-i9KWa__carouselWrapper",
  "fullBleed": "about-module__-i9KWa__fullBleed",
  "hero": "about-module__-i9KWa__hero",
  "heroContent": "about-module__-i9KWa__heroContent",
  "heroHeading": "about-module__-i9KWa__heroHeading",
  "heroImagePlaceholder": "about-module__-i9KWa__heroImagePlaceholder",
  "heroImageWrapper": "about-module__-i9KWa__heroImageWrapper",
  "heroOverlay": "about-module__-i9KWa__heroOverlay",
  "page": "about-module__-i9KWa__page",
  "partnerCard": "about-module__-i9KWa__partnerCard",
  "partnerLogoPlaceholder": "about-module__-i9KWa__partnerLogoPlaceholder",
  "partnerLogoWrapper": "about-module__-i9KWa__partnerLogoWrapper",
  "partnerName": "about-module__-i9KWa__partnerName",
  "partners": "about-module__-i9KWa__partners",
  "partnersHeading": "about-module__-i9KWa__partnersHeading",
  "tagline": "about-module__-i9KWa__tagline",
});
}),
"[project]/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/about/page.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=_d349b5d1._.js.map