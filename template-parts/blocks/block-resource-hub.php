<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$hasBackground = get_field('block_has_background');
$backgroundImage = get_field('block_background_image');
$blockInfo = acfGetBlockInfo($block, $design, '');



$textFilters = get_field('block_text_filters');
$textFeatured = get_field('block_text_featured');
$filtersBlock = get_field('block_filters');
$cards = get_field('block_cards');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

if(!($hasBackground && $backgroundImage)):
  echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">';
else:
  $blockInfo = acfGetBlockInfo($block, $design, 'pos-rel block--has-bg');
  echo '<section '. $blockInfo .'>';
endif;


$selected_filter = $_GET[ 'filter' ];
$selected_tag = $_GET[ 'tag' ];

?>

<div class="block__resources-header pos-rel z-3 is-top--xl is-bottom--md is-text--white">
  <div class="block-bg__container absolute-fill z-1 <?php echo $design['background']; ?>"><?php echo acfImgOutput($backgroundImage, 'block-bg__header image-cover pos-rel z-2', ''); ?></div>
  <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
    <div class="text-center rte is-sm is-bottom--md">
      <?php echo acfOutput($text['kicker'], 'p', 'kicker'); ?>
      <?php echo acfOutput($text['headline'], 'h2', 'half-text__headline'); ?>

      <?php if($text['has_subscribe']): ?>
        <button class="btn-open-exit-modal btn-subscribe-header btn-none" style="display:block;" data-custom-open="exit-modal" type="button" data-toggle="modal">
          <?php echo acfOutput($text['subheadline'], 'div', 'half-text__subheadline'); ?>
        </button>
      <?php endif; ?>
    </div>
  </div>
</div>

