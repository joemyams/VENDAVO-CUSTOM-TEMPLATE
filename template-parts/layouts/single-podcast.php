<?php 
get_header(); 
$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
$categories = get_the_category();
$bannerColor = get_field('color', 'category_' . $categories[0]->term_id );

$images = [];
$images['url'] = $image[0];
$author = get_field('author_override');
if ($author) {
    $details = get_field('author_details', $author);
    $name = get_the_title($author);
    $bio = $details['bio'];
    $headshot = $details['headshot']['url'];
    $website = $details['website'];
} ?>

<main id="siteMain" role="main" class="page-builder-body">

    <section class="podcast-header blog-header is-full is-top--xl is-bottom--xxl is-bg--blue-30 is-text--white pos-rel">
        <div class="cont is-md is-fluid--limited front text-center">
            <span class="read-time is-text--blue-30"><?php _e( 'Read Time', 'vendavo' ); ?>: <?php echo reading_time(); ?></span>
            <?php echo acfOutput(get_the_title(), 'h1', 'blog__headline h2'); ?>     
        </div>
        <?php if (!get_field('hide_featured_image')) :
            if ($image): ?>
                <div class="block-bg__container absolute-fill z-2 bg---blue-30">
                    <img data-src="<?php echo $image[0]; ?>" class="lazyload block-bg__image image-cover pos-rel z-2" />
                </div>
            <?php endif; 
        endif; ?>
    </section>
    <section class="podcast-body post-body is-bottom--lg">
        <div class="cont is-md">

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <?php if(get_field('video_link')): ?>
                    <div class="post-body__podcast embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="<?php echo get_field('video_link'); ?>" allowfullscreen></iframe>
                  </div>
              <?php endif; ?>
              <div class="rte mx-auto px-lg-5">
                  <div class="d-lg-flex justify-content-lg-between mb-4">
                    <div class="blog-header__meta">
                        <?php if ($author): ?>
                            <img src="<?php echo $headshot; ?>" alt="<?php echo $name; ?><">
                                <span class="blog-header__author"><?php echo $name; ?></span>
                            <?php endif; ?>
                            <span><?php echo get_the_date(); ?></span>
                        </div>
                        <?php get_template_part('/template-parts/components/social-share'); ?>
                    </div>
                    <?php the_content(); ?>
                </div>
            <?php endwhile;
        endif; ?> 

    </div>
</section>
<?php if ($author && $bio && !get_field('disable_author_box')): ?>
    <section class="podcast-author post-author is-bottom--lg">
        <div class="cont is-md">
            <div class="post-author__inner">
                <?php if ($headshot): ?>
                    <?php if($website): ?>
                        <div class="post-author__headshot rel"><a href="<?php echo esc_url( $website ); ?>" target="_blank"><img class="image-cover" alt="" src="<?php echo $headshot; ?>" /></a></div>
                    <?php else: ?>
                        <div class="post-author__headshot rel"><img class="image-cover" alt="" src="<?php echo $headshot; ?>" /></div>
                    <?php endif; ?>
                <?php endif; ?>
                <div class="post-author__bio">
                    <p class="kicker is-text--green-10"><?php _e( 'About The Author', 'vendavo' ); ?></p>
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
</main>

<?php get_footer();