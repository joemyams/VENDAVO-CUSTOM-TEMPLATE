<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont">
        <div class="resource-banner__inner">
            <div class="resource-banner__stack rel">
                <?php echo acfImgOutput($content['image'], 'image-fit', ''); ?>

                <div class="stack__single rel">
                    <?php echo acfImgOutput($content['image'], 'image-fit', ''); ?>
                </div>
            </div>
            <div class="resource-banner__text">
                <div>
                <?php echo acfOutput($content['kicker'], 'p', 'resource-banner__kicker kicker'); ?>
                <?php echo acfOutput($content['content'], 'div', 'resource-banner__content'); ?>
                </div>
                
                <a href="" class="btn btn--primary is-blue"><?php _e( 'Download PDF', 'vendavo' ); ?></a>
            </div>
        </div>
    
    </div>
</section>

<?php endif; ?>