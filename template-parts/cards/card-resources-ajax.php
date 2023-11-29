<?php
$postID = get_the_ID();
$resourceDetails = get_field('resource_page', $postID);
$redirect = get_field('resource_redirect', $postID);
if($redirect) :
    $link = $redirect['url'] ? : get_the_permalink($postID);
else:
    $link = get_the_permalink($postID); 
endif;
$excerpt = $resourceDetails['excerpt'];
$image = $resourceDetails['image']['sizes']['card-default-lg'];
?>
<a href="<?php echo $link; ?>" class="card card-resources w-100">
    <figure class="card-header pos-rel z-2">
        <?php if ($image): ?>
            <img class="image-fit lazyload" data-src="<?php echo $image; ?>" alt="">
        <?php else: ?>
            <div class="content-card__placeholder-image"></div>
        <?php endif; ?>
    </figure>
    <div class="card-body pos-rel z-4">
        <h4 class="content-card__title card-title"><?php echo get_the_title(); ?></h4>
        <p class="content-card__excerpt card-text"><?php echo wp_trim_words($excerpt, 20); ?></p>
    </div>
</a>
