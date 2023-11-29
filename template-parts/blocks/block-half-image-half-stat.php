<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$stats = get_field('block_stats');
$design = get_field('block_design');
$layout = get_field('block_layout');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont is-flex--tablet <?php echo $layout['layout']; if (count($stats) > 1) echo ' multiple-stats'; ?><?php if ($content['image']) echo ' has-image'; ?>">
           <div class="half half--stat">
            <div class="half-stat__inner">
                <?php echo acfImgOutput($content['image'], 'image-fit', 'half-stat__image'); ?>
                        
               <div class="stat-container">

                <?php foreach ($stats as $stat): ?>
                <article class="stat">
                    <div class="stat__inner">
                    <?php echo acfOutput($stat['stat'], 'h2', 'stat__num'); ?>
                    <div>
                    <?php echo acfOutput($stat['headline'], 'h4', 'stat__headline'); ?>
                    <?php echo acfOutput($stat['subheadline'], 'h5', 'stat__subheadline'); ?>
                    </div>
                    </div>
                </article>
                <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php if ($content['headline'] || $content['subheadline'] || $content['contnet']): ?>

        <div class="half half--text">
            <div class="half-text__inner rte">
            <?php echo acfOutput($content['kicker'], 'p', 'kicker'); ?>
            <?php echo acfOutput($content['headline'], 'h3', 'half-image-text__headline'); ?>
            <?php echo acfOutput($content['subheadline'], 'h4', 'half-image-text__subheadline'); ?>
            <?php echo acfOutput($content['content'], 'div', 'half-image-text__content'); ?>
            <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none'): ?>
                <div class="cta-container">
                    <?php 
                    set_query_var('button', $ctas['primary']);
                    get_template_part('/template-parts/components/dynamic-cta');
                    set_query_var('button', $ctas['secondary']);
                    get_template_part('/template-parts/components/dynamic-cta'); ?>
                </div>
            <?php endif; ?>
            </div>
        </div>
        <?php endif; ?>
    </div>
</section>

<?php endif; ?>