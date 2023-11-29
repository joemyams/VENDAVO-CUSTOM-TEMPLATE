<?php 
$content = get_field('block_content');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="is-full cont text-center is-fluid">'; ?>
<div class="resource-library__header <?php echo $design['top'] . ' ' . $design['text']; ?>">
<svg class="library-background" viewBox="0 0 2372 823" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2371.58 262.667V0.263611H811.104H0.680664L492.14 689.528C566.201 797.808 717.499 850.211 835.274 808.376L2371.58 262.667Z" fill="#042F54"/>
</svg>
<?php echo acfOutput($content['headline'], 'h1', 'resource-library__headline'); ?>
<?php 
if ($content['filter_shortcode']) {
  echo do_shortcode($content['filter_shortcode']);
}; ?>
</div>
</div>
<div class="cont <?php echo $design['width']; ?>">
<?php if ($content['grid_shortcode']) {
  echo do_shortcode($content['grid_shortcode']);
}; ?>
</div>
</section>

<?php endif; ?>