(function(){var t={"esri/views/2d/engine/webgl/Rect":"6cAc","arcgis-js-api/views/2d/engine/webgl/Rect":"6cAc","arcgis-js-api/core/bidiEngineTables":"VZRg","esri/core/BidiEngine":"uhzp","arcgis-js-api/core/BidiEngine":"uhzp"},r=this||window,e=r.webpackJsonp=r.webpackJsonp||[];e.registerAbsMids?e.registerAbsMids(t):(e.absMidsWaiting=e.absMidsWaiting||[]).push(t)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6cAc":function(t,r,e){var i,n;i=[e.dj.c(t.i),r],void 0===(n=(function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t,r,e,i){void 0===t&&(t=0),void 0===r&&(r=0),void 0===e&&(e=0),void 0===i&&(i=0),this.x=t,this.y=r,this.width=e,this.height=i}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this.width<=0||this.height<=0},enumerable:!1,configurable:!0}),t.prototype.union=function(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)},t}();r.default=e}).apply(null,i))||(t.exports=n)},VZRg:function(t,r,e){var i,n;i=[e.dj.c(t.i),r],void 0===(n=(function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.UnicodeTable=r.PrimaryTable=r.TBBASE=r.TYPES_NAMES=r.UBAT_BN=r.UBAT_RLO=r.UBAT_LRO=r.UBAT_PDF=r.UBAT_RLE=r.UBAT_LRE=r.UBAT_NSM=r.UBAT_ET=r.UBAT_ES=r.UBAT_CS=r.UBAT_WS=r.UBAT_AL=r.UBAT_S=r.UBAT_B=r.UBAT_ON=r.UBAT_AN=r.UBAT_EN=r.UBAT_R=r.UBAT_L=r.impTabRtl=r.impTabLtr=r.ArabicAlefBetIntervalsEnd=r.ArabicAlefBetIntervalsBegine=r.FETo06Table=r.StandAlonForm=r.InitialForm=r.MedialForm=r.FinalForm=r.IsolatedForm=r.BaseForm=r.LamAlefMedialTableFE=r.LamAlefInialTableFE=r.AlefTable=r.SwapTable=void 0,r.SwapTable=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["\xab","\xbb"],["\xbb","\xab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a","\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c","\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],["\ufe64","\ufe65"],["\ufe65","\ufe64"]],r.AlefTable=["\u0622","\u0623","\u0625","\u0627"],r.LamAlefInialTableFE=["\ufef5","\ufef7","\ufef9","\ufefb"],r.LamAlefMedialTableFE=["\ufef6","\ufef8","\ufefa","\ufefc"],r.BaseForm=["\u0627","\u0628","\u062a","\u062b","\u062c","\u062d","\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0625","\u0623","\u0622","\u0629","\u0649","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0625","\u0623","\u0622","\u0629","\u0649","\u06cc","\u0626","\u0624"],r.IsolatedForm=["\ufe8d","\ufe8f","\ufe95","\ufe99","\ufe9d","\ufea1","\ufea5","\ufea9","\ufeab","\ufead","\ufeaf","\ufeb1","\ufeb5","\ufeb9","\ufebd","\ufec1","\ufec5","\ufec9","\ufecd","\ufed1","\ufed5","\ufed9","\ufedd","\ufee1","\ufee5","\ufee9","\ufeed","\ufef1","\ufe87","\ufe83","\ufe81","\ufe93","\ufeef","\ufbfc","\ufe89","\ufe85","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe89","\ufe85"],r.FinalForm=["\ufe8e","\ufe90","\ufe96","\ufe9a","\ufe9e","\ufea2","\ufea6","\ufeaa","\ufeac","\ufeae","\ufeb0","\ufeb2","\ufeb6","\ufeba","\ufebe","\ufec2","\ufec6","\ufeca","\ufece","\ufed2","\ufed6","\ufeda","\ufede","\ufee2","\ufee6","\ufeea","\ufeee","\ufef2","\ufe88","\ufe84","\ufe82","\ufe94","\ufef0","\ufbfd","\ufe8a","\ufe86","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe8a","\ufe86"],r.MedialForm=["\ufe8e","\ufe92","\ufe98","\ufe9c","\ufea0","\ufea4","\ufea8","\ufeaa","\ufeac","\ufeae","\ufeb0","\ufeb4","\ufeb8","\ufebc","\ufec0","\ufec4","\ufec8","\ufecc","\ufed0","\ufed4","\ufed8","\ufedc","\ufee0","\ufee4","\ufee8","\ufeec","\ufeee","\ufef4","\ufe88","\ufe84","\ufe82","\ufe94","\ufef0","\ufbff","\ufe8c","\ufe86","\ufe71","\ufe72","\ufe74","\ufe77","\ufe79","\ufe7b","\ufe7d","\ufe7f","\ufe80","\ufe8c","\ufe86"],r.InitialForm=["\ufe8d","\ufe91","\ufe97","\ufe9b","\ufe9f","\ufea3","\ufea7","\ufea9","\ufeab","\ufead","\ufeaf","\ufeb3","\ufeb7","\ufebb","\ufebf","\ufec3","\ufec7","\ufecb","\ufecf","\ufed3","\ufed7","\ufedb","\ufedf","\ufee3","\ufee7","\ufeeb","\ufeed","\ufef3","\ufe87","\ufe83","\ufe81","\ufe93","\ufeef","\ufbfe","\ufe8b","\ufe85","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe8b","\ufe85"],r.StandAlonForm=["\u0621","\u0622","\u0623","\u0624","\u0625","\u0627","\u0629","\u062f","\u0630","\u0631","\u0632","\u0648","\u0649"],r.FETo06Table=["\u064b","\u064b","\u064c","\u061f","\u064d","\u061f","\u064e","\u064e","\u064f","\u064f","\u0650","\u0650","\u0651","\u0651","\u0652","\u0652","\u0621","\u0622","\u0622","\u0623","\u0623","\u0624","\u0624","\u0625","\u0625","\u0626","\u0626","\u0626","\u0626","\u0627","\u0627","\u0628","\u0628","\u0628","\u0628","\u0629","\u0629","\u062a","\u062a","\u062a","\u062a","\u062b","\u062b","\u062b","\u062b","\u062c","\u062c","\u062c","\u062c","\u062d","\u062d","\u062d","\u062d","\u062e","\u062e","\u062e","\u062e","\u062f","\u062f","\u0630","\u0630","\u0631","\u0631","\u0632","\u0632","\u0633","\u0633","\u0633","\u0633","\u0634","\u0634","\u0634","\u0634","\u0635","\u0635","\u0635","\u0635","\u0636","\u0636","\u0636","\u0636","\u0637","\u0637","\u0637","\u0637","\u0638","\u0638","\u0638","\u0638","\u0639","\u0639","\u0639","\u0639","\u063a","\u063a","\u063a","\u063a","\u0641","\u0641","\u0641","\u0641","\u0642","\u0642","\u0642","\u0642","\u0643","\u0643","\u0643","\u0643","\u0644","\u0644","\u0644","\u0644","\u0645","\u0645","\u0645","\u0645","\u0646","\u0646","\u0646","\u0646","\u0647","\u0647","\u0647","\u0647","\u0648","\u0648","\u0649","\u0649","\u064a","\u064a","\u064a","\u064a","\ufef5","\ufef6","\ufef7","\ufef8","\ufef9","\ufefa","\ufefb","\ufefc","\u061f","\u061f","\u061f"],r.ArabicAlefBetIntervalsBegine=["\u0621","\u0641"],r.ArabicAlefBetIntervalsEnd=["\u063a","\u064a"],r.impTabLtr=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],r.impTabRtl=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],r.UBAT_L=0,r.UBAT_R=1,r.UBAT_EN=2,r.UBAT_AN=3,r.UBAT_ON=4,r.UBAT_B=5,r.UBAT_S=6,r.UBAT_AL=7,r.UBAT_WS=8,r.UBAT_CS=9,r.UBAT_ES=10,r.UBAT_ET=11,r.UBAT_NSM=12,r.UBAT_LRE=13,r.UBAT_RLE=14,r.UBAT_PDF=15,r.UBAT_LRO=16,r.UBAT_RLO=17,r.UBAT_BN=18,r.TYPES_NAMES=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],r.TBBASE=100;var e=r.UBAT_L,i=r.UBAT_R,n=r.UBAT_EN,a=r.UBAT_AN,o=r.UBAT_ON,T=r.UBAT_B,u=r.UBAT_S,A=r.UBAT_AL,s=r.UBAT_WS,f=r.UBAT_CS,B=r.UBAT_ES,l=r.UBAT_ET,c=r.UBAT_NSM,U=r.UBAT_LRE,_=r.UBAT_RLE,h=r.UBAT_PDF,d=r.UBAT_LRO,b=r.UBAT_RLO,L=r.UBAT_BN;r.PrimaryTable=[r.TBBASE+0,e,e,e,e,r.TBBASE+1,r.TBBASE+2,r.TBBASE+3,i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,r.TBBASE+4,o,o,o,e,o,e,o,e,o,o,o,e,e,o,o,e,e,e,e,e,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,e,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,e,o,o,e,e,o,o,e,e,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,e,e,r.TBBASE+5,A,A,r.TBBASE+6,r.TBBASE+7],r.UnicodeTable=[[L,L,L,L,L,L,L,L,L,u,T,u,s,T,L,L,L,L,L,L,L,L,L,L,L,L,L,L,T,T,T,u,s,o,o,l,l,l,o,o,o,o,o,B,f,B,f,f,n,n,n,n,n,n,n,n,n,n,f,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,o,L,L,L,L,L,L,T,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,f,o,l,l,l,l,o,o,o,o,e,o,o,L,o,o,l,l,n,n,o,e,o,o,o,n,e,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,e,e,e,e,e,e,e,e],[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,e,e,e,e,e,e,e,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,e,o,o,o,o,o,o,o,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,i,c,i,c,c,i,c,c,i,c,o,o,o,o,o,o,o,o,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,o,o,o,o,o,i,i,i,i,i,o,o,o,o,o,o,o,o,o,o,o],[a,a,a,a,o,o,o,o,A,l,l,A,f,A,o,o,c,c,c,c,c,c,c,c,c,c,c,A,o,o,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,l,a,a,A,A,A,c,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,c,c,c,c,c,c,c,a,o,c,c,c,c,c,c,A,A,c,c,o,c,c,c,c,A,A,n,n,n,n,n,n,n,n,n,n,A,A,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,o,A,A,c,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,o,o,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,c,c,c,c,c,c,c,c,c,c,c,A,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,c,c,c,c,c,c,c,c,c,i,i,o,o,o,o,i,o,o,o,o,o],[s,s,s,s,s,s,s,s,s,s,s,L,L,L,e,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,s,T,U,_,h,d,b,f,l,l,l,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,s,L,L,L,L,L,o,o,o,o,o,L,L,L,L,L,L,n,e,o,o,n,n,n,n,n,n,B,B,o,o,o,e,n,n,n,n,n,n,n,n,n,n,B,B,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],[e,e,e,e,e,e,e,o,o,o,o,o,o,o,o,o,o,o,o,e,e,e,e,e,o,o,o,o,o,i,c,i,i,i,i,i,i,i,i,i,i,B,i,i,i,i,i,i,i,i,i,i,i,i,i,o,i,i,i,i,i,o,i,o,i,i,o,i,i,o,i,i,i,i,i,i,i,i,i,i,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,c,c,c,c,c,c,c,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,f,o,f,o,o,f,o,o,o,o,o,o,o,o,o,l,o,o,B,B,o,o,o,o,o,l,l,o,o,o,o,o,A,A,A,A,A,o,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,o,o,L],[o,o,o,l,l,l,o,o,o,o,o,B,f,B,f,f,n,n,n,n,n,n,n,n,n,n,f,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,o,o,o,o,o,o,o,o,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,o,o,o,e,e,e,e,e,e,o,o,e,e,e,e,e,e,o,o,e,e,e,e,e,e,o,o,e,e,e,o,o,o,l,l,o,o,o,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o]]}).apply(null,i))||(t.exports=n)},uhzp:function(t,r,e){var i,n;i=[e.dj.c(t.i),r,e("VZRg")],void 0===(n=(function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}return t.prototype.bidiTransform=function(t,r,i){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,r,e){m=[],F=[];for(var i=0;i<e;i++)t[i]=i,r[i]=i,m[i]=i}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(r,i))return t;i=this.outputFormat;var o,B=S,l=b((r=this.inputFormat).charAt(1)),c=b(i.charAt(1)),E=("I"===r.charAt(0)?"L":r.charAt(0))+l,R=("I"===i.charAt(0)?"L":i.charAt(0))+c,O=r.charAt(2)+i.charAt(2);B.defInFormat=E,B.defOutFormat=R,B.defSwap=O;var y=function t(r,e,i,o,u){var A=function(t,r,e){if(void 0===r.inFormat&&(r.inFormat=e.defInFormat),void 0===r.outFormat&&(r.outFormat=e.defOutFormat),void 0===r.swap&&(r.swap=e.defSwap),r.inFormat===r.outFormat)return r;var i,a=r.inFormat.substring(0,1),o=r.outFormat.substring(0,1),T=r.inFormat.substring(1,4),u=r.outFormat.substring(1,4);return"C"===T.charAt(0)&&(T="ltr"===(i=n(t))||"rtl"===i?i.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=a+T),"C"===u.charAt(0)&&(u="rtl"===(i=n(t))?"RTL":"ltr"===i?(i=function(t){var r=t.split("");return r.reverse(),n(r.join(""))}(t)).toUpperCase():"L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=o+u),r}(r,{inFormat:e,outFormat:i,swap:o},u);if(A.inFormat===A.outFormat)return r;i=A.outFormat,o=A.swap;var s=(e=A.inFormat).substring(0,1),f=e.substring(1,4),B=i.substring(0,1),l=i.substring(1,4);if(u.inFormat=e,u.outFormat=i,u.swap=o,"L"===s&&"VLTR"===i){if("LTR"===f)return u.dir=N,a(r,u);if("RTL"===f)return u.dir=w,a(r,u)}if("V"===s&&"V"===B)return u.dir="RTL"===f?w:N,T(r,u);if("L"===s&&"VRTL"===i)return"LTR"===f?(u.dir=N,r=a(r,u)):(u.dir=w,r=a(r,u)),T(r);if("VLTR"===e&&"LLTR"===i)return u.dir=N,a(r,u);if("V"===s&&"L"===B&&f!==l)return r=T(r),"RTL"===f?t(r,"LLTR","VLTR",o,u):t(r,"LRTL","VRTL",o,u);if("VRTL"===e&&"LRTL"===i)return t(r,"LRTL","VRTL",o,u);if("L"===s&&"L"===B){var c=u.swap;return u.swap=c.substr(0,1)+"N","RTL"===f?(u.dir=w,r=a(r,u),u.swap="N"+c.substr(1,2),u.dir=N,r=a(r,u)):(u.dir=N,r=a(r,u),u.swap="N"+c.substr(1,2),r=t(r,"VLTR","LRTL",u.swap,u)),r}return r}(t,E,R,O,B),M=!1;return"R"===i.charAt(1)?M=!0:"C"!==i.charAt(1)&&"D"!==i.charAt(1)||(M="rtl"===this.checkContextual(y)),this.sourceToTarget=m,this.targetToSource=function(t){for(var r=new Array(t.length),e=0;e<t.length;e++)r[t[e]]=e;return r}(this.sourceToTarget),g=this.targetToSource,o=r.charAt(3)===i.charAt(3)?y:"S"===i.charAt(3)?function(t,r,i){if(0===r.length)return"";void 0===t&&(t=!0),void 0===i&&(i=!0);var n=(r=String(r)).split(""),a=0,o=1,T=n.length;t||(a=n.length-1,o=-1,T=1);for(var B=function(t,r,i,n,a){for(var o=0,T=[],u=0,B=r;B*i<n;B+=i)if(A(t[B])||d(t[B])){if("\u0644"===t[B]&&f(t,B+i,i,n)){t[B]=p(t[B+i],0===o?e.LamAlefInialTableFE:e.LamAlefMedialTableFE),L(t,B+=i,i,n),a&&(T[u]=B,u++),o=0;continue}var l=t[B];t[B]=1===o?s(t,B+i,i,n)?_(t[B]):h(t[B],e.FinalForm):!0===s(t,B+i,i,n)?h(t[B],e.InitialForm):h(t[B],e.IsolatedForm),d(l)||(o=1),!0===U(l)&&(o=0)}else o=0;return T}(n,a,o,T,i),l="",c=0;c<n.length;c++)i&&u(B,B.length,c)>-1?(v(g,c,!t,-1),m.splice(c,1)):l+=n[c];return l}(M,y,!0):function(t,r,i){if(0===t.length)return"";void 0===i&&(i=!0),void 0===r&&(r=!0);for(var n="",a=(t=String(t)).split(""),o=0;o<t.length;o++){var T=!1;if(a[o]>="\ufe70"&&a[o]<"\ufeff"){var u=t.charCodeAt(o);a[o]>="\ufef5"&&a[o]<="\ufefc"?(r?(o>0&&i&&" "===a[o-1]?n=n.substring(0,n.length-1)+"\u0644":(n+="\u0644",T=!0),n+=e.AlefTable[(u-65269)/2]):(n+=e.AlefTable[(u-65269)/2],n+="\u0644",o+1<t.length&&i&&" "===a[o+1]?o++:T=!0),T&&(v(g,o,!0,1),m.splice(o,0,m[o]))):n+=e.FETo06Table[u-65136]}else n+=a[o]}return n}(y,M,!0),this.sourceToTarget=m,this.targetToSource=g,this.levels=F,o},t.prototype._inputFormatSetter=function(t){if(!O.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t},t.prototype._outputFormatSetter=function(t){if(!O.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t},t.prototype.checkParameters=function(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r},t.prototype.checkContextual=function(t){var r=n(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase()}catch(t){}"ltr"!==r&&"rtl"!==r&&(r="ltr")}return r},t.prototype.hasBidiChar=function(t){return y.test(t)},t}();function n(t){var r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function a(t,r){var e=t.split(""),i=[];return o(e,i,r),function(t,r,e){if(0!==e.hiLevel&&e.swap.substr(0,1)!==e.swap.substr(1,2))for(var i=0;i<t.length;i++)1===r[i]&&(t[i]=c(t[i]))}(e,i,r),B(2,e,i,r),B(1,e,i,r),F=i,e.join("")}function o(t,r,i){var n,a,o=t.length,T=i.dir?e.impTabRtl:e.impTabLtr,u=0,A=-1,s=[],f=[];i.hiLevel=i.dir,i.lastArabic=!1,i.hasUbatAl=!1,i.hasUbatB=!1,i.hasUbatS=!1;for(var B=0;B<o;B++)s[B]=(n=t[B].charCodeAt(0),(a=e.PrimaryTable[n>>8])<e.TBBASE?a:e.UnicodeTable[a-e.TBBASE][255&n]);for(var c=0;c<o;c++){var U=u,_=l(t,s,f,c,i);f[c]=_;var h=240&(u=T[U][_]),d=T[u&=15][E];if(r[c]=d,h>0)if(16===h){for(B=A;B<c;B++)r[B]=1;A=-1}else A=-1;if(T[u][R])-1===A&&(A=c);else if(A>-1){for(B=A;B<c;B++)r[B]=d;A=-1}s[c]===e.UBAT_B&&(r[c]=0),i.hiLevel|=d}i.hasUbatS&&function(t,r,i,n){for(var a=0;a<i;a++)if(t[a]===e.UBAT_S){r[a]=n.dir;for(var o=a-1;o>=0&&t[o]===e.UBAT_WS;o--)r[o]=n.dir}}(s,r,o,i)}function T(t,r){var e=t.split("");if(r){var i=[];o(e,i,r),F=i}return e.reverse(),m.reverse(),e.join("")}function u(t,r,e){for(var i=0;i<r;i++)if(t[i]===e)return i;return-1}function A(t){for(var r=0;r<e.ArabicAlefBetIntervalsBegine.length;r++)if(t>=e.ArabicAlefBetIntervalsBegine[r]&&t<=e.ArabicAlefBetIntervalsEnd[r])return!0;return!1}function s(t,r,e,i){for(;r*e<i&&d(t[r]);)r+=e;return!!(r*e<i&&A(t[r]))}function f(t,r,i,n){for(;r*i<n&&d(t[r]);)r+=i;var a;if(!(r*i<n))return!1;a=t[r];for(var o=0;o<e.AlefTable.length;o++)if(e.AlefTable[o]===a)return!0;return!1}function B(t,r,e,i){if(!(i.hiLevel<t)){if(1===t&&i.dir===w&&!i.hasUbatB)return r.reverse(),void m.reverse();for(var n,a,o,T,u,A=r.length,s=0;s<A;){if(e[s]>=t){for(n=s+1;n<A&&e[n]>=t;)n++;for(a=s,o=n-1;a<o;a++,o--)T=r[a],r[a]=r[o],r[o]=T,u=m[a],m[a]=m[o],m[o]=u;s=n}s++}}}function l(t,r,i,n,a){return{UBAT_L:function(){return a.lastArabic=!1,e.UBAT_L},UBAT_R:function(){return a.lastArabic=!1,e.UBAT_R},UBAT_ON:function(){return e.UBAT_ON},UBAT_AN:function(){return e.UBAT_AN},UBAT_EN:function(){return a.lastArabic?e.UBAT_AN:e.UBAT_EN},UBAT_AL:function(){return a.lastArabic=!0,a.hasUbatAl=!0,e.UBAT_R},UBAT_WS:function(){return e.UBAT_ON},UBAT_CS:function(){var t,o;return n<1||n+1>=r.length||(t=i[n-1])!==e.UBAT_EN&&t!==e.UBAT_AN||(o=r[n+1])!==e.UBAT_EN&&o!==e.UBAT_AN?e.UBAT_ON:(a.lastArabic&&(o=e.UBAT_AN),o===t?o:e.UBAT_ON)},UBAT_ES:function(){return(n>0?i[n-1]:e.UBAT_B)===e.UBAT_EN&&n+1<r.length&&r[n+1]===e.UBAT_EN?e.UBAT_EN:e.UBAT_ON},UBAT_ET:function(){if(n>0&&i[n-1]===e.UBAT_EN)return e.UBAT_EN;if(a.lastArabic)return e.UBAT_ON;for(var t=n+1,o=r.length;t<o&&r[t]===e.UBAT_ET;)t++;return t<o&&r[t]===e.UBAT_EN?e.UBAT_EN:e.UBAT_ON},UBAT_NSM:function(){if("VLTR"===a.inFormat){for(var o=r.length,T=n+1;T<o&&r[T]===e.UBAT_NSM;)T++;if(T<o){var u=t[n].charCodeAt[0],A=r[T];if((u>=1425&&u<=2303||64286===u)&&(A===e.UBAT_R||A===e.UBAT_AL))return e.UBAT_R}}return n<1||r[n-1]===e.UBAT_B?e.UBAT_ON:i[n-1]},UBAT_B:function(){return a.lastArabic=!0,a.hasUbatB=!0,a.dir},UBAT_S:function(){return a.hasUbatS=!0,e.UBAT_ON},UBAT_LRE:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_RLE:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_LRO:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_RLO:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_PDF:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_BN:function(){return e.UBAT_ON}}[e.TYPES_NAMES[r[n]]]()}function c(t){for(var r,i=0,n=e.SwapTable.length-1;i<=n;)if(r=Math.floor((i+n)/2),t<e.SwapTable[r][0])n=r-1;else{if(!(t>e.SwapTable[r][0]))return e.SwapTable[r][1];i=r+1}return t}function U(t){for(var r=0;r<e.StandAlonForm.length;r++)if(e.StandAlonForm[r]===t)return!0;return!1}function _(t){for(var r=0;r<e.BaseForm.length;r++)if(t===e.BaseForm[r])return e.MedialForm[r];return t}function h(t,r){for(var i=0;i<e.BaseForm.length;i++)if(t===e.BaseForm[i])return r[i];return t}function d(t){return t>="\u064b"&&t<="\u0655"}function b(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function L(t,r,e,i){for(;r*e<i&&d(t[r]);)r+=e;return r*e<i&&(t[r]=" ",!0)}function p(t,r){for(var i=0;i<e.AlefTable.length;i++)if(t===e.AlefTable[i])return r[i];return t}function v(t,r,e,i){for(var n=0;n<t.length;n++)(t[n]>r||!e&&t[n]===r)&&(t[n]+=i)}r.default=i;var m=[],g=[],F=[],S={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},E=5,R=6,N=0,w=1,O=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,y=/[\u0591-\u06ff\ufb1d-\ufefc]/}).apply(null,i))||(t.exports=n)}}]);