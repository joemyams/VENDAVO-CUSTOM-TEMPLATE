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

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant .' is-align--'.  $textPosition . $blockBgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if(!empty($bgImage2)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 block-bg2__imgV2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage2['url'] ) .') no-repeat;"></div>';
endif;
if($hasBgShape): ?>
    <?php if(strpos($block['className'], 'has__bg-shape-gray') !== false): ?>
        <div class="svg__shape svg__shape-top z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/bg-shape-top-testimonial-gray.svg) no-repeat;"></div></div>
    <?php else: ?>
        <div class="svg__shape svg__shape-top z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/bg-shape-top-testimonial.svg) no-repeat;"></div></div>
    <?php endif;
endif; 
echo '<div class="radial__bg z-3"></div>';
echo '<div class="cont is-flex--desktop pos-rel z-5 '. $design['width'] .' '.  $textPosition .'">'; ?>
<div class="half half--text">
    <div class="featured-case-study__text">
        <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
        <?php echo acfImgOutput($text['logo'], '', 'cs-feature__logo'); ?>

        <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); }; ?>
        </div>
    </div>
    <?php echo '</div>';
    if(!empty($bgImage)): 
        echo '<div class="section__abs z-2 mt-4 mt-lg-0 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
    endif;
    $blockQuote = get_field('block_quote');
    if($blockQuote && !empty($blockQuote)):
        echo '<div class="quote__abs z-4">'.
        acfOutput($blockQuote['author'], 'p', 'text-quote__author mb-0') . 
        acfOutput($blockQuote['source'], 'p', 'text-quote__source');
        echo '</div>';
    endif; 
echo '</section>'; ?>

<?php endif; ?>