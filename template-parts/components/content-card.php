
<?php if (is_home()) {
    $details['excerpt'] = get_the_excerpt($card);
    $details['image']['url'] = wp_get_attachment_image_src( get_post_thumbnail_id( $card ), 'full' )[0];
    $details['headshot']['url'] = get_avatar_url(get_the_author_meta('ID'));
} else {
    $details = get_field('summary_card', $card);
}; ?>

<article class="content-card">
    <a href="<?php the_permalink($card); ?>" class="content-card__inner">
        <div class="content-card__top">
            <div class="content-card__aspect">
                <div class="content-card__flag"></div>
                <div class="content-card__pip">
                    <img class="image-fit lazyload" data-src="<?php echo $details['headshot']['url']; ?>" alt="">
                </div>
                <div class="content-card__aspect-inner">
                    <img class="content-card__image image-fit lazyload" data-src="<?php echo $details['image']['url']; ?>" alt="">
                </div>
            </div>
        </div>
        <div class="content-card__bottom">
            <?php if ($details['logo']['url']): ?>
            <img class="content-card__logo lazyload" data-src="<?php echo $details['logo']['url']; ?>" alt="">
            <?php endif; ?>
            <h4 class="content-card__title"><?php echo get_the_title($card); ?></h4>
            <p class="content-card__excerpt"><?php echo $details['excerpt']; ?></p>
            <span class="btn btn--secondary is-blue is-sm"><?php _e( 'Read More', 'vendavo' ); ?></span>
        </div>
    </a>
</article>
