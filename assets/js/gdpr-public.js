!function(e){"use strict";e(function(){var o=JSON.parse(t("gdpr_approved_cookies"));function r(e,o,r){if(r){var t=new Date;t.setTime(t.getTime()+24*r*60*60*1e3);var n="; expires="+t.toGMTString()}else n="";document.cookie=e+"="+o+n+"; path=/"}function t(e){for(var o=e+"=",r=document.cookie.split(";"),t=0;t<r.length;t++){for(var n=r[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}console.log(o);var n=[];function c(c){setInterval(function(){n[c]?t(c)!=n[c]&&(n[c]=t(c),function(t){e.inArray(t,o.site_cookies)||r(t,"",-1)}(c)):n[c]=t(c)},100)}function i(){var o=[];e('input[type="checkbox"]:checked',".frm-gdpr-cookie-preferences").each(function(){var r=JSON.parse(e(this).val());if(e.isArray(r))r.forEach(function(e){o.push(e)});else{var t=Object.keys(r);o.hasOwnProperty(t)?o[t[0]].push(r[t[0]]):o[t[0]]=[r[t[0]]]}}),r("gdpr_approved_cookies",JSON.stringify(o)),e(".gdpr.cookie-preferences").fadeOut(),e(".gdpr.cookie-bar").fadeOut()}["__utma","_gid"].forEach(function(e){c(e)}),setTimeout(function(){r("__utma","juliana")},1e3),e(document).on("click",".gdpr-cookie-preferences",function(){e(".gdpr.overlay").fadeIn(),e(".gdpr.cookie-preferences .wrapper").fadeIn()}),e(document).on("click",".gdpr.cookie-preferences .tabs button",function(){var o="."+e(this).data("target");e(".gdpr.cookie-preferences .tab-content > div").removeClass("active"),e(".gdpr.cookie-preferences .tab-content "+o).addClass("active"),e(".gdpr.cookie-preferences .tabs button").removeClass("active"),e(this).addClass("active")}),e(document).on("submit",".frm-gdpr-cookie-preferences",function(e){e.preventDefault(),i()}),e(document).on("click",".gdpr.cookie-bar .accept-cookies",function(){i()})})}(jQuery);