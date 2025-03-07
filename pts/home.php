<body><!--oncontextmenu="return false;"-->
	<div class="body-padding-top"></div>
	<div class="body-padding-left bodyfloat"></div>
	<div id="body-main" class="bodyfloat">
		<div id="PC-menu-container"><?PHP 
			foreach($pageObj as $i=>$val){
				echo("<div class='menu' id='menu-ID-$i' onclick='SlideItem($i);'>
						<img class='menu-img' id='menu-img-ID-$i' src='" . $val['img'] . "' alt='menu image number $i'>
					</div>");
			}?>		
		</div>
		<?PHP include($mobileLandingPage); ?>
		<nav>
		<div id="menu-bar">
			<ul><?PHP
				foreach($pageObj as $i=>$val){
					echo("<li class='menu-text' id='menu-text-$i' onclick='SlideMobile($i);'>
						<b>" . $val['menu'] . "</b>
					</li>");
				}?>
			</ul>
		</div>
		</nav>
		<div class="page-content-container"><?PHP
			foreach($pageObj as $i=>$val){
				$i === array_key_first($pageObj) ? $uniqueCase = "page-first" : $uniqueCase = "";
				if($i === array_key_last($pageObj)) $uniqueCase = "page-last";
				echo("<div class='page-head $uniqueCase' id='page-head-ID-$i'>");
					include($pageNav);
					echo("<div class='page-title'>
						<div class='vertical-center'><h1>" . $val['title'] . "</h1></div>
					</div>
				</div>");
				echo("<div class='page-slider' id='page-ID-$i'>");
					if($uniqueCase == "page-first"){
						echo("<main>");
					}
					echo("<article class='page-content' id='page-content-ID-$i'>");
						include($val['content']);
				echo("<div class='buffer'></div></article></div>");
					if($uniqueCase == "page-first"){
						echo("</main>");
					}
			}?>
		</div>
		<?php include($mobileNav); ?>
	</div>
	<div class="body-padding-right bodyfloat"></div>
	<div class="body-padding-bottom"></div>
</body>
