
$(".dropdown").each(function(i,elem){
	elem.sum=0;
	$(elem).find("i").click(function(){
		$(elem).find(".wrapper__dropdown").slideToggle(250)
		$(elem).toggleClass("active")
	})
	$(elem).find(".row").each(function(i,el){
		el.counter=+$(el).find(".number").html()





		$(el).find(".plus").click(function(){
			elem.sum=0;
			elem.guest=0;
			el.counter=+$(el).find(".number").html()
			el.counter++;
			$(el).find(".number").html(el.counter)
			$(elem).find(".clean").removeClass("inactive")
			$(elem).find(".row").each(function(i,el){
				elem.sum+=+$(el).find(".number").html()
				if(!$(el).find(".name").hasClass("third"))
				elem.guest+=+$(el).find(".number").html()
			})
			$(elem).find(".text").html(elem.guest)
		})





		$(el).find(".minus").click(function(){
			elem.sum=0;
			elem.guest=0;
			el.counter=+$(el).find(".number").html()
			if(el.counter<=0)
				el.counter=0
			else
				el.counter--
			$(el).find(".number").html(el.counter)
			$(elem).find(".row").each(function(i,el){
				elem.sum+=+$(el).find(".number").html()
				if(!$(el).find(".name").hasClass("third"))
				elem.guest+=+$(el).find(".number").html()
			})
			if(elem.sum==0)
				{
					$(elem).find(".clean").addClass("inactive")
				}				
		})





	})





	$(elem).find(".clean").click(function(){
		$(elem).find(".row").each(function(i,el){
			$(el).find(".number").html(0)
		})
		$(elem).find(".clean").addClass("inactive")
	})
});
