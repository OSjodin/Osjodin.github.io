<?php
	/*
	foreach (explode ("/", $_SERVER['REQUEST_URI']) as $part){
		echo $part;
		echo "<br>";
	}*/
	require_once("globals.php");	//global variables, mostly containing paths
	
	require_once("head.php"); //starts <HTML> && contains <HEAD>
	
	require_once("home.php"); //Desktop Version of site.
	
	require_once("footer.php"); //ends <HTML>
?> 