<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$visuals = get_field('block_visuals');
$design = get_field('block_design');
$variant = get_field('block_variant');
$textPosition = get_field('block_text_position');


$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-flex--tablet '. $design['width'] .' '.  $textPosition .'">'; ?>
<div class="half half--image">
    <?php if ($visuals['video_url']): ?>
        <?php $video = $visuals['video_url'];
        preg_match('/title="(.+?)"/', $video, $matches);
        $src = $matches[1];
        $video = str_replace($src, '', $video);
        echo '<div class="main-video__aspect embed-responsive embed-responsive-16by9">'. $video . '</div>'; ?>
    <?php else: ?>
        <?php echo acfImgOutput($visuals['image'], '', 'cs-feature__image text-center'); ?>
    <?php endif; ?>
</div>
<div class="half half--text">
    <div class="featured-case-study__text">
        <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
        <?php echo acfImgOutput($text['logo'], '', 'cs-feature__logo'); ?>

        <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); }; ?>
        </div>

        
    </div>
    <?php echo '</div></section>'; ?>

<?php endif; ?>