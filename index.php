<?php get_header(); 
    $blogIndex = get_field('blog_index', get_option('page_for_posts'));

    if ($blogIndex['featured_type'] == 'most-recent') {
        $recent_post = wp_get_recent_posts(array(
            'numberposts' => 1, 
            'post_status' => 'publish'
        ));
    } else {
        $recent_post = $blogIndex['featured_blog'];
    }; 
    $featCategories = get_the_category($recent_post->ID);
    $featColor = get_field('color', 'category_' . $featCategories[0]->term_id );
    $featImage = wp_get_attachment_image_src( get_post_thumbnail_id( $recent_post->ID ), 'full' );
    $blogCategories = get_categories(); 
    if ($blogCategories) {
      echo '<style>';
         foreach ($blogCategories as $cat) {
          $tagColor = get_field('color', 'category_' . $cat->term_id );
          echo '.alm-filter--link.field-' . $cat->slug . '{ color: '. $tagColor . ' !important; }';
        }; 
      echo '</style>';
    }
    ?>
<main id="siteMain" role="main" class="page-builder-body">
  <section class="blog-feature">
    <div class="cont is-lg is-flex--tablet">
      <div class="blog-feature__main">
        <a href="<?php the_permalink($recent_post->ID); ?>" class="featured-blog"
          style="background-color: <?php echo $featColor; ?>">
          <?php foreach ($featCategories as $category) { 
                $color = get_field('color', 'category_' . $category->term_id );
                echo '<span data-num="'. (count($featCategories) - 1) . '" style="background-color:'. $color .'" class="featured-flag front">'. $category->name .'</span>'; 
                }; ?>
          <h3 class="front"><?php echo get_the_title($recent_post->ID); ?></h3>
          <div class="featured-blog__meta front">
            <span class="btn">Read More</span>
          </div>
          <?php if ($featImage) echo '<div class="featured-blog__image"><img class="lazyload image-fit" data-src="'. $featImage[0] .'" /></div>'; ?>
        </a>
      </div>
      <div class="blog-feature__aside is-text--blue-30">
        <?php get_search_form(); ?>
        <h3 class="blog-aside__header"><?php _e( 'Editor\'s Picks', 'vendavo' ); ?></h3>
        <?php foreach ($blogIndex['editors_picks'] as $pick) {
                    set_query_var('postID', $pick->ID);
                    get_template_part('/template-parts/components/editors-pick');
            }; ?>
      </div>
    </div>
  </section>
  <section class="blog-index is-top--na is-bottom--na">
    <div class="cont is-default">
      <?php echo do_shortcode('[ajax_load_more_filters id="blogcategories" target="8687150447"]'); ?>
      <?php echo do_shortcode('[ajax_load_more id="8687150447" category__not_in="1237,1239" theme_repeater="theme_repeater.php" filters="true" target="blogcategories" loading_style="light-grey" container_type="div" css_classes="blog-listing" paging="true"  paging_show_at_most="4" paging_controls="true" paging_first_label="First" paging_last_label="Last"  post_type="post" posts_per_page="6" images_loaded="true" scroll="false" button_label="More Posts"]'); ?>
    </div>
  </section>

  <?php $blogBrowse = get_field('blog_browse', get_option('page_for_posts')); ?>
  <section class="blog-browse is-bottom--md d-none">
    <div class="cont is-lg">
      <div class="blog-browse__inner">
        <?php echo acfOutput($blogBrowse['headline'], 'h3', 'blog-browse__headline'); ?>
        <?php if ($blogBrowse['columns']): ?>
        <div class="blog-browse__columns">
          <?php foreach ($blogBrowse['columns'] as $column): ?>
          <div class="browse-column">
            <?php echo acfOutput($column['headline'], 'h4', 'browse-column__headline'); ?>
            <?php if($column['tags_to_show']): ?>
            <ul class="browse-column__list">
              <?php foreach($column['tags_to_show'] as $tag) {
                $tagInfo = get_tag($tag);
                echo '<li class="browse-column__item"><a href="/tag/'. $tagInfo->slug .'/">'. $tagInfo->name .'</a></li>';
            }; ?>
            </ul>

            <?php endif; ?>
          </div>
          <?php endforeach; ?>
        </div>
        <?php endif; ?>
      </div>
    </div>

  </section>

</main>
<script>

</script>
<?php get_footer();