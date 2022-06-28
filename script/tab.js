$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });

  $(function(){
	$('.tabcontent2 > div').hide();
	$('.tab02_ul a').click(function () {
		$('.tabcontent2 > div').hide().filter(this.hash).fadeIn();
		$('.tab02_ul a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });
