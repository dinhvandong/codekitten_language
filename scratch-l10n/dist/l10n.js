module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-intl/locale-data/am.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/am.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"am",pluralRuleFunction:function(e,t){return t?"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"ዓመት",relative:{0:"በዚህ ዓመት",1:"የሚቀጥለው ዓመት","-1":"ያለፈው ዓመት"},relativeTime:{future:{one:"በ{0} ዓመታት ውስጥ",other:"በ{0} ዓመታት ውስጥ"},past:{one:"ከ{0} ዓመት በፊት",other:"ከ{0} ዓመታት በፊት"}}},month:{displayName:"ወር",relative:{0:"በዚህ ወር",1:"የሚቀጥለው ወር","-1":"ያለፈው ወር"},relativeTime:{future:{one:"በ{0} ወር ውስጥ",other:"በ{0} ወራት ውስጥ"},past:{one:"ከ{0} ወር በፊት",other:"ከ{0} ወራት በፊት"}}},day:{displayName:"ቀን",relative:{0:"ዛሬ",1:"ነገ",2:"ከነገ ወዲያ","-2":"ከትናንት ወዲያ","-1":"ትናንት"},relativeTime:{future:{one:"በ{0} ቀን ውስጥ",other:"በ{0} ቀናት ውስጥ"},past:{one:"ከ{0} ቀን በፊት",other:"ከ{0} ቀናት በፊት"}}},hour:{displayName:"ሰዓት",relative:{0:"ይህ ሰዓት"},relativeTime:{future:{one:"በ{0} ሰዓት ውስጥ",other:"በ{0} ሰዓቶች ውስጥ"},past:{one:"ከ{0} ሰዓት በፊት",other:"ከ{0} ሰዓቶች በፊት"}}},minute:{displayName:"ደቂቃ",relative:{0:"ይህ ደቂቃ"},relativeTime:{future:{one:"በ{0} ደቂቃ ውስጥ",other:"በ{0} ደቂቃዎች ውስጥ"},past:{one:"ከ{0} ደቂቃ በፊት",other:"ከ{0} ደቂቃዎች በፊት"}}},second:{displayName:"ሰከንድ",relative:{0:"አሁን"},relativeTime:{future:{one:"በ{0} ሰከንድ ውስጥ",other:"በ{0} ሰከንዶች ውስጥ"},past:{one:"ከ{0} ሰከንድ በፊት",other:"ከ{0} ሰከንዶች በፊት"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ar.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"ar",pluralRuleFunction:function(e,a){var r=String(e).split("."),o=Number(r[0])==e&&r[0].slice(-2);return a?"other":0==e?"zero":1==e?"one":2==e?"two":o>=3&&o<=10?"few":o>=11&&o<=99?"many":"other"},fields:{year:{displayName:"السنة",relative:{0:"السنة الحالية",1:"السنة القادمة","-1":"السنة الماضية"},relativeTime:{future:{zero:"خلال {0} سنة",one:"خلال سنة واحدة",two:"خلال سنتين",few:"خلال {0} سنوات",many:"خلال {0} سنة",other:"خلال {0} سنة"},past:{zero:"قبل {0} سنة",one:"قبل سنة واحدة",two:"قبل سنتين",few:"قبل {0} سنوات",many:"قبل {0} سنة",other:"قبل {0} سنة"}}},month:{displayName:"الشهر",relative:{0:"هذا الشهر",1:"الشهر القادم","-1":"الشهر الماضي"},relativeTime:{future:{zero:"خلال {0} شهر",one:"خلال شهر واحد",two:"خلال شهرين",few:"خلال {0} أشهر",many:"خلال {0} شهرًا",other:"خلال {0} شهر"},past:{zero:"قبل {0} شهر",one:"قبل شهر واحد",two:"قبل شهرين",few:"قبل {0} أشهر",many:"قبل {0} شهرًا",other:"قبل {0} شهر"}}},day:{displayName:"يوم",relative:{0:"اليوم",1:"غدًا",2:"بعد الغد","-2":"أول أمس","-1":"أمس"},relativeTime:{future:{zero:"خلال {0} يوم",one:"خلال يوم واحد",two:"خلال يومين",few:"خلال {0} أيام",many:"خلال {0} يومًا",other:"خلال {0} يوم"},past:{zero:"قبل {0} يوم",one:"قبل يوم واحد",two:"قبل يومين",few:"قبل {0} أيام",many:"قبل {0} يومًا",other:"قبل {0} يوم"}}},hour:{displayName:"الساعات",relative:{0:"الساعة الحالية"},relativeTime:{future:{zero:"خلال {0} ساعة",one:"خلال ساعة واحدة",two:"خلال ساعتين",few:"خلال {0} ساعات",many:"خلال {0} ساعة",other:"خلال {0} ساعة"},past:{zero:"قبل {0} ساعة",one:"قبل ساعة واحدة",two:"قبل ساعتين",few:"قبل {0} ساعات",many:"قبل {0} ساعة",other:"قبل {0} ساعة"}}},minute:{displayName:"الدقائق",relative:{0:"هذه الدقيقة"},relativeTime:{future:{zero:"خلال {0} دقيقة",one:"خلال دقيقة واحدة",two:"خلال دقيقتين",few:"خلال {0} دقائق",many:"خلال {0} دقيقة",other:"خلال {0} دقيقة"},past:{zero:"قبل {0} دقيقة",one:"قبل دقيقة واحدة",two:"قبل دقيقتين",few:"قبل {0} دقائق",many:"قبل {0} دقيقة",other:"قبل {0} دقيقة"}}},second:{displayName:"الثواني",relative:{0:"الآن"},relativeTime:{future:{zero:"خلال {0} ثانية",one:"خلال ثانية واحدة",two:"خلال ثانيتين",few:"خلال {0} ثوانٍ",many:"خلال {0} ثانية",other:"خلال {0} ثانية"},past:{zero:"قبل {0} ثانية",one:"قبل ثانية واحدة",two:"قبل ثانيتين",few:"قبل {0} ثوانِ",many:"قبل {0} ثانية",other:"قبل {0} ثانية"}}}}},{locale:"ar-AE",parentLocale:"ar",fields:{year:{displayName:"السنة",relative:{0:"هذه السنة",1:"السنة التالية","-1":"السنة الماضية"},relativeTime:{future:{zero:"خلال {0} سنة",one:"خلال سنة واحدة",two:"خلال سنتين",few:"خلال {0} سنوات",many:"خلال {0} سنة",other:"خلال {0} سنة"},past:{zero:"قبل {0} سنة",one:"قبل سنة واحدة",two:"قبل سنتين",few:"قبل {0} سنوات",many:"قبل {0} سنة",other:"قبل {0} سنة"}}},month:{displayName:"الشهر",relative:{0:"هذا الشهر",1:"الشهر القادم","-1":"الشهر الماضي"},relativeTime:{future:{zero:"خلال {0} شهر",one:"خلال شهر واحد",two:"خلال شهرين",few:"خلال {0} أشهر",many:"خلال {0} شهرًا",other:"خلال {0} شهر"},past:{zero:"قبل {0} شهر",one:"قبل شهر واحد",two:"قبل شهرين",few:"قبل {0} أشهر",many:"قبل {0} شهرًا",other:"قبل {0} شهر"}}},day:{displayName:"يوم",relative:{0:"اليوم",1:"غدًا",2:"بعد الغد","-2":"أول أمس","-1":"أمس"},relativeTime:{future:{zero:"خلال {0} يوم",one:"خلال يوم واحد",two:"خلال يومين",few:"خلال {0} أيام",many:"خلال {0} يومًا",other:"خلال {0} يوم"},past:{zero:"قبل {0} يوم",one:"قبل يوم واحد",two:"قبل يومين",few:"قبل {0} أيام",many:"قبل {0} يومًا",other:"قبل {0} يوم"}}},hour:{displayName:"الساعات",relative:{0:"الساعة الحالية"},relativeTime:{future:{zero:"خلال {0} ساعة",one:"خلال ساعة واحدة",two:"خلال ساعتين",few:"خلال {0} ساعات",many:"خلال {0} ساعة",other:"خلال {0} ساعة"},past:{zero:"قبل {0} ساعة",one:"قبل ساعة واحدة",two:"قبل ساعتين",few:"قبل {0} ساعات",many:"قبل {0} ساعة",other:"قبل {0} ساعة"}}},minute:{displayName:"الدقائق",relative:{0:"هذه الدقيقة"},relativeTime:{future:{zero:"خلال {0} دقيقة",one:"خلال دقيقة واحدة",two:"خلال دقيقتين",few:"خلال {0} دقائق",many:"خلال {0} دقيقة",other:"خلال {0} دقيقة"},past:{zero:"قبل {0} دقيقة",one:"قبل دقيقة واحدة",two:"قبل دقيقتين",few:"قبل {0} دقائق",many:"قبل {0} دقيقة",other:"قبل {0} دقيقة"}}},second:{displayName:"الثواني",relative:{0:"الآن"},relativeTime:{future:{zero:"خلال {0} ثانية",one:"خلال ثانية واحدة",two:"خلال ثانيتين",few:"خلال {0} ثوانٍ",many:"خلال {0} ثانية",other:"خلال {0} ثانية"},past:{zero:"قبل {0} ثانية",one:"قبل ثانية واحدة",two:"قبل ثانيتين",few:"قبل {0} ثوانِ",many:"قبل {0} ثانية",other:"قبل {0} ثانية"}}}}},{locale:"ar-BH",parentLocale:"ar"},{locale:"ar-DJ",parentLocale:"ar"},{locale:"ar-DZ",parentLocale:"ar"},{locale:"ar-EG",parentLocale:"ar"},{locale:"ar-EH",parentLocale:"ar"},{locale:"ar-ER",parentLocale:"ar"},{locale:"ar-IL",parentLocale:"ar"},{locale:"ar-IQ",parentLocale:"ar"},{locale:"ar-JO",parentLocale:"ar"},{locale:"ar-KM",parentLocale:"ar"},{locale:"ar-KW",parentLocale:"ar"},{locale:"ar-LB",parentLocale:"ar"},{locale:"ar-LY",parentLocale:"ar"},{locale:"ar-MA",parentLocale:"ar"},{locale:"ar-MR",parentLocale:"ar"},{locale:"ar-OM",parentLocale:"ar"},{locale:"ar-PS",parentLocale:"ar"},{locale:"ar-QA",parentLocale:"ar"},{locale:"ar-SA",parentLocale:"ar"},{locale:"ar-SD",parentLocale:"ar"},{locale:"ar-SO",parentLocale:"ar"},{locale:"ar-SS",parentLocale:"ar"},{locale:"ar-SY",parentLocale:"ar"},{locale:"ar-TD",parentLocale:"ar"},{locale:"ar-TN",parentLocale:"ar"},{locale:"ar-YE",parentLocale:"ar"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/az.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/az.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"az",pluralRuleFunction:function(e,t){var a=String(e).split(".")[0],r=a.slice(-1),i=a.slice(-2),n=a.slice(-3);return t?1==r||2==r||5==r||7==r||8==r||20==i||50==i||70==i||80==i?"one":3==r||4==r||100==n||200==n||300==n||400==n||500==n||600==n||700==n||800==n||900==n?"few":0==a||6==r||40==i||60==i||90==i?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"İl",relative:{0:"bu il",1:"gələn il","-1":"keçən il"},relativeTime:{future:{one:"{0} il ərzində",other:"{0} il ərzində"},past:{one:"{0} il öncə",other:"{0} il öncə"}}},month:{displayName:"Ay",relative:{0:"bu ay",1:"gələn ay","-1":"keçən ay"},relativeTime:{future:{one:"{0} ay ərzində",other:"{0} ay ərzində"},past:{one:"{0} ay öncə",other:"{0} ay öncə"}}},day:{displayName:"Gün",relative:{0:"bu gün",1:"sabah","-1":"dünən"},relativeTime:{future:{one:"{0} gün ərzində",other:"{0} gün ərzində"},past:{one:"{0} gün öncə",other:"{0} gün öncə"}}},hour:{displayName:"Saat",relative:{0:"bu saat"},relativeTime:{future:{one:"{0} saat ərzində",other:"{0} saat ərzində"},past:{one:"{0} saat öncə",other:"{0} saat öncə"}}},minute:{displayName:"Dəqiqə",relative:{0:"bu dəqiqə"},relativeTime:{future:{one:"{0} dəqiqə ərzində",other:"{0} dəqiqə ərzində"},past:{one:"{0} dəqiqə öncə",other:"{0} dəqiqə öncə"}}},second:{displayName:"Saniyə",relative:{0:"indi"},relativeTime:{future:{one:"{0} saniyə ərzində",other:"{0} saniyə ərzində"},past:{one:"{0} saniyə öncə",other:"{0} saniyə öncə"}}}}},{locale:"az-Arab",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"az-Cyrl",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"az-Latn",parentLocale:"az"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ca.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ca.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"ca",pluralRuleFunction:function(e,a){var t=!String(e).split(".")[1];return a?1==e||3==e?"one":2==e?"two":4==e?"few":"other":1==e&&t?"one":"other"},fields:{year:{displayName:"any",relative:{0:"enguany",1:"l’any que ve","-1":"l’any passat"},relativeTime:{future:{one:"d’aquí a {0} any",other:"d’aquí a {0} anys"},past:{one:"fa {0} any",other:"fa {0} anys"}}},month:{displayName:"mes",relative:{0:"aquest mes",1:"el mes que ve","-1":"el mes passat"},relativeTime:{future:{one:"d’aquí a {0} mes",other:"d’aquí a {0} mesos"},past:{one:"fa {0} mes",other:"fa {0} mesos"}}},day:{displayName:"dia",relative:{0:"avui",1:"demà",2:"demà passat","-2":"abans-d’ahir","-1":"ahir"},relativeTime:{future:{one:"d’aquí a {0} dia",other:"d’aquí a {0} dies"},past:{one:"fa {0} dia",other:"fa {0} dies"}}},hour:{displayName:"hora",relative:{0:"aquesta hora"},relativeTime:{future:{one:"d’aquí a {0} hora",other:"d’aquí a {0} hores"},past:{one:"fa {0} hora",other:"fa {0} hores"}}},minute:{displayName:"minut",relative:{0:"aquest minut"},relativeTime:{future:{one:"d’aquí a {0} minut",other:"d’aquí a {0} minuts"},past:{one:"fa {0} minut",other:"fa {0} minuts"}}},second:{displayName:"segon",relative:{0:"ara"},relativeTime:{future:{one:"d’aquí a {0} segon",other:"d’aquí a {0} segons"},past:{one:"fa {0} segon",other:"fa {0} segons"}}}}},{locale:"ca-AD",parentLocale:"ca"},{locale:"ca-ES-VALENCIA",parentLocale:"ca-ES",fields:{year:{displayName:"any",relative:{0:"enguany",1:"l’any que ve","-1":"l’any passat"},relativeTime:{future:{one:"d’aquí a {0} any",other:"d’aquí a {0} anys"},past:{one:"fa {0} any",other:"fa {0} anys"}}},month:{displayName:"mes",relative:{0:"aquest mes",1:"el mes que ve","-1":"el mes passat"},relativeTime:{future:{one:"d’aquí a {0} mes",other:"d’aquí a {0} mesos"},past:{one:"fa {0} mes",other:"fa {0} mesos"}}},day:{displayName:"dia",relative:{0:"avui",1:"demà",2:"demà passat","-2":"abans-d’ahir","-1":"ahir"},relativeTime:{future:{one:"d’aquí a {0} dia",other:"d’aquí a {0} dies"},past:{one:"fa {0} dia",other:"fa {0} dies"}}},hour:{displayName:"hora",relative:{0:"aquesta hora"},relativeTime:{future:{one:"d’aquí a {0} hora",other:"d’aquí a {0} hores"},past:{one:"fa {0} hora",other:"fa {0} hores"}}},minute:{displayName:"minut",relative:{0:"aquest minut"},relativeTime:{future:{one:"d’aquí a {0} minut",other:"d’aquí a {0} minuts"},past:{one:"fa {0} minut",other:"fa {0} minuts"}}},second:{displayName:"segon",relative:{0:"ara"},relativeTime:{future:{one:"d’aquí a {0} segon",other:"d’aquí a {0} segons"},past:{one:"fa {0} segon",other:"fa {0} segons"}}}}},{locale:"ca-ES",parentLocale:"ca"},{locale:"ca-FR",parentLocale:"ca"},{locale:"ca-IT",parentLocale:"ca"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/cs.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/cs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"cs",pluralRuleFunction:function(e,a){var n=String(e).split("."),t=n[0],o=!n[1];return a?"other":1==e&&o?"one":t>=2&&t<=4&&o?"few":o?"other":"many"},fields:{year:{displayName:"rok",relative:{0:"tento rok",1:"příští rok","-1":"minulý rok"},relativeTime:{future:{one:"za {0} rok",few:"za {0} roky",many:"za {0} roku",other:"za {0} let"},past:{one:"před {0} rokem",few:"před {0} lety",many:"před {0} roku",other:"před {0} lety"}}},month:{displayName:"měsíc",relative:{0:"tento měsíc",1:"příští měsíc","-1":"minulý měsíc"},relativeTime:{future:{one:"za {0} měsíc",few:"za {0} měsíce",many:"za {0} měsíce",other:"za {0} měsíců"},past:{one:"před {0} měsícem",few:"před {0} měsíci",many:"před {0} měsíce",other:"před {0} měsíci"}}},day:{displayName:"den",relative:{0:"dnes",1:"zítra",2:"pozítří","-2":"předevčírem","-1":"včera"},relativeTime:{future:{one:"za {0} den",few:"za {0} dny",many:"za {0} dne",other:"za {0} dní"},past:{one:"před {0} dnem",few:"před {0} dny",many:"před {0} dne",other:"před {0} dny"}}},hour:{displayName:"hodina",relative:{0:"tuto hodinu"},relativeTime:{future:{one:"za {0} hodinu",few:"za {0} hodiny",many:"za {0} hodiny",other:"za {0} hodin"},past:{one:"před {0} hodinou",few:"před {0} hodinami",many:"před {0} hodiny",other:"před {0} hodinami"}}},minute:{displayName:"minuta",relative:{0:"tuto minutu"},relativeTime:{future:{one:"za {0} minutu",few:"za {0} minuty",many:"za {0} minuty",other:"za {0} minut"},past:{one:"před {0} minutou",few:"před {0} minutami",many:"před {0} minuty",other:"před {0} minutami"}}},second:{displayName:"sekunda",relative:{0:"nyní"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekundy",many:"za {0} sekundy",other:"za {0} sekund"},past:{one:"před {0} sekundou",few:"před {0} sekundami",many:"před {0} sekundy",other:"před {0} sekundami"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/cy.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/cy.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){"use strict";return[{locale:"cy",pluralRuleFunction:function(e,n){return n?0==e||7==e||8==e||9==e?"zero":1==e?"one":2==e?"two":3==e||4==e?"few":5==e||6==e?"many":"other":0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},fields:{year:{displayName:"blwyddyn",relative:{0:"eleni",1:"blwyddyn nesaf","-1":"llynedd"},relativeTime:{future:{zero:"ymhen {0} mlynedd",one:"ymhen blwyddyn",two:"ymhen {0} flynedd",few:"ymhen {0} blynedd",many:"ymhen {0} blynedd",other:"ymhen {0} mlynedd"},past:{zero:"{0} o flynyddoedd yn ôl",one:"blwyddyn yn ôl",two:"{0} flynedd yn ôl",few:"{0} blynedd yn ôl",many:"{0} blynedd yn ôl",other:"{0} o flynyddoedd yn ôl"}}},month:{displayName:"mis",relative:{0:"y mis hwn",1:"mis nesaf","-1":"mis diwethaf"},relativeTime:{future:{zero:"ymhen {0} mis",one:"ymhen mis",two:"ymhen deufis",few:"ymhen {0} mis",many:"ymhen {0} mis",other:"ymhen {0} mis"},past:{zero:"{0} mis yn ôl",one:"{0} mis yn ôl",two:"{0} fis yn ôl",few:"{0} mis yn ôl",many:"{0} mis yn ôl",other:"{0} mis yn ôl"}}},day:{displayName:"dydd",relative:{0:"heddiw",1:"yfory",2:"drennydd","-2":"echdoe","-1":"ddoe"},relativeTime:{future:{zero:"ymhen {0} diwrnod",one:"ymhen diwrnod",two:"ymhen deuddydd",few:"ymhen tridiau",many:"ymhen {0} diwrnod",other:"ymhen {0} diwrnod"},past:{zero:"{0} diwrnod yn ôl",one:"{0} diwrnod yn ôl",two:"{0} ddiwrnod yn ôl",few:"{0} diwrnod yn ôl",many:"{0} diwrnod yn ôl",other:"{0} diwrnod yn ôl"}}},hour:{displayName:"awr",relative:{0:"yr awr hon"},relativeTime:{future:{zero:"ymhen {0} awr",one:"ymhen awr",two:"ymhen {0} awr",few:"ymhen {0} awr",many:"ymhen {0} awr",other:"ymhen {0} awr"},past:{zero:"{0} awr yn ôl",one:"awr yn ôl",two:"{0} awr yn ôl",few:"{0} awr yn ôl",many:"{0} awr yn ôl",other:"{0} awr yn ôl"}}},minute:{displayName:"munud",relative:{0:"y funud hon"},relativeTime:{future:{zero:"ymhen {0} munud",one:"ymhen munud",two:"ymhen {0} funud",few:"ymhen {0} munud",many:"ymhen {0} munud",other:"ymhen {0} munud"},past:{zero:"{0} munud yn ôl",one:"{0} munud yn ôl",two:"{0} funud yn ôl",few:"{0} munud yn ôl",many:"{0} munud yn ôl",other:"{0} munud yn ôl"}}},second:{displayName:"eiliad",relative:{0:"nawr"},relativeTime:{future:{zero:"ymhen {0} eiliad",one:"ymhen eiliad",two:"ymhen {0} eiliad",few:"ymhen {0} eiliad",many:"ymhen {0} eiliad",other:"ymhen {0} eiliad"},past:{zero:"{0} eiliad yn ôl",one:"eiliad yn ôl",two:"{0} eiliad yn ôl",few:"{0} eiliad yn ôl",many:"{0} eiliad yn ôl",other:"{0} eiliad yn ôl"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/da.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/da.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"da",pluralRuleFunction:function(e,t){var r=String(e).split("."),n=r[0],o=Number(r[0])==e;return t?"other":1!=e&&(o||0!=n&&1!=n)?"other":"one"},fields:{year:{displayName:"år",relative:{0:"i år",1:"næste år","-1":"sidste år"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"for {0} år siden",other:"for {0} år siden"}}},month:{displayName:"måned",relative:{0:"denne måned",1:"næste måned","-1":"sidste måned"},relativeTime:{future:{one:"om {0} måned",other:"om {0} måneder"},past:{one:"for {0} måned siden",other:"for {0} måneder siden"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgen",2:"i overmorgen","-2":"i forgårs","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dage"},past:{one:"for {0} dag siden",other:"for {0} dage siden"}}},hour:{displayName:"time",relative:{0:"i den kommende time"},relativeTime:{future:{one:"om {0} time",other:"om {0} timer"},past:{one:"for {0} time siden",other:"for {0} timer siden"}}},minute:{displayName:"minut",relative:{0:"i det kommende minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minutter"},past:{one:"for {0} minut siden",other:"for {0} minutter siden"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"for {0} sekund siden",other:"for {0} sekunder siden"}}}}},{locale:"da-GL",parentLocale:"da"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/de.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/de.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,t){var n=!String(e).split(".")[1];return t?"other":1==e&&n?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/el.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/el.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"el",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"έτος",relative:{0:"φέτος",1:"επόμενο έτος","-1":"πέρσι"},relativeTime:{future:{one:"σε {0} έτος",other:"σε {0} έτη"},past:{one:"πριν από {0} έτος",other:"πριν από {0} έτη"}}},month:{displayName:"μήνας",relative:{0:"τρέχων μήνας",1:"επόμενος μήνας","-1":"προηγούμενος μήνας"},relativeTime:{future:{one:"σε {0} μήνα",other:"σε {0} μήνες"},past:{one:"πριν από {0} μήνα",other:"πριν από {0} μήνες"}}},day:{displayName:"ημέρα",relative:{0:"σήμερα",1:"αύριο",2:"μεθαύριο","-2":"προχθές","-1":"χθες"},relativeTime:{future:{one:"σε {0} ημέρα",other:"σε {0} ημέρες"},past:{one:"πριν από {0} ημέρα",other:"πριν από {0} ημέρες"}}},hour:{displayName:"ώρα",relative:{0:"αυτήν την ώρα"},relativeTime:{future:{one:"σε {0} ώρα",other:"σε {0} ώρες"},past:{one:"πριν από {0} ώρα",other:"πριν από {0} ώρες"}}},minute:{displayName:"λεπτό",relative:{0:"αυτό το λεπτό"},relativeTime:{future:{one:"σε {0} λεπτό",other:"σε {0} λεπτά"},past:{one:"πριν από {0} λεπτό",other:"πριν από {0} λεπτά"}}},second:{displayName:"δευτερόλεπτο",relative:{0:"τώρα"},relativeTime:{future:{one:"σε {0} δευτερόλεπτο",other:"σε {0} δευτερόλεπτα"},past:{one:"πριν από {0} δευτερόλεπτο",other:"πριν από {0} δευτερόλεπτα"}}}}},{locale:"el-CY",parentLocale:"el"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/en.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/en.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"en",pluralRuleFunction:function(e,a){var n=String(e).split("."),l=!n[1],o=Number(n[0])==e,t=o&&n[0].slice(-1),r=o&&n[0].slice(-2);return a?1==t&&11!=r?"one":2==t&&12!=r?"two":3==t&&13!=r?"few":"other":1==e&&l?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relative:{0:"this hour"},relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},minute:{displayName:"minute",relative:{0:"this minute"},relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}}}},{locale:"en-001",parentLocale:"en"},{locale:"en-150",parentLocale:"en-001"},{locale:"en-AG",parentLocale:"en-001"},{locale:"en-AI",parentLocale:"en-001"},{locale:"en-AS",parentLocale:"en"},{locale:"en-AT",parentLocale:"en-150"},{locale:"en-AU",parentLocale:"en-001"},{locale:"en-BB",parentLocale:"en-001"},{locale:"en-BE",parentLocale:"en-001"},{locale:"en-BI",parentLocale:"en"},{locale:"en-BM",parentLocale:"en-001"},{locale:"en-BS",parentLocale:"en-001"},{locale:"en-BW",parentLocale:"en-001"},{locale:"en-BZ",parentLocale:"en-001"},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-CC",parentLocale:"en-001"},{locale:"en-CH",parentLocale:"en-150"},{locale:"en-CK",parentLocale:"en-001"},{locale:"en-CM",parentLocale:"en-001"},{locale:"en-CX",parentLocale:"en-001"},{locale:"en-CY",parentLocale:"en-001"},{locale:"en-DE",parentLocale:"en-150"},{locale:"en-DG",parentLocale:"en-001"},{locale:"en-DK",parentLocale:"en-150"},{locale:"en-DM",parentLocale:"en-001"},{locale:"en-Dsrt",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-ER",parentLocale:"en-001"},{locale:"en-FI",parentLocale:"en-150"},{locale:"en-FJ",parentLocale:"en-001"},{locale:"en-FK",parentLocale:"en-001"},{locale:"en-FM",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-GD",parentLocale:"en-001"},{locale:"en-GG",parentLocale:"en-001"},{locale:"en-GH",parentLocale:"en-001"},{locale:"en-GI",parentLocale:"en-001"},{locale:"en-GM",parentLocale:"en-001"},{locale:"en-GU",parentLocale:"en"},{locale:"en-GY",parentLocale:"en-001"},{locale:"en-HK",parentLocale:"en-001"},{locale:"en-IE",parentLocale:"en-001"},{locale:"en-IL",parentLocale:"en-001"},{locale:"en-IM",parentLocale:"en-001"},{locale:"en-IN",parentLocale:"en-001"},{locale:"en-IO",parentLocale:"en-001"},{locale:"en-JE",parentLocale:"en-001"},{locale:"en-JM",parentLocale:"en-001"},{locale:"en-KE",parentLocale:"en-001"},{locale:"en-KI",parentLocale:"en-001"},{locale:"en-KN",parentLocale:"en-001"},{locale:"en-KY",parentLocale:"en-001"},{locale:"en-LC",parentLocale:"en-001"},{locale:"en-LR",parentLocale:"en-001"},{locale:"en-LS",parentLocale:"en-001"},{locale:"en-MG",parentLocale:"en-001"},{locale:"en-MH",parentLocale:"en"},{locale:"en-MO",parentLocale:"en-001"},{locale:"en-MP",parentLocale:"en"},{locale:"en-MS",parentLocale:"en-001"},{locale:"en-MT",parentLocale:"en-001"},{locale:"en-MU",parentLocale:"en-001"},{locale:"en-MW",parentLocale:"en-001"},{locale:"en-MY",parentLocale:"en-001"},{locale:"en-NA",parentLocale:"en-001"},{locale:"en-NF",parentLocale:"en-001"},{locale:"en-NG",parentLocale:"en-001"},{locale:"en-NL",parentLocale:"en-150"},{locale:"en-NR",parentLocale:"en-001"},{locale:"en-NU",parentLocale:"en-001"},{locale:"en-NZ",parentLocale:"en-001"},{locale:"en-PG",parentLocale:"en-001"},{locale:"en-PH",parentLocale:"en-001"},{locale:"en-PK",parentLocale:"en-001"},{locale:"en-PN",parentLocale:"en-001"},{locale:"en-PR",parentLocale:"en"},{locale:"en-PW",parentLocale:"en-001"},{locale:"en-RW",parentLocale:"en-001"},{locale:"en-SB",parentLocale:"en-001"},{locale:"en-SC",parentLocale:"en-001"},{locale:"en-SD",parentLocale:"en-001"},{locale:"en-SE",parentLocale:"en-150"},{locale:"en-SG",parentLocale:"en-001"},{locale:"en-SH",parentLocale:"en-001"},{locale:"en-SI",parentLocale:"en-150"},{locale:"en-SL",parentLocale:"en-001"},{locale:"en-SS",parentLocale:"en-001"},{locale:"en-SX",parentLocale:"en-001"},{locale:"en-SZ",parentLocale:"en-001"},{locale:"en-Shaw",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-TC",parentLocale:"en-001"},{locale:"en-TK",parentLocale:"en-001"},{locale:"en-TO",parentLocale:"en-001"},{locale:"en-TT",parentLocale:"en-001"},{locale:"en-TV",parentLocale:"en-001"},{locale:"en-TZ",parentLocale:"en-001"},{locale:"en-UG",parentLocale:"en-001"},{locale:"en-UM",parentLocale:"en"},{locale:"en-US",parentLocale:"en"},{locale:"en-VC",parentLocale:"en-001"},{locale:"en-VG",parentLocale:"en-001"},{locale:"en-VI",parentLocale:"en"},{locale:"en-VU",parentLocale:"en-001"},{locale:"en-WS",parentLocale:"en-001"},{locale:"en-ZA",parentLocale:"en-001"},{locale:"en-ZM",parentLocale:"en-001"},{locale:"en-ZW",parentLocale:"en-001"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/es.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/es.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"es",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-419",parentLocale:"es"},{locale:"es-AR",parentLocale:"es-419"},{locale:"es-BO",parentLocale:"es-419"},{locale:"es-BR",parentLocale:"es-419"},{locale:"es-BZ",parentLocale:"es-419"},{locale:"es-CL",parentLocale:"es-419"},{locale:"es-CO",parentLocale:"es-419"},{locale:"es-CR",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-CU",parentLocale:"es-419"},{locale:"es-DO",parentLocale:"es-419",fields:{year:{displayName:"Año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"Mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"Día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"Minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"Segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-EA",parentLocale:"es"},{locale:"es-EC",parentLocale:"es-419"},{locale:"es-GQ",parentLocale:"es"},{locale:"es-GT",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-HN",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-IC",parentLocale:"es"},{locale:"es-MX",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el año próximo","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el mes próximo","-1":"el mes pasado"},relativeTime:{future:{one:"en {0} mes",other:"en {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-NI",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-PA",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-PE",parentLocale:"es-419"},{locale:"es-PH",parentLocale:"es"},{locale:"es-PR",parentLocale:"es-419"},{locale:"es-PY",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antes de ayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-SV",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-US",parentLocale:"es-419"},{locale:"es-UY",parentLocale:"es-419"},{locale:"es-VE",parentLocale:"es-419"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/et.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/et.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"et",pluralRuleFunction:function(e,t){var a=!String(e).split(".")[1];return t?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"aasta",relative:{0:"käesolev aasta",1:"järgmine aasta","-1":"eelmine aasta"},relativeTime:{future:{one:"{0} aasta pärast",other:"{0} aasta pärast"},past:{one:"{0} aasta eest",other:"{0} aasta eest"}}},month:{displayName:"kuu",relative:{0:"käesolev kuu",1:"järgmine kuu","-1":"eelmine kuu"},relativeTime:{future:{one:"{0} kuu pärast",other:"{0} kuu pärast"},past:{one:"{0} kuu eest",other:"{0} kuu eest"}}},day:{displayName:"päev",relative:{0:"täna",1:"homme",2:"ülehomme","-2":"üleeile","-1":"eile"},relativeTime:{future:{one:"{0} päeva pärast",other:"{0} päeva pärast"},past:{one:"{0} päeva eest",other:"{0} päeva eest"}}},hour:{displayName:"tund",relative:{0:"praegusel tunnil"},relativeTime:{future:{one:"{0} tunni pärast",other:"{0} tunni pärast"},past:{one:"{0} tunni eest",other:"{0} tunni eest"}}},minute:{displayName:"minut",relative:{0:"praegusel minutil"},relativeTime:{future:{one:"{0} minuti pärast",other:"{0} minuti pärast"},past:{one:"{0} minuti eest",other:"{0} minuti eest"}}},second:{displayName:"sekund",relative:{0:"nüüd"},relativeTime:{future:{one:"{0} sekundi pärast",other:"{0} sekundi pärast"},past:{one:"{0} sekundi eest",other:"{0} sekundi eest"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/eu.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/eu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"eu",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"urtea",relative:{0:"aurten",1:"hurrengo urtea","-1":"aurreko urtea"},relativeTime:{future:{one:"{0} urte barru",other:"{0} urte barru"},past:{one:"Duela {0} urte",other:"Duela {0} urte"}}},month:{displayName:"hilabetea",relative:{0:"hilabete hau",1:"hurrengo hilabetea","-1":"aurreko hilabetea"},relativeTime:{future:{one:"{0} hilabete barru",other:"{0} hilabete barru"},past:{one:"Duela {0} hilabete",other:"Duela {0} hilabete"}}},day:{displayName:"eguna",relative:{0:"gaur",1:"bihar",2:"etzi","-2":"herenegun","-1":"atzo"},relativeTime:{future:{one:"{0} egun barru",other:"{0} egun barru"},past:{one:"Duela {0} egun",other:"Duela {0} egun"}}},hour:{displayName:"ordua",relative:{0:"ordu honetan"},relativeTime:{future:{one:"{0} ordu barru",other:"{0} ordu barru"},past:{one:"Duela {0} ordu",other:"Duela {0} ordu"}}},minute:{displayName:"minutua",relative:{0:"minutu honetan"},relativeTime:{future:{one:"{0} minutu barru",other:"{0} minutu barru"},past:{one:"Duela {0} minutu",other:"Duela {0} minutu"}}},second:{displayName:"segundoa",relative:{0:"orain"},relativeTime:{future:{one:"{0} segundo barru",other:"{0} segundo barru"},past:{one:"Duela {0} segundo",other:"Duela {0} segundo"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/fi.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/fi.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";return[{locale:"fi",pluralRuleFunction:function(t,e){var n=!String(t).split(".")[1];return e?"other":1==t&&n?"one":"other"},fields:{year:{displayName:"vuosi",relative:{0:"tänä vuonna",1:"ensi vuonna","-1":"viime vuonna"},relativeTime:{future:{one:"{0} vuoden päästä",other:"{0} vuoden päästä"},past:{one:"{0} vuosi sitten",other:"{0} vuotta sitten"}}},month:{displayName:"kuukausi",relative:{0:"tässä kuussa",1:"ensi kuussa","-1":"viime kuussa"},relativeTime:{future:{one:"{0} kuukauden päästä",other:"{0} kuukauden päästä"},past:{one:"{0} kuukausi sitten",other:"{0} kuukautta sitten"}}},day:{displayName:"päivä",relative:{0:"tänään",1:"huomenna",2:"ylihuomenna","-2":"toissa päivänä","-1":"eilen"},relativeTime:{future:{one:"{0} päivän päästä",other:"{0} päivän päästä"},past:{one:"{0} päivä sitten",other:"{0} päivää sitten"}}},hour:{displayName:"tunti",relative:{0:"tämän tunnin aikana"},relativeTime:{future:{one:"{0} tunnin päästä",other:"{0} tunnin päästä"},past:{one:"{0} tunti sitten",other:"{0} tuntia sitten"}}},minute:{displayName:"minuutti",relative:{0:"tämän minuutin aikana"},relativeTime:{future:{one:"{0} minuutin päästä",other:"{0} minuutin päästä"},past:{one:"{0} minuutti sitten",other:"{0} minuuttia sitten"}}},second:{displayName:"sekunti",relative:{0:"nyt"},relativeTime:{future:{one:"{0} sekunnin päästä",other:"{0} sekunnin päästä"},past:{one:"{0} sekunti sitten",other:"{0} sekuntia sitten"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/fr.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/fr.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"fr",pluralRuleFunction:function(e,a){return a?1==e?"one":"other":e>=0&&e<2?"one":"other"},fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} an",other:"dans {0} ans"},past:{one:"il y a {0} an",other:"il y a {0} ans"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},hour:{displayName:"heure",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},minute:{displayName:"minute",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} minute",other:"dans {0} minutes"},past:{one:"il y a {0} minute",other:"il y a {0} minutes"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}}}},{locale:"fr-BE",parentLocale:"fr"},{locale:"fr-BF",parentLocale:"fr"},{locale:"fr-BI",parentLocale:"fr"},{locale:"fr-BJ",parentLocale:"fr"},{locale:"fr-BL",parentLocale:"fr"},{locale:"fr-CA",parentLocale:"fr",fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"Dans {0} an",other:"Dans {0} ans"},past:{one:"Il y a {0} an",other:"Il y a {0} ans"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},hour:{displayName:"heure",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},minute:{displayName:"minute",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} minute",other:"dans {0} minutes"},past:{one:"il y a {0} minute",other:"il y a {0} minutes"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}}}},{locale:"fr-CD",parentLocale:"fr"},{locale:"fr-CF",parentLocale:"fr"},{locale:"fr-CG",parentLocale:"fr"},{locale:"fr-CH",parentLocale:"fr"},{locale:"fr-CI",parentLocale:"fr"},{locale:"fr-CM",parentLocale:"fr"},{locale:"fr-DJ",parentLocale:"fr"},{locale:"fr-DZ",parentLocale:"fr"},{locale:"fr-GA",parentLocale:"fr"},{locale:"fr-GF",parentLocale:"fr"},{locale:"fr-GN",parentLocale:"fr"},{locale:"fr-GP",parentLocale:"fr"},{locale:"fr-GQ",parentLocale:"fr"},{locale:"fr-HT",parentLocale:"fr"},{locale:"fr-KM",parentLocale:"fr"},{locale:"fr-LU",parentLocale:"fr"},{locale:"fr-MA",parentLocale:"fr"},{locale:"fr-MC",parentLocale:"fr"},{locale:"fr-MF",parentLocale:"fr"},{locale:"fr-MG",parentLocale:"fr"},{locale:"fr-ML",parentLocale:"fr"},{locale:"fr-MQ",parentLocale:"fr"},{locale:"fr-MR",parentLocale:"fr"},{locale:"fr-MU",parentLocale:"fr"},{locale:"fr-NC",parentLocale:"fr"},{locale:"fr-NE",parentLocale:"fr"},{locale:"fr-PF",parentLocale:"fr"},{locale:"fr-PM",parentLocale:"fr"},{locale:"fr-RE",parentLocale:"fr"},{locale:"fr-RW",parentLocale:"fr"},{locale:"fr-SC",parentLocale:"fr"},{locale:"fr-SN",parentLocale:"fr"},{locale:"fr-SY",parentLocale:"fr"},{locale:"fr-TD",parentLocale:"fr"},{locale:"fr-TG",parentLocale:"fr"},{locale:"fr-TN",parentLocale:"fr"},{locale:"fr-VU",parentLocale:"fr"},{locale:"fr-WF",parentLocale:"fr"},{locale:"fr-YT",parentLocale:"fr"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ga.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ga.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,i){ true?module.exports=i():undefined}(this,function(){"use strict";return[{locale:"ga",pluralRuleFunction:function(n,i){var a=String(n).split("."),e=Number(a[0])==n;return i?1==n?"one":"other":1==n?"one":2==n?"two":e&&n>=3&&n<=6?"few":e&&n>=7&&n<=10?"many":"other"},fields:{year:{displayName:"Bliain",relative:{0:"an bhliain seo",1:"an bhliain seo chugainn","-1":"anuraidh"},relativeTime:{future:{one:"i gceann {0} bhliain",two:"i gceann {0} bhliain",few:"i gceann {0} bliana",many:"i gceann {0} mbliana",other:"i gceann {0} bliain"},past:{one:"{0} bhliain ó shin",two:"{0} bhliain ó shin",few:"{0} bliana ó shin",many:"{0} mbliana ó shin",other:"{0} bliain ó shin"}}},month:{displayName:"Mí",relative:{0:"an mhí seo",1:"an mhí seo chugainn","-1":"an mhí seo caite"},relativeTime:{future:{one:"i gceann {0} mhí",two:"i gceann {0} mhí",few:"i gceann {0} mhí",many:"i gceann {0} mí",other:"i gceann {0} mí"},past:{one:"{0} mhí ó shin",two:"{0} mhí ó shin",few:"{0} mhí ó shin",many:"{0} mí ó shin",other:"{0} mí ó shin"}}},day:{displayName:"Lá",relative:{0:"inniu",1:"amárach",2:"arú amárach","-2":"arú inné","-1":"inné"},relativeTime:{future:{one:"i gceann {0} lá",two:"i gceann {0} lá",few:"i gceann {0} lá",many:"i gceann {0} lá",other:"i gceann {0} lá"},past:{one:"{0} lá ó shin",two:"{0} lá ó shin",few:"{0} lá ó shin",many:"{0} lá ó shin",other:"{0} lá ó shin"}}},hour:{displayName:"Uair",relative:{0:"an uair seo"},relativeTime:{future:{one:"i gceann {0} uair an chloig",two:"i gceann {0} uair an chloig",few:"i gceann {0} huaire an chloig",many:"i gceann {0} n-uaire an chloig",other:"i gceann {0} uair an chloig"},past:{one:"{0} uair an chloig ó shin",two:"{0} uair an chloig ó shin",few:"{0} huaire an chloig ó shin",many:"{0} n-uaire an chloig ó shin",other:"{0} uair an chloig ó shin"}}},minute:{displayName:"Nóiméad",relative:{0:"an nóiméad seo"},relativeTime:{future:{one:"i gceann {0} nóiméad",two:"i gceann {0} nóiméad",few:"i gceann {0} nóiméad",many:"i gceann {0} nóiméad",other:"i gceann {0} nóiméad"},past:{one:"{0} nóiméad ó shin",two:"{0} nóiméad ó shin",few:"{0} nóiméad ó shin",many:"{0} nóiméad ó shin",other:"{0} nóiméad ó shin"}}},second:{displayName:"Soicind",relative:{0:"anois"},relativeTime:{future:{one:"i gceann {0} soicind",two:"i gceann {0} shoicind",few:"i gceann {0} shoicind",many:"i gceann {0} soicind",other:"i gceann {0} soicind"},past:{one:"{0} soicind ó shin",two:"{0} shoicind ó shin",few:"{0} shoicind ó shin",many:"{0} soicind ó shin",other:"{0} soicind ó shin"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/gd.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/gd.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(a,e){ true?module.exports=e():undefined}(this,function(){"use strict";return[{locale:"gd",pluralRuleFunction:function(a,e){var n=String(a).split("."),i=Number(n[0])==a;return e?"other":1==a||11==a?"one":2==a||12==a?"two":i&&a>=3&&a<=10||i&&a>=13&&a<=19?"few":"other"},fields:{year:{displayName:"bliadhna",relative:{0:"am bliadhna",1:"an ath-bhliadhna","-2":"a-bhòn-uiridh","-1":"an-uiridh"},relativeTime:{future:{one:"an ceann {0} bhliadhna",two:"an ceann {0} bhliadhna",few:"an ceann {0} bliadhnaichean",other:"an ceann {0} bliadhna"},past:{one:"{0} bhliadhna air ais",two:"{0} bhliadhna air ais",few:"{0} bhliadhnaichean air ais",other:"{0} bliadhna air ais"}}},month:{displayName:"mìos",relative:{0:"am mìos seo",1:"an ath-mhìos","-1":"am mìos seo chaidh"},relativeTime:{future:{one:"an ceann {0} mhìosa",two:"an ceann {0} mhìosa",few:"an ceann {0} mìosan",other:"an ceann {0} mìosa"},past:{one:"{0} mhìos air ais",two:"{0} mhìos air ais",few:"{0} mìosan air ais",other:"{0} mìos air ais"}}},day:{displayName:"latha",relative:{0:"an-diugh",1:"a-màireach",2:"an-earar",3:"an-eararais","-2":"a-bhòin-dè","-1":"an-dè"},relativeTime:{future:{one:"an ceann {0} latha",two:"an ceann {0} latha",few:"an ceann {0} làithean",other:"an ceann {0} latha"},past:{one:"{0} latha air ais",two:"{0} latha air ais",few:"{0} làithean air ais",other:"{0} latha air ais"}}},hour:{displayName:"uair a thìde",relative:{0:"this hour"},relativeTime:{future:{one:"an ceann {0} uair a thìde",two:"an ceann {0} uair a thìde",few:"an ceann {0} uairean a thìde",other:"an ceann {0} uair a thìde"},past:{one:"{0} uair a thìde air ais",two:"{0} uair a thìde air ais",few:"{0} uairean a thìde air ais",other:"{0} uair a thìde air ais"}}},minute:{displayName:"mionaid",relative:{0:"this minute"},relativeTime:{future:{one:"an ceann {0} mhionaid",two:"an ceann {0} mhionaid",few:"an ceann {0} mionaidean",other:"an ceann {0} mionaid"},past:{one:"{0} mhionaid air ais",two:"{0} mhionaid air ais",few:"{0} mionaidean air ais",other:"{0} mionaid air ais"}}},second:{displayName:"diog",relative:{0:"an-dràsta"},relativeTime:{future:{one:"an ceann {0} diog",two:"an ceann {0} dhiog",few:"an ceann {0} diogan",other:"an ceann {0} diog"},past:{one:"{0} diog air ais",two:"{0} dhiog air ais",few:"{0} diogan air ais",other:"{0} diog air ais"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/gl.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/gl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"gl",pluralRuleFunction:function(e,a){var o=!String(e).split(".")[1];return a?"other":1==e&&o?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"o próximo ano","-1":"o ano pasado"},relativeTime:{future:{one:"en {0} ano",other:"en {0} anos"},past:{one:"hai {0} ano",other:"hai {0} anos"}}},month:{displayName:"mes",relative:{0:"este mes",1:"o próximo mes","-1":"o mes pasado"},relativeTime:{future:{one:"en {0} mes",other:"en {0} meses"},past:{one:"hai {0} mes",other:"hai {0} meses"}}},day:{displayName:"día",relative:{0:"hoxe",1:"mañá",2:"pasadomañá","-2":"antonte","-1":"onte"},relativeTime:{future:{one:"en {0} día",other:"en {0} días"},past:{one:"hai {0} día",other:"hai {0} días"}}},hour:{displayName:"hora",relative:{0:"nesta hora"},relativeTime:{future:{one:"en {0} hora",other:"en {0} horas"},past:{one:"hai {0} hora",other:"hai {0} horas"}}},minute:{displayName:"minuto",relative:{0:"neste minuto"},relativeTime:{future:{one:"en {0} minuto",other:"en {0} minutos"},past:{one:"hai {0} minuto",other:"hai {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"en {0} segundo",other:"en {0} segundos"},past:{one:"hai {0} segundo",other:"hai {0} segundos"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/he.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/he.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"he",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=a[0],n=!a[1],r=Number(a[0])==e,i=r&&a[0].slice(-1);return t?"other":1==e&&n?"one":2==o&&n?"two":n&&(e<0||e>10)&&r&&0==i?"many":"other"},fields:{year:{displayName:"שנה",relative:{0:"השנה",1:"השנה הבאה","-1":"השנה שעברה"},relativeTime:{future:{one:"בעוד שנה",two:"בעוד שנתיים",many:"בעוד {0} שנה",other:"בעוד {0} שנים"},past:{one:"לפני שנה",two:"לפני שנתיים",many:"לפני {0} שנה",other:"לפני {0} שנים"}}},month:{displayName:"חודש",relative:{0:"החודש",1:"החודש הבא","-1":"החודש שעבר"},relativeTime:{future:{one:"בעוד חודש",two:"בעוד חודשיים",many:"בעוד {0} חודשים",other:"בעוד {0} חודשים"},past:{one:"לפני חודש",two:"לפני חודשיים",many:"לפני {0} חודשים",other:"לפני {0} חודשים"}}},day:{displayName:"יום",relative:{0:"היום",1:"מחר",2:"מחרתיים","-2":"שלשום","-1":"אתמול"},relativeTime:{future:{one:"בעוד יום {0}",two:"בעוד יומיים",many:"בעוד {0} ימים",other:"בעוד {0} ימים"},past:{one:"לפני יום {0}",two:"לפני יומיים",many:"לפני {0} ימים",other:"לפני {0} ימים"}}},hour:{displayName:"שעה",relative:{0:"בשעה זו"},relativeTime:{future:{one:"בעוד שעה",two:"בעוד שעתיים",many:"בעוד {0} שעות",other:"בעוד {0} שעות"},past:{one:"לפני שעה",two:"לפני שעתיים",many:"לפני {0} שעות",other:"לפני {0} שעות"}}},minute:{displayName:"דקה",relative:{0:"בדקה זו"},relativeTime:{future:{one:"בעוד דקה",two:"בעוד שתי דקות",many:"בעוד {0} דקות",other:"בעוד {0} דקות"},past:{one:"לפני דקה",two:"לפני שתי דקות",many:"לפני {0} דקות",other:"לפני {0} דקות"}}},second:{displayName:"שנייה",relative:{0:"עכשיו"},relativeTime:{future:{one:"בעוד שנייה",two:"בעוד שתי שניות",many:"בעוד {0} שניות",other:"בעוד {0} שניות"},past:{one:"לפני שנייה",two:"לפני שתי שניות",many:"לפני {0} שניות",other:"לפני {0} שניות"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/hr.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/hr.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"hr",pluralRuleFunction:function(e,a){var i=String(e).split("."),t=i[0],r=i[1]||"",n=!i[1],o=t.slice(-1),s=t.slice(-2),u=r.slice(-1),d=r.slice(-2);return a?"other":n&&1==o&&11!=s||1==u&&11!=d?"one":n&&o>=2&&o<=4&&(s<12||s>14)||u>=2&&u<=4&&(d<12||d>14)?"few":"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sljedeće godine","-1":"prošle godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"prije {0} godinu",few:"prije {0} godine",other:"prije {0} godina"}}},month:{displayName:"mjesec",relative:{0:"ovaj mjesec",1:"sljedeći mjesec","-1":"prošli mjesec"},relativeTime:{future:{one:"za {0} mjesec",few:"za {0} mjeseca",other:"za {0} mjeseci"},past:{one:"prije {0} mjesec",few:"prije {0} mjeseca",other:"prije {0} mjeseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekjučer","-1":"jučer"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"prije {0} dan",few:"prije {0} dana",other:"prije {0} dana"}}},hour:{displayName:"sat",relative:{0:"ovaj sat"},relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"prije {0} sat",few:"prije {0} sata",other:"prije {0} sati"}}},minute:{displayName:"minuta",relative:{0:"ova minuta"},relativeTime:{future:{one:"za {0} minutu",few:"za {0} minute",other:"za {0} minuta"},past:{one:"prije {0} minutu",few:"prije {0} minute",other:"prije {0} minuta"}}},second:{displayName:"sekunda",relative:{0:"sad"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"prije {0} sekundu",few:"prije {0} sekunde",other:"prije {0} sekundi"}}}}},{locale:"hr-BA",parentLocale:"hr"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/hu.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/hu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"hu",pluralRuleFunction:function(e,t){return t?1==e||5==e?"one":"other":1==e?"one":"other"},fields:{year:{displayName:"év",relative:{0:"ez az év",1:"következő év","-1":"előző év"},relativeTime:{future:{one:"{0} év múlva",other:"{0} év múlva"},past:{one:"{0} évvel ezelőtt",other:"{0} évvel ezelőtt"}}},month:{displayName:"hónap",relative:{0:"ez a hónap",1:"következő hónap","-1":"előző hónap"},relativeTime:{future:{one:"{0} hónap múlva",other:"{0} hónap múlva"},past:{one:"{0} hónappal ezelőtt",other:"{0} hónappal ezelőtt"}}},day:{displayName:"nap",relative:{0:"ma",1:"holnap",2:"holnapután","-2":"tegnapelőtt","-1":"tegnap"},relativeTime:{future:{one:"{0} nap múlva",other:"{0} nap múlva"},past:{one:"{0} nappal ezelőtt",other:"{0} nappal ezelőtt"}}},hour:{displayName:"óra",relative:{0:"ebben az órában"},relativeTime:{future:{one:"{0} óra múlva",other:"{0} óra múlva"},past:{one:"{0} órával ezelőtt",other:"{0} órával ezelőtt"}}},minute:{displayName:"perc",relative:{0:"ebben a percben"},relativeTime:{future:{one:"{0} perc múlva",other:"{0} perc múlva"},past:{one:"{0} perccel ezelőtt",other:"{0} perccel ezelőtt"}}},second:{displayName:"másodperc",relative:{0:"most"},relativeTime:{future:{one:"{0} másodperc múlva",other:"{0} másodperc múlva"},past:{one:"{0} másodperccel ezelőtt",other:"{0} másodperccel ezelőtt"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/id.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/id.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(a,e){ true?module.exports=e():undefined}(this,function(){"use strict";return[{locale:"id",pluralRuleFunction:function(a,e){return"other"},fields:{year:{displayName:"Tahun",relative:{0:"tahun ini",1:"tahun depan","-1":"tahun lalu"},relativeTime:{future:{other:"Dalam {0} tahun"},past:{other:"{0} tahun yang lalu"}}},month:{displayName:"Bulan",relative:{0:"bulan ini",1:"Bulan berikutnya","-1":"bulan lalu"},relativeTime:{future:{other:"Dalam {0} bulan"},past:{other:"{0} bulan yang lalu"}}},day:{displayName:"Hari",relative:{0:"hari ini",1:"besok",2:"lusa","-2":"kemarin dulu","-1":"kemarin"},relativeTime:{future:{other:"Dalam {0} hari"},past:{other:"{0} hari yang lalu"}}},hour:{displayName:"Jam",relative:{0:"jam ini"},relativeTime:{future:{other:"Dalam {0} jam"},past:{other:"{0} jam yang lalu"}}},minute:{displayName:"Menit",relative:{0:"menit ini"},relativeTime:{future:{other:"Dalam {0} menit"},past:{other:"{0} menit yang lalu"}}},second:{displayName:"Detik",relative:{0:"sekarang"},relativeTime:{future:{other:"Dalam {0} detik"},past:{other:"{0} detik yang lalu"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/is.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/is.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){"use strict";return[{locale:"is",pluralRuleFunction:function(e,r){var t=String(e).split("."),i=t[0],u=Number(t[0])==e,a=i.slice(-1),n=i.slice(-2);return r?"other":u&&1==a&&11!=n||!u?"one":"other"},fields:{year:{displayName:"ár",relative:{0:"á þessu ári",1:"á næsta ári","-1":"á síðasta ári"},relativeTime:{future:{one:"eftir {0} ár",other:"eftir {0} ár"},past:{one:"fyrir {0} ári",other:"fyrir {0} árum"}}},month:{displayName:"mánuður",relative:{0:"í þessum mánuði",1:"í næsta mánuði","-1":"í síðasta mánuði"},relativeTime:{future:{one:"eftir {0} mánuð",other:"eftir {0} mánuði"},past:{one:"fyrir {0} mánuði",other:"fyrir {0} mánuðum"}}},day:{displayName:"dagur",relative:{0:"í dag",1:"á morgun",2:"eftir tvo daga","-2":"í fyrradag","-1":"í gær"},relativeTime:{future:{one:"eftir {0} dag",other:"eftir {0} daga"},past:{one:"fyrir {0} degi",other:"fyrir {0} dögum"}}},hour:{displayName:"klukkustund",relative:{0:"this hour"},relativeTime:{future:{one:"eftir {0} klukkustund",other:"eftir {0} klukkustundir"},past:{one:"fyrir {0} klukkustund",other:"fyrir {0} klukkustundum"}}},minute:{displayName:"mínúta",relative:{0:"this minute"},relativeTime:{future:{one:"eftir {0} mínútu",other:"eftir {0} mínútur"},past:{one:"fyrir {0} mínútu",other:"fyrir {0} mínútum"}}},second:{displayName:"sekúnda",relative:{0:"núna"},relativeTime:{future:{one:"eftir {0} sekúndu",other:"eftir {0} sekúndur"},past:{one:"fyrir {0} sekúndu",other:"fyrir {0} sekúndum"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/it.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/it.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,o){ true?module.exports=o():undefined}(this,function(){"use strict";return[{locale:"it",pluralRuleFunction:function(e,o){var t=!String(e).split(".")[1];return o?11==e||8==e||80==e||800==e?"many":"other":1==e&&t?"one":"other"},fields:{year:{displayName:"anno",relative:{0:"quest’anno",1:"anno prossimo","-1":"anno scorso"},relativeTime:{future:{one:"tra {0} anno",other:"tra {0} anni"},past:{one:"{0} anno fa",other:"{0} anni fa"}}},month:{displayName:"mese",relative:{0:"questo mese",1:"mese prossimo","-1":"mese scorso"},relativeTime:{future:{one:"tra {0} mese",other:"tra {0} mesi"},past:{one:"{0} mese fa",other:"{0} mesi fa"}}},day:{displayName:"giorno",relative:{0:"oggi",1:"domani",2:"dopodomani","-2":"l’altro ieri","-1":"ieri"},relativeTime:{future:{one:"tra {0} giorno",other:"tra {0} giorni"},past:{one:"{0} giorno fa",other:"{0} giorni fa"}}},hour:{displayName:"ora",relative:{0:"quest’ora"},relativeTime:{future:{one:"tra {0} ora",other:"tra {0} ore"},past:{one:"{0} ora fa",other:"{0} ore fa"}}},minute:{displayName:"minuto",relative:{0:"questo minuto"},relativeTime:{future:{one:"tra {0} minuto",other:"tra {0} minuti"},past:{one:"{0} minuto fa",other:"{0} minuti fa"}}},second:{displayName:"secondo",relative:{0:"ora"},relativeTime:{future:{one:"tra {0} secondo",other:"tra {0} secondi"},past:{one:"{0} secondo fa",other:"{0} secondi fa"}}}}},{locale:"it-CH",parentLocale:"it"},{locale:"it-SM",parentLocale:"it"},{locale:"it-VA",parentLocale:"it"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ja.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ja.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"ja",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"翌年","-1":"昨年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"今月",1:"翌月","-1":"先月"},relativeTime:{future:{other:"{0} か月後"},past:{other:"{0} か月前"}}},day:{displayName:"日",relative:{0:"今日",1:"明日",2:"明後日","-2":"一昨日","-1":"昨日"},relativeTime:{future:{other:"{0} 日後"},past:{other:"{0} 日前"}}},hour:{displayName:"時",relative:{0:"1 時間以内"},relativeTime:{future:{other:"{0} 時間後"},past:{other:"{0} 時間前"}}},minute:{displayName:"分",relative:{0:"1 分以内"},relativeTime:{future:{other:"{0} 分後"},past:{other:"{0} 分前"}}},second:{displayName:"秒",relative:{0:"今"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ko.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ko.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"ko",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"년",relative:{0:"올해",1:"내년","-1":"작년"},relativeTime:{future:{other:"{0}년 후"},past:{other:"{0}년 전"}}},month:{displayName:"월",relative:{0:"이번 달",1:"다음 달","-1":"지난달"},relativeTime:{future:{other:"{0}개월 후"},past:{other:"{0}개월 전"}}},day:{displayName:"일",relative:{0:"오늘",1:"내일",2:"모레","-2":"그저께","-1":"어제"},relativeTime:{future:{other:"{0}일 후"},past:{other:"{0}일 전"}}},hour:{displayName:"시",relative:{0:"현재 시간"},relativeTime:{future:{other:"{0}시간 후"},past:{other:"{0}시간 전"}}},minute:{displayName:"분",relative:{0:"현재 분"},relativeTime:{future:{other:"{0}분 후"},past:{other:"{0}분 전"}}},second:{displayName:"초",relative:{0:"지금"},relativeTime:{future:{other:"{0}초 후"},past:{other:"{0}초 전"}}}}},{locale:"ko-KP",parentLocale:"ko"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/lt.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/lt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,i){ true?module.exports=i():undefined}(this,function(){"use strict";return[{locale:"lt",pluralRuleFunction:function(e,i){var n=String(e).split("."),a=n[1]||"",t=Number(n[0])==e,o=t&&n[0].slice(-1),r=t&&n[0].slice(-2);return i?"other":1==o&&(r<11||r>19)?"one":o>=2&&o<=9&&(r<11||r>19)?"few":0!=a?"many":"other"},fields:{year:{displayName:"metai",relative:{0:"šiais metais",1:"kitais metais","-1":"praėjusiais metais"},relativeTime:{future:{one:"po {0} metų",few:"po {0} metų",many:"po {0} metų",other:"po {0} metų"},past:{one:"prieš {0} metus",few:"prieš {0} metus",many:"prieš {0} metų",other:"prieš {0} metų"}}},month:{displayName:"mėnuo",relative:{0:"šį mėnesį",1:"kitą mėnesį","-1":"praėjusį mėnesį"},relativeTime:{future:{one:"po {0} mėnesio",few:"po {0} mėnesių",many:"po {0} mėnesio",other:"po {0} mėnesių"},past:{one:"prieš {0} mėnesį",few:"prieš {0} mėnesius",many:"prieš {0} mėnesio",other:"prieš {0} mėnesių"}}},day:{displayName:"diena",relative:{0:"šiandien",1:"rytoj",2:"poryt","-2":"užvakar","-1":"vakar"},relativeTime:{future:{one:"po {0} dienos",few:"po {0} dienų",many:"po {0} dienos",other:"po {0} dienų"},past:{one:"prieš {0} dieną",few:"prieš {0} dienas",many:"prieš {0} dienos",other:"prieš {0} dienų"}}},hour:{displayName:"valanda",relative:{0:"šią valandą"},relativeTime:{future:{one:"po {0} valandos",few:"po {0} valandų",many:"po {0} valandos",other:"po {0} valandų"},past:{one:"prieš {0} valandą",few:"prieš {0} valandas",many:"prieš {0} valandos",other:"prieš {0} valandų"}}},minute:{displayName:"minutė",relative:{0:"šią minutę"},relativeTime:{future:{one:"po {0} minutės",few:"po {0} minučių",many:"po {0} minutės",other:"po {0} minučių"},past:{one:"prieš {0} minutę",few:"prieš {0} minutes",many:"prieš {0} minutės",other:"prieš {0} minučių"}}},second:{displayName:"sekundė",relative:{0:"dabar"},relativeTime:{future:{one:"po {0} sekundės",few:"po {0} sekundžių",many:"po {0} sekundės",other:"po {0} sekundžių"},past:{one:"prieš {0} sekundę",few:"prieš {0} sekundes",many:"prieš {0} sekundės",other:"prieš {0} sekundžių"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/lv.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/lv.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"lv",pluralRuleFunction:function(e,a){var i=String(e).split("."),t=i[1]||"",n=t.length,m=Number(i[0])==e,r=m&&i[0].slice(-1),s=m&&i[0].slice(-2),o=t.slice(-2),p=t.slice(-1);return a?"other":m&&0==r||s>=11&&s<=19||2==n&&o>=11&&o<=19?"zero":1==r&&11!=s||2==n&&1==p&&11!=o||2!=n&&1==p?"one":"other"},fields:{year:{displayName:"gads",relative:{0:"šajā gadā",1:"nākamajā gadā","-1":"pagājušajā gadā"},relativeTime:{future:{zero:"pēc {0} gadiem",one:"pēc {0} gada",other:"pēc {0} gadiem"},past:{zero:"pirms {0} gadiem",one:"pirms {0} gada",other:"pirms {0} gadiem"}}},month:{displayName:"mēnesis",relative:{0:"šajā mēnesī",1:"nākamajā mēnesī","-1":"pagājušajā mēnesī"},relativeTime:{future:{zero:"pēc {0} mēnešiem",one:"pēc {0} mēneša",other:"pēc {0} mēnešiem"},past:{zero:"pirms {0} mēnešiem",one:"pirms {0} mēneša",other:"pirms {0} mēnešiem"}}},day:{displayName:"diena",relative:{0:"šodien",1:"rīt",2:"parīt","-2":"aizvakar","-1":"vakar"},relativeTime:{future:{zero:"pēc {0} dienām",one:"pēc {0} dienas",other:"pēc {0} dienām"},past:{zero:"pirms {0} dienām",one:"pirms {0} dienas",other:"pirms {0} dienām"}}},hour:{displayName:"stundas",relative:{0:"šajā stundā"},relativeTime:{future:{zero:"pēc {0} stundām",one:"pēc {0} stundas",other:"pēc {0} stundām"},past:{zero:"pirms {0} stundām",one:"pirms {0} stundas",other:"pirms {0} stundām"}}},minute:{displayName:"minūtes",relative:{0:"šajā minūtē"},relativeTime:{future:{zero:"pēc {0} minūtēm",one:"pēc {0} minūtes",other:"pēc {0} minūtēm"},past:{zero:"pirms {0} minūtēm",one:"pirms {0} minūtes",other:"pirms {0} minūtēm"}}},second:{displayName:"sekundes",relative:{0:"tagad"},relativeTime:{future:{zero:"pēc {0} sekundēm",one:"pēc {0} sekundes",other:"pēc {0} sekundēm"},past:{zero:"pirms {0} sekundēm",one:"pirms {0} sekundes",other:"pirms {0} sekundēm"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/nb.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/nb.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"nb",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"neste år","-1":"i fjor"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"for {0} år siden",other:"for {0} år siden"}}},month:{displayName:"måned",relative:{0:"denne måneden",1:"neste måned","-1":"forrige måned"},relativeTime:{future:{one:"om {0} måned",other:"om {0} måneder"},past:{one:"for {0} måned siden",other:"for {0} måneder siden"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgen",2:"i overmorgen","-2":"i forgårs","-1":"i går"},relativeTime:{future:{one:"om {0} døgn",other:"om {0} døgn"},past:{one:"for {0} døgn siden",other:"for {0} døgn siden"}}},hour:{displayName:"time",relative:{0:"denne timen"},relativeTime:{future:{one:"om {0} time",other:"om {0} timer"},past:{one:"for {0} time siden",other:"for {0} timer siden"}}},minute:{displayName:"minutt",relative:{0:"dette minuttet"},relativeTime:{future:{one:"om {0} minutt",other:"om {0} minutter"},past:{one:"for {0} minutt siden",other:"for {0} minutter siden"}}},second:{displayName:"sekund",relative:{0:"nå"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"for {0} sekund siden",other:"for {0} sekunder siden"}}}}},{locale:"nb-SJ",parentLocale:"nb"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/nl.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/nl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){"use strict";return[{locale:"nl",pluralRuleFunction:function(e,n){var a=!String(e).split(".")[1];return n?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"jaar",relative:{0:"dit jaar",1:"volgend jaar","-1":"vorig jaar"},relativeTime:{future:{one:"over {0} jaar",other:"over {0} jaar"},past:{one:"{0} jaar geleden",other:"{0} jaar geleden"}}},month:{displayName:"maand",relative:{0:"deze maand",1:"volgende maand","-1":"vorige maand"},relativeTime:{future:{one:"over {0} maand",other:"over {0} maanden"},past:{one:"{0} maand geleden",other:"{0} maanden geleden"}}},day:{displayName:"dag",relative:{0:"vandaag",1:"morgen",2:"overmorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"over {0} dag",other:"over {0} dagen"},past:{one:"{0} dag geleden",other:"{0} dagen geleden"}}},hour:{displayName:"uur",relative:{0:"binnen een uur"},relativeTime:{future:{one:"over {0} uur",other:"over {0} uur"},past:{one:"{0} uur geleden",other:"{0} uur geleden"}}},minute:{displayName:"minuut",relative:{0:"binnen een minuut"},relativeTime:{future:{one:"over {0} minuut",other:"over {0} minuten"},past:{one:"{0} minuut geleden",other:"{0} minuten geleden"}}},second:{displayName:"seconde",relative:{0:"nu"},relativeTime:{future:{one:"over {0} seconde",other:"over {0} seconden"},past:{one:"{0} seconde geleden",other:"{0} seconden geleden"}}}}},{locale:"nl-AW",parentLocale:"nl"},{locale:"nl-BE",parentLocale:"nl"},{locale:"nl-BQ",parentLocale:"nl"},{locale:"nl-CW",parentLocale:"nl"},{locale:"nl-SR",parentLocale:"nl"},{locale:"nl-SX",parentLocale:"nl"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/nn.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/nn.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"nn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"år",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"for {0} år siden",other:"for {0} år siden"}}},month:{displayName:"månad",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"om {0} måned",other:"om {0} måneder"},past:{one:"for {0} måned siden",other:"for {0} måneder siden"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i overmorgon","-2":"i forgårs","-1":"i går"},relativeTime:{future:{one:"om {0} døgn",other:"om {0} døgn"},past:{one:"for {0} døgn siden",other:"for {0} døgn siden"}}},hour:{displayName:"time",relative:{0:"this hour"},relativeTime:{future:{one:"om {0} time",other:"om {0} timer"},past:{one:"for {0} time siden",other:"for {0} timer siden"}}},minute:{displayName:"minutt",relative:{0:"this minute"},relativeTime:{future:{one:"om {0} minutt",other:"om {0} minutter"},past:{one:"for {0} minutt siden",other:"for {0} minutter siden"}}},second:{displayName:"sekund",relative:{0:"now"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"for {0} sekund siden",other:"for {0} sekunder siden"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/pl.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/pl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"pl",pluralRuleFunction:function(e,t){var a=String(e).split("."),i=a[0],n=!a[1],m=i.slice(-1),u=i.slice(-2);return t?"other":1==e&&n?"one":n&&m>=2&&m<=4&&(u<12||u>14)?"few":n&&1!=i&&(0==m||1==m)||n&&m>=5&&m<=9||n&&u>=12&&u<=14?"many":"other"},fields:{year:{displayName:"rok",relative:{0:"w tym roku",1:"w przyszłym roku","-1":"w zeszłym roku"},relativeTime:{future:{one:"za {0} rok",few:"za {0} lata",many:"za {0} lat",other:"za {0} roku"},past:{one:"{0} rok temu",few:"{0} lata temu",many:"{0} lat temu",other:"{0} roku temu"}}},month:{displayName:"miesiąc",relative:{0:"w tym miesiącu",1:"w przyszłym miesiącu","-1":"w zeszłym miesiącu"},relativeTime:{future:{one:"za {0} miesiąc",few:"za {0} miesiące",many:"za {0} miesięcy",other:"za {0} miesiąca"},past:{one:"{0} miesiąc temu",few:"{0} miesiące temu",many:"{0} miesięcy temu",other:"{0} miesiąca temu"}}},day:{displayName:"dzień",relative:{0:"dzisiaj",1:"jutro",2:"pojutrze","-2":"przedwczoraj","-1":"wczoraj"},relativeTime:{future:{one:"za {0} dzień",few:"za {0} dni",many:"za {0} dni",other:"za {0} dnia"},past:{one:"{0} dzień temu",few:"{0} dni temu",many:"{0} dni temu",other:"{0} dnia temu"}}},hour:{displayName:"godzina",relative:{0:"ta godzina"},relativeTime:{future:{one:"za {0} godzinę",few:"za {0} godziny",many:"za {0} godzin",other:"za {0} godziny"},past:{one:"{0} godzinę temu",few:"{0} godziny temu",many:"{0} godzin temu",other:"{0} godziny temu"}}},minute:{displayName:"minuta",relative:{0:"ta minuta"},relativeTime:{future:{one:"za {0} minutę",few:"za {0} minuty",many:"za {0} minut",other:"za {0} minuty"},past:{one:"{0} minutę temu",few:"{0} minuty temu",many:"{0} minut temu",other:"{0} minuty temu"}}},second:{displayName:"sekunda",relative:{0:"teraz"},relativeTime:{future:{one:"za {0} sekundę",few:"za {0} sekundy",many:"za {0} sekund",other:"za {0} sekundy"},past:{one:"{0} sekundę temu",few:"{0} sekundy temu",many:"{0} sekund temu",other:"{0} sekundy temu"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/pt.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/pt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"pt",pluralRuleFunction:function(e,t){var o=String(e).split(".")[0];return t?"other":0==o||1==o?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"em {0} ano",other:"em {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"em {0} mês",other:"em {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"em {0} dia",other:"em {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"em {0} hora",other:"em {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"em {0} minuto",other:"em {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"em {0} segundo",other:"em {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}}}},{locale:"pt-AO",parentLocale:"pt-PT"},{locale:"pt-PT",parentLocale:"pt",fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"dentro de {0} ano",other:"dentro de {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"dentro de {0} mês",other:"dentro de {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"dentro de {0} dia",other:"dentro de {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}}}},{locale:"pt-CH",parentLocale:"pt-PT"},{locale:"pt-CV",parentLocale:"pt-PT"},{locale:"pt-GQ",parentLocale:"pt-PT"},{locale:"pt-GW",parentLocale:"pt-PT"},{locale:"pt-LU",parentLocale:"pt-PT"},{locale:"pt-MO",parentLocale:"pt-PT"},{locale:"pt-MZ",parentLocale:"pt-PT"},{locale:"pt-ST",parentLocale:"pt-PT"},{locale:"pt-TL",parentLocale:"pt-PT"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ro.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ro.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"ro",pluralRuleFunction:function(e,t){var a=String(e).split("."),u=!a[1],n=Number(a[0])==e&&a[0].slice(-2);return t?1==e?"one":"other":1==e&&u?"one":!u||0==e||1!=e&&n>=1&&n<=19?"few":"other"},fields:{year:{displayName:"an",relative:{0:"anul acesta",1:"anul viitor","-1":"anul trecut"},relativeTime:{future:{one:"peste {0} an",few:"peste {0} ani",other:"peste {0} de ani"},past:{one:"acum {0} an",few:"acum {0} ani",other:"acum {0} de ani"}}},month:{displayName:"lună",relative:{0:"luna aceasta",1:"luna viitoare","-1":"luna trecută"},relativeTime:{future:{one:"peste {0} lună",few:"peste {0} luni",other:"peste {0} de luni"},past:{one:"acum {0} lună",few:"acum {0} luni",other:"acum {0} de luni"}}},day:{displayName:"zi",relative:{0:"azi",1:"mâine",2:"poimâine","-2":"alaltăieri","-1":"ieri"},relativeTime:{future:{one:"peste {0} zi",few:"peste {0} zile",other:"peste {0} de zile"},past:{one:"acum {0} zi",few:"acum {0} zile",other:"acum {0} de zile"}}},hour:{displayName:"oră",relative:{0:"ora aceasta"},relativeTime:{future:{one:"peste {0} oră",few:"peste {0} ore",other:"peste {0} de ore"},past:{one:"acum {0} oră",few:"acum {0} ore",other:"acum {0} de ore"}}},minute:{displayName:"minut",relative:{0:"minutul acesta"},relativeTime:{future:{one:"peste {0} minut",few:"peste {0} minute",other:"peste {0} de minute"},past:{one:"acum {0} minut",few:"acum {0} minute",other:"acum {0} de minute"}}},second:{displayName:"secundă",relative:{0:"acum"},relativeTime:{future:{one:"peste {0} secundă",few:"peste {0} secunde",other:"peste {0} de secunde"},past:{one:"acum {0} secundă",few:"acum {0} secunde",other:"acum {0} de secunde"}}}}},{locale:"ro-MD",parentLocale:"ro"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/ru.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/ru.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"ru",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&n>=2&&n<=4&&(l<12||l>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&l>=11&&l<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"в этом году",1:"в следующем году","-1":"в прошлом году"},relativeTime:{future:{one:"через {0} год",few:"через {0} года",many:"через {0} лет",other:"через {0} года"},past:{one:"{0} год назад",few:"{0} года назад",many:"{0} лет назад",other:"{0} года назад"}}},month:{displayName:"месяц",relative:{0:"в этом месяце",1:"в следующем месяце","-1":"в прошлом месяце"},relativeTime:{future:{one:"через {0} месяц",few:"через {0} месяца",many:"через {0} месяцев",other:"через {0} месяца"},past:{one:"{0} месяц назад",few:"{0} месяца назад",many:"{0} месяцев назад",other:"{0} месяца назад"}}},day:{displayName:"день",relative:{0:"сегодня",1:"завтра",2:"послезавтра","-2":"позавчера","-1":"вчера"},relativeTime:{future:{one:"через {0} день",few:"через {0} дня",many:"через {0} дней",other:"через {0} дня"},past:{one:"{0} день назад",few:"{0} дня назад",many:"{0} дней назад",other:"{0} дня назад"}}},hour:{displayName:"час",relative:{0:"в этом часе"},relativeTime:{future:{one:"через {0} час",few:"через {0} часа",many:"через {0} часов",other:"через {0} часа"},past:{one:"{0} час назад",few:"{0} часа назад",many:"{0} часов назад",other:"{0} часа назад"}}},minute:{displayName:"минута",relative:{0:"в эту минуту"},relativeTime:{future:{one:"через {0} минуту",few:"через {0} минуты",many:"через {0} минут",other:"через {0} минуты"},past:{one:"{0} минуту назад",few:"{0} минуты назад",many:"{0} минут назад",other:"{0} минуты назад"}}},second:{displayName:"секунда",relative:{0:"сейчас"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунды",many:"через {0} секунд",other:"через {0} секунды"},past:{one:"{0} секунду назад",few:"{0} секунды назад",many:"{0} секунд назад",other:"{0} секунды назад"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/sk.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/sk.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,o){ true?module.exports=o():undefined}(this,function(){"use strict";return[{locale:"sk",pluralRuleFunction:function(e,o){var a=String(e).split("."),t=a[0],i=!a[1];return o?"other":1==e&&i?"one":t>=2&&t<=4&&i?"few":i?"other":"many"},fields:{year:{displayName:"rok",relative:{0:"tento rok",1:"budúci rok","-1":"minulý rok"},relativeTime:{future:{one:"o {0} rok",few:"o {0} roky",many:"o {0} roka",other:"o {0} rokov"},past:{one:"pred {0} rokom",few:"pred {0} rokmi",many:"pred {0} roka",other:"pred {0} rokmi"}}},month:{displayName:"mesiac",relative:{0:"tento mesiac",1:"budúci mesiac","-1":"minulý mesiac"},relativeTime:{future:{one:"o {0} mesiac",few:"o {0} mesiace",many:"o {0} mesiaca",other:"o {0} mesiacov"},past:{one:"pred {0} mesiacom",few:"pred {0} mesiacmi",many:"pred {0} mesiaca",other:"pred {0} mesiacmi"}}},day:{displayName:"deň",relative:{0:"dnes",1:"zajtra",2:"pozajtra","-2":"predvčerom","-1":"včera"},relativeTime:{future:{one:"o {0} deň",few:"o {0} dni",many:"o {0} dňa",other:"o {0} dní"},past:{one:"pred {0} dňom",few:"pred {0} dňami",many:"pred {0} dňa",other:"pred {0} dňami"}}},hour:{displayName:"hodina",relative:{0:"v tejto hodine"},relativeTime:{future:{one:"o {0} hodinu",few:"o {0} hodiny",many:"o {0} hodiny",other:"o {0} hodín"},past:{one:"pred {0} hodinou",few:"pred {0} hodinami",many:"pred {0} hodinou",other:"pred {0} hodinami"}}},minute:{displayName:"minúta",relative:{0:"v tejto minúte"},relativeTime:{future:{one:"o {0} minútu",few:"o {0} minúty",many:"o {0} minúty",other:"o {0} minút"},past:{one:"pred {0} minútou",few:"pred {0} minútami",many:"pred {0} minúty",other:"pred {0} minútami"}}},second:{displayName:"sekunda",relative:{0:"teraz"},relativeTime:{future:{one:"o {0} sekundu",few:"o {0} sekundy",many:"o {0} sekundy",other:"o {0} sekúnd"},past:{one:"pred {0} sekundou",few:"pred {0} sekundami",many:"pred {0} sekundy",other:"pred {0} sekundami"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/sl.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/sl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"sl",pluralRuleFunction:function(e,t){var r=String(e).split("."),a=r[0],o=!r[1],i=a.slice(-2);return t?"other":o&&1==i?"one":o&&2==i?"two":o&&(3==i||4==i)||!o?"few":"other"},fields:{year:{displayName:"leto",relative:{0:"letos",1:"naslednje leto","-1":"lani"},relativeTime:{future:{one:"čez {0} leto",two:"čez {0} leti",few:"čez {0} leta",other:"čez {0} let"},past:{one:"pred {0} letom",two:"pred {0} letoma",few:"pred {0} leti",other:"pred {0} leti"}}},month:{displayName:"mesec",relative:{0:"ta mesec",1:"naslednji mesec","-1":"prejšnji mesec"},relativeTime:{future:{one:"čez {0} mesec",two:"čez {0} meseca",few:"čez {0} mesece",other:"čez {0} mesecev"},past:{one:"pred {0} mesecem",two:"pred {0} mesecema",few:"pred {0} meseci",other:"pred {0} meseci"}}},day:{displayName:"dan",relative:{0:"danes",1:"jutri",2:"pojutrišnjem","-2":"predvčerajšnjim","-1":"včeraj"},relativeTime:{future:{one:"čez {0} dan",two:"čez {0} dneva",few:"čez {0} dni",other:"čez {0} dni"},past:{one:"pred {0} dnevom",two:"pred {0} dnevoma",few:"pred {0} dnevi",other:"pred {0} dnevi"}}},hour:{displayName:"ura",relative:{0:"v tej uri"},relativeTime:{future:{one:"čez {0} uro",two:"čez {0} uri",few:"čez {0} ure",other:"čez {0} ur"},past:{one:"pred {0} uro",two:"pred {0} urama",few:"pred {0} urami",other:"pred {0} urami"}}},minute:{displayName:"minuta",relative:{0:"to minuto"},relativeTime:{future:{one:"čez {0} minuto",two:"čez {0} minuti",few:"čez {0} minute",other:"čez {0} minut"},past:{one:"pred {0} minuto",two:"pred {0} minutama",few:"pred {0} minutami",other:"pred {0} minutami"}}},second:{displayName:"sekunda",relative:{0:"zdaj"},relativeTime:{future:{one:"čez {0} sekundo",two:"čez {0} sekundi",few:"čez {0} sekunde",other:"čez {0} sekund"},past:{one:"pred {0} sekundo",two:"pred {0} sekundama",few:"pred {0} sekundami",other:"pred {0} sekundami"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/sr.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/sr.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"sr",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=t[1]||"",n=!t[1],i=r.slice(-1),l=r.slice(-2),s=o.slice(-1),u=o.slice(-2);return a?"other":n&&1==i&&11!=l||1==s&&11!=u?"one":n&&i>=2&&i<=4&&(l<12||l>14)||s>=2&&s<=4&&(u<12||u>14)?"few":"other"},fields:{year:{displayName:"година",relative:{0:"ове године",1:"следеће године","-1":"прошле године"},relativeTime:{future:{one:"за {0} годину",few:"за {0} године",other:"за {0} година"},past:{one:"пре {0} године",few:"пре {0} године",other:"пре {0} година"}}},month:{displayName:"месец",relative:{0:"овог месеца",1:"следећег месеца","-1":"прошлог месеца"},relativeTime:{future:{one:"за {0} месец",few:"за {0} месеца",other:"за {0} месеци"},past:{one:"пре {0} месеца",few:"пре {0} месеца",other:"пре {0} месеци"}}},day:{displayName:"дан",relative:{0:"данас",1:"сутра",2:"прекосутра","-2":"прекјуче","-1":"јуче"},relativeTime:{future:{one:"за {0} дан",few:"за {0} дана",other:"за {0} дана"},past:{one:"пре {0} дана",few:"пре {0} дана",other:"пре {0} дана"}}},hour:{displayName:"сат",relative:{0:"овог сата"},relativeTime:{future:{one:"за {0} сат",few:"за {0} сата",other:"за {0} сати"},past:{one:"пре {0} сата",few:"пре {0} сата",other:"пре {0} сати"}}},minute:{displayName:"минут",relative:{0:"овог минута"},relativeTime:{future:{one:"за {0} минут",few:"за {0} минута",other:"за {0} минута"},past:{one:"пре {0} минута",few:"пре {0} минута",other:"пре {0} минута"}}},second:{displayName:"секунд",relative:{0:"сада"},relativeTime:{future:{one:"за {0} секунду",few:"за {0} секунде",other:"за {0} секунди"},past:{one:"пре {0} секунде",few:"пре {0} секунде",other:"пре {0} секунди"}}}}},{locale:"sr-Cyrl",parentLocale:"sr"},{locale:"sr-Cyrl-BA",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-ME",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-XK",parentLocale:"sr-Cyrl"},{locale:"sr-Latn",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sledeće godine","-1":"prošle godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"pre {0} godine",few:"pre {0} godine",other:"pre {0} godina"}}},month:{displayName:"mesec",relative:{0:"ovog meseca",1:"sledećeg meseca","-1":"prošlog meseca"},relativeTime:{future:{one:"za {0} mesec",few:"za {0} meseca",other:"za {0} meseci"},past:{one:"pre {0} meseca",few:"pre {0} meseca",other:"pre {0} meseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekjuče","-1":"juče"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"pre {0} dana",few:"pre {0} dana",other:"pre {0} dana"}}},hour:{displayName:"sat",relative:{0:"ovog sata"},relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"pre {0} sata",few:"pre {0} sata",other:"pre {0} sati"}}},minute:{displayName:"minut",relative:{0:"ovog minuta"},relativeTime:{future:{one:"za {0} minut",few:"za {0} minuta",other:"za {0} minuta"},past:{one:"pre {0} minuta",few:"pre {0} minuta",other:"pre {0} minuta"}}},second:{displayName:"sekund",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"pre {0} sekunde",few:"pre {0} sekunde",other:"pre {0} sekundi"}}}}},{locale:"sr-Latn-BA",parentLocale:"sr-Latn"},{locale:"sr-Latn-ME",parentLocale:"sr-Latn"},{locale:"sr-Latn-XK",parentLocale:"sr-Latn"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/sv.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/sv.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,a){var r=String(e).split("."),n=!r[1],t=Number(r[0])==e,o=t&&r[0].slice(-1),i=t&&r[0].slice(-2);return a?1!=o&&2!=o||11==i||12==i?"other":"one":1==e&&n?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sedan",other:"för {0} år sedan"}}},month:{displayName:"månad",relative:{0:"denna månad",1:"nästa månad","-1":"förra månaden"},relativeTime:{future:{one:"om {0} månad",other:"om {0} månader"},past:{one:"för {0} månad sedan",other:"för {0} månader sedan"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"för {0} dag sedan",other:"för {0} dagar sedan"}}},hour:{displayName:"timme",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"för {0} timme sedan",other:"för {0} timmar sedan"}}},minute:{displayName:"minut",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"för {0} minut sedan",other:"för {0} minuter sedan"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"för {0} sekund sedan",other:"för {0} sekunder sedan"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/th.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/th.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"th",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ปี",relative:{0:"ปีนี้",1:"ปีหน้า","-1":"ปีที่แล้ว"},relativeTime:{future:{other:"ในอีก {0} ปี"},past:{other:"{0} ปีที่แล้ว"}}},month:{displayName:"เดือน",relative:{0:"เดือนนี้",1:"เดือนหน้า","-1":"เดือนที่แล้ว"},relativeTime:{future:{other:"ในอีก {0} เดือน"},past:{other:"{0} เดือนที่ผ่านมา"}}},day:{displayName:"วัน",relative:{0:"วันนี้",1:"พรุ่งนี้",2:"มะรืนนี้","-2":"เมื่อวานซืน","-1":"เมื่อวาน"},relativeTime:{future:{other:"ในอีก {0} วัน"},past:{other:"{0} วันที่ผ่านมา"}}},hour:{displayName:"ชั่วโมง",relative:{0:"ชั่วโมงนี้"},relativeTime:{future:{other:"ในอีก {0} ชั่วโมง"},past:{other:"{0} ชั่วโมงที่ผ่านมา"}}},minute:{displayName:"นาที",relative:{0:"นาทีนี้"},relativeTime:{future:{other:"ในอีก {0} นาที"},past:{other:"{0} นาทีที่ผ่านมา"}}},second:{displayName:"วินาที",relative:{0:"ขณะนี้"},relativeTime:{future:{other:"ในอีก {0} วินาที"},past:{other:"{0} วินาทีที่ผ่านมา"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/tr.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/tr.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";return[{locale:"tr",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"yıl",relative:{0:"bu yıl",1:"gelecek yıl","-1":"geçen yıl"},relativeTime:{future:{one:"{0} yıl sonra",other:"{0} yıl sonra"},past:{one:"{0} yıl önce",other:"{0} yıl önce"}}},month:{displayName:"ay",relative:{0:"bu ay",1:"gelecek ay","-1":"geçen ay"},relativeTime:{future:{one:"{0} ay sonra",other:"{0} ay sonra"},past:{one:"{0} ay önce",other:"{0} ay önce"}}},day:{displayName:"gün",relative:{0:"bugün",1:"yarın",2:"öbür gün","-2":"evvelsi gün","-1":"dün"},relativeTime:{future:{one:"{0} gün sonra",other:"{0} gün sonra"},past:{one:"{0} gün önce",other:"{0} gün önce"}}},hour:{displayName:"saat",relative:{0:"bu saat"},relativeTime:{future:{one:"{0} saat sonra",other:"{0} saat sonra"},past:{one:"{0} saat önce",other:"{0} saat önce"}}},minute:{displayName:"dakika",relative:{0:"bu dakika"},relativeTime:{future:{one:"{0} dakika sonra",other:"{0} dakika sonra"},past:{one:"{0} dakika önce",other:"{0} dakika önce"}}},second:{displayName:"saniye",relative:{0:"şimdi"},relativeTime:{future:{one:"{0} saniye sonra",other:"{0} saniye sonra"},past:{one:"{0} saniye önce",other:"{0} saniye önce"}}}}},{locale:"tr-CY",parentLocale:"tr"}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/uk.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/uk.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"uk",pluralRuleFunction:function(e,t){var a=String(e).split("."),n=a[0],o=!a[1],r=Number(a[0])==e,i=r&&a[0].slice(-1),l=r&&a[0].slice(-2),f=n.slice(-1),m=n.slice(-2);return t?3==i&&13!=l?"few":"other":o&&1==f&&11!=m?"one":o&&f>=2&&f<=4&&(m<12||m>14)?"few":o&&0==f||o&&f>=5&&f<=9||o&&m>=11&&m<=14?"many":"other"},fields:{year:{displayName:"рік",relative:{0:"цього року",1:"наступного року","-1":"торік"},relativeTime:{future:{one:"через {0} рік",few:"через {0} роки",many:"через {0} років",other:"через {0} року"},past:{one:"{0} рік тому",few:"{0} роки тому",many:"{0} років тому",other:"{0} року тому"}}},month:{displayName:"місяць",relative:{0:"цього місяця",1:"наступного місяця","-1":"минулого місяця"},relativeTime:{future:{one:"через {0} місяць",few:"через {0} місяці",many:"через {0} місяців",other:"через {0} місяця"},past:{one:"{0} місяць тому",few:"{0} місяці тому",many:"{0} місяців тому",other:"{0} місяця тому"}}},day:{displayName:"день",relative:{0:"сьогодні",1:"завтра",2:"післязавтра","-2":"позавчора","-1":"учора"},relativeTime:{future:{one:"через {0} день",few:"через {0} дні",many:"через {0} днів",other:"через {0} дня"},past:{one:"{0} день тому",few:"{0} дні тому",many:"{0} днів тому",other:"{0} дня тому"}}},hour:{displayName:"година",relative:{0:"цієї години"},relativeTime:{future:{one:"через {0} годину",few:"через {0} години",many:"через {0} годин",other:"через {0} години"},past:{one:"{0} годину тому",few:"{0} години тому",many:"{0} годин тому",other:"{0} години тому"}}},minute:{displayName:"хвилина",relative:{0:"цієї хвилини"},relativeTime:{future:{one:"через {0} хвилину",few:"через {0} хвилини",many:"через {0} хвилин",other:"через {0} хвилини"},past:{one:"{0} хвилину тому",few:"{0} хвилини тому",many:"{0} хвилин тому",other:"{0} хвилини тому"}}},second:{displayName:"секунда",relative:{0:"зараз"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунди",many:"через {0} секунд",other:"через {0} секунди"},past:{one:"{0} секунду тому",few:"{0} секунди тому",many:"{0} секунд тому",other:"{0} секунди тому"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/vi.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/vi.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"vi",pluralRuleFunction:function(e,t){return t&&1==e?"one":"other"},fields:{year:{displayName:"Năm",relative:{0:"năm nay",1:"năm sau","-1":"năm ngoái"},relativeTime:{future:{other:"sau {0} năm nữa"},past:{other:"{0} năm trước"}}},month:{displayName:"Tháng",relative:{0:"tháng này",1:"tháng sau","-1":"tháng trước"},relativeTime:{future:{other:"sau {0} tháng nữa"},past:{other:"{0} tháng trước"}}},day:{displayName:"Ngày",relative:{0:"Hôm nay",1:"Ngày mai",2:"Ngày kia","-2":"Hôm kia","-1":"Hôm qua"},relativeTime:{future:{other:"sau {0} ngày nữa"},past:{other:"{0} ngày trước"}}},hour:{displayName:"Giờ",relative:{0:"giờ này"},relativeTime:{future:{other:"sau {0} giờ nữa"},past:{other:"{0} giờ trước"}}},minute:{displayName:"Phút",relative:{0:"phút này"},relativeTime:{future:{other:"sau {0} phút nữa"},past:{other:"{0} phút trước"}}},second:{displayName:"Giây",relative:{0:"bây giờ"},relativeTime:{future:{other:"sau {0} giây nữa"},past:{other:"{0} giây trước"}}}}}]});


/***/ }),

/***/ "./node_modules/react-intl/locale-data/zh.js":
/*!***************************************************!*\
  !*** ./node_modules/react-intl/locale-data/zh.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return[{locale:"zh",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒钟后"},past:{other:"{0}秒钟前"}}}}},{locale:"zh-Hans",parentLocale:"zh"},{locale:"zh-Hans-HK",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hans-MO",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hans-SG",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relative:{0:"这一时间 / 此时"},relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relative:{0:"此刻"},relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hant",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下個月","-1":"上個月"},relativeTime:{future:{other:"{0} 個月後"},past:{other:"{0} 個月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"後天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0} 天後"},past:{other:"{0} 天前"}}},hour:{displayName:"小時",relative:{0:"這一小時"},relativeTime:{future:{other:"{0} 小時後"},past:{other:"{0} 小時前"}}},minute:{displayName:"分鐘",relative:{0:"這一分鐘"},relativeTime:{future:{other:"{0} 分鐘後"},past:{other:"{0} 分鐘前"}}},second:{displayName:"秒",relative:{0:"現在"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}},{locale:"zh-Hant-HK",parentLocale:"zh-Hant",fields:{year:{displayName:"年",relative:{0:"今年",1:"下年","-1":"上年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下個月","-1":"上個月"},relativeTime:{future:{other:"{0} 個月後"},past:{other:"{0} 個月前"}}},day:{displayName:"日",relative:{0:"今日",1:"明日",2:"後日","-2":"前日","-1":"昨日"},relativeTime:{future:{other:"{0} 日後"},past:{other:"{0} 日前"}}},hour:{displayName:"小時",relative:{0:"這個小時"},relativeTime:{future:{other:"{0} 小時後"},past:{other:"{0} 小時前"}}},minute:{displayName:"分鐘",relative:{0:"這分鐘"},relativeTime:{future:{other:"{0} 分鐘後"},past:{other:"{0} 分鐘前"}}},second:{displayName:"秒",relative:{0:"現在"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}},{locale:"zh-Hant-MO",parentLocale:"zh-Hant-HK"}]});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, localeMap, isRtl, localeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeData", function() { return localeData; });
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl/locale-data/en */ "./node_modules/react-intl/locale-data/en.js");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl_locale_data_am__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl/locale-data/am */ "./node_modules/react-intl/locale-data/am.js");
/* harmony import */ var react_intl_locale_data_am__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_am__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/ar */ "./node_modules/react-intl/locale-data/ar.js");
/* harmony import */ var react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl_locale_data_az__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl/locale-data/az */ "./node_modules/react-intl/locale-data/az.js");
/* harmony import */ var react_intl_locale_data_az__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_az__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl_locale_data_ca__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl/locale-data/ca */ "./node_modules/react-intl/locale-data/ca.js");
/* harmony import */ var react_intl_locale_data_ca__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ca__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl_locale_data_cs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl/locale-data/cs */ "./node_modules/react-intl/locale-data/cs.js");
/* harmony import */ var react_intl_locale_data_cs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_cs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl_locale_data_cy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl/locale-data/cy */ "./node_modules/react-intl/locale-data/cy.js");
/* harmony import */ var react_intl_locale_data_cy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_cy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl_locale_data_da__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl/locale-data/da */ "./node_modules/react-intl/locale-data/da.js");
/* harmony import */ var react_intl_locale_data_da__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_da__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl_locale_data_de__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl/locale-data/de */ "./node_modules/react-intl/locale-data/de.js");
/* harmony import */ var react_intl_locale_data_de__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_de__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl_locale_data_el__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl/locale-data/el */ "./node_modules/react-intl/locale-data/el.js");
/* harmony import */ var react_intl_locale_data_el__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_el__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl/locale-data/es */ "./node_modules/react-intl/locale-data/es.js");
/* harmony import */ var react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl_locale_data_et__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl/locale-data/et */ "./node_modules/react-intl/locale-data/et.js");
/* harmony import */ var react_intl_locale_data_et__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_et__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl_locale_data_eu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl/locale-data/eu */ "./node_modules/react-intl/locale-data/eu.js");
/* harmony import */ var react_intl_locale_data_eu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_eu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_intl_locale_data_fi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl/locale-data/fi */ "./node_modules/react-intl/locale-data/fi.js");
/* harmony import */ var react_intl_locale_data_fi__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_fi__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl/locale-data/fr */ "./node_modules/react-intl/locale-data/fr.js");
/* harmony import */ var react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_intl_locale_data_ga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl/locale-data/ga */ "./node_modules/react-intl/locale-data/ga.js");
/* harmony import */ var react_intl_locale_data_ga__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ga__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_intl_locale_data_gd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl/locale-data/gd */ "./node_modules/react-intl/locale-data/gd.js");
/* harmony import */ var react_intl_locale_data_gd__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_gd__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_intl_locale_data_gl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl/locale-data/gl */ "./node_modules/react-intl/locale-data/gl.js");
/* harmony import */ var react_intl_locale_data_gl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_gl__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_intl_locale_data_he__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-intl/locale-data/he */ "./node_modules/react-intl/locale-data/he.js");
/* harmony import */ var react_intl_locale_data_he__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_he__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_intl_locale_data_hu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-intl/locale-data/hu */ "./node_modules/react-intl/locale-data/hu.js");
/* harmony import */ var react_intl_locale_data_hu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_hu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_intl_locale_data_hr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-intl/locale-data/hr */ "./node_modules/react-intl/locale-data/hr.js");
/* harmony import */ var react_intl_locale_data_hr__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_hr__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_intl_locale_data_id__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-intl/locale-data/id */ "./node_modules/react-intl/locale-data/id.js");
/* harmony import */ var react_intl_locale_data_id__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_id__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_intl_locale_data_is__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-intl/locale-data/is */ "./node_modules/react-intl/locale-data/is.js");
/* harmony import */ var react_intl_locale_data_is__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_is__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-intl/locale-data/it */ "./node_modules/react-intl/locale-data/it.js");
/* harmony import */ var react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_intl_locale_data_ja__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-intl/locale-data/ja */ "./node_modules/react-intl/locale-data/ja.js");
/* harmony import */ var react_intl_locale_data_ja__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ja__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_intl_locale_data_ko__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-intl/locale-data/ko */ "./node_modules/react-intl/locale-data/ko.js");
/* harmony import */ var react_intl_locale_data_ko__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ko__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_intl_locale_data_lt__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-intl/locale-data/lt */ "./node_modules/react-intl/locale-data/lt.js");
/* harmony import */ var react_intl_locale_data_lt__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_lt__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_intl_locale_data_lv__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-intl/locale-data/lv */ "./node_modules/react-intl/locale-data/lv.js");
/* harmony import */ var react_intl_locale_data_lv__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_lv__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_intl_locale_data_nl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-intl/locale-data/nl */ "./node_modules/react-intl/locale-data/nl.js");
/* harmony import */ var react_intl_locale_data_nl__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_nl__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_intl_locale_data_nb__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-intl/locale-data/nb */ "./node_modules/react-intl/locale-data/nb.js");
/* harmony import */ var react_intl_locale_data_nb__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_nb__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_intl_locale_data_nn__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-intl/locale-data/nn */ "./node_modules/react-intl/locale-data/nn.js");
/* harmony import */ var react_intl_locale_data_nn__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_nn__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_intl_locale_data_pl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-intl/locale-data/pl */ "./node_modules/react-intl/locale-data/pl.js");
/* harmony import */ var react_intl_locale_data_pl__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_pl__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-intl/locale-data/pt */ "./node_modules/react-intl/locale-data/pt.js");
/* harmony import */ var react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_intl_locale_data_ro__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-intl/locale-data/ro */ "./node_modules/react-intl/locale-data/ro.js");
/* harmony import */ var react_intl_locale_data_ro__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ro__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_intl_locale_data_ru__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-intl/locale-data/ru */ "./node_modules/react-intl/locale-data/ru.js");
/* harmony import */ var react_intl_locale_data_ru__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ru__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_intl_locale_data_sl__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-intl/locale-data/sl */ "./node_modules/react-intl/locale-data/sl.js");
/* harmony import */ var react_intl_locale_data_sl__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_sl__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var react_intl_locale_data_sk__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-intl/locale-data/sk */ "./node_modules/react-intl/locale-data/sk.js");
/* harmony import */ var react_intl_locale_data_sk__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_sk__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var react_intl_locale_data_sr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-intl/locale-data/sr */ "./node_modules/react-intl/locale-data/sr.js");
/* harmony import */ var react_intl_locale_data_sr__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_sr__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-intl/locale-data/sv */ "./node_modules/react-intl/locale-data/sv.js");
/* harmony import */ var react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var react_intl_locale_data_th__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-intl/locale-data/th */ "./node_modules/react-intl/locale-data/th.js");
/* harmony import */ var react_intl_locale_data_th__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_th__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var react_intl_locale_data_tr__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-intl/locale-data/tr */ "./node_modules/react-intl/locale-data/tr.js");
/* harmony import */ var react_intl_locale_data_tr__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_tr__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var react_intl_locale_data_uk__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-intl/locale-data/uk */ "./node_modules/react-intl/locale-data/uk.js");
/* harmony import */ var react_intl_locale_data_uk__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_uk__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var react_intl_locale_data_vi__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-intl/locale-data/vi */ "./node_modules/react-intl/locale-data/vi.js");
/* harmony import */ var react_intl_locale_data_vi__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_vi__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-intl/locale-data/zh */ "./node_modules/react-intl/locale-data/zh.js");
/* harmony import */ var react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _supported_locales_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./supported-locales.js */ "./src/supported-locales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _supported_locales_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeMap", function() { return _supported_locales_js__WEBPACK_IMPORTED_MODULE_44__["localeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return _supported_locales_js__WEBPACK_IMPORTED_MODULE_44__["isRtl"]; });




 // also parent for Abkahz










































/*
locales = {
    'ab': {name: 'Аҧсшәа'},
    'ca': {name: 'Català'},
    'cs': {name: 'Česky'},
    'cy': {name: 'Cymraeg'},
    'de': {name: 'Deutsch'},
    'el': {name: 'Ελληνικά'},
    'en': {name: 'English'},
    'es': {name: 'Español'},
    'es-419': {name: 'Español Latinoamericano'},
    'fr': {name: 'Français'},
    'ga': {name: 'Gaeilge'},
    'gd': {name: 'Gàidhlig'},
    'he': {name: 'עִבְרִית'},
    'it': {name: 'Italiano'},
    'ja': {name: '日本語'},
    'mi': {name: 'Maori'},
    'nl': {name: 'Nederlands'},
    'nb': {name: 'Norsk Bokmål'},
    'pt': {name: 'Português'},
    'pt-br': {name: 'Português Brasileiro'},
    'sr': {name: 'Српски'},
    'sl': {name: 'Slovenščina'},
    'tr': {name: 'Türkçe'},
    'uk': {name: 'Українська'},
    'zh-cn': {name: '简体中文'},
    'zh-tw': {name: '繁體中文'}
*/

var localeData = [].concat(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_0___default.a, react_intl_locale_data_am__WEBPACK_IMPORTED_MODULE_1___default.a, react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2___default.a, react_intl_locale_data_az__WEBPACK_IMPORTED_MODULE_3___default.a, // parent for Abkahz
react_intl_locale_data_ca__WEBPACK_IMPORTED_MODULE_4___default.a, react_intl_locale_data_cs__WEBPACK_IMPORTED_MODULE_5___default.a, react_intl_locale_data_cy__WEBPACK_IMPORTED_MODULE_6___default.a, react_intl_locale_data_da__WEBPACK_IMPORTED_MODULE_7___default.a, react_intl_locale_data_de__WEBPACK_IMPORTED_MODULE_8___default.a, react_intl_locale_data_el__WEBPACK_IMPORTED_MODULE_9___default.a, react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_10___default.a, react_intl_locale_data_et__WEBPACK_IMPORTED_MODULE_11___default.a, react_intl_locale_data_eu__WEBPACK_IMPORTED_MODULE_12___default.a, react_intl_locale_data_fi__WEBPACK_IMPORTED_MODULE_13___default.a, react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_14___default.a, react_intl_locale_data_ga__WEBPACK_IMPORTED_MODULE_15___default.a, react_intl_locale_data_gd__WEBPACK_IMPORTED_MODULE_16___default.a, react_intl_locale_data_gl__WEBPACK_IMPORTED_MODULE_17___default.a, react_intl_locale_data_he__WEBPACK_IMPORTED_MODULE_18___default.a, react_intl_locale_data_hu__WEBPACK_IMPORTED_MODULE_19___default.a, react_intl_locale_data_hr__WEBPACK_IMPORTED_MODULE_20___default.a, react_intl_locale_data_id__WEBPACK_IMPORTED_MODULE_21___default.a, react_intl_locale_data_is__WEBPACK_IMPORTED_MODULE_22___default.a, react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_23___default.a, react_intl_locale_data_ja__WEBPACK_IMPORTED_MODULE_24___default.a, react_intl_locale_data_ko__WEBPACK_IMPORTED_MODULE_25___default.a, react_intl_locale_data_lt__WEBPACK_IMPORTED_MODULE_26___default.a, react_intl_locale_data_lv__WEBPACK_IMPORTED_MODULE_27___default.a, react_intl_locale_data_nl__WEBPACK_IMPORTED_MODULE_28___default.a, react_intl_locale_data_nb__WEBPACK_IMPORTED_MODULE_29___default.a, react_intl_locale_data_nn__WEBPACK_IMPORTED_MODULE_30___default.a, react_intl_locale_data_pl__WEBPACK_IMPORTED_MODULE_31___default.a, react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_32___default.a, react_intl_locale_data_sl__WEBPACK_IMPORTED_MODULE_35___default.a, react_intl_locale_data_sk__WEBPACK_IMPORTED_MODULE_36___default.a, react_intl_locale_data_sr__WEBPACK_IMPORTED_MODULE_37___default.a, react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_38___default.a, react_intl_locale_data_ro__WEBPACK_IMPORTED_MODULE_33___default.a, react_intl_locale_data_ru__WEBPACK_IMPORTED_MODULE_34___default.a, react_intl_locale_data_th__WEBPACK_IMPORTED_MODULE_39___default.a, react_intl_locale_data_tr__WEBPACK_IMPORTED_MODULE_40___default.a, react_intl_locale_data_uk__WEBPACK_IMPORTED_MODULE_41___default.a, react_intl_locale_data_vi__WEBPACK_IMPORTED_MODULE_42___default.a, react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_43___default.a);

for (var lang in _supported_locales_js__WEBPACK_IMPORTED_MODULE_44__["customLocales"]) {
  localeData.push(_supported_locales_js__WEBPACK_IMPORTED_MODULE_44__["customLocales"][lang]);
}



/***/ }),

