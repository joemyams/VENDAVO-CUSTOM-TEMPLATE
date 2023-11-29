<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');

$variant = get_field('block_variant');

$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-left'; 
endif;

$hasBgImage = get_field('block_has_bg_image');
$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$bgImgCSS = $bgImage ? ' has__bg-img' : '';
$bgShapeCSS = $hasBgShape ? ' has__bg-shape': '';

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant. ' '. $bgImgCSS . ' '. $bgShapeCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat; '. $bgPosCSS .';"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left-way-step1.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
?>
<?php if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])): ?>
<div class="card__text-statV2">
    <?php if(!empty($text['image'])): ?>
        <?php echo acfImgOutput($text['image'], '', 'card-step__image'); ?>
    <?php endif; ?>
    <div class="inner pos-rel z-5">
        <?php echo acfReturnTextBlock( $text, 'card'); ?>
        <?php echo acfImgOutput($text['logo'], '', 'card-grid__logo mt-4'); ?>
    </div>
</div>
<?php endif; ?>
<?php if($text['bottom'] && !empty($text['bottom'])):
    echo '<div class="content__bottom-container pos-rel z-5 is-top--xl is-bottom--md text-center">'. acfOutput($text['bottom'], 'div', 'content__bottom__inner') .'</div>';
endif; ?>
<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>