<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$items = get_field('block_featured');
$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-center'; 
endif;

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>
<div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
<div class="inner pos-rel z-5">
    <?php echo '<div class="centered-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
</div>
</div>
<?php if (!empty($items)): ?>
    <div class="featured-items is-top--md nooverf">
        <?php 
        $query_ids = get_field('block_featured', false, false);
        $totalItems = count( $query_ids );
        $args = array( 'post_type' => array( 'quotes' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
        $loop = new WP_Query( $args );
        if ( $loop->have_posts() ) : ?>
            <div class="js-quote__slider js-card__slider" data-slick="slick-<?php echo $block['id']; ?>">
                <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                    <?php 
                    $details = get_field('quote_details', get_the_ID());
                    set_query_var('details', $details);
                    get_template_part('/template-parts/cards/card-quote-v2'); ?>
                <?php endwhile; ?>
            </div>
        <?php endif;
        wp_reset_postdata(); ?>
    </div>
</div>
<?php endif; ?>

<?php echo '<div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>