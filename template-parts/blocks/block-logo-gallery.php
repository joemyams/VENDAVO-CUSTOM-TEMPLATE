<?php 
$design = get_field('block_design');
$headline = get_field('gallery_headline');
$subheadline = get_field('gallery_subheadline');
$gallery = get_field('block_gallery');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont rte '. $design['width'] .'">';
echo acfOutput($headline, 'p', 'kicker text-center');
echo acfOutput($subheadline, 'h2', 'text-center');
if ($gallery['gallery']) {
    echo '<div class="'. $gallery['style']['behavior'] .'" data-width="'. $gallery['style']['image_width'] .'" >';
    foreach ($gallery['gallery'] as $image)  { 
        echo acfImgOutput($image, '', 'logo-gallery__single');
    };
    echo '</div>';
};
echo '</div></section>'; ?>

<?php endif; ?>