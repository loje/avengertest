//使().resize可以监听几乎所有html标签，比如text、p、div、span等。
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this); 



$(document).ready(function(){
	$("#loading").height($(window).height());
	$("#shiledpage").height($(window).height());
	$("#subjectShiled").height($(window).height());
	$("#shiledh").height($(window).height());
	$("#tipspage").height($(window).height());
	$("#shiledparty").height($(window).height());

	$("#slide1").height($(window).height() / 3);
	$("#slide2").height($(window).height() / 3);
	$("#slide3").height($(window).height() / 3);
	$("#slide4").height($(window).height() / 3);

	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

	// var dh = $("#shiled").height();
	// var wh = $(window).height();
	// $("#shiled").resize(function() {
	// 	if(dh > wh){
	// 		$(".msg1").remove();
	// 	}
	// });

	// $("#north").click(function(){
	// 	$("#shiledpartymap").removeClass("eastpoint");
	// 	$("#shiledpartymap").removeClass("westpoint");
	// 	$("#shiledpartymap").addClass("northpoint");
	// 	$("#go").removeAttr("style");
	// });
	// $("#west").click(function(){
	// 	$("#shiledpartymap").removeClass("eastpoint");
	// 	$("#shiledpartymap").removeClass("northpoint");
	// 	$("#shiledpartymap").addClass("westpoint");
	// 	$("#go").removeAttr("style");
	// });
	// $("#east").click(function(){
	// 	$("#shiledpartymap").removeClass("westpoint");
	// 	$("#shiledpartymap").removeClass("northpoint");
	// 	$("#shiledpartymap").addClass("eastpoint");
	// 	$("#go").removeAttr("style");
	// });

	// $("#go").click(function(){
	// 	$("#shiledparty").remove();
	// 	$("#shiledpage").removeAttr("style");
	// 	$("#shiledpage").height($(window).height());

	// 	setTimeout("$('#messionaction').removeAttr('style')", 4000);
	// });


	//setTimeout("$('#messionaction').removeAttr('style')", 4000);
	$("#east").click(function(){
		$("#chioseintro").removeAttr("style");
		$("#text").remove();
		$("#textbox").html("<span id='text' class='text'></span>");
		$("#text").typed({
			strings: ["东区阵营，钢铁与科技，这就是男人的浪漫。"],
			typeSpeed: 50,
			startDelay: 0,
			// backspacing speed
			backSpeed: 0,
			// shuffle the strings
			shuffle: false,
			// time before backspacing
			backDelay: 1000,
			// loop
			loop: false,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			// callback: function() {
			// 	$('#tipstitle1').typed({
			// 	strings: ["<span>1.由于测试者的反应倾向、是否认真作答、测评时的环境等因素的影响，结果可能与现实有所偏差。</span><br/><span>2.测评结果可帮助测试者评估自身的职业倾向水平，以改良对专业职业选择的计划，以及作为了解和进行人事决策的参考。</span><br/><span>3.请在专业人士的指导下阅读此报告，以免产生不必要的误解。</span><br/><span>4.测评结果属于个人保密信息，请妥善保管。</span>"],
			// 	typeSpeed: 50,
			// 	backDelay: 500,
			// 	loop: false,
			// 	loopCount: false
			// 	})
			// },
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	})
	$("#west").click(function(){
		$("#chioseintro").removeAttr("style");
		$("#text").remove();
		$("#textbox").html("<span id='text' class='text'></span>");
		$("#text").typed({
			strings: ["西区阵营，女人与小女人，比例失衡各种弯。"],
			typeSpeed: 50,
			startDelay: 0,
			// backspacing speed
			backSpeed: 0,
			// shuffle the strings
			shuffle: false,
			// time before backspacing
			backDelay: 1000,
			// loop
			loop: false,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			// callback: function() {
			// 	$('#tipstitle1').typed({
			// 	strings: ["<span>1.由于测试者的反应倾向、是否认真作答、测评时的环境等因素的影响，结果可能与现实有所偏差。</span><br/><span>2.测评结果可帮助测试者评估自身的职业倾向水平，以改良对专业职业选择的计划，以及作为了解和进行人事决策的参考。</span><br/><span>3.请在专业人士的指导下阅读此报告，以免产生不必要的误解。</span><br/><span>4.测评结果属于个人保密信息，请妥善保管。</span>"],
			// 	typeSpeed: 50,
			// 	backDelay: 500,
			// 	loop: false,
			// 	loopCount: false
			// 	})
			// },
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	})
	$("#north").click(function(){
		$("#chioseintro").removeAttr("style");
		$("#text").remove();
		$("#textbox").html("<span id='text' class='text'></span>");
		$("#text").typed({
			strings: ["北区阵营，牺牲与怜悯，与死神同行。"],
			typeSpeed: 50,
			startDelay: 0,
			// backspacing speed
			backSpeed: 0,
			// shuffle the strings
			shuffle: false,
			// time before backspacing
			backDelay: 1000,
			// loop
			loop: false,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			// callback: function() {
			// 	$('#tipstitle1').typed({
			// 	strings: ["<span>1.由于测试者的反应倾向、是否认真作答、测评时的环境等因素的影响，结果可能与现实有所偏差。</span><br/><span>2.测评结果可帮助测试者评估自身的职业倾向水平，以改良对专业职业选择的计划，以及作为了解和进行人事决策的参考。</span><br/><span>3.请在专业人士的指导下阅读此报告，以免产生不必要的误解。</span><br/><span>4.测评结果属于个人保密信息，请妥善保管。</span>"],
			// 	typeSpeed: 50,
			// 	backDelay: 500,
			// 	loop: false,
			// 	loopCount: false
			// 	})
			// },
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	})



	setTimeout(function(){
		$("#tipstitle").typed({
			strings: ["<span>特工，在测试前，你有一些基本规则需要了解。^500</span><br /><br/><span>1.由于测试者的反应倾向、是否认真作答、测评时的环境等因素的影响，结果可能与现实有所偏差。^500</span><br/><br/><span>2.测评结果可帮助测试者评估自身的职业倾向水平，以改良对专业职业选择的计划，以及作为了解和进行人事决策的参考。^500</span><br/><br/><span>3.请在专业人士的指导下阅读此报告，以免产生不必要的误解。^500</span><br/><br/><span>4.测评结果属于个人保密信息，请妥善保管。</span>"],
			typeSpeed: 50,
			startDelay: 0,
			// backspacing speed
			backSpeed: 0,
			// shuffle the strings
			shuffle: false,
			// time before backspacing
			backDelay: 1000,
			// loop
			loop: false,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			// callback: function() {
			// 	$('#tipstitle1').typed({
			// 	strings: ["<span>1.由于测试者的反应倾向、是否认真作答、测评时的环境等因素的影响，结果可能与现实有所偏差。</span><br/><span>2.测评结果可帮助测试者评估自身的职业倾向水平，以改良对专业职业选择的计划，以及作为了解和进行人事决策的参考。</span><br/><span>3.请在专业人士的指导下阅读此报告，以免产生不必要的误解。</span><br/><span>4.测评结果属于个人保密信息，请妥善保管。</span>"],
			// 	typeSpeed: 50,
			// 	backDelay: 500,
			// 	loop: false,
			// 	loopCount: false
			// 	})
			// },
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	},1500)

	$("#sorry").click(function(){
		$("#chioseintro").attr("style","display:none;");
	})
	$("#iwantyou").click(function(){
		$("#messionaction").removeAttr("style");
		$("#coming").removeAttr("style");

		//倒计时3秒
		var wait=3;  
		timeOut();  
		function timeOut(){  
		    if(wait==0){  
		        feedbackObj.fadeOut(100,function(){  
		            feedbackObj.remove();                     
		        });  
		        $('#opacity-mask').fadeOut(100);      
		    }else{                    
		        setTimeout(function(){  
		            wait--;  
		            $('.timeout').text(wait);  
		            timeOut();  
		        },1000)  
		    }  
		} 
		setTimeout("window.location.href='subject.html'",4000); 
	})

 

	var d = new Date();
	var h = d.getHours(); 
	var m = d.getMinutes(); 
	$("#time").text("TODAY " + h + ":" + m);
	$(".msgtime").text(h + ":" + m);

	var a = 0;

	$("input[type = 'radio']").click(function(){
		//alert("准备延迟");
		var q = ($($(this).parent()).parent()).next();
		var v = $($(this).parent()).parent();
		var th = $(this).parent();
		//alert("延迟了吗？");
		//if(a<30){
			a = a + 1;
			(th).attr("style","background-color: rgba(125, 81, 27, 0.61);border: 1px solid #CC9233;");
			($("input[type=radio]:checked").parent()).attr("style","background-color: rgba(125, 81, 27, 0.61);border: 1px solid #CC9233;");
			var t = setTimeout(function(){

				(q).removeAttr('style');
				(v).attr('style','display:none;');
				($("input[type = 'radio']").parent()).removeAttr("style");
			//alert("延迟了！");
			}, 50);
		//}
	})


	//返回上一题
	$("#back2").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');

		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:0%;");
		$("#percent").text("1/30");

	})
	$("#back3").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:3%;");
		$("#percent").text("2/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back4").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:7%;");
		$("#percent").text("3/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back5").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:10%;");
		$("#percent").text("4/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back6").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:13%;");
		$("#percent").text("5/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back7").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:17%;");
		$("#percent").text("6/30");
		($("input[type = 'radio']").parent()).removeAttr("style");

	})
	$("#back8").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:20%;");
		$("#percent").text("7/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back9").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:23%;");
		$("#percent").text("8/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back10").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:27%;");
		$("#percent").text("9/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back11").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:30%;");
		$("#percent").text("10/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back12").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:33%;");
		$("#percent").text("11/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back13").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:37%;");
		$("#percent").text("12/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back14").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:40%;");
		$("#percent").text("13/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back15").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:43%;");
		$("#percent").text("14/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back16").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:47%;");
		$("#percent").text("15/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back17").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:50%;");
		$("#percent").text("16/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back18").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:53%;");
		$("#percent").text("17/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back19").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:57%;");
		$("#percent").text("18/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back20").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:60%;");
		$("#percent").text("19/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back21").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:63%;");
		$("#percent").text("20/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back22").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:67%;");
		$("#percent").text("21/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back23").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:70%;");
		$("#percent").text("22/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back24").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:73%;");
		$("#percent").text("23/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back25").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:77%;");
		$("#percent").text("24/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back26").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:80%;");
		$("#percent").text("25/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back27").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:83%;");
		$("#percent").text("26/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back28").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:87%;");
		$("#percent").text("27/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back29").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:90%;");
		$("#percent").text("28/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back30").click(function(){
		var qq = ($(this).parent()).prev();
		var vv = $(this).parent();
		(qq).removeAttr('style');
		(vv).attr('style','display:none;');
		$("#timingexpand").attr("style","width:93%;");
		$("#percent").text("29/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
	})
	$("#back31").click(function(){
		$("#subjectShiled").removeAttr("style");
		$("#subjectShiled").height($(window).height());
		// var qq = ($(this).parent()).prev();
		 var vv = $(this).parent();
		// (qq).removeAttr('style');
		 (vv).attr('style','display:none;');
		($($("input[name='option30']").parent()).parent()).removeAttr('style');
		$("#timingexpand").attr("style","width:97%;");
		$("#percent").text("30/30");
		($("input[type = 'radio']").parent()).removeAttr("style");
		$("#coming").removeAttr("style");
		$("#shiledbg").removeAttr("style");
	})


	if(isiOS){

	}else if(isAndroid){
		$("#loadingbg").removeClass("loadingbg-animation");
	}

	$("#tipsbtn").click(function(){
		setTimeout("window.location.href='subject.html'",500); 
	})

	$("#yuan").click(function(){
		$("#coming").removeAttr("style");
		setTimeout("window.location.href='subject.html'",3000); 
		// setTimeout(function(){
		// 	$("#tipspage").removeAttr("style");
		// 	$("#tipspage").height($(window).height());
		// 	// $(".tipstitle").typed({
		// 	// 	strings: [$("#tipstitle").text()],
		// 	// 	typeSpeed: 50
		// 	// });
		// 	$("#tipstitle").typed({
		// 		strings: [$("#tipstitle").html(),
		// 					"由于测试者的反应倾向、是否认真作答、测评时的环境等因素的影响，测评结果可能与真实情况有所偏差。",
		// 					"测评结果可帮助测试者对自己的职业倾向水平进行评估，以改良自身对专业职业选择的计划。",
		// 					"测评结果可作为了解测试者和进行人事决策的参考，但绝不是唯一的决策依据。",
		// 					"初次阅读此报告的人，请在专业人士的指导下阅读；",
		// 					"对于报告中不理解的地方，请向专业人士寻求解释，以免产生不必要的误解。",
		// 					"测评结果属于个人保密信息，请妥善保管。"
		// 					],
		// 		typeSpeed: 50,
		// 		startDelay: 0,
		// 		// backspacing speed
		// 		backSpeed: 0,
		// 		// shuffle the strings
		// 		shuffle: false,
		// 		// time before backspacing
		// 		backDelay: 1000,
		// 		// loop
		// 		loop: false,
		// 		// false = infinite
		// 		loopCount: false,
		// 		// show cursor
		// 		showCursor: true,
		// 		// character for cursor
		// 		cursorChar: "|",
		// 		// attribute to type (null == text)
		// 		attr: null,
		// 		// either html or text
		// 		contentType: 'html',
		// 		// call when done callback function
		// 		// callback: function() {
  //   //               $('#tipstitle1').typed({
  //   //                   strings: [$("#tipstitle1").html(),$("#tipstitle2").html()],
  //   //                   typeSpeed: 50,
  //   //                   backDelay: 500,
  //   //                   loop: false,
  //   //                   loopCount: false
  //   //               })
		// 		// },
		// 		// starting callback function before each string
		// 		preStringTyped: function() {},
		// 		//callback for every typed string
		// 		onStringTyped: function() {},
		// 		// callback for reset
		// 		resetCallback: function() {}
		// 	});
		// },3000)
	})

	//完成度

	$("input[name='option1']").click(function(){
		$("#timingexpand").attr("style","width:3%;");
		$("#percent").text("2/30");
		$("#back").removeAttr("style");
	})
	$("input[name='option2']").click(function(){
		$("#timingexpand").attr("style","width:7%;");
		$("#percent").text("3/30");
	})
	$("input[name='option3']").click(function(){
		$("#timingexpand").attr("style","width:10%;");
		$("#percent").text("4/30");
	})
	$("input[name='option4']").click(function(){
		$("#timingexpand").attr("style","width:13%;");
		$("#percent").text("5/30");
	})
	$("input[name='option5']").click(function(){
		$("#timingexpand").attr("style","width:17%;");
		$("#percent").text("6/30");
	})

	$("input[name='option6']").click(function(){
		$("#timingexpand").attr("style","width:20%;");
		$("#percent").text("7/30");
	})
	$("input[name='option7']").click(function(){
		$("#timingexpand").attr("style","width:23%;");
		$("#percent").text("8/30");
	})
	$("input[name='option8']").click(function(){
		$("#timingexpand").attr("style","width:27%;");
		$("#percent").text("9/30");
	})

	$("input[name='option9']").click(function(){
		$("#timingexpand").attr("style","width:30%;");
		$("#percent").text("10/30");
	})
	$("input[name='option10']").click(function(){
		$("#timingexpand").attr("style","width:33%;");
		$("#percent").text("11/30");
	})
	$("input[name='option11']").click(function(){
		$("#timingexpand").attr("style","width:37%;");
		$("#percent").text("12/30");
	})

	$("input[name='option12']").click(function(){
		$("#timingexpand").attr("style","width:40%;");
		$("#percent").text("13/30");
	})
	$("input[name='option13']").click(function(){
		$("#timingexpand").attr("style","width:43%;");
		$("#percent").text("14/30");
	})
	$("input[name='option14']").click(function(){
		$("#timingexpand").attr("style","width:47%;");
		$("#percent").text("15/30");
	})

	$("input[name='option15']").click(function(){
		$("#timingexpand").attr("style","width:50%;");
		$("#percent").text("16/30");
	})
	$("input[name='option16']").click(function(){
		$("#timingexpand").attr("style","width:53%;");
		$("#percent").text("17/30");
	})
	$("input[name='option17']").click(function(){
		$("#timingexpand").attr("style","width:57%;");
		$("#percent").text("18/30");
	})

	$("input[name='option18']").click(function(){
		$("#timingexpand").attr("style","width:60%;");
		$("#percent").text("19/30");
	})
	$("input[name='option19']").click(function(){
		$("#timingexpand").attr("style","width:63%;");
		$("#percent").text("20/30");
	})
	$("input[name='option20']").click(function(){
		$("#timingexpand").attr("style","width:67%;");
		$("#percent").text("21/30");
	})

	$("input[name='option21']").click(function(){
		$("#timingexpand").attr("style","width:70%;");
		$("#percent").text("22/30");
	})
	$("input[name='option22']").click(function(){
		$("#timingexpand").attr("style","width:73%;");
		$("#percent").text("23/30");
	})
	$("input[name='option23']").click(function(){
		$("#timingexpand").attr("style","width:77%;");
		$("#percent").text("24/30");
	})

	$("input[name='option24']").click(function(){
		$("#timingexpand").attr("style","width:80%;");
		$("#percent").text("25/30");
	})
	$("input[name='option25']").click(function(){
		$("#timingexpand").attr("style","width:83%;");
		$("#percent").text("26/30");
	})	
	$("input[name='option26']").click(function(){
		$("#timingexpand").attr("style","width:87%;");
		$("#percent").text("27/30");
	})
	$("input[name='option27']").click(function(){
		$("#timingexpand").attr("style","width:90%;");
		$("#percent").text("28/30");
	})
	$("input[name='option28']").click(function(){
		$("#timingexpand").attr("style","width:93%;");
		$("#percent").text("29/30");
	})
	$("input[name='option29']").click(function(){
		$("#timingexpand").attr("style","width:97%;");
		$("#percent").text("30/30");
	})

	$("input[type=radio]:checked").attr("style","background-color: rgba(125, 81, 27, 0.61);border: 1px solid #CC9233;");




	$("input[name='option30']").click(function(){
		$("#personalitybox").height($(window).height() - $(window).height()*0.4);
		$("#back31").attr("style","display:none;");
		$("#subjectShiled").attr("style","display:none;");
		$("#resultpage").removeAttr("style");
		$("#resultpage").height($(window).height());
		$("#coming").attr("style","display:none;");
		if($("input[type=radio]:checked").length == 30){

			var a1 = $("input[name='option1']:checked").val();

			var a2 = $("input[name='option2']:checked").val();
			var a3 = $("input[name='option3']:checked").val();
			var a4 = $("input[name='option4']:checked").val();
			var a5 = $("input[name='option5']:checked").val();
			var a6 = $("input[name='option6']:checked").val();
			var a7 = $("input[name='option7']:checked").val();
			var a8 = $("input[name='option8']:checked").val();
			var a9 = $("input[name='option9']:checked").val();
			var a10 = $("input[name='option10']:checked").val();

			var a11 = $("input[name='option11']:checked").val();
			var a12 = $("input[name='option12']:checked").val();
			var a13 = $("input[name='option13']:checked").val();
			var a14 = $("input[name='option14']:checked").val();
			var a15 = $("input[name='option15']:checked").val();
			var a16 = $("input[name='option16']:checked").val();
			var a17 = $("input[name='option17']:checked").val();
			var a18 = $("input[name='option18']:checked").val();
			var a19 = $("input[name='option19']:checked").val();
			var a20 = $("input[name='option20']:checked").val();

			var a21 = $("input[name='option21']:checked").val();
			var a22 = $("input[name='option22']:checked").val();
			var a23 = $("input[name='option23']:checked").val();
			var a24 = $("input[name='option24']:checked").val();
			var a25 = $("input[name='option25']:checked").val();
			var a26 = $("input[name='option26']:checked").val();
			var a27 = $("input[name='option27']:checked").val();
			var a28 = $("input[name='option28']:checked").val();
			var a29 = $("input[name='option29']:checked").val();
			var a30 = $("input[name='option30']:checked").val();


			var b1 = $("#hidden1").val(a1);
			var b2 = $("#hidden2").val(a2);
			var b3 = $("#hidden3").val(a3);
			var b4 = $("#hidden4").val(a4);
			var b5 = $("#hidden5").val(a5);
			var b6 = $("#hidden6").val(a6);
			var b7 = $("#hidden7").val(a7);
			var b8 = $("#hidden8").val(a8);
			var b9 = $("#hidden9").val(a9);
			var b10 = $("#hidden10").val(a10);

			var b11 = $("#hidden11").val(a11);
			var b12 = $("#hidden12").val(a12);
			var b13 = $("#hidden13").val(a13);
			var b14 = $("#hidden14").val(a14);
			var b15 = $("#hidden15").val(a15);
			var b16 = $("#hidden16").val(a16);
			var b17 = $("#hidden17").val(a17);
			var b18 = $("#hidden18").val(a18);
			var b19 = $("#hidden19").val(a19);
			var b20 = $("#hidden20").val(a20);

			var b21 = $("#hidden21").val(a21);
			var b22 = $("#hidden22").val(a22);
			var b23 = $("#hidden23").val(a23);
			var b24 = $("#hidden24").val(a24);
			var b25 = $("#hidden25").val(a25);
			var b26 = $("#hidden26").val(a26);
			var b27 = $("#hidden27").val(a27);
			var b28 = $("#hidden28").val(a28);
			var b29 = $("#hidden29").val(a29);
			var b30 = $("#hidden30").val(a30);




			var changgui = $("#changgui").val(parseFloat(b7.val()) + parseFloat(b8.val()) + parseFloat(b14.val()) + parseFloat(b21.val()) + parseFloat(b30.val()));

			var qiye = $("#qiye").val(parseFloat(b6.val()) + parseFloat(b12.val()) + parseFloat(b13.val()) + parseFloat(b20.val()) + parseFloat(b29.val()));

			var shehui = $("#shehui").val(parseFloat(b4.val()) + parseFloat(b5.val()) + parseFloat(b11.val()) + parseFloat(b19.val()) + parseFloat(b28.val()));

			var shiji = $("#shiji").val(parseFloat(b9.val()) + parseFloat(b15.val()) + parseFloat(b22.val()) + parseFloat(b23.val()) + parseFloat(b24.val()));

			var yanjiu = $("#yanjiu").val(parseFloat(b2.val()) + parseFloat(b3.val()) + parseFloat(b18.val()) + parseFloat(b26.val()) + parseFloat(b27.val()));

			var yishu = $("#yishu").val(parseFloat(b1.val()) + parseFloat(b10.val()) + parseFloat(b16.val()) + parseFloat(b17.val()) + parseFloat(b25.val()));



			//定义数组
			var cg = parseInt(changgui.val());
			var qy = parseInt(qiye.val());
			var sh = parseInt(shehui.val());
			var sj = parseInt(shiji.val());
			var yj = parseInt(yanjiu.val());
			var ys = parseInt(yishu.val());

			var max = Math.max(cg,qy,sh,sj,yj,ys);
			

			if(cg == max){
				$("#result").text("你的个性较为细致，处事计划性和条理性强，你平时给人的感觉是非常尊重权威和规章制度，且做事责任心和执行力非常强，但有时过于谨慎和保守，缺乏创造性。相对而言，你更愿意从事按部就班或原则性强的工作。");
				$("#avenger").html("<img src='image/png/thor.png' />");
				$("#mainname").text("Thor · 常规型人格");
				$("#personalityname").html("Thor · 常规型人格");
				$("#mainname").attr("style","background-color: #183E50;border: 1px solid #D8D8D8;color: #DCD6D6;");
				$("#avengername").html("<img src='image/name/thor.png' />");
				$("#herointro").text("雷神-托尔是众神之父奥丁的亲生儿子，掌管着风暴和闪电的天神，勇敢善战，虽然中二时期因为自大鲁莽点燃了古老战争的战火，但是发配地球改造后，重新变成了有为的好青年，个性细致，处事计划性和条理性强，非常尊重权威和规章制度，做事有责任性，执行力强。虽然有王者的身份，但是在邪神洛基的照耀下，还是过于谨慎保守，缺乏创造性。");
				//$("#shiledbg").attr("style","background-image:url(image/png/thor.png);background-size: cover;");
				//alert("常规型 =" + cg);
				$("#youravenger").attr("style","border: 1px solid #D8D8D8; box-shadow: 0px 0px 20px #D8D8D8 inset; background-image: url(image/weapons/thor.png);");
				$("#youravenger p").attr("style","color: #DCD6D6;");
				$("#avengerredar").attr("style","background-image: url(image/changguiredar.png);")
				$("#realman").addClass("thor");
				$("#talkman").text("Thor");
				$("#talk").html("<div class='talkbox'>嘿，特工，今后我就就是你的导师了</div><div class='talkbox'>今后别人问你跟谁混的，你就说，Thor Son</div><div class='talkbox'>先去分部报个到吧</div><div class='talkbox'>简会给你分派你的第一次<span class='label label-danger'>外勤任务</span></div><div class='talkbox'>关于神盾局深职分部的<span class='label label-danger'>机密档案</span>要好好抄下来</div><div class='talkbox'>只有谦逊，细心，懂持家，才是好男人</div>");
			}else if(qy == max){
				$("#result").text("你为人较为务实，且做事有较强的目的性，常爱追求权力，权威和物质财富，习惯以利益得失，权力地位和金钱等来衡量做事的价值，通常你的精力非常旺盛，且爱好竞争，敢冒风险，个性上你非常乐观和自信，为人处世过程中表现出较强的支配欲和决断力，具有领导潜质。相对而言，你善于使用工具，更愿意从事操作性强的工作。");
				$("#avenger").html("<img src='image/png/cap.png' />");
				$("#mainname").text("Steven Rogers · 企业型人格");
				$("#personalityname").html("Steven Rogers · 企业型人格");
				$("#mainname").attr("style","background-color: #7D0F28;border: 1px solid #2499D4;color: #DCD6D6;");
				$("#avengername").html("<img src='image/name/cap.png' />");
				$("#herointro").text("美国队长-罗杰斯是二战中接受实验改造的超级士兵，力量、速度、耐力惊人，他被视为美国精神的象征，拿着世界上最坚硬的金属之一振金，四处巡回演出，积累了大量演说和企业家传媒经验。在直面德意日轴心国敌人的千百场战斗中，成为了一个高明的战术家及战场指挥官，让队友服从他的指挥。在复联中，也担任着精神领袖大哥大的地位。目的强，具备战略眼光长，精力旺盛，敢冒风险，个性乐观，有较强支配欲和决断力是一个好领导的基础，队长不愧对于企业型的赞誉。");
				//$("#shiledbg").attr("style","background-image:url(image/png/cap.png);background-size: cover;");
				//alert("企业型 =" + qy);
				$("#youravenger").attr("style","border: 1px solid #2499D4; box-shadow: 0px 0px 20px #2499D4 inset; background-image: url(image/weapons/cap.png);");
				$("#youravenger p").attr("style","color:#DCD6D6;");
				$("#realman").addClass("cap");
				$("#talkman").text("Steven Rogers");
				$("#talk").html("<div class='talkbox'>嘿，新兵，今后我就就是你的导师了</div><div class='talkbox'>让我们先去分部<br/>制定一下你第一次<span class='label label-danger'>外勤任务</span>的作战计划吧</div><div class='talkbox'>关于神盾局深职分部的<span class='label label-danger'>机密档案</span>要好好了解清楚</div><div class='talkbox'>God Bless 深职院，别说脏话，以后你会是个好的领袖</div>");

			}else if(sh == max){
				$("#result").text("你善于言谈，且为人友好热情，乐于助人，人际圈非常广泛，平时你较为关心社会问题，比较看重社会义务和道德，并具有强烈的社会责任感，总渴望发挥自己的社会作用。相对而言，你更愿意从事与人打交道的工作。");
				$("#avenger").html("<img src='image/png/blackwidow.png' />");
				$("#mainname").text("Natasha Romanoff · 社会型人格");
				$("#personalityname").html("Natasha Romanoff<br/>社会型人格");
				$("#mainname").attr("style","background-color: #0C0C0C;border: 1px solid #8E0707;color: #B5B4B4;");
				$("#avengername").html("<img src='image/name/blackwidow.png' />");
				$("#herointro").text("黑寡妇-娜塔莎出生于前苏联大林格勒，自幼被苏联特工人员训练成特工，身体经基因改造后大大延缓了其衰老速度。美貌与能力并存，使得她成为了漫威电影宇宙里的交际花。备胎无数，上有金刚狼、下有冬兵、前有队长、后有鹰眼，在漫威电影宇宙的复联2中又贴上了绿巨人。此外钢铁侠、超胆侠、还有局长等跟其都有剪不断理还乱的过节。社交能力和办事能力如此出色的她，怎么能不胜任社会型一称，现代人常说，这就是云备胎。");
				//$("#shiledbg").attr("style","background-image:url(image/png/blackwidow.png);background-size: cover;");
				//alert("社会型 =" + sh);
				$("#youravenger").attr("style","border: 1px solid #8E0707; box-shadow: 0px 0px 20px #8E0707 inset; background-image: url(image/weapons/blackwidow.png);");
				$("#youravenger p").attr("style","color:#B5B4B4;");
				$("#avengerredar").attr("style","background-image: url(image/changguiredar.png);")
				$("#realman").addClass("blackwidow");
				$("#talkman").text("Natasha Romanoff");
				$("#talk").html("<div class='talkbox'>嘿，特工，今后我就是你的导师了</div><div class='talkbox'>(๑•ั็ω•็ั๑)<br/>不约、爱过、救鹰眼</div><div class='talkbox'>老实去分部报到吧。</div><div class='talkbox'>先完成你的第一次<span class='label label-danger'>外勤任务</span></div><div class='talkbox'>关于神盾局深职分部的<span class='label label-danger'>机密档案</span>要好好了解清楚</div><div class='talkbox'>( •ิ_• ิ)</div><div class='talkbox'>我才不是女公关</div>");

			}else if(sj == max){
				$("#result").text("你的动手能力强，做事手脚灵活，动作协调，你喜欢有规则的具体劳动和需要基本操作技能的工作，但你的社交能力有待加强。相对而言，你善于使用工具，更愿意从事操作性强的工作。");
				$("#avenger").html("<img src='image/png/ironman.png' />");
				$("#mainname").text("Tony Stark · 实际型人格");
				$("#personalityname").html("Tony Stark<br/>实际型人格");
				$("#mainname").attr("style","background-color: #484E50;border: 1px solid #A53111;color: #FFFFFF;");
				$("#avengername").html("<img src='image/name/ironman.png' />");
				$("#herointro").text("钢铁侠-斯塔克是“斯塔克工业”的董事长，以独特的生活方式与其聪明才智及天才发明家闻名，动手能力和操控能力极强，在钢铁侠3中，他让他的战甲们自爆放起了烟火，据不完全统计，斯塔克拥有战争机器、钢铁爱国者、坦克、伽马、百夫长、红鲷鱼、锤头、反浩克等45种战甲，贾维斯和维罗妮卡两套人工智能系统。称的上是现实世界里一流的发明家，工业设计工程师。");
				//$("#shiledbg").attr("style","background-image:url(image/png/ironman.png);background-size: cover;");
				//alert("实际型 =" + sj);
				$("#youravenger").attr("style","border: 1px solid #A53111; box-shadow: 0px 0px 20px #A53111 inset; background-image: url(image/weapons/ironman.png);");
				$("#youravenger p").attr("style","color:#FFFFFF;");
				$("#avengerredar").attr("style","background-image: url(image/changguiredar.png);")

				$("#realman").addClass("ironman");
				$("#talkman").text("Tony Stark");
				$("#talk").html("<div class='talkbox'>嘿，特工，今后我就是你的导师了</div><div class='talkbox'>先去分部报个到吧</div><div class='talkbox'>贾维斯会给你分派你的第一次<span class='label label-danger'>外勤任务</span></div><div class='talkbox'>还有，记得别忘了去看看神盾局深职分部的<span class='label label-danger'>机密档案</span></div><div class='talkbox'>菜鸟，多努力努力，等你不打外星人了</div><div class='talkbox'>来斯塔克工业做个工程师也不错</div>");

			}else if(yj == max){
				$("#result").text("你为人好奇，有较强的求知欲，且独立性强，平时爱好专研；你的抽象思维能力较强，喜欢进行逻辑分析和推理，且通常你考虑问题较为理性，凡事欲求精准。相对而言，你更喜欢较为独立的工作环境，且更愿意需要认真专研且富有一定创造性的工作。");
				$("#avenger").html("<img src='image/png/hulk.png' />"); 
				$("#mainname").text("Bruce Banner · 研究型人格");
				$("#personalityname").html("Bruce Banner<br/>研究型人格");
				$("#mainname").attr("style","background-color: #191D1B;border: 1px solid #B5D8B8;color: #B5D8B8;");
				$("#avengername").html("<img src='image/name/hulk.png' />");
				$("#herointro").text("绿巨人-班纳是出生于美国俄亥俄州代顿的一名核子物理学家，致力于核物理的研究。在复仇者联盟中与斯塔克一同创造了幻视。研究型人格，为人好奇，有较强的求知欲，且独立性强，平时爱好专研；你的抽象思维能力较强，喜欢进行逻辑分析和推理，且通常你考虑问题较为理性，凡事欲求精准。相对而言，你更喜欢较为独立的工作环境，且更愿意需要认真专研且富有一定创造性的工作。");
				//$("#shiledbg").attr("style","background-image:url(image/png/hulk.png);background-size: cover;");
				//alert("研究型 =" + yj);
				$("#youravenger").attr("style","border: 1px solid #B5D8B8; box-shadow: 0px 0px 20px #B5D8B8 inset; background-image: url(image/weapons/hulk.png);");
				$("#youravenger p").attr("style","color:#B5D8B8;");
				$("#realman").addClass("hulk");
				$("#talkman").text("Bruce Banner");
				$("#talk").html("<div class='talkbox'>Hulk smash！</div><div class='talkbox'>今后我就是你的导师了</div><div class='talkbox'>先去分部报个到吧</div><div class='talkbox'>贝蒂·罗斯会给你分派你的第一次<span class='label label-danger'>外勤任务</span></div><div class='talkbox'>关于神盾局深职分部的<span class='label label-danger'>机密档案</span>要好好了解清楚<br/>科研是需要专注的，不要在我变绿的时候找我谈心</div><div class='talkbox'>Good luck!<div>");
			}else if(ys == max){
				$("#result").text("你的创新意识较强，具有一定的艺术潜能，平时生活中你可能乐于创造出新颖且与众不同的工作成果；你常渴望表现出自己的个性，较为关心自身价值的实现，但做事可能有些理想化，过于追求完美。相对而言，你更愿意从事艺术色彩丰富的工作。");
				$("#avenger").html("<img src='image/png/loki.png' />");
				$("#mainname").text("Loki Laufeyson · 艺术型人格");
				$("#personalityname").html("Loki Laufeyson<br/>艺术型人格");
				$("#mainname").attr("style","background-color: #182F08;border: 1px solid #F1BC58;color: #E8B760;");
				$("#avengername").html("<img src='image/name/loki.png' />");
				$("#herointro").text("冰巨人之子，奥丁的养子，也是漫威电影宇宙里《复仇者联盟》中带领军队入侵地球的反派。魅力非凡，阴狠狡黠，情感上却支离破碎，喜欢说谎和骗人。意图将自己的兄长托尔永远留在地球，并尝试在奥丁心中达到甚至超越托尔德地位，对奥丁有浓厚的依恋之情。从他的中二的装扮还有随手携带的心灵权杖上能看出，他是个行为艺术家，因为失宠，需要表现自我的个性，做事有点理想化，过于追求完美，喜欢与众不同，这可能跟他的身世有关，但不得不说，他是复联反派中非常文艺的一个角色。艺术型当之无愧。");
				//$("#shiledbg").attr("style","background-image:url(image/png/loki.png);background-size: cover;");
				//alert("艺术型 =" + ys);
				$("#youravenger").attr("style","border: 1px solid #E8B760; box-shadow: 0px 0px 20px #E8B760 inset; background-image: url(image/weapons/loki.png);");
				$("#youravenger p").attr("style","color:#F1BC58;");
				$("#realman").addClass("loki");
				$("#talkman").text("Loki Laufeyson");
				$("#talk").html("<div class='talkbox'>嘿，麻瓜，今后我就就是你的导师了</div><div class='talkbox'>先去跪着去分部报个到吧</div><div class='talkbox'>海姆达尔会给你分派你的第一次<span class='label label-danger'>外勤任务</span></div><div class='talkbox'>关于神盾局深职分部的<span class='label label-danger'>机密档案</span>要好好偷出来</div><div class='talkbox'>然后，献给我</div>");

			}

			$(".result").typed({
				strings: [$("#result").text()],
				typeSpeed: 50
			});

			//创建雷达图

			if(cg <= 1){
				cg = 1;
			}else if(cg >= 10){
				cg = 10;
			};

			if(qy <= 1){
				qy = 1;
			}else if(qy >= 10){
				qy = 10;
			};

			if(sh <= 1){
				sh = 1;
			}else if(sh >= 10){
				sh = 10;
				
			};

			if(sj <= 1){
				sj = 1;
			}else if(sj >= 10){
				sj = 10;
			};

			if(yj <= 1){
				yj = 1;
			}else if(yj >= 10){
				yj = 10;
			};

			if(ys <= 1){
				ys = 1;
			}else if(ys >= 10){
				ys = 10;
			};


			//alert(cg);
			//创建图表
			var t = setTimeout(function(){
				var array = new Array(cg,qy,sh,sj,yj,ys);

				var ctx = document.getElementById("myChart").getContext("2d");
				var data = {
					labels : ["常规型","企业型","社会型","实际型","研究型","艺术型"],
					datasets : [
						{
							fillColor : "rgba(255,102,153,0.5)",
							//strokeColor : "rgba(255,153,153,1)",
							strokeColor : "rgba(255,153,153,1)",
							pointColor : "rgba(255,102,102,1)",
							pointStrokeColor : "#fff",
							data : [array[0],array[1],array[2],array[3],array[4],array[5]]
						}
					]
				}
				/// 动画效果
				var options = {
							
					//布尔值 - If we show the scale above the chart data            
					scaleOverlay : false,
					
					//Boolean - If we want to override with a hard coded scale
					scaleOverride : false,
					
					//** Required if scaleOverride is true **
					//Number - The number of steps in a hard coded scale
					scaleSteps : null,
					//Number - The value jump in the hard coded scale
					scaleStepWidth : null,
					//Number - The centre starting value
					scaleStartValue : null,
					
					//Boolean - Whether to show lines for each scale point
					scaleShowLine : true,

					//String - Colour of the scale line    
					scaleLineColor : "rgba(255,255,255,.5)",
					
					//Number - Pixel width of the scale line    
					scaleLineWidth : 1,

					//Boolean - Whether to show labels on the scale    
					scaleShowLabels : false,
					
					//Interpolated JS string - can access value
					scaleLabel : "<%=value%>",
					
					//String - Scale label font declaration for the scale label
					scaleFontFamily : "'Arial'",
					
					//Number - Scale label font size in pixels    
					scaleFontSize : 12,
					
					//String - Scale label font weight style    
					scaleFontStyle : "normal",
					
					//String - Scale label font colour    
					scaleFontColor : "#666",
					
					//Boolean - Show a backdrop to the scale label
					scaleShowLabelBackdrop : true,
					
					//String - The colour of the label backdrop    
					scaleBackdropColor : "rgba(255,255,255,0.75)",
					
					//Number - The backdrop padding above & below the label in pixels
					scaleBackdropPaddingY : 2,
					
					//Number - The backdrop padding to the side of the label in pixels    
					scaleBackdropPaddingX : 2,
					
					//Boolean - Whether we show the angle lines out of the radar
					angleShowLineOut : true,
					
					//String - Colour of the angle line
					angleLineColor : "rgba(255,255,255,.1)",
					
					//Number - Pixel width of the angle line
					angleLineWidth : 1,            
					
					//String - Point label font declaration
					pointLabelFontFamily : "'Arial'",
					
					//String - Point label font weight
					pointLabelFontStyle : "normal",
					
					//Number - Point label font size in pixels    
					pointLabelFontSize : 12,
					
					//String - Point label font colour    
					pointLabelFontColor : "#ccc",
					
					//Boolean - Whether to show a dot for each point
					pointDot : true,
					
					//Number - Radius of each point dot in pixels
					pointDotRadius : 3,
					
					//Number - Pixel width of point dot stroke
					pointDotStrokeWidth : 1,
					
					//Boolean - Whether to show a stroke for datasets
					datasetStroke : true,
					
					//Number - Pixel width of dataset stroke
					datasetStrokeWidth : 2,
					
					//Boolean - Whether to fill the dataset with a colour
					datasetFill : true,
					
					//Boolean - Whether to animate the chart
					animation : true,

					//Number - Number of animation steps
					animationSteps : 60,
					
					//String - Animation easing effect
					animationEasing : "easeOutQuart",

					//Function - Fires when the animation is complete
					onAnimationComplete : null
					
				}
				/// 创建对象，生成图表
				new Chart(ctx).Radar(data,options);
			}, 50);
		}else{
			alert("还有题目没填！");
		}
		//$("#realman").height($("#abouthero").height()-$("#herointro").height());
	})


	$("#guanzhu").click(function(){
		$("#guanzhubox").removeAttr("style");
		$("#guanzhubox").height($(window).height());
	})
	$("#exit").click(function(){
		$("#guanzhubox").attr("style","display:none;");
	})

	$("#fenxiang").click(function(){
		$("#fenxiangbox").removeAttr("style");
		$("#fenxiangbox").height($(window).height());
	})

	$("#fenxiangbox").click(function(){
		$("#fenxiangbox").attr("style","display:none;");
	})


	//swiper切换
	var mySwiper = new Swiper('.swiper-container', {
		direction : 'vertical',

		//可选选项，自动滑动
		//autoplay: 5000,

	    // 如果需要分页器
	    pagination: '.swiper-pagination',

	    paginationClickable :true,
	    //如果需要前进后退
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});


	$("#avengerintro").click(function(){
		$("#herointrobox").removeClass("hiddenradarbox");
		$("#herointrobox").height($(window).height());
	});
	$("#herointrobox").click(function(){
		$("#herointrobox").addClass("hiddenradarbox");
	});

	$("#avengerredar").click(function(){
		$("#radarbox").removeClass("hiddenradarbox");
		$("#radarbox").height($(window).height());		
	});
	$("#radarbox").click(function(){
		//$("#radarbox").attr("style","width:1px;height:1px;");
		$("#radarbox").addClass("hiddenradarbox");
	});

	$(window).resize(function() {
		$("#slide1").height($(window).height());
		$("#slide2").height($(window).height());
		$("#slide3").height($(window).height());
		$("#slide4").height($(window).height());
	});


	$("#report").click(function(){
		$("#swipercontainer").addClass("opacity");
		$("#testform").removeAttr("style");
		//alert($("#testform").height());
		//alert($("#getform").height());
		$("#testpic").height($("#testform").height()-$("#getform").height()-40);
		//alert($("#testpic").height());
	});
	$("#closeform").click(function(){
		$("#testform").attr("style","display:none;");
		$("#swipercontainer").removeClass("opacity");
	});


	$("#taskbtn").click(function(){
		$("#qrcodebox").removeAttr("style");
	});
	$("#qrcodehiddenbtn").click(function(){
		$("#qrcodebox").attr("style","display:none;");
	})



})
