<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['button'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead;
else:
    $blockAlignClass = 'text-center'; 
endif;
$blockImage = get_field('block_image');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . ' '. $blockAlignClass. '">';
echo acfImgOutput($blockImage, '', 'block__img');
if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>