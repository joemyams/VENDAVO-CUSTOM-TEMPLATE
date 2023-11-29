<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');

$design = get_field('block_design');
//$variant = get_field('block_variant');
$textPosition = get_field('block_text_position');

$hasBgImage = get_field('block_has_bg_image');
$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$stat = get_field('block_stat');

$isMultiple = get_field('has_multiple');
$stats = get_field('block_stats');

if($isMultiple):
    $variant = 'multiple';
else:
    $variant = 'single';
endif;

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant .' is-align--'.  $textPosition . ' ' . $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat; '. $bgPosCSS .';"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right-textstatv2.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont is-flex--desktop pos-rel z-5 '. $design['width'] .' '.  $textPosition .'">'; ?>
<div class="half half--text <?php echo $isMultiple ? 'pl-lg-5' : 'pr-lg-5'; ?> mb-4 mb-lg-0">
    <div class="featured-case-study__text">
        <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
        <?php echo acfImgOutput($text['logo'], '', 'cs-feature__logo'); ?>

        <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); }; ?>
        </div>
    </div>
    <?php if(!$isMultiple) : ?>
        <div class="half is-stat z-2 px-2 py-3">
            <div class="card__text-statV2 text-center">
                <?php echo acfOutput($stat['number'], 'p', 'card-title stat-num is-lg'); ?>
                <?php echo acfOutput($stat['headline'], 'h3', 'card-text stat-label'); ?>
                <?php echo acfOutput($stat['subheadline'], 'div', 'stat-sublabel'); ?>
                <?php echo acfImgOutput($stat['logo'], '', 'card-grid__logo pos-rel z-2 mt-4'); ?>
            </div>
        </div>
    <?php else: ?>
        <div class="half is-stat z-2 px-2 order-lg-first">
            <?php foreach($stats as $stat): ?>
                <div class="card__text-statV2 text-center">
                    <?php echo acfOutput($stat['number'], 'p', 'card-title stat-num is-lg'); ?>
                    <?php echo acfOutput($stat['headline'], 'h3', 'card-text stat-label'); ?>
                    <?php echo acfOutput($stat['subheadline'], 'div', 'stat-sublabel'); ?>
                    <?php echo acfImgOutput($stat['logo'], '', 'card-grid__logo pos-rel z-2 mt-4'); ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif;
echo '</div></section>'; ?>

<?php endif; ?>