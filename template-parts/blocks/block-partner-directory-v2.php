<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlignClass = 'is-headline--left is-body--left'; 

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
?>
    <div class="svg__shape svg__shape-top z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/partner-directory-top.svg) no-repeat;"></div></div>
<?php 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
<div class="inner pos-rel z-5">
    <?php if(!empty($text['headline'])): ?>
        <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
    <?php endif; ?>
    <div class="partner-directory-container">
        <?php 
        $regionTerms = get_terms( array( 'taxonomy' => 'partner-region', 'hide_empty' => true) );
        $industryTerms = get_terms( array( 'taxonomy' => 'partner-industry', 'hide_empty' => true) );
        $specializationTerms = get_terms( array( 'taxonomy' => 'partner-specialization', 'hide_empty' => true) );
        ?>
        <div class="partner__filters">
            <div class="row">
                <?php if($regionTerms): ?>
                    <div class="col-lg mb-3 mb-lg-0">
                        <p class="filter__name mb-1"><?php _e( 'Region', 'vendavo' ); ?></p>
                        <div class="res-filter partner__dropdown dropdown">
                            <button class="btn btn-block dropdown-toggle font-weight-normal text-left" data-flip="false" role="button" id="filterby-region" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="text"><?php _e( 'All', 'vendavo' ); ?></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="filterby-region">
                                <li class="nav-item c-all active"><button class="btn btn-block dropdown-item" data-filter="*" data-index="0"><?php _e( 'All', 'vendavo' ); ?></button></li>
                                <?php foreach($regionTerms as $filter) : ?>
                                    <li class="nav-item c-<?php echo sanitize_html_class(strtolower( $filter->slug )); ?>"><button class="btn btn-block dropdown-item" data-filter=".<?php echo sanitize_html_class(strtolower( $filter->slug )); ?>"><?php echo $filter->name; ?></button></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                <?php endif; ?>
                <?php if($specializationTerms): ?>
                    <div class="col-lg mb-3 mb-lg-0">
                        <p class="filter__name mb-1"><?php _e( 'Specialization', 'vendavo' ); ?></p>
                        <div class="res-filter partner__dropdown dropdown">
                            <button class="btn btn-block dropdown-toggle font-weight-normal text-left" data-flip="false" role="button" id="filterby-specialization" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="text"><?php _e( 'Select specialization', 'vendavo' ); ?></span></button>
                            <ul class="dropdown-menu" aria-labelledby="filterby-specialization">
                                <li class="nav-item c-all active"><button class="btn btn-block dropdown-item" data-filter="*" data-index="0"><?php _e( 'All', 'vendavo' ); ?></button></li>
                                <?php foreach($specializationTerms as $filter) : ?>
                                    <li class="nav-item c-<?php echo sanitize_html_class(strtolower( $filter->slug )); ?>"><button class="btn btn-block dropdown-item" data-filter=".<?php echo sanitize_html_class(strtolower( $filter->slug )); ?>"><?php echo $filter->name; ?></button></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                <?php endif; ?>
                <?php if($industryTerms): ?>
                    <div class="col-lg mb-3 mb-lg-0">
                        <p class="filter__name mb-1"><?php _e( 'Industry Expertise', 'vendavo' ); ?></p>
                        <div class="res-filter partner__dropdown dropdown">
                            <button class="btn btn-block dropdown-toggle font-weight-normal text-left" data-flip="false" role="button" id="filterby-industry" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="text"><?php _e( 'All', 'vendavo' ); ?></span></button>
                            <ul class="dropdown-menu" aria-labelledby="filterby-industry">
                                <li class="nav-item c-all active"><button class="btn btn-block dropdown-item" data-filter="*" data-index="0"><?php _e( 'All', 'vendavo' ); ?></button></li>
                                <?php foreach($industryTerms as $filter) : ?>
                                    <li class="nav-item c-<?php echo sanitize_html_class(strtolower( $filter->slug )); ?>"><button class="btn btn-block dropdown-item" data-filter=".<?php echo sanitize_html_class(strtolower( $filter->slug )); ?>"><?php echo $filter->name; ?></button></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="partner__gridV2">
            <?php 
            $args = array(  
                'post_type' => 'partners',
                'post_status' => 'publish',
                'posts_per_page' => -1, 
                'orderby' => 'title',
                'order' => 'ASC'
            );
            $i = 1;
            $loop = new WP_Query( $args ); 
            while ( $loop->have_posts() ) : $loop->the_post();
                $postID = get_the_ID();
                $terms_string = $region_string = $industry_string = $specialization_string = '';

                $term_region_list = get_the_terms(  $postID, 'partner-region' );
                if($term_region_list):
                    $region_string = join(' ', wp_list_pluck($term_region_list, 'slug')); 
                endif;

                $term_specialization_list = get_the_terms(  $postID, 'partner-specialization' );
                if($term_specialization_list): 
                    $specialization_string = join(' ', wp_list_pluck($term_specialization_list, 'slug'));
                endif;

                $term_industry_list = get_the_terms(  $postID, 'partner-industry' );
                if($term_industry_list):
                    $industry_string .= join(' ', wp_list_pluck($term_industry_list, 'slug'));
                endif;

                $terms_string = $region_string. ' '. $specialization_string. ' '. $industry_string;

                $logo = get_field('partner_details', $postID)['logo'];
                ?>
                <article class="partner-card <?php echo $terms_string; ?>">
                    <a class="partner-card__inner" href="<?php the_permalink(); ?>">
                        <?php echo wp_get_attachment_image( $logo['ID'], 'full', false, array('class' => 'partner-card__logo img-fluid' ) ); ?>
                    </a>
                </article>
                <?php 
            endwhile;
            wp_reset_postdata(); 
            ?>



        </div>
    </div>
</div>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>