define('common/module/hovertips/hovertips', function(require, exports, module) {

  /**
   * @example
      html:
      <div class="js-hovertips"></div>
      
      js:
      var HoverTips = require('/common/module/hovertips/hovertips');
      new HoverTips($('.js-hovertips'), 'hovertips 用例');
  
      @example end  
  */
  
  /*
   * @require 'common/module/hovertips/hovertips.scss';
  */
  
  
  var tpl_hovertips = require('common/module/hovertips/hovertips.tpl');
  
  function HoverTips(cont, content, type) {
  	this.cont = $(cont);
  	this.content = content || 'tips';
  	this.type = type || 'tips';
  
  	this.init();
  };
  
  HoverTips.prototype.renderHTML = function() {
  	this.cont.append(tpl_hovertips({content: this.content}));
  };
  
  HoverTips.prototype.bindEvent = function() {
  	var self = this;
  	this.cont.on('mouseenter', function () {
  		self.cont.find('.hovertips-content').addClass("hovertips-content-hover");
  	}).on('mouseleave', function () {
  		self.cont.find('.hovertips-content').removeClass("hovertips-content-hover");
  	});
  };
  
  HoverTips.prototype.init = function () {
  	this.renderHTML();
  	this.bindEvent();
  }
  
  return HoverTips;

});
