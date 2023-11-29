<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');

$design = get_field('block_design');
$variant = get_field('block_variant');
$textPosition = get_field('block_text_position');

$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$cards = get_field('block_quote');

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant .' is-align--'.  $textPosition);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
echo '<div class="cont is-flex--desktop pos-rel z-4 '. $design['width'] .' '.  $textPosition .'">'; ?>
<div class="half half--text">
    <div class="featured-case-study__text">
        <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
        <?php echo acfImgOutput($text['logo'], '', 'cs-feature__image'); ?>

        <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); }; ?>
        </div>
    </div>
    <?php echo '</div>';
    if($cards):
        $cssShape = $hasBgShape ? 'style="color: #FFF; background: url('. get_template_directory_uri() .'/assets/img/case-study-shape.svg) no-repeat; background-size: cover; background-position: bottom left;"' : '';
        echo '<div class="section__abs z-5" '. $cssShape . '>'; ?>
        <div class="text-quote__inner abs-centered z-5 px-lg-2 mb-lg-4">
            <div class="js-caseStudyQuote__slider js-caseStudy__slider js-card__slider" data-slick="slick-<?php echo $block['id']; ?>">
                <?php foreach ($cards as $card): ?>
                    <div class="navigator__cell pos-rel item w-100">
                        <blockquote class="quote__lg">
                            <?php echo acfOutput($card['quote'], 'p', 'text-quote__quote') .
                            acfOutput($card['author'], 'p', 'text-quote__author mb-0') . 
                            acfOutput($card['source'], 'p', 'text-quote__source');
                            if(!empty($card['image'])):
                                echo acfImgOutput($card['image'], 'cs-quote__image', 'cs-quote__img z-1');
                            endif; ?>
                        </blockquote>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endif;
    if(!empty($bgImage)): 
        echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
    endif;
echo '</section>'; ?>

<?php endif; ?>