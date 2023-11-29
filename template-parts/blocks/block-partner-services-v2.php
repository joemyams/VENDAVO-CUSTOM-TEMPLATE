<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');

$design = get_field('block_design');
$variant = get_field('block_variant');

$hasBgShape = get_field('block_has_bg_shape');

$blockInfo = acfGetBlockInfo($block, $design, ' is-align--left');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
echo '<div class="cont is-flex--desktop pos-rel z-5 '. $design['width'] .'">'; ?>
<div class="half half--text">
    <div class="partner-service__text">
        <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
        <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); }; ?>
        </div>
    </div>
    <?php echo '</div>';
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. get_template_directory_uri() .'/assets/img/partner-services-bg.svg) no-repeat;"></div>';
    echo '<div class="block-bg__img-right z-3" style="background: url('. get_template_directory_uri() .'/assets/img/partner-services-img.svg) no-repeat;"></div>';
echo '</section>'; ?>

<?php endif; ?>