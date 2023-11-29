<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, $content['headline_position']); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
    <div class="cont text-center">
        <?php echo acfOutput($content['headline'], 'p', 'kicker'); ?>
        <?php if ($content['gallery']): ?>
            <div class="logo-banner__grid slick-slider">
                <?php foreach ($content['gallery'] as $image) {
                    echo acfImgOutput($image, 'logo-banner__logo', 'logo-banner__single');
                }; ?>
            </div>
        <?php endif; ?>
    </div>
</section>

<?php endif; ?>