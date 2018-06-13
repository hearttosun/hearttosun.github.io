$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixth', 'seventh', 'eighth'],
		sectionsColor: ['#7bd447', '#F2DDBE', '#F2DDBE', '#F2DDBE', '#93CF4E', '#F2DC4E','#F2DC4E', '#01A4E0'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['数据安全？', '下载小U', '小U简介', '安全高效的数据加密', '简便的权限管理', '多种认证方式', '联系作者'],
		responsive:900,
	  	continuousVertical: false,
		scrollOverflow: false
	});



	$('.fancybox').fancybox();
	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

	  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      pagination: false,
      navigation: false,
      paginationSpeed: 200,
      rewindSpeed: 300
 
  });

});


// Wow js activation
 new WOW().init();