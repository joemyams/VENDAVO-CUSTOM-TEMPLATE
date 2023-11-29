<?php if (is_home()) {
    $details['redirect'] = get_the_permalink($card);
    $details['excerpt'] = get_the_excerpt($card);
    $details['image']['url'] = wp_get_attachment_image_src( get_post_thumbnail_id( $card ), 'card-default' )[0];
    $details['headshot']['url'] = get_avatar_url(get_the_author_meta('ID'));
} else {
    $details = get_field('resource_page', $card);
    $redirect = get_field('resource_redirect', $card);
	  $details['link'] =  $redirect['url'] ?: get_the_permalink($card);
}; ?>


<article class="content-card">
  <a href="<?php echo $details['link']; ?>" class="content-card__inner">
    <div class="content-card__top">
      <div class="content-card__aspect">
        <div class="content-card__flag"></div>
        <?php if ($details['headshot']['url']): ?>
        <div class="content-card__pip">
          <img class="image-fit lazyload" data-src="<?php echo $details['headshot']['url']; ?>" alt="">
        </div>
        <?php endif; ?>
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
      <p class="content-card__excerpt"><?php echo wp_trim_words($details['excerpt'], 20); ?></p>
      <span class="btn btn--secondary is-text--green-20 is-sm"><?php _e( 'Read More', 'vendavo' ); ?></span>
    </div>
  </a>
</article>