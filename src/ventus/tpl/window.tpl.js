define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['window.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <img src=\"";
  if (stack1 = helpers.imgUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imgUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=16 height=16/>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n                    <button class=\"wm-minimize\">&nbsp;</button>\n                    ";
  }

  buffer += "<div class=\"wm-window ";
  if (stack1 = helpers.classname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" >\n	<div class=\"wm-window-border top wm-resize\"></div>\n	<div class=\"wm-container\">\n	    <div class=\"wm-window-border left  wm-resize\"></div>\n        <div class=\"wm-window-box\">\n            <header class=\"wm-window-title\" unselectable=\"on\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.renderImg) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.renderImg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.renderImg) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <h1 unselectable=\"on\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n                <div class=\"wm-button-group\">\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.minimize) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.minimize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.minimize) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <button class=\"wm-maximize\">&nbsp;</button>\n                    <button class=\"wm-close\">&nbsp;</button>\n                </div>\n            </header>\n\n            <section class=\"wm-content\"></section>\n\n            <button class=\"wm-resize top-right\">&nbsp;</button>\n            <button class=\"wm-resize top-left\">&nbsp;</button>\n            <button class=\"wm-resize bottom-left\">&nbsp;</button>\n            <button class=\"wm-resize\">&nbsp;</button>\n        </div>\n	    <div class=\"wm-window-border right wm-resize\"></div>\n    </div>\n\n	<div class=\"wm-window-border bottom wm-resize\"></div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n\n";
  return buffer;
  });
});
