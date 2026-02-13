(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/about/about.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carouselArrow": "about-module__-i9KWa__carouselArrow",
  "carouselTrack": "about-module__-i9KWa__carouselTrack",
  "carouselWrapper": "about-module__-i9KWa__carouselWrapper",
  "hero": "about-module__-i9KWa__hero",
  "heroContent": "about-module__-i9KWa__heroContent",
  "heroHeading": "about-module__-i9KWa__heroHeading",
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
"[project]/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/about/about.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const partners = [
    {
        name: 'Brooklyn Youth',
        logo: '/partners/brooklyn-youth.png'
    },
    {
        name: 'Biscuit Head',
        logo: '/partners/biscuit-head.png'
    },
    {
        name: 'HOKA',
        logo: '/partners/hoka.png'
    },
    {
        name: 'NAYA',
        logo: '/partners/naya.png'
    },
    {
        name: 'SNAP',
        logo: '/partners/snap.png'
    },
    {
        name: 'Backline',
        logo: '/partners/backline.png'
    },
    {
        name: 'Songwriters of North America',
        logo: '/partners/sona.png'
    },
    {
        name: 'MusiCares®',
        logo: '/partners/musicares.png'
    },
    {
        name: 'Slingshot.FM',
        logo: '/partners/slingshot-fm.png'
    },
    {
        name: 'Sound Mind Center',
        logo: '/partners/sound-mind-center.png'
    },
    {
        name: 'NEW STAND',
        logo: '/partners/new-stand.png'
    },
    {
        name: '1AND1',
        logo: '/partners/1and1.png'
    },
    {
        name: 'TAPE SELECTS',
        logo: '/partners/tape-selects.png'
    },
    {
        name: 'SEED & SPARK',
        logo: '/partners/seed-and-spark.png'
    },
    {
        name: 'RIVIAN',
        logo: '/partners/rivian.png'
    }
];
const VISIBLE_COUNT = 4;
function AboutPage() {
    _s();
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AboutPage.useCallback[handlePrev]": ()=>{
            setStartIndex({
                "AboutPage.useCallback[handlePrev]": (prev)=>prev === 0 ? partners.length - 1 : prev - 1
            }["AboutPage.useCallback[handlePrev]"]);
        }
    }["AboutPage.useCallback[handlePrev]"], []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AboutPage.useCallback[handleNext]": ()=>{
            setStartIndex({
                "AboutPage.useCallback[handleNext]": (prev)=>(prev + 1) % partners.length
            }["AboutPage.useCallback[handleNext]"]);
        }
    }["AboutPage.useCallback[handleNext]"], []);
    // Get the currently visible partners (wrapping around)
    const visiblePartners = Array.from({
        length: VISIBLE_COUNT
    }, (_, i)=>{
        const index = (startIndex + i) % partners.length;
        return partners[index];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroImageWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroImagePlaceholder
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroOverlay
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroHeading,
                            children: "At Spinach, we embrace challenges and nurture bold ideas, making them real for the curious and the passionate. We don’t just create; we empower talent to explore, innovate, and connect."
                        }, void 0, false, {
                            fileName: "[project]/app/about/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partners,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partnersHeading,
                        children: "Our partners"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselArrowLeft}`,
                                onClick: handlePrev,
                                "aria-label": "Previous partner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.5 15L7.5 10L12.5 5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/about/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselTrack,
                                children: visiblePartners.map((partner, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partnerCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partnerLogoWrapper,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partnerLogoPlaceholder
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/about/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].partnerName,
                                                children: partner.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/about/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${partner.name}-${i}`, true, {
                                        fileName: "[project]/app/about/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$about$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselArrowRight}`,
                                onClick: handleNext,
                                "aria-label": "Next partner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7.5 5L12.5 10L7.5 15",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/about/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/about/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, this);
}
_s(AboutPage, "N9TvliwWEB2NnSy3ImHapCi/KFM=");
_c = AboutPage;
var _c;
__turbopack_context__.k.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_about_14a1ac4a._.js.map