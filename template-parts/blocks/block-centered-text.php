<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$rawHTML = get_field('block_raw_html');


$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-center'; 
endif;

$hasBgImage = get_field('block_has_bg_image');
$bgImage = get_field('block_bg_image');

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockImage = get_field('block_image');
$blockImagePos = get_field('block_image_pos');

$blockInfo = acfGetBlockInfo($block, $design, $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
if(strpos($block['className'], 'has__bg-shape-bottom') !== false): ?>
    <div class="svg__shape svg__shape-bottom z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/vendavo-process-bg.svg) no-repeat;"></div></div>
<?php endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if($blockImage && !empty($blockImage) && $blockImagePos !== 'bottom'):
    echo '<div class="centered-image__container">'. acfImgOutput($blockImage, '', 'centered-image__inner'). '</div>';
endif;
echo '<div class="centered-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>';
if($blockImage && !empty($blockImage) && $blockImagePos === 'bottom'):
    echo '<div class="centered-image__container">'. acfImgOutput($blockImage, '', 'centered-image__inner'). '</div>';
endif;
if($rawHTML && !empty($rawHTML)):
    echo '<div class="raw-html__container pos-rel z-5 is-top--md">'.acfOutput($rawHTML, 'div', 'raw-html__inner') .'</div>';
endif;
if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>