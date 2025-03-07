<?php $currentPage++ ?>
<div class="page-nav">
	<div class="arrowright" onclick="NextItem();">
		<img src="<?php echo($navArrowR); ?>">
		<?PHP echo(isset($pageObj[$currentPage+1]['menu'])) ? $pageObj[$currentPage+1]['menu'] : ''; ?>
	</div>
	<div class="home" onclick="Menu();">
		<img src="<?php echo($navHome); ?>">
		<?php echo($homeText); ?>
	</div>
	<div class="arrowleft" onclick="PreviousItem()">
		<img src="<?php echo($navArrowL); ?>">
		<?PHP echo(isset($pageObj[$currentPage-1]['menu'])) ? $pageObj[$currentPage-1]['menu'] : ''; ?>
	</div>
</div>
