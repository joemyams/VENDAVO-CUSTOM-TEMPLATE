<?php get_header(); 
$category = get_queried_object(); ?>
<main id="siteMain" role="main" class="page-builder-body">
  <section class="archive-header is-bottom--xs is-top--xl is-bg--gray-10 text-center is-text--blue-30">
    <div class="cont is-xs">
      <h1><?php echo $category->name; ?></h1>
      <h4><?php echo $category->description; ?></h4>
    </div>
  </section>
  <section class="blog-index archive-body is-top--na is-bottom--md">
    <div class="cont is-default is-flex--tablet">
      <?php echo do_shortcode('[ajax_load_more id="8687150447"  category__not_in="1237,1239" theme_repeater="theme_repeater.php" tag="'. $category->slug .'" loading_style="light-grey" container_type="div" css_classes="blog-listing" post_type="post" posts_per_page="9" images_loaded="true" scroll="false" button_label="More Posts" ]'); ?>
    </div>
  </section>

</main>
<?php get_footer();