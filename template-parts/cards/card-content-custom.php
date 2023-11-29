<?php if(!empty($card['link'])) :
    $link = $card['link']['url'];
else: 
    $link = '#';
endif; ?>
<article class="content-card">
    <a href="<?php echo $link; ?>" class="content-card__inner">
        <div class="content-card__top">
            <div class="content-card__aspect">
                <div class="content-card__flag"></div>
                <div class="content-card__aspect-inner">
                    <img class="content-card__image image-fit lazyload" data-src="<?php echo $card['image']['sizes']['card-default']; ?>" alt="">
                </div>
            </div>
        </div>
        <div class="content-card__bottom">
            <h4 class="content-card__title" style="font-weight: 600;"><?php echo $card['headline']; ?></h4>
            <p class="content-card__excerpt"><?php echo wp_trim_words($card['excerpt'], 20); ?></p>
            <span class="btn btn--secondary is-text--green-20 is-sm"><?php _e( 'Read More', 'vendavo' ); ?></span>
        </div>
    </a>
</article>