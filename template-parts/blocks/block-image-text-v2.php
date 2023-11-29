<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');

$design = get_field('block_design');
$variant = get_field('block_variant');
$textPosition = get_field('block_text_position');

$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$bgImage2 = get_field('block_bg_image_secondary');
if(!empty($bgImage2)):
    $blockBgCSS = ' has__bg-img2';
endif;

$blockImage = get_field('block_image');
if($blockImage && !empty($blockImage)):
    $blockImgCSS = ' has__block-image';
endif; 

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant .' is-align--'.  $textPosition . $blockBgCSS . $blockImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if(!empty($bgImage2)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 block-bg2__imgV2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage2['url'] ) .') no-repeat;"></div>';
endif;
echo '<div class="radial__bg z-3"></div>';
if(strpos($block['className'], 'has__bg-shape-both') !== false): ?>
    <div class="svg__shape svg__shape-top z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/vendavo-training-bg-top.svg) no-repeat;"></div></div>
    <div class="svg__shape svg__shape-bottom z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/vendavo-training-bg-bottom.svg) no-repeat;"></div></div>
<?php endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont is-flex--desktop pos-rel z-5 '. $design['width'] .' '.  $textPosition .'">'; ?>

<div class="half half--text <?php echo ($blockImage && !empty($blockImage)) ? 'order-md-1' : ''; ?>">
    <div class="featured-case-study__text">
        <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
        <?php echo acfImgOutput($text['logo'], '', 'cs-feature__logo mt-4'); ?>

        <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); }; ?>
        </div>
    </div>
<?php if($blockImage && !empty($blockImage)):
    echo '<div class="half half--image half-image__container align-self-center mt-4 mt-lg-0">'. acfImgOutput($blockImage, '', 'half-image__inner'). '</div>';
endif; ?> 
    <?php echo '</div>';
    if(!empty($bgImage)): 
        echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
    endif;
echo '</section>'; ?>

<?php endif; ?>