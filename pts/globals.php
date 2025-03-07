<?php
	$imgPath = "img/";	
	$contentPath = "txt/";
	$cssPath = "css/";
	$cssFile = "stylesheet-responsive.php";
	$mobileLandingPage = "mobileLandingPage.php";
	
	$pageObj = array( 1 =>
		array(	"img" => $imgPath . "aboutme.png",
				"menu" => "About me",
				"content" => $contentPath . "aboutme.html",
				"title" =>"Hello there"),
				
		array(	"img" => $imgPath . "behindthescenes4.png",
				"menu" => "Projects",
				"content" => $contentPath . "xray.html",
				"title" =>"My Projects"),
				
		array(	"img" => $imgPath . "blog.png",
				"menu" => "Blog",
				"content" => $contentPath . "blogpage.php",
				"title" =>"Our latest, your first!"),
				
		array(	"img" => $imgPath . "tools.png",
				"menu" => "My skills",
				"content" => $contentPath . "myskills.html",
				"title" =>"So what can I do?"),
				
		array(	"img" => $imgPath . "Contact.png",
				"menu" => "Contact",
				"content" => $contentPath . "contact.php",
				"title" =>"Contact Information")
	);
	
	
	$navArrowR = $imgPath . "Arrow_50x50.png";
	$navArrowL = $imgPath . "Arrow2_50x50.png";
	$navHome = $imgPath . "home_105x100.png";
	$mobileNavHome = $imgPath . "menu_128x100.png";
	$pageNav = "page-nav.php";
	$mobileNav = "page-nav-mobile.php";
	$currentPage = 0;
	
	$homeText = "Home";
	
	function rndimg(){
		$rnd = rand(1,5);
		$rnd = $pageObj[$rnd]["img"];
		$rndImg = $imgPath . $rnd;
		return $rndImg;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
?>
