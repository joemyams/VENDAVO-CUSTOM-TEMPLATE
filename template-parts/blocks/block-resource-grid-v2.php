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

$blockIsSlider = get_field('block_is_slider');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">';
if (!empty($items) || get_field('block_load_latest')): ?>
    <div class="inner pos-rel z-5">
        <?php echo '<div class="centered-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <div class="featured-items is-top--md">
            <?php 
            if(get_field('block_load_latest')):
                $totalItems = get_field('block_nr_items');
                $postType = get_field('block_post_type');
                if($postType === 'both'):
                    $postType =  array( 'resources', 'post' );
                endif;
                $args = array( 'post_type' => $postType, 'posts_per_page' => $totalItems );
            else:
                $query_ids = get_field('block_featured', false, false);
                $totalItems = count( $query_ids );
                $args = array( 'post_type' => array( 'resources', 'post' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
            endif; 
            $loop = new WP_Query( $args );
            if ( $loop->have_posts() ) : ?>
                <?php if(!$blockIsSlider) : ?>
                    <section class="blog-loop ajax-container pos-rel z-4 is-default is-bottom--sm">
                        <div class="row ajax-loop">
                            <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                                <div class="item card-item col-lg-4 d-flex align-items-stretch"> 
                                    <?php get_template_part('/template-parts/cards/card-resources-grid-v2'); ?>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </section>
                <?php else: ?>
                    <div class="js-resourceCard__slider resources-slider__inner js-card__slider" data-slick="slick-<?php echo $block['id']; ?>">
                        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                            <div class="navigator__cell pos-rel item w-100">
                                <?php get_template_part('/template-parts/cards/card-resources-grid-v2'); ?>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php endif; ?>
            <?php endif;
            wp_reset_postdata(); ?>
        </div>
    </div>
<?php endif; ?>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>