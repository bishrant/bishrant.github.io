(function(){var e={},s=this||window,r=s.webpackJsonp=s.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{WxRl:function(e,s,r){!function(e){"use strict";var s="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");function r(e,s,r,n){var a=e;switch(r){case"s":return n||s?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"ss":return a+(n||s)?" m\xe1sodperc":" m\xe1sodperce";case"m":return"egy"+(n||s?" perc":" perce");case"mm":return a+(n||s?" perc":" perce");case"h":return"egy"+(n||s?" \xf3ra":" \xf3r\xe1ja");case"hh":return a+(n||s?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(n||s?" nap":" napja");case"dd":return a+(n||s?" nap":" napja");case"M":return"egy"+(n||s?" h\xf3nap":" h\xf3napja");case"MM":return a+(n||s?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(n||s?" \xe9v":" \xe9ve");case"yy":return a+(n||s?" \xe9v":" \xe9ve")}return""}function n(e){return(e?"":"[m\xfalt] ")+"["+s[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,s,r){return e<12?!0===r?"de":"DE":!0===r?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(r("wd/R"))}}]);