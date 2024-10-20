/* esri-leaflet-renderers - v3.0.1 - Mon Aug 28 2023 12:30:52 GMT-0500 (Central Daylight Time)
 * Copyright (c) 2023 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("leaflet"),require("esri-leaflet"),require("esri-leaflet-cluster")):"function"==typeof define&&define.amd?define(["exports","leaflet","esri-leaflet","esri-leaflet-cluster"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).L=t.L||{},t.L.esri=t.L.esri||{},t.L.esri.Renderers={}),t.L,t.L.esri,t.L.esri.Cluster)}(this,(function(t,e,i,s){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function n(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){if("default"!==i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}})),e.default=t,Object.freeze(e)}var r=o(e),l=n(i),a=o(s),h=e.Class.extend({initialize:function(t,e){this._symbolJson=t,this.val=null,this._styles={},this._isDefault=!1,this._layerTransparency=1,e&&e.layerTransparency&&(this._layerTransparency=1-e.layerTransparency/100)},pixelValue:function(t){return 1.333*t},colorValue:function(t){return"rgb("+t[0]+","+t[1]+","+t[2]+")"},alphaValue:function(t){return t[3]/255*this._layerTransparency},getSize:function(t,e){var i=t.properties,s=e.field,o=0,n=null;if(s){n=i[s];var r=e.minSize,l=e.maxSize,a=e.minDataValue,h=e.maxDataValue,u=e.normalizationField,y=i?parseFloat(i[u]):void 0;if(null===n||u&&(isNaN(y)||0===y))return null;isNaN(y)||(n/=y),null!==r&&null!==l&&null!==a&&null!==h&&(o=n<=a?r:n>=h?l:r+(n-a)/(h-a)*(l-r)),o=isNaN(o)?0:o}return o},getColor:function(t,e){if(!(t.properties&&e&&e.field&&e.stops))return null;var i,s,o,n,r=t.properties,l=r[e.field],a=e.normalizationField,h=r?parseFloat(r[a]):void 0;if(null===l||a&&(isNaN(h)||0===h))return null;if(isNaN(h)||(l/=h),l<=e.stops[0].value)return e.stops[0].color;var u=e.stops[e.stops.length-1];if(l>=u.value)return u.color;for(var y=0;y<e.stops.length;y++){var f=e.stops[y];if(f.value<=l)i=f.color,o=f.value;else if(f.value>l){s=f.color,n=f.value;break}}if(!isNaN(o)&&!isNaN(n)){var _=n-o;if(_>0){var c=(l-o)/_;if(c){var p=(n-l)/_;if(p){for(var d=[],S=0;S<4;S++)d[S]=Math.round(i[S]*p+s[S]*c);return d}return s}return i}}return null}}),u=r.default.Path.extend({initialize:function(t,e,i){r.default.setOptions(this,i),this._size=e,this._latlng=r.default.latLng(t),this._svgCanvasIncludes()},toGeoJSON:function(){return r.default.GeoJSON.getFeature(this,{type:"Point",coordinates:r.default.GeoJSON.latLngToCoords(this.getLatLng())})},_svgCanvasIncludes:function(){},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_update:function(){this._map&&this._updatePath()},_updatePath:function(){},setLatLng:function(t){return this._latlng=r.default.latLng(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setSize:function(t){return this._size=t,this.redraw()},getSize:function(){return this._size}}),y=u.extend({initialize:function(t,e,i){u.prototype.initialize.call(this,t,e,i)},_updatePath:function(){this._renderer._updateCrossMarker(this)},_svgCanvasIncludes:function(){r.default.Canvas.include({_updateCrossMarker:function(t){var e=t._point,i=t._size/2,s=this._ctx;s.beginPath(),s.moveTo(e.x,e.y+i),s.lineTo(e.x,e.y-i),this._fillStroke(s,t),s.moveTo(e.x-i,e.y),s.lineTo(e.x+i,e.y),this._fillStroke(s,t)}}),r.default.SVG.include({_updateCrossMarker:function(t){var e=t._point,i=t._size/2;r.default.Browser.vml&&(e._round(),i=Math.round(i));var s="M"+e.x+","+(e.y+i)+"L"+e.x+","+(e.y-i)+"M"+(e.x-i)+","+e.y+"L"+(e.x+i)+","+e.y;this._setPath(t,s)}})}}),f=u.extend({initialize:function(t,e,i){u.prototype.initialize.call(this,t,e,i)},_updatePath:function(){this._renderer._updateXMarker(this)},_svgCanvasIncludes:function(){r.default.Canvas.include({_updateXMarker:function(t){var e=t._point,i=t._size/2,s=this._ctx;s.beginPath(),s.moveTo(e.x+i,e.y+i),s.lineTo(e.x-i,e.y-i),this._fillStroke(s,t)}}),r.default.SVG.include({_updateXMarker:function(t){var e=t._point,i=t._size/2;r.default.Browser.vml&&(e._round(),i=Math.round(i));var s="M"+(e.x+i)+","+(e.y+i)+"L"+(e.x-i)+","+(e.y-i)+"M"+(e.x-i)+","+(e.y+i)+"L"+(e.x+i)+","+(e.y-i);this._setPath(t,s)}})}}),_=u.extend({options:{fill:!0},initialize:function(t,e,i){u.prototype.initialize.call(this,t,e,i)},_updatePath:function(){this._renderer._updateSquareMarker(this)},_svgCanvasIncludes:function(){r.default.Canvas.include({_updateSquareMarker:function(t){var e=t._point,i=t._size/2,s=this._ctx;s.beginPath(),s.moveTo(e.x+i,e.y+i),s.lineTo(e.x-i,e.y+i),s.lineTo(e.x-i,e.y-i),s.lineTo(e.x+i,e.y-i),s.closePath(),this._fillStroke(s,t)}}),r.default.SVG.include({_updateSquareMarker:function(t){var e=t._point,i=t._size/2;r.default.Browser.vml&&(e._round(),i=Math.round(i));var s="M"+(e.x+i)+","+(e.y+i)+"L"+(e.x-i)+","+(e.y+i)+"L"+(e.x-i)+","+(e.y-i)+"L"+(e.x+i)+","+(e.y-i);s+=r.default.Browser.svg?"z":"x",this._setPath(t,s)}})}}),c=u.extend({options:{fill:!0},initialize:function(t,e,i){u.prototype.initialize.call(this,t,e,i)},_updatePath:function(){this._renderer._updateDiamondMarker(this)},_svgCanvasIncludes:function(){r.default.Canvas.include({_updateDiamondMarker:function(t){var e=t._point,i=t._size/2,s=this._ctx;s.beginPath(),s.moveTo(e.x,e.y+i),s.lineTo(e.x-i,e.y),s.lineTo(e.x,e.y-i),s.lineTo(e.x+i,e.y),s.closePath(),this._fillStroke(s,t)}}),r.default.SVG.include({_updateDiamondMarker:function(t){var e=t._point,i=t._size/2;r.default.Browser.vml&&(e._round(),i=Math.round(i));var s="M"+e.x+","+(e.y+i)+"L"+(e.x-i)+","+e.y+"L"+e.x+","+(e.y-i)+"L"+(e.x+i)+","+e.y;s+=r.default.Browser.svg?"z":"x",this._setPath(t,s)}})}}),p=h.extend({statics:{MARKERTYPES:["esriSMSCircle","esriSMSCross","esriSMSDiamond","esriSMSSquare","esriSMSX","esriPMS"]},initialize:function(t,e){var i;if(h.prototype.initialize.call(this,t,e),e&&(this.serviceUrl=e.url),t)if("esriPMS"===t.type){var s=this._symbolJson.url;s&&"http://"===s.substr(0,7)||"https://"===s.substr(0,8)?(i=this.sanitize(s),this._iconUrl=i):(i=this.serviceUrl+"images/"+s,this._iconUrl=e&&e.token?i+"?token="+e.token:i),t.imageData&&(this._iconUrl="data:"+t.contentType+";base64,"+t.imageData),this._icons={},this.icon=this._createIcon(this._symbolJson)}else this._fillStyles()},sanitize:function(t){if(!t)return"";var e;try{e=(e=(e=(e=t.replace(/<br>/gi,"\n")).replace(/<p.*>/gi,"\n")).replace(/<a.*href='(.*?)'.*>(.*?)<\/a>/gi," $2 ($1) ")).replace(/<(?:.|\s)*?>/g,"")}catch(t){e=null}return e},_fillStyles:function(){this._symbolJson.outline&&this._symbolJson.size>0&&"esriSLSNull"!==this._symbolJson.outline.style?(this._styles.stroke=!0,this._styles.weight=this.pixelValue(this._symbolJson.outline.width),this._styles.color=this.colorValue(this._symbolJson.outline.color),this._styles.opacity=this.alphaValue(this._symbolJson.outline.color)):this._styles.stroke=!1,this._symbolJson.color?(this._styles.fillColor=this.colorValue(this._symbolJson.color),this._styles.fillOpacity=this.alphaValue(this._symbolJson.color)):this._styles.fillOpacity=0,"esriSMSCircle"===this._symbolJson.style&&(this._styles.radius=this.pixelValue(this._symbolJson.size)/2)},_createIcon:function(t){var i=this.pixelValue(t.width),s=i;t.height&&(s=this.pixelValue(t.height));var o=i/2,n=s/2;t.xoffset&&(o+=this.pixelValue(t.xoffset)),t.yoffset&&(n+=this.pixelValue(t.yoffset));var r=e.icon({iconUrl:this._iconUrl,iconSize:[i,s],iconAnchor:[o,n]});return this._icons[t.width.toString()]=r,r},_getIcon:function(t){var e=this._icons[t.toString()];return e||(e=this._createIcon({width:t})),e},pointToLayer:function(t,i,s,o){var n=this._symbolJson.size||this._symbolJson.width;if(!this._isDefault){if(s.sizeInfo){var r=this.getSize(t,s.sizeInfo);r&&(n=r)}if(s.colorInfo){var l=this.getColor(t,s.colorInfo);l&&(this._styles.fillColor=this.colorValue(l),this._styles.fillOpacity=this.alphaValue(l))}}if("esriPMS"===this._symbolJson.type){var a=e.extend({},{icon:this._getIcon(n)},o);return e.marker(i,a)}switch(n=this.pixelValue(n),this._symbolJson.style){case"esriSMSSquare":return function(t,e,i){return new _(t,e,i)}(i,n,e.extend({},this._styles,o));case"esriSMSDiamond":return function(t,e,i){return new c(t,e,i)}(i,n,e.extend({},this._styles,o));case"esriSMSCross":return function(t,e,i){return new y(t,e,i)}(i,n,e.extend({},this._styles,o));case"esriSMSX":return function(t,e,i){return new f(t,e,i)}(i,n,e.extend({},this._styles,o))}return this._styles.radius=n/2,e.circleMarker(i,e.extend({},this._styles,o))}});function d(t,e){return new p(t,e)}var S=h.extend({statics:{LINETYPES:["esriSLSDash","esriSLSDot","esriSLSDashDotDot","esriSLSDashDot","esriSLSSolid"]},initialize:function(t,e){h.prototype.initialize.call(this,t,e),this._fillStyles()},_fillStyles:function(){if(this._styles.lineCap="butt",this._styles.lineJoin="miter",this._styles.fill=!1,this._styles.weight=0,!this._symbolJson)return this._styles;if(this._symbolJson.color&&(this._styles.color=this.colorValue(this._symbolJson.color),this._styles.opacity=this.alphaValue(this._symbolJson.color)),!isNaN(this._symbolJson.width)){this._styles.weight=this.pixelValue(this._symbolJson.width);var t=[];switch(this._symbolJson.style){case"esriSLSDash":t=[4,3];break;case"esriSLSDot":t=[1,3];break;case"esriSLSDashDot":t=[8,3,1,3];break;case"esriSLSDashDotDot":t=[8,3,1,3,1,3]}if(t.length>0){for(var e=0;e<t.length;e++)t[e]*=this._styles.weight;this._styles.dashArray=t.join(",")}}},style:function(t,e){if(!this._isDefault&&e){if(e.sizeInfo){var i=this.pixelValue(this.getSize(t,e.sizeInfo));i&&(this._styles.weight=i)}if(e.colorInfo){var s=this.getColor(t,e.colorInfo);s&&(this._styles.color=this.colorValue(s),this._styles.opacity=this.alphaValue(s))}}return this._styles}});function m(t,e){return new S(t,e)}var b=h.extend({statics:{POLYGONTYPES:["esriSFSSolid"]},initialize:function(t,e){h.prototype.initialize.call(this,t,e),t&&(t.outline&&"esriSLSNull"===t.outline.style?this._lineStyles={weight:0}:this._lineStyles=m(t.outline,e).style(),this._fillStyles())},_fillStyles:function(){if(this._lineStyles)if(0===this._lineStyles.weight)this._styles.stroke=!1;else for(var t in this._lineStyles)this._styles[t]=this._lineStyles[t];this._symbolJson&&(this._symbolJson.color&&b.POLYGONTYPES.indexOf(this._symbolJson.style>=0)?(this._styles.fill=!0,this._styles.fillColor=this.colorValue(this._symbolJson.color),this._styles.fillOpacity=this.alphaValue(this._symbolJson.color)):(this._styles.fill=!1,this._styles.fillOpacity=0))},style:function(t,e){if(!this._isDefault&&e&&e.colorInfo){var i=this.getColor(t,e.colorInfo);i&&(this._styles.fillColor=this.colorValue(i),this._styles.fillOpacity=this.alphaValue(i))}return this._styles}});function v(t,e){return new b(t,e)}var g=e.Class.extend({options:{proportionalPolygon:!1,clickable:!0},initialize:function(t,i){this._rendererJson=t,this._pointSymbols=!1,this._symbols=[],this._visualVariables=this._parseVisualVariables(t.visualVariables),e.Util.setOptions(this,i)},_parseVisualVariables:function(t){var e={};if(t)for(var i=0;i<t.length;i++)e[t[i].type]=t[i];return e},_createDefaultSymbol:function(){this._rendererJson.defaultSymbol&&(this._defaultSymbol=this._newSymbol(this._rendererJson.defaultSymbol),this._defaultSymbol._isDefault=!0)},_newSymbol:function(t){return"esriSMS"===t.type||"esriPMS"===t.type?(this._pointSymbols=!0,d(t,this.options)):"esriSLS"===t.type?m(t,this.options):"esriSFS"===t.type?v(t,this.options):void 0},_getSymbol:function(){},attachStylesToLayer:function(t){this._pointSymbols?t.options.pointToLayer=e.Util.bind(this.pointToLayer,this):(t.options.style=e.Util.bind(this.style,this),t._originalStyle=t.options.style)},pointToLayer:function(t,i){var s=this._getSymbol(t);return s&&s.pointToLayer?s.pointToLayer(t,i,this._visualVariables,this.options):e.circleMarker(i,{radius:0,opacity:0})},style:function(t){var e;this.options.userDefinedStyle&&(e=this.options.userDefinedStyle(t));var i=this._getSymbol(t);return i?this.mergeStyles(i.style(t,this._visualVariables),e):this.mergeStyles({opacity:0,fillOpacity:0},e)},mergeStyles:function(t,e){var i,s={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i]);if(e)for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=e[i]);return s}}),L=g.extend({initialize:function(t,e){g.prototype.initialize.call(this,t,e),this._field=this._rendererJson.field,this._rendererJson.normalizationType&&"esriNormalizeByField"===this._rendererJson.normalizationType&&(this._normalizationField=this._rendererJson.normalizationField),this._createSymbols()},_createSymbols:function(){var t,e=this._rendererJson.classBreakInfos;this._symbols=[];for(var i=e.length-1;i>=0;i--)(t=this.options.proportionalPolygon&&this._rendererJson.backgroundFillSymbol?this._newSymbol(this._rendererJson.backgroundFillSymbol):this._newSymbol(e[i].symbol)).val=e[i].classMaxValue,this._symbols.push(t);this._symbols.sort((function(t,e){return t.val>e.val?1:-1})),this._createDefaultSymbol(),this._maxValue=this._symbols[this._symbols.length-1].val},_getSymbol:function(t){var e=t.properties[this._field];if(this._normalizationField){var i=t.properties[this._normalizationField];if(isNaN(i)||0===i)return this._defaultSymbol;e/=i}if(e>this._maxValue)return this._defaultSymbol;for(var s=this._symbols[0],o=this._symbols.length-1;o>=0&&!(e>this._symbols[o].val);o--)s=this._symbols[o];return s}});function x(t,e){return new L(t,e)}var P=g.extend({initialize:function(t,e){g.prototype.initialize.call(this,t,e),this._field=this._rendererJson.field1,this._createSymbols()},_createSymbols:function(){for(var t,e=this._rendererJson.uniqueValueInfos,i=e.length-1;i>=0;i--)(t=this._newSymbol(e[i].symbol)).val=e[i].value,this._symbols.push(t);this._createDefaultSymbol()},_getSymbol:function(t){var e=t.properties[this._field];if(this._rendererJson.fieldDelimiter&&this._rendererJson.field2){var i=t.properties[this._rendererJson.field2];if(i){e+=this._rendererJson.fieldDelimiter+i;var s=t.properties[this._rendererJson.field3];s&&(e+=this._rendererJson.fieldDelimiter+s)}}for(var o=this._defaultSymbol,n=this._symbols.length-1;n>=0;n--)this._symbols[n].val==e&&(o=this._symbols[n]);return o}});function z(t,e){return new P(t,e)}var J=g.extend({initialize:function(t,e){g.prototype.initialize.call(this,t,e),this._createSymbol()},_createSymbol:function(){this._rendererJson.symbol&&this._symbols.push(this._newSymbol(this._rendererJson.symbol))},_getSymbol:function(){return this._symbols[0]}});function w(t,e){return new J(t,e)}function k(){if(!this.options.ignoreRenderer){var t=e.Util.bind(this.onAdd,this),i=e.Util.bind(this.unbindPopup,this),s=e.Util.bind(this.onRemove,this);e.Util.bind(this.createNewLayer,this),this.onAdd=function(e){this.metadata((function(i,s){i?console.warn("failed to load metadata from the service."):s&&s.drawingInfo&&(this.options.drawingInfo&&(s.drawingInfo=this.options.drawingInfo),"overlayPane"===this.options.pane&&"esriGeometryPoint"===s.geometryType&&(this.options.pane="markerPane"),this._setRenderers(s),t(e),this._addPointLayer(e))}),this)},this.onRemove=function(t){if(s(t),this._pointLayer){var e=this._pointLayer.getLayers();for(var i in e)t.removeLayer(e[i])}},this.unbindPopup=function(){if(i(),this._pointLayer){var t=this._pointLayer.getLayers();for(var e in t)t[e].unbindPopup()}},this._addPointLayer=function(t){this._pointLayer&&(this._pointLayer.addTo(t),this._pointLayer.bringToFront())},this._createPointLayer=function(){if(!this._pointLayer&&(this._pointLayer=e.geoJson(),this._pointLayerIds={},this._popup)){this._pointLayer.options.onEachFeature=e.Util.bind((function(t,e){e.bindPopup(this._popup(t,e),this._popupOptions)}),this)}},this.createNewLayer=function(t){var i=e.GeoJSON.geometryToLayer(t,this.options);if(this._hasProportionalSymbols){var s=this.getPolygonCentroid(t.geometry.coordinates);if(!isNaN(s[0])&&!isNaN(s[0])){this._createPointLayer();var o=t.id.toString();if(!this._pointLayerIds[o]){var n=this.getPointJson(t,s);this._pointLayer.addData(n),this._pointLayerIds[o]=!0}this._pointLayer.bringToFront()}}return i},this.getPolygonCentroid=function(t){var e=t[0][0];2===e.length&&(e=t[0]);for(var i,s,o,n=0,r=0,l=0,a=e.length,h=0,u=a-1;h<a;u=h++)i=e[h],s=e[u],n+=i[0]*s[1],n-=i[1]*s[0],o=i[0]*s[1]-s[0]*i[1],r+=(i[0]+s[0])*o,l+=(i[1]+s[1])*o;return[r/(o=3*n),l/o]},this.getPointJson=function(t,e){return{type:"Feature",properties:t.properties,id:t.id,geometry:{type:"Point",coordinates:[e[0],e[1]]}}},this._checkForProportionalSymbols=function(t,e){if(this._hasProportionalSymbols=!1,"esriGeometryPolygon"===t&&(e.backgroundFillSymbol&&(this._hasProportionalSymbols=!0),e.classBreakInfos&&e.classBreakInfos.length)){var i=e.classBreakInfos[0].symbol;!i||"esriSMS"!==i.type&&"esriPMS"!==i.type||(this._hasProportionalSymbols=!0)}},this._setRenderers=function(t){var e,i=t.drawingInfo.renderer,s={url:this.options.url};switch(this.options.token&&(s.token=this.options.token),this.options.pane&&(s.pane=this.options.pane),t.drawingInfo.transparency&&(s.layerTransparency=t.drawingInfo.transparency),this.options.style&&(s.userDefinedStyle=this.options.style),i.type){case"classBreaks":if(this._checkForProportionalSymbols(t.geometryType,i),this._hasProportionalSymbols)this._createPointLayer(),x(i,s).attachStylesToLayer(this._pointLayer),s.proportionalPolygon=!0;e=x(i,s);break;case"uniqueValue":e=z(i,s);break;default:e=w(i,s)}e.attachStylesToLayer(this)}}}l.FeatureLayer.addInitHook(k),void 0!==a.default&&s.FeatureLayer&&s.FeatureLayer.addInitHook(k);var V="3.0.1";t.ClassBreaksRenderer=L,t.LineSymbol=S,t.PointSymbol=p,t.PolygonSymbol=b,t.Renderer=g,t.SimpleRenderer=J,t.Symbol=h,t.UniqueValueRenderer=P,t.VERSION=V,t.classBreaksRenderer=x,t.lineSymbol=m,t.pointSymbol=d,t.polygonSymbol=v,t.simpleRenderer=w,t.uniqueValueRenderer=z,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=esri-leaflet-renderers.js.map
