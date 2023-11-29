<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$images = get_field('block_images');
$variant = get_field('block_variant');
$design = get_field('block_design');
$stat = get_field('block_stats');
if ($variant == 'is-stat' || $variant == 'is-duo') {
    $styles = implode(" ", $stat['design']); 
};
$blockInfo = acfGetBlockInfo($block, $design, $styles); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
    <div class="cont is-flex--tablet <?php echo $design['content_width']; ?>">
    <div class="half <?php echo $variant; ?>">
        <?php if ($variant == 'is-stat') {
            set_query_var( 'stat', $stat ); 
            get_template_part('/template-parts/components/variants/stat-variant');
        } elseif ( $variant == 'is-image' ) {
            set_query_var( 'images', $images ); 
            get_template_part('/template-parts/components/variants/image-variant');
        } elseif ( $variant == 'is-duo' ) {
            set_query_var( 'images', $images ); 
            set_query_var( 'stats', $stat ); 
            get_template_part('/template-parts/components/variants/image-stat-variant');
        }; ?>
    </div>
    <div class="half is-text">
        <div class="half-text__inner rte">
            
        <?php 
          if (strlen($content['headline']) > 30) {
            $headlineClass = 'half-content__headline h4';
        } else {
            $headlineClass = "half-content__headline test";
        };
        
        echo acfOutput($content['kicker'], 'p', 'kicker') . 
                    acfOutput($content['headline'], 'h3', $headlineClass) .
                    acfOutput($content['subheadline'], 'div', 'half-content__subheadline') .
                    acfOutput($content['content'], 'div', 'half-content__content');
        if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none'): ?>
            <div class="cta-container">
                <?php set_query_var('button', $ctas['primary']);
                        get_template_part('/template-parts/components/dynamic-cta');
                        set_query_var('button', $ctas['secondary']);
                        get_template_part('/template-parts/components/dynamic-cta'); ?>
            </div>
        <?php endif; ?>
        </div>
    </div>
    </div>
</section>

<?php endif; ?>