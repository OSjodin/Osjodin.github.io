<!DOCTYPE html>
<html lang="en"><!-- Author: Hans Harry Oskar Sjödin; Ver.1.0.-->
	<head>
      <title>Hans Sjoedin</title>
		<!--<link rel="stylesheet" type="text/css" href="css/stylesheet-responsive.css">-->
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
		 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
		<link rel="stylesheet" href="css/stylesheet-responsive.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">
      	<meta charset="utf-8">
		<?PHP #include_once("$cssPath" . "$cssFile"); ?>
		<script src="js\mainjs.js">
			document.addEventListener('touchstart', e => {
				touchstartX = e.changedTouches[0].screenX
			})

			document.addEventListener('touchend', e => {
				touchendX = e.changedTouches[0].screenX
				checkDirection()
			})
		</script> 
	</head>
	
	