/***/ "./src/supported-locales.js":
/*!**********************************!*\
  !*** ./src/supported-locales.js ***!
  \**********************************/
/*! exports provided: default, customLocales, localeMap, rtlLocales, isRtl, wwwLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customLocales", function() { return customLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMap", function() { return localeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtlLocales", function() { return rtlLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return isRtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wwwLocales", function() { return wwwLocales; });
/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */
var locales = {
  // 'ab': {
  //   name: 'Аҧсшәа'
  // },
  // 'ar': {
  //   name: 'العربية'
  // },
  // 'am': {
  //   name: 'አማርኛ'
  // },
  // 'az': {
  //   name: 'Azeri'
  // },
  // 'id': {
  //   name: 'Bahasa Indonesia'
  // },
  // 'ca': {
  //   name: 'Català'
  // },
  // 'cs': {
  //   name: 'Česky'
  // },
  // 'cy': {
  //   name: 'Cymraeg'
  // },
  // 'da': {
  //   name: 'Dansk'
  // },
  // 'de': {
  //   name: 'Deutsch'
  // },
  // 'et': {
  //   name: 'Eesti'
  // },
  // 'el': {
  //   name: 'Ελληνικά'
  // },
  'en': {
    name: 'English'
  }
  // ,
  // 'es': {
  //   name: 'Español'
  // },
  // 'es-419': {
  //   name: 'Español Latinoamericano'
  // },
  // 'eu': {
  //   name: 'Euskara'
  // },
  // 'fr': {
  //   name: 'Français'
  // },
  // 'ga': {
  //   name: 'Gaeilge'
  // },
  // 'gd': {
  //   name: 'Gàidhlig'
  // },
  // 'gl': {
  //   name: 'Galego'
  // },
  // 'ko': {
  //   name: '한국어'
  // },
  // 'he': {
  //   name: 'עִבְרִית'
  // },
  // 'hr': {
  //   name: 'Hrvatski'
  // },
  // 'is': {
  //   name: 'Íslenska'
  // },
  // 'it': {
  //   name: 'Italiano'
  // },
  // 'lv': {
  //   name: 'Latviešu'
  // },
  // 'lt': {
  //   name: 'Lietuvių'
  // },
  // 'mi': {
  //   name: 'Maori'
  // },
  // 'nl': {
  //   name: 'Nederlands'
  // },
  // 'ja': {
  //   name: '日本語'
  // },
  // 'ja-Hira': {
  //   name: 'にほんご'
  // },
  // 'hu': {
  //   name: 'Magyar'
  // },
  // 'nb': {
  //   name: 'Norsk Bokmål'
  // },
  // 'nn': {
  //   name: 'Norsk Nynorsk'
  // },
  // 'th': {
  //   name: 'ไทย'
  // },
  // 'pl': {
  //   name: 'Polski'
  // },
  // 'pt': {
  //   name: 'Português'
  // },
  // 'pt-br': {
  //   name: 'Português Brasileiro'
  // },
  // 'ro': {
  //   name: 'Română'
  // },
  // 'ru': {
  //   name: 'Русский'
  // },
  // 'sr': {
  //   name: 'Српски'
  // },
  // 'sk': {
  //   name: 'Slovenčina'
  // },
  // 'sl': {
  //   name: 'Slovenščina'
  // },
  // 'fi': {
  //   name: 'Suomi'
  // },
  // 'sv': {
  //   name: 'Svenska'
  // },
  ,'vi': {
    name: 'Tiếng Việt'
  }
  // ,
  // 'tr': {
  //   name: 'Türkçe'
  // },
  // 'uk': {
  //   name: 'Українська'
  // },
  // 'zh-cn': {
  //   name: '简体中文'
  // },
  // 'zh-tw': {
  //   name: '繁體中文'
  // }
};
var customLocales = {
  'ab': {
    locale: 'ab',
    parentLocale: 'az'
  },
  'es-419': {
    locale: 'es-419',
    parentLocale: 'es'
  },
  'mi': {
    locale: 'mi',
    parentLocale: 'en'
  },
  'zh-cn': {
    locale: 'zh-cn',
    parentLocale: 'zh'
  },
  'zh-tw': {
    locale: 'zh-tw',
    parentLocale: 'zh'
  }
};
var localeMap = {
  'aa-dj': 'aa_DJ',
  'es-419': 'es_419',
  // ja-Hira: no map - it's 'ja-Hira' on transifex
  'pt-br': 'pt_BR',
  'zh-cn': 'zh_CN',
  'zh-tw': 'zh_TW'
}; // list of RTL locales supported, and a function to check whether a locale is RTL

