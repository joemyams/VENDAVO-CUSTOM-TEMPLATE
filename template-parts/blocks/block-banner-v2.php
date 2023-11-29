<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
$blockAlign = get_field('block_alignment');

$image = get_field('block_image');

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
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left-bannerv2.svg) no-repeat;"></div></div>
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right-bannerv2.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if($image): ?>
    <div class="inner pos-rel z-5 w-100">
        <div class="row align-items-center justify-content-lg-between">
            <div class="item col-lg-4">
                <?php echo acfImgOutput($image, 'banner-v2__image pos-rel z-2', ''); ?>
            </div>
            <div class="item col-lg-7 mt-4 mt-lg-0 pl-lg-4">
                <?php 
                if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])):
                    echo '<div class="centered-text__inner rte ">'. acfReturnTextBlock( $text, 'half-text') . '</div>';
            endif;
            ?>
            <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                set_query_var('ctas', $ctas);
                get_template_part('/template-parts/components/cta-container'); }; ?>
            </div>
        </div>
    </div>
<?php endif;
echo '</div></section>'; ?>

<?php endif; ?>