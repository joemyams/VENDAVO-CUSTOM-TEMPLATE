<?php
/**
 * Template Name: Search Page
 */
?>
<?php get_header(); 
$searchTerm = sanitize_text_field(get_search_query());
global $wp_query;
  $not_singular = $wp_query->found_posts == 1 ? 'result' : 'results'; // if found posts is greater than one echo results(plural) else echo result (singular)
  ?>
  <main id="siteMain" role="main" class="page-builder-body">
    <section class="search-header is-top--xl is-bottom--xs">
      <div class="cont text-center">
        <p class="text-flag">
          <?php echo $wp_query->found_posts . " $not_singular found"; ?>
        </p>
        <h1 class="page-title">
          <?php printf( esc_html__( 'Results for "%s"', 'twentytwentyone' ), '<span class="page-description search-term">' . esc_html( get_search_query() ) . '</span>' ); ?>
        </h1>
        <div class="search-header__form">
          <?php get_search_form(); ?>
        </div>
      </div>
    </section>
    <div class="cont is-default is-top--md is-bottom--md">
      <section class="blog-loop ajax-container">
        <div class="row ajax-loop">
          <?php while ( have_posts() ) : the_post(); ?>
            <div class="item card-item col-lg-4 d-flex align-items-stretch"> 
              <?php get_template_part('/template-parts/cards/card-search-grid-v2'); ?>
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
          <?php if($displayAjaxBtn) : ?>
            <div class="btn-ajax-container text-center is-top--sm is-bottom--sm"><button class="btn btn-lg btn-ajax-search btn--primary is-green" type="button" data-nonce="<?php echo wp_create_nonce("ajax_btn_nonce");?>" data-search-term="<?php echo esc_html( get_search_query() ); ?>" data-next-page="<?php echo ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) + 1 : 2; ?>" data-max-pages="<?php echo $wp_query->max_num_pages; ?>"><?php _e( 'Load More', 'vendavo' ); ?></button></div>
          <?php endif; ?>
        <?php endif; ?>
      </section>

    </div>
  </main>
  <?php get_footer();