var rtlLocales = ['ar', 'he'];

var isRtl = function isRtl(locale) {
  return rtlLocales.indexOf(locale) !== -1;
};

var wwwLocales = {
  // 'ab': {
  //   name: 'Аҧсшәа'
  // },
  // 'ar': {
  //   name: 'العربية'
  // },
  // 'an': {
  //   name: 'Aragonés'
  // },
  // 'ast': {
  //   name: 'Asturianu'
  // },
  // 'id': {
  //   name: 'Bahasa Indonesia'
  // },
  // 'ms': {
  //   name: 'Bahasa Melayu'
  // },
  // 'be': {
  //   name: 'Беларуская'
  // },
  // 'bg': {
  //   name: 'Български'
  // },
  // 'ca': {
  //   name: 'Català'
  // },
  // 'cs': {
  //   name: 'Česky'
  // },
  // 'cy': {
  //   name: 'Cymraeg'
  // },
  // 'da': {
  //   name: 'Dansk'
  // },
  // 'de': {
  //   name: 'Deutsch'
  // },
  // 'yum': {
  //   name: 'Edible Scratch'
  // },
  // 'et': {
  //   name: 'Eesti'
  // },
  // 'el': {
  //   name: 'Ελληνικά'
  // },
  'en': {
    name: 'English'
  }
  // ,
  // 'eo': {
  //   name: 'Esperanto'
  // },
  // 'es': {
  //   name: 'Español'
  // },
  // 'eu': {
  //   name: 'Euskara'
  // },
  // 'fa': {
  //   name: 'فارسی'
  // },
  // 'fr': {
  //   name: 'Français'
  // },
  // 'fur': {
  //   name: 'Furlan'
  // },
  // 'ga': {
  //   name: 'Gaeilge'
  // },
  // 'gd': {
  //   name: 'Gàidhlig'
  // },
  // 'gl': {
  //   name: 'Galego'
  // },
  // 'ko': {
  //   name: '한국어'
  // },
  // 'hy': {
  //   name: 'Հայերեն'
  // },
  // 'he': {
  //   name: 'עִבְרִית'
  // },
  // 'hi': {
  //   name: 'हिन्दी'
  // },
  // 'hr': {
  //   name: 'Hrvatski'
  // },
  // 'zu': {
  //   name: 'isiZulu'
  // },
  // 'is': {
  //   name: 'Íslenska'
  // },
  // 'it': {
  //   name: 'Italiano'
  // },
  // 'kn': {
  //   name: 'ಭಾಷೆ-ಹೆಸರು'
  // },
  // 'rw': {
  //   name: 'Kinyarwanda'
  // },
  // 'ht': {
  //   name: 'Kreyòl'
  // },
  // 'ku': {
  //   name: 'Kurdî'
  // },
  // 'la': {
  //   name: 'Latina'
  // },
  // 'lv': {
  //   name: 'Latviešu'
  // },
  // 'lt': {
  //   name: 'Lietuvių'
  // },
  // 'mk': {
  //   name: 'Македонски'
  // },
  // 'hu': {
  //   name: 'Magyar'
  // },
  // 'ml': {
  //   name: 'മലയാളം'
  // },
  // 'mt': {
  //   name: 'Malti'
  // },
  // 'cat': {
  //   name: 'Meow'
  // },
  // 'mr': {
  //   name: 'मराठी'
  // },
  // 'mn': {
  //   name: 'Монгол хэл'
  // },
  // 'my': {
  //   name: 'မြန်မာဘာသာ'
  // },
  // 'nl': {
  //   name: 'Nederlands'
  // },
  // 'ja': {
  //   name: '日本語'
  // },
  // 'nb': {
  //   name: 'Norsk Bokmål'
  // },
  // 'nn': {
  //   name: 'Norsk Nynorsk'
  // },
  // 'uz': {
  //   name: 'Oʻzbekcha'
  // },
  // 'th': {
  //   name: 'ไทย'
  // },
  // 'pl': {
  //   name: 'Polski'
  // },
  // 'pt': {
  //   name: 'Português'
  // },
  // 'pt-br': {
  //   name: 'Português Brasileiro'
  // },
  // 'ro': {
  //   name: 'Română'
  // },
  // 'ru': {
  //   name: 'Русский'
  // },
  // 'sc': {
  //   name: 'Sardu'
  // },
  // 'sq': {
  //   name: 'Shqip'
  // },
  // 'sk': {
  //   name: 'Slovenčina'
  // },
  // 'sl': {
  //   name: 'Slovenščina'
  // },
  // 'sr': {
  //   name: 'Српски'
  // },
  // 'fi': {
  //   name: 'Suomi'
  // },
  // 'sv': {
  //   name: 'Svenska'
  // },
  // 'te': {
  //   name: 'తెలుగు'
  // },
  ,
  'vi': {
    name: 'Tiếng Việt'
  }
  // ,
  // 'tr': {
  //   name: 'Türkçe'
  // },
  // 'uk': {
  //   name: 'Українська'
  // },
  // 'zh-cn': {
  //   name: '简体中文'
  // },
  // 'zh-tw': {
  //   name: '繁體中文'
  // }
};


/***/ })

/******/ });
//# sourceMappingURL=l10n.js.map