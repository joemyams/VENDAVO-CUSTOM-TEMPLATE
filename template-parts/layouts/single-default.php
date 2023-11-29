<?php
get_header();
$image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full');
$categories = get_the_category();
$bannerColor = get_field('color', 'category_' . $categories[0]->term_id);

$bannerCTA = get_field('cta_banner', 'category_' . $categories[0]->term_id);
$images = [];
$images['url'] = $image[0];
$author = get_field('author_override');
if ($author) {
    $details = get_field('author_details', $author);
    $name = get_the_title($author);
    $bio = $details['bio'];
    $headshot = $details['headshot']['url'];
    $website = $details['website'];
    $authorArchiveLink = get_post_type_archive_link('authors');
}

$disableImage = get_field('disable_image');
$video = get_field('video_link');

?>

<main id="siteMain" role="main" class="page-builder-body">

<section class="blog-header is-full is-top--xl is-bottom--sm text-left">
    <div class="cont is-md is-fluid--limited front">
      <?php if ( function_exists('yoast_breadcrumb') ) : yoast_breadcrumb( '<div id="breadcrumbs" class="breadcrumbs mb-4">','</div>' ); endif; ?>
      <span class="read-time"><?php _e( 'Read Time', 'vendavo' ); ?>: <?php echo reading_time(); ?></span>
      <?php echo acfOutput(get_the_title(), 'h1', 'blog__headline'); ?>     
      <div class="blog-header__util d-lg-flex justify-content-lg-between">
        <div class="blog-header__meta">
          <?php if ($author): ?>
            <img src="<?php echo $headshot; ?>" alt="<?php echo $name; ?><">
              <span class="blog-header__author"><?php if ($authorArchiveLink): ?><a href="<?php echo esc_url($authorArchiveLink) . '/' . sanitize_title($name); ?>"><?php endif; ?><?php echo $name; ?><?php if ($authorArchiveLink): ?></a><?php endif; ?></span>
            <?php endif; ?>
            <span><?php echo get_the_date(); ?></span>
          </div>
          <?php get_template_part('/template-parts/components/social-share'); ?>
        </div>
      </div>
    </section>
    <section class="post-body is-bottom--lg">
      <div class="cont is-md is-flex--desktop">
        <div class="post-body__main rte">
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
            if($disableImage):
              if($video):
                if(!empty($video)): ?>
                  <div class="embed-responsive embed-responsive-16by9 post-body__featured">
                    <iframe class="embed-responsive-item" src="<?php echo $video; ?>" allowfullscreen></iframe>
                  </div>
                <?php endif;
              endif;
            else:
              if ($image):
                echo '<img class="post-body__featured" src="'. $image[0] .'" />'; 
              endif;
            endif;
            the_content();
          endwhile;
        endif; ?>
      </div>
      <aside  class="post-body__aside">
        <div class="blog-aside__cta">
          <?php if(get_field('blog_banners', 'options')): ?>
            <?php while ( have_rows('blog_banners', 'options') ) : the_row(); 
              $index = get_row_index(); 
              $bannerStyles = $titleStyles = $textStyles = $linkStyles = $bannerClass = $linkClass = $linkAlignment = '';
              if(get_sub_field('has_box_shadow')) :
                $bannerClass .= ' has-box-shadow';
              endif;
              if(get_sub_field('background_color')):
                $bannerStyles .= ' background-color: '. get_sub_field('background_color'). ';';
              endif;
              if(get_sub_field('background_image')):
                $bannerStyles .= ' background: url(\''. get_sub_field('background_image')['url']. '\') no-repeat center; background-size: cover !important;';
              endif;
              if(get_sub_field('has_border') && get_sub_field('border_color')):
                $bannerStyles .= ' border: '. get_sub_field('border_width'). 'px solid '. get_sub_field('border_color');
            endif;
            if(get_sub_field('title_color')) :
              $titleStyles .= ' color: '. get_sub_field('title_color'). ';';
            endif;
            if(get_sub_field('title_font_size')) :
              $titleStyles .= ' font-size: '. get_sub_field('title_font_size'). 'px;';
            endif;
            if(get_sub_field('title_alignment')) :
              $titleStyles .= ' text-align: '. get_sub_field('title_alignment'). ';';
            endif;
            if(get_sub_field('title_background_image')) :
              $titleStyles .= ' margin: -2rem -2rem 0; padding: 1.25rem 2rem; background: url(\''. get_sub_field('title_background_image')['url']. '\') no-repeat center; background-size: cover !important;';
            endif;
            if(get_sub_field('text_font_color')) :
              $textStyles .= ' color: '. get_sub_field('text_font_color'). ';';
            endif;
            if(get_sub_field('text_font_size')) :
              $textStyles .= ' font-size: '. get_sub_field('text_font_size'). 'px;';
            endif;
            if(get_sub_field('text_alignment')) :
              $textStyles .= ' text-align: '. get_sub_field('text_alignment'). ';';
            endif;
            if(get_sub_field('link_type')) :
              $linkClass .= ' btn is-sm';
              if(get_sub_field('link_background_color')) :
                $linkStyles .= ' border-color: '. get_sub_field('link_background_color'). ';';
                $linkStyles .= ' background-color: '. get_sub_field('link_background_color'). ';';
              endif;
            endif;
            if(get_sub_field('link_font_color')) :
              $linkStyles .= ' color: '. get_sub_field('link_font_color'). ';';
            endif;
            if(get_sub_field('link_font_size')) :
              $linkStyles .= ' font-size: '. get_sub_field('link_font_size'). 'px;';
            endif;
            if(get_sub_field('link_alignment')) :
              $linkAlignment .= ' text-align: '. get_sub_field('link_alignment'). ';';
            endif;
            ?>
            <?php if(!empty($bannerStyles) || !empty($titleStyles) || !empty($textStyles) || !empty($linkStyles) || !empty($linkAlignment)): ?>
            <style type="text/css">
              .blog-aside__banner.blog__banner<?php echo $index; ?> { <?php echo $bannerStyles; ?> }
              .blog-aside__banner.blog__banner<?php echo $index; ?> .blog-cta__headline { <?php echo $titleStyles; ?> }
              .blog-aside__banner.blog__banner<?php echo $index; ?> .blog-cta__link-container { <?php echo $linkAlignment; ?> }
              .blog-aside__banner.blog__banner<?php echo $index; ?> .blog-cta__link { <?php echo $linkStyles; ?> }
              .blog-aside__banner.blog__banner<?php echo $index; ?> .blog-cta__content { <?php echo $textStyles; ?> }
            </style>
          <?php endif; ?>
          <div class="blog-aside__banner blog__banner<?php echo $index; ?> <?php echo $bannerClass; ?>">
            <?php if(get_sub_field('link_open_subscribe')): ?><button class="btn-open-exit-modal btn-none" style="display:block;" data-custom-open="exit-modal" type="button" data-toggle="modal"><?php else: ?>
              <a href="<?php echo get_sub_field('link')['url']; ?>" style="display: block;">
              <?php endif; ?>
              <?php echo acfImgOutput(get_sub_field('image'), 'podcast-grid__image pos-rel z-2 img-fluid', ''); ?>
              <div class="blog-cta__inner">
                <?php echo acfOutput(get_sub_field('title'), 'h4', 'blog-cta__headline'); ?>
                <?php echo acfOutput(get_sub_field('text'), 'div', 'blog-cta__content'); ?>
                <div class="blog-cta__link-container mt-3"><span class="blog-cta__link <?php echo $linkClass; ?>"><?php echo get_sub_field('link')['title']; ?></span></div>
              </div>
              <?php if(get_sub_field('link_open_subscribe')): ?></button><?php else: ?></a><?php endif; ?>
            </div>
          <?php endwhile; ?>
        <?php endif; ?>
      </div>
      <div id="stop"></div>
    </aside>
  </div>
</section>
    <?php if ($author && $bio && !get_field('disable_author_box')): ?>
        <section class="post-author is-bottom--lg">
            <div class="cont is-md">
                <div class="post-author__inner">
                    <?php if ($headshot): ?>
                  
                        <?php if ($website): ?>
                            <div class="post-author__headshot rel"><a href="<?php echo esc_url($website); ?>"
                                                                     target="_blank"><img class="image-cover"
                                                                                          alt=""
                                                                                          src="<?php echo $headshot; ?>"/>
                                </a></div>
                        <?php else: ?>
                            <div class="post-author__headshot rel"><img class="image-cover" alt=""
                                                                         src="<?php echo $headshot; ?>"/></div>
                        <?php endif; ?>
                    <?php endif; ?>
                    <div class="post-author__bio">
                        <p class="kicker is-text--green-10 font-weight-bold"><?php _e('About The Author', 'vendavo'); ?></p>
                        <div class="rte small-p">
                            <?php echo $bio; ?>
                            <?php if ($website): ?>
                                <p class="mt-2"><a class="is-text--green-10" href="<?php echo esc_url($website); ?>"
                                                   target="_blank"><?php _e('Website', 'vendavo'); ?></a></p>
                         <?php endif; ?>
<?php if ($authorArchiveLink): ?>
    <p class="mt-2"><a class="is-text--green-10" href="<?php echo esc_url($authorArchiveLink) . '/' . sanitize_title($name); ?>"><?php _e('View All Articles by', 'vendavo');
        echo ' ' . $name; ?></a></p>
<?php endif; ?>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <?php 
if(get_field('has_featured_posts') && get_field('featured_posts')):
  $query_ids = get_field('featured_posts', false, false);
$totalItems = count($query_ids);
$args = array( 'post_type' => 'post', 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', 'post__not_in' => array(get_the_ID()) );
else:
  $args = array( 'post_type' => 'post', 'cat' => $categories[0]->term_id, 'posts_per_page' => 8, 'post__not_in' => array(get_the_ID()) );
endif;
$loop = new WP_Query( $args );
if ( $loop->have_posts() ) : ?>
  <aside class="post-related-articles py-5 mb-lg-4">
    <div class="container">
      <h5 class="mb-4" style="font-size: 30px;"><?php _e( 'Related articles:', 'vendavo' ); ?></h5>
      <div class="js-related__slider">
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <div class="navigator__cell pos-rel item">
            <article class="content-card related-card card-slider">
              <a href="<?php the_permalink(); ?>" class="content-card__inner">
                <div class="content-card__top">
                  <div class="content-card__aspect">
                    <div class="content-card__aspect-inner">
                      <img class="content-card__image image-fit lazyload" data-src="<?php the_post_thumbnail_url(); ?>" alt="">
                    </div>
                  </div>
                </div>
                <div class="content-card__bottom">
                  <h4 class="content-card__title"><?php echo get_the_title(); ?></h4>
                  <div class="cta-container">
                    <span class="btn btn--secondary is-text--green-20 is-sm"><?php _e( 'Read More', 'vendavo' ); ?> ></span>
                  </div>
                </div>
              </a>
            </article>
          </div>
        <?php endwhile; ?>
      </div>
    </div>
  </aside>
<?php endif; ?>
<?php wp_reset_postdata(); ?>

</main>

<?php get_footer(); ?>