<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_tabs');
$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlign = get_field('block_alignment');
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
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right-white.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <div class="tab-container">
            <ul class="tab__nav nav nav__with-lines flex-column flex-lg-row nav-pills nav-fill items-<?php echo count($cards) + 1; ?>" role="tablist">
                <li class="nav-item mb-2 mb-lg-0"><a class="nav-link text-center text-lg-left active" data-index="0" id="tabCB-all-link" data-toggle="tab" href="#tabCB-all" role="tab" aria-controls="tabCB-all" aria-selected="true"><?php _e( 'All Capabilities', 'vendavo' ); ?></a></li>
                <?php $i = 1; 
                foreach ($cards as $card): 
                    $isActive = '';
                    $isSelected = 'false';
                    echo '<li class="nav-item mb-2 mb-lg-0"><a class="nav-link text-center text-lg-left '. $isActive .'" data-index="'. $i .'" id="tabCB-'. sanitize_title($card['title']) .'-link" data-toggle="tab" href="#tabCB-'. sanitize_title($card['title']) .'" role="tab" aria-controls="tabCB-'. sanitize_title($card['title']) .'" aria-selected="'. $isSelected .'">' . $card['title'] . '</a></li>';
                    $i++;
                endforeach; ?>
            </ul>
            <div class="tab-content pos-rel is-top--sm">
                <div class="tab-pane fade active show grid-30" id="tabCB-all" role="tabpanel" aria-labelledby="tabCB-all-link">
                    <?php 
                    $blockCategory = get_field('block_category');
                    $args = array( 'post_type' => 'capability', 'posts_per_page' => -1, 'orderby' => 'post__in',
                        'tax_query' => array(
                            array(
                                'taxonomy'          => 'capability-type',
                                'field'                 => 'slug',
                                'terms'                 => $blockCategory->slug,
                            ),
                        ),
                    );
                    $loop = new WP_Query( $args );
                    if ( $loop->have_posts() ) : ?>
                        <div class="row">
                            <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                                <div class="item card-item col-lg-4 d-flex align-items-stretch"> 
                                    <?php get_template_part('/template-parts/cards/card-capability-v2'); ?>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif;
                    wp_reset_postdata(); ?>
                </div>
                <?php $i = 1; 
                foreach ($cards as $card): $isActive = '';
                    echo '<div class="tab-pane fade grid-30 '. $isActive .'" id="tabCB-'. sanitize_title( $card['title']) .'" role="tabpanel" aria-labelledby="tabCB-'. sanitize_title($card['title']) .'-link">'; ?>
                    <?php 
                    $category = $card['tab'];
                    $args = array( 'post_type' => 'capability', 'posts_per_page' => -1, 'orderby' => 'post__in',
                        'tax_query' => array(
                            'relation'  => 'AND',
                            array(
                                'taxonomy'          => 'capability-type',
                                'field'                 => 'slug',
                                'terms'                 => $blockCategory->slug,
                            ),
                            array(
                                'taxonomy'          => 'capability-type',
                                'field'                 => 'slug',
                                'terms'                 => $category->slug,
                            ),
                        ),
                    );
                    $loop = new WP_Query( $args );
                    if ( $loop->have_posts() ) : ?>
                        <div class="row">
                            <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                                <div class="item card-item col-lg-4 d-flex align-items-stretch"> 
                                    <?php get_template_part('/template-parts/cards/card-capability-v2'); ?>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif;
                    wp_reset_postdata(); ?>
                    <?php echo '</div>';
                    $i++;
                endforeach; ?>
            </div>
        </div>
    </div>
<?php endif; ?>

<aside class="modal modal__popup fade" id="capability-modal" tabindex="-1" role="dialog" aria-labelledby="capability-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg nooverf" role="document">
        <div class="modal-content">            
            <header class="modal-header">
                <button class="btn btn-transparent btn-close px-0 ml-auto" type="button" data-dismiss="modal" aria-label="Close">
                    <div class="btn-close-text d-inline-block align-middle mr-1 sr-only">Close</div>
                    <div class="card__icon-plus svg__icon-plus z-2">
                        <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'plus', 32, 'capability__plus'); ?>
                    </div>
                </button>
            </header>
            <section class="modal-body w-100 h-100 nooverf is-text--blue-30">      
                <section class="inner">      
                    <h4 class="modal__headline capability__title"></h4>
                    <div class="modal__text capability__info"></div>
                </section>
            </section>
        </div>
    </div>
</aside>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>