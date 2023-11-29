<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_cards');


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
$hasBgShape = get_field('block_has_bg_shape');

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockInfo = acfGetBlockInfo($block, $design, $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-bottom z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/bg-shape-bottom.svg) no-repeat;"></div></div>
<?php endif; 
if ($cards):
    echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <?php $i = 0; $uni = uniqid(); ?>
    </div>
    <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); };
        echo '</div>'; ?>
        <div class="js-career__slider js-review__slider js-card__sliderV2 js-card__slider pos-rel z-5" data-slick="slick-<?php echo $block['id']; ?>">
            <?php foreach ($cards as $card): ?>
                <div class="navigator__cell pos-rel item w-100">
                    <div class="card card-review-v2 front quote-card__bottom align-items-stretch">
                        <div class="card-header pos-rel">
                            <div class="quote-svg__bg absolute-fill z-2" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/review-bg.png) no-repeat;"></div>
                            <?php if($card['headline'] && !empty($card['headline'])): echo acfOutput($card['headline'], 'div', 'acc-ctn__headline pos-rel text-center is-text--white font-weight-bold z-3'); endif; ?>
                        </div>
                        <div class="card-body">
                            <?php if(!empty($card['image'])): ?>
                                <div class="review-badge__bg z-2" style="background: url(<?php echo esc_url($card['image']['url']) ?>) no-repeat center; background-size: contain;"></div>
                            <?php endif; ?>
                        </div>
                        <?php if($card['content'] && !empty($card['content'])): ?>
                            <div class="card-footer pos-rel text-center">
                                <?php echo acfOutput($card['content'], 'div', 'acc-ctn__text z-3'); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    <?php endif;
    echo '</section>'; ?>

<?php endif; ?>