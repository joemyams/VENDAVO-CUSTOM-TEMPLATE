
<?php $details = get_field('resource_page', $card);
      $redirect = get_field('resource_redirect', $card);
      $link = $redirect ?: get_the_permalink($card); ?>

<article class="content-card">
    <a href="<?php echo $link; ?>" class="content-card__inner">
        <div class="content-card__top">
            <div class="content-card__aspect">
                <div class="content-card__flag"></div>
                <div class="content-card__pip">
                    <img class="image-fit lazyload" data-src="<?php echo $details['headshot']['url']; ?>" alt="">
                </div>
                <div class="content-card__aspect-inner">
                    <img class="content-card__image image-fit lazyload" data-src="<?php echo $details['image']['sizes']['card-default']; ?>" alt="">
                </div>
            </div>
        </div>
        <div class="content-card__bottom">
            <?php if ($details['logo']['url']): ?>
            <img class="content-card__logo lazyload" data-src="<?php echo $details['logo']['url']; ?>" alt="">
            <?php endif; ?>
            <h4 class="content-card__title"><?php the_title($card); ?></h4>
            <p class="content-card__excerpt"><?php echo $details['excerpt']; ?></p>
            <span class="btn btn--secondary is-blue is-sm"><?php _e( 'Read More skpan', 'vendavo' ); ?></span>
        </div>
    </a>
</article>