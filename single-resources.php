<?php get_header(); ?>
<main id="siteMain" role="main" class="page-builder-body">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php 
          $layoutType = get_post_field('resource_type', get_the_ID());          
          if ($layoutType == 'simple-template') {
            get_template_part('template-parts/layouts/resource-default');
          } 
          elseif ($layoutType == 'page-builder-template') {
            the_content();
          }; ?>
    <?php endwhile; endif; ?>

</main>
<?php get_footer();