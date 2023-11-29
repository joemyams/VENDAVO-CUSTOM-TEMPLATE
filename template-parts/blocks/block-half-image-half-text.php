<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$layout = get_field('block_layout');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
    <div class="cont is-flex--tablet <?php echo $layout['layout']; ?>">
           <div class="half half--image">
            <div class="half-image__aspect">
                <?php echo acfImgOutput($content['image'], 'image-fit', ''); ?>
            </div>
        </div>
        <div class="half half--text">
            <div class="half-text__inner rte">
            <?php echo acfOutput($content['kicker'], 'p', 'kicker'); ?>
            <?php echo acfOutput($content['headline'], 'h3', 'half-image-text__headline'); ?>
            <?php echo acfOutput($content['subheadline'], 'h5', 'half-image-text__subheadline'); ?>
            <?php echo acfOutput($content['content'], 'div', 'half-image-text__content'); ?>
            <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                set_query_var('ctas', $ctas);
                get_template_part('/template-parts/components/cta-container');
            } ?>     
            </div>
        </div>
    </div>
</section>

<?php endif; ?>