<?php if ($filtersBlock): ?>
  <div class="block__resources-filters pos-rel z-5 is-top--md">
    <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
      <div class="rte is-sm mb-3">
        <?php echo acfOutput($textFilters['kicker'], 'p', 'kicker'); ?>
        <?php echo acfOutput($textFilters['headline'], 'p', 'font-size-h3 font-weight-bold half-text__headline'); ?>
        <?php echo acfOutput($textFilters['subheadline'], 'div', 'half-text__subheadline'); ?>
      </div>
      <div class="block__filters d-sm-flex">
        <?php foreach ($filtersBlock as $filters): ?>
          <div class="res-filter dropdown">
            <button class="btn btn-block dropdown-toggle font-weight-normal text-left" data-flip="false" role="button" id="filterby-<?php echo esc_attr( $filters['filter_title'] ); ?>" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo $filters['filter_title']; ?></button>
            <ul class="dropdown-menu" aria-labelledby="filterby-<?php echo esc_attr( $filters['filter_title'] ); ?>">
              <?php $filterOptions = $filters['filter'];
              if($filterOptions): 
                foreach($filterOptions as $filter) : ?>
                  <li class="c-<?php echo sanitize_html_class(strtolower( $filter['cta_btn']['text'] )); ?>"><a class="dropdown-item" href="<?php echo esc_url( $filter['cta_btn']['link'] ); ?>" title="<?php echo $filter['cta_btn']['text']; ?>"><?php echo $filter['cta_btn']['text']; ?></a></li>
                <?php endforeach; endif; ?>
              </ul>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  <?php endif; ?>


  <?php if(empty($selected_filter) && empty($selected_tag)): ?>

  <?php $query_ids = get_field('block_featured', false, false);
  if($query_ids): 
    $totalItems = count( $query_ids );
    $args = array( 'post_type' => array( 'resources' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
    $loop = new WP_Query( $args );
    if ( $loop->have_posts() ) : ?>
      <div class="block__resources-featured pos-rel z-3 is-top--md is-bottom--md">
        <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
          <div class="rte is-sm is-bottom--sm">
            <?php echo acfOutput($textFeatured['kicker'], 'p', 'kicker'); ?>
            <?php echo acfOutput($textFeatured['headline'], 'h2', 'h3 half-text__headline'); ?>
            <?php echo acfOutput($textFeatured['subheadline'], 'div', 'half-text__subheadline'); ?>
          </div>
          <?php while ( $loop->have_posts() ) : $loop->the_post();
            switch ($loop->current_post % $loop->found_posts) :
              case 0 : 
              echo '<div class="resourceFeatured__row grid-48"><div class="row"><div class="col-lg-8">';
              get_template_part('/template-parts/cards/card-resources-featured');
              break;
              case 1 :
              get_template_part('/template-parts/cards/card-resources-featured');
              echo '</div>';
              break;
              case 2 : 
              echo '<div class="col-lg-4"><div class="js-resourceFeatured__slider resources-slider__featured js-card__slider" data-slick="slick-'. $block['id'] .'">';
              get_template_part('/template-parts/cards/card-resources-alt');
              break;
              case ($loop->found_posts - 1) : 
              get_template_part('/template-parts/cards/card-resources-alt');
              echo '</div></div>';
              echo '</div></div>';
              break;
              default:
              get_template_part('/template-parts/cards/card-resources-alt');
              break;
            endswitch;
          endwhile; ?>

        </div>
      </div>
    <?php endif;
    wp_reset_postdata(); 
  endif; ?>

  <?php if ($cards): $index = 0; ?>
    <div class="block__resources-cards pos-rel z-3 is-bottom--lg">
      <?php foreach ($cards as $card): ?>
        <div class="block__resources-card pos-rel z-3 is-top--md is-bottom--md">
          <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
            <div class="rte is-sm is-bottom--sm">
              <?php echo acfOutput($card['headline'], 'h2', 'h3 half-text__headline'); ?>
            </div>
            <?php  
            if($card['load_default']):
              $totalItems = $card['number_of_posts'];
              $args = array( 'post_type' => array( 'resources' ), 'posts_per_page' => $totalItems,
                'tax_query' => array(
                  array (
                    'taxonomy' => 'resource-type',
                    'field'    => 'term_id',
                    'terms' => $card['category'],
                  )
                ) );
            else:
              $query_ids = get_field('resources_select', false, false);
              $totalItems = count( $query_ids );
              $args = array( 'post_type' => array( 'resources' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
            endif;
            $loop = new WP_Query( $args );
            if ( $loop->have_posts() ) : ?>
              <div class="js-resourceCard__slider resources-slider__inner js-card__slider" data-slick="slick-<?php echo $block['id']; ?>">
                <?php while ( $loop->have_posts() ) : $loop->the_post();
                  get_template_part('/template-parts/cards/card-resources-grid');
                endwhile; ?>
              </div>
            <?php endif;
            wp_reset_postdata(); ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>

<?php else: 
  global $wp_query;
  $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; 
  $posts_per_page = get_option( 'posts_per_page' );
  if(!empty($selected_filter)) :
    $args = array( 'post_type' => array( 'resources' ), 'paged' => $paged, 'post_status' => 'publish', 
      'tax_query' => array(
        array (
          'taxonomy' => 'resource-type',
          'field'    => 'slug',
          'terms' => array( $selected_filter ),
        )
      ) );
    $displayTermType = 'resource-type';
  else:
    $args = array( 'post_type' => array( 'resources' ), 'paged' => $paged, 'post_status' => 'publish', 
      'tax_query' => array(
        array (
          'taxonomy' => 'post_tag',
          'field'    => 'slug',
          'terms' => array( $selected_tag ),
        )
      ) );
    $displayTermType = 'post_tag';
  endif;
  $loop = new WP_Query( $args );
  $temp_query = $wp_query;
  $wp_query   = NULL;
  $wp_query   = $loop;
  if ( $loop->have_posts() ) : ?>
    <section class="blog-loop ajax-container cont pos-rel z-4 is-default is-top--sm is-bottom--sm">
      <div class="row ajax-loop">
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <div class="item card-item col-lg-4 d-flex align-items-stretch"> 
            <?php get_template_part('/template-parts/cards/card-resources-ajax'); ?>
          </div>
        <?php endwhile; ?>
      </div>
      <?php $pagination = get_the_posts_pagination(
        array(
          'mid_size' => 3,
          'prev_text' => __( 'Previous', 'textdomain' ),
          'next_text' => __( 'Next', 'textdomain' ),
          'screen_reader_text' => 'Pagination')
      );

      if ( !empty($pagination) && $wp_query->max_num_pages != $paged ) : 
        $displayPagination = 'd-none';
        $displayAjaxBtn = true;
        ?>
        <aside class="pt-3 pb-4 <?php echo $displayPagination; ?>">
          <div id="pagination" class="cont pos-rel z-5 is-default pagination text-center">
            <?php echo $pagination; ?>
          </div>
        </aside>
     
     
     
 <?php
$allowed_terms = array('buyers-kits', 'calculators', 'case-studies', 'data-sheets', 'ebooks', 'industry-brief', 'infographics', 'podcasts', 'partner-analyst-reports', 'solution-demonstrations', 'white-papers');

$shortcode = '[ajax_load_more id="5434481243" target="resourcecategories" filters="true" theme_repeater="theme_repeater.php" post_type="resources" posts_per_page="9" pause="true" paging="true"  paging_show_at_most="4" paging_controls="true" paging_first_label="First" paging_last_label="Last"  taxonomy="resource-type" offset="9"';

if (isset($_GET['filter']) && in_array($_GET['filter'], $allowed_terms)) {
    $taxonomy_term = $_GET['filter'];
    $shortcode .= ' taxonomy_terms="' . $taxonomy_term . '" taxonomy_operator="IN"';
}

$shortcode .= ' scroll="false" pagination="true"]';

echo do_shortcode($shortcode);
?>

   
      <?php endif; ?>
    </section>
  <?php else: ?>
    <div class="cont pos-rel z-4 is-default">
      <div class="rte is-sm is-top--sm is-bottom--sm">
        <h3 class="text-center"><?php _e( 'No results found', 'vendavo' ); ?></h3>
      </div>
    </div>
  <?php endif; ?>
  <?php wp_reset_postdata();
  $wp_query = NULL; $wp_query = $temp_query;
  wp_reset_postdata();
endif; ?>

<?php echo '</section>'; ?>

<?php endif; ?>