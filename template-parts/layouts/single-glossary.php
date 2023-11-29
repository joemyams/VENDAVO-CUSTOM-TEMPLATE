<?php 
get_header();

$author = get_field('author_override');
if ($author) :
  $details = get_field('author_details', $author);
  $name = get_the_title($author);
  $bio = $details['bio'];
  $headshot = $details['headshot']['url'];
  $website = $details['website'];
endif;
?>

<main id="siteMain" role="main" class="page-builder-body">

  <section class="glossary-header is-full is-top--xl is-bottom--lg is-bg--blue-30 is-text--white pos-rel">
    <div class="cont is-md is-fluid--limited front text-center">
      <p class="blog__headline h2 font-weight-bold"><?php _e( 'Vendavo Glossary', 'vendavo' ); ?></p>
      <div class="author-box mt-2">
        <?php if ($author): ?>
          <span class="post__meta meta_author"><?php _e( 'By', 'vendavo' ); ?> <?php echo $name; ?></span>
        <?php else: 
          if(get_the_author()): ?>
            <span class="post__meta meta_author"><?php _e( 'By', 'vendavo' ); ?> <?php the_author(); ?></span>
          <?php endif; 
        endif; ?>
        <span class="post__meta date"><?php _e( 'Published on', 'vendavo' ); ?> <time itemprop="datePublished" class="d-inline-block" datetime="<?php the_time('c'); ?>"><?php the_date(); ?></time></span>
        <span class="post__meta date"><?php _e( 'Updated on', 'vendavo' ); ?> <time itemprop="dateModified" class="d-inline-block" datetime="<?php the_modified_date('c'); ?>"><?php the_modified_date(); ?></time></span>
      </div>
    </div>
  </section>
  <?php $terms = get_terms( 'glossary-type', array( 'orderby' => 'name', 'order' => 'ASC', 'hide_empty' => true ) );
  if($terms && count($terms) > 0) : ?>
    <div class="block__glossary-nav pos-rel z-3 is-bg--gray-10 is-text--blue-30 is-top--xs is-bottom--xs">
      <div class="cont pos-rel z-5 is-default">
        <?php
        $outList = '';
        $terms = get_terms( 'glossary-type', array( 'orderby' => 'name', 'order' => 'ASC', 'hide_empty' => false ) );
        foreach ( $terms as $term ) :
          if ( $term->count > 0 ) :
            $outList .= '<li class="nav-item active"><a class="nav-link pl-0 font-weight-normal" href="'. esc_url( home_url( '/' ) ) .'glossary/#'. $term->slug .'" title="Glossary '. $term->name.'">'. $term->name .'</a></li>';
          else: 
            $outList .= '<li class="nav-item"><span class="nav-link disabled pl-0 font-weight-normal" disabled>'. $term->name .'</span></li>';
          endif;
        endforeach; ?>
        <?php if( !empty( $outList ) ): ?>
          <ul class="nav navbar-nav flex-row nav-glossary justify-content-center"><?php echo $outList; ?></ul>
        <?php endif; ?>
      </div>
    </div>
  <?php endif; ?>
  <section class="glossary-body post-body is-top--md <?php echo (get_field('tbc_shortcode') && !empty(get_field('tbc_shortcode'))) ? 'has__sidebar' : ''; ?>">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php if(get_field('tbc_shortcode') && !empty(get_field('tbc_shortcode'))): ?>
      <div class="cont is-default is-bottom--lg">
        <div class="row">
          <aside class="body__aside post-body__aside col-lg-3 mb-4 mb-lg-0 order-lg-first d-flex justify-content-between">
            <div class="body__aside-inner w-100"><?php echo do_shortcode(get_field('tbc_shortcode')); ?>
          </div>
          <div id="stop"></div>
        </aside>
        <div class="body__inner col-lg-9 pl-lg-5">
          <?php echo acfOutput(get_the_title(), 'h1', 'blog__headline is-bottom--sm'); ?>
          <?php the_content(); ?>
        </div>

      </div>
    </div>
  <?php else: ?>
    <div class="cont is-md is-bottom--lg">  
      <div class="rte mx-auto px-lg-5">
        <?php echo acfOutput(get_the_title(), 'h1', 'blog__headline is-bottom--sm'); ?>
        <?php the_content(); ?>
      </div>
    </div>
  <?php endif; ?>

  <?php if ($author && $bio && !get_field('disable_author_box')): ?>
    <section class="post-author post-author__box is-bottom--lg">
      <div class="cont <?php echo (get_field('tbc_shortcode') && !empty(get_field('tbc_shortcode'))) ? 'is-default': 'is-md'; ?>">
        <div class="post-author__inner">
          <?php if ($headshot): ?>
            <?php if($website): ?>
              <div class="post-author__headshot rel"><a href="<?php echo esc_url( $website ); ?>" target="_blank"><img class="image-cover" alt="" src="<?php echo $headshot; ?>" /></a></div>
            <?php else: ?>
              <div class="post-author__headshot rel"><img class="image-cover" alt="" src="<?php echo $headshot; ?>" /></div>
            <?php endif; ?>
          <?php endif; ?>
          <div class="post-author__bio">
            <p class="kicker is-text--green-10 font-weight-bold"><?php _e( 'About The Author', 'vendavo' ); ?></p>
            <div class="rte small-p">
              <?php echo $bio; ?>
              <?php if($website): ?>
                <p class="mt-2"><a class="is-text--green-10" href="<?php echo esc_url( $website ); ?>" target="_blank"><?php _e( 'Website', 'vendavo' ); ?></a></p>
              <?php endif; ?>
            </div>

          </div>
        </div>
      </div>
    </section>
  <?php endif; ?>

  <?php
  $text = get_field('ftres_block_text');
  $items = get_field('ftres_block_featured');
  if (!empty($items) || get_field('ftres_block_load_latest')): ?>
    <div class="block block--glossary-featured block--resource-grid-v2 is-bg--gray-10 is-text--blue-30 is-top--md is-bottom--sm">
      <div class="cont pos-rel is-default is-headline--center is-body--center">
        <div class="inner pos-rel z-5">
          <div class="centered-text__inner rte"><h6 class="half-text__headline h2" style="font-weight:700"><?php _e( 'Related Resources', 'vendavo' ); ?></h6></div>
          <div class="featured-items is-top--md">
            <?php 
            if(get_field('ftres_block_load_latest')):
              $totalItems = get_field('ftres_block_nr_items');
              $postType = get_field('ftres_block_post_type');
              if($postType === 'both'):
                $postType =  array( 'resources', 'post' );
              endif;
              $args = array( 'post_type' => $postType, 'posts_per_page' => $totalItems );
            else:
              $query_ids = get_field('ftres_block_featured', false, false);
              $totalItems = count( $query_ids );
              $args = array( 'post_type' => array( 'resources', 'post', 'page' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
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
      </div>
    </div>
  <?php endif; ?>

<?php endwhile;
endif; ?> 

</div>
</section>

</main>

<?php get_footer();