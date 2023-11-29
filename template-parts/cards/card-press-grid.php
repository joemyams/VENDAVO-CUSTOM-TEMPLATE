<?php
$postID = get_the_ID();
$link = get_the_permalink($postID);
$excerpt = get_the_excerpt();
$image = get_the_post_thumbnail_url( $postID, 'card-default');
?>
<div class="navigator__cell pos-rel item w-100">
    <a href="<?php echo $link; ?>" class="card card-resources card-press">
        <figure class="card-header pos-rel z-2">
            <?php if ($image): ?>
                <img class="image-fit lazyload" data-src="<?php echo $image; ?>" alt="">
            <?php else: ?>
                <div class="card__placeholder-image alt-<?php echo rand(1,6); ?>"></div>
            <?php endif; ?>
        </figure>
        <div class="card-body pos-rel z-4">
            <h4 class="content-card__title card-title"><?php echo get_the_title(); ?></h4>
            <p class="content-card__excerpt card-text"><?php echo wp_trim_words($excerpt, 20); ?></p>
        </div>
    </a>
</div>