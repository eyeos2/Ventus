define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['window.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"wm-window ";
  if (stack1 = helpers.classname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" >\n	<div class=\"wm-window-border top wm-resize\"></div>\n	<div class=\"wm-container\">\n	    <div class=\"wm-window-border left  wm-resize\"></div>\n        <div class=\"wm-window-box\">\n            <header class=\"wm-window-title\" unselectable=\"on\">\n                <h1 unselectable=\"on\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n                <div class=\"wm-button-group\">\n                    <button class=\"wm-minimize\">&nbsp;</button>\n                    <button class=\"wm-maximize\">&nbsp;</button>\n                    <button class=\"wm-close\">&nbsp;</button>\n                </div>\n            </header>\n\n            <section class=\"wm-content\"></section>\n\n            <button class=\"wm-resize top-right\">&nbsp;</button>\n            <button class=\"wm-resize top-left\">&nbsp;</button>\n            <button class=\"wm-resize bottom-left\">&nbsp;</button>\n            <button class=\"wm-resize\">&nbsp;</button>\n        </div>\n	    <div class=\"wm-window-border right wm-resize\"></div>\n    </div>\n\n	<div class=\"wm-window-border bottom wm-resize\"></div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n\n";
  return buffer;
  });
});
