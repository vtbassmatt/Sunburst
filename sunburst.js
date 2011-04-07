var Sunburst = (function() {
	
	var _drawTriangle = function(ctx, fatness, max_dimen) {
		ctx.beginPath();
		ctx.moveTo(0, 0);
		xPos = (fatness/100) * max_dimen;
		xNeg = -1 * xPos;
		ctx.lineTo(max_dimen*Math.sqrt(2), xNeg);
		ctx.lineTo(max_dimen*Math.sqrt(2), xPos);
		ctx.fill();
	};

	var _sunburst = function(canvas, options) {
		var $$ = function(val, deflt) {
			if("undefined"==typeof val) { return deflt; }
			return val;
		}
		
		var ctx = canvas.getContext('2d');
		ctx.save();
		
		options = $$(options, {});
		var bars = $$(options.bars, 36);
		var fatness = $$(options.fatness, 5);
		var color = $$(options.color, "black");
		var backcolor = $$(options.backcolor, "white");
		
		width = canvas.width;
		height = canvas.height;
		var max_dimen = (height > width ? height : width);
		
		ctx.translate(width/2,height/2);
		ctx.fillStyle = backcolor;
		ctx.fillRect(-1* (width/2),-1 * (height/2),width,height);
		ctx.fillStyle = color;
		for(var i = 0; i < bars; i++) {
			ctx.save();
			ctx.rotate(i*(Math.PI*2/bars));
			_drawTriangle(ctx, fatness, max_dimen);
			ctx.restore();
		}
		
		ctx.restore();
	};
		
	return {Draw : _sunburst};
})();
