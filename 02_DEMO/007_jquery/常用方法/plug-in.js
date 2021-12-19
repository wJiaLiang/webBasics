;(function($){

	$.fn.extend({
		'color':function(){
				$(this).animate({
						width: 300,
						height: 300,
						left:10,
					},
					1000,function() {
					/* stuff to do after animation is complete */
					$(this).addClass('ro').html("这个是大盒子");

				});
		},
		"haha":function(event){
					$(this).html('aaa');
					$(this).css("backgroundColor","green")
		}


	});

})(jQuery)