<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');

$design = get_field('block_design');
$variant = get_field('block_variant');
$textPosition = get_field('block_text_position');

$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$testimonial = get_field('block_quote');

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant .' is-align--'.  $textPosition);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';

echo '<div class="cont is-flex--tablet pos-rel z-5 '. $design['width'] .' '.  $textPosition .'">'; ?>
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
    if(!empty($testimonial['quote'])):
        $cssShape = $hasBgShape ? 'style="color: #FFF; background: url('. get_template_directory_uri() .'/assets/img/text-quote-bg.svg) no-repeat; background-size: cover; background-position: bottom right;"' : '';
        echo '<div class="section__abs z-3" '. $cssShape . '>';
        echo '<div class="text-quote__inner abs-centered z-2 px-lg-2 mb-lg-4">';
        echo '<blockquote class="quote__lg">';
        echo acfOutput($testimonial['quote'], 'p', 'text-quote__quote') .
        acfOutput($testimonial['author'], 'p', 'text-quote__author mb-0') . 
        acfOutput($testimonial['source'], 'p', 'text-quote__source');
        echo '</blockquote>';
        
        echo '</div>';
        if(!empty($testimonial['image'])):
            echo acfImgOutput($testimonial['image'], 'text-quote__image', 'text-quote__img z-1');
        endif;
        
        echo '</div>';
    endif;
    if(!empty($bgImage)): 
        echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
    endif;
echo '</section>'; ?>

<?php endif; ?>