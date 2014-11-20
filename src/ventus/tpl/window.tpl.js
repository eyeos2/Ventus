define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["src/ventus/tpl/window.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <img src=\"";
  if (helper = helpers.imgUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.imgUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=16 height=16/>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n                    <button class=\"wm-minimize\">&nbsp;</button>\n                    ";
  }

  buffer += "<div class=\"wm-window ";
  if (helper = helpers.classname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.classname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" >\n	<div class=\"wm-window-border top wm-resize\"></div>\n	<div class=\"wm-container\">\n	    <div class=\"wm-window-border left  wm-resize\"></div>\n        <div class=\"wm-window-box\">\n            <header class=\"wm-window-title\" unselectable=\"on\">\n                ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.renderImg) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.renderImg); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.renderImg) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <h1 unselectable=\"on\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n                <div class=\"wm-button-group\">\n                    ";
  options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}
  if (helper = helpers.minimize) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.minimize); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.minimize) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <button class=\"wm-maximize\">&nbsp;</button>\n                    <button class=\"wm-close\">&nbsp;</button>\n                </div>\n            </header>\n\n            <section class=\"wm-content\"></section>\n\n            <button class=\"wm-resize top-right\">&nbsp;</button>\n            <button class=\"wm-resize top-left\">&nbsp;</button>\n            <button class=\"wm-resize bottom-left\">&nbsp;</button>\n            <button class=\"wm-resize bottom-right\">&nbsp;</button>\n        </div>\n	    <div class=\"wm-window-border right wm-resize\"></div>\n    </div>\n\n	<div class=\"wm-window-border bottom wm-resize\"></div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n\n";
  return buffer;
  });

return this["Handlebars"]["templates"];

});