"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var isIdentityCard=function(e){var r=String(e),t=/\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/,d=15===r.length?8:10,i=Number(r.slice(6,d)),e=Number(r.slice(d,2+d)),d=Number(r.slice(2+d,4+d));if(i%400==0||i%4==0&&i%100!=0){if(2===e&&29<d)return!1}else if(2===e&&28<d)return!1;if(t.test(r)&&18===r.length){var n=0;return[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2].forEach(function(e,t){n+=e*r[t]}),{0:"1",1:"0",2:"X",3:"9",4:"8",5:"7",6:"6",7:"5",8:"4",9:"3",10:"2"}[n%11]===r[17].toUpperCase()}return t.test(r)},index={isIdentityCard:isIdentityCard};exports.default=index,exports.isIdentityCard=isIdentityCard;