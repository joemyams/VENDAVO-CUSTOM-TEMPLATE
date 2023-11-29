<?php
$postID = get_the_ID();
$resourceDetails = get_field('resource_page', $postID);
$redirect = get_field('resource_redirect', $postID);
if($redirect) :
    $link = $redirect['url'] ? : get_the_permalink($postID);
else:
    $link = get_the_permalink($postID); 
endif;
$postType = get_post_type();
$category = '';
if($postType === 'resources' || $postType === 'post'):
    if($postType === 'resources'):
        $image = $resourceDetails['image']['sizes']['card-default-lg'];
        $excerpt = $resourceDetails['excerpt'];
        $cat = tax_by_postID('resource-type', $postID);
        $category = tax_by_postID('resource-type', $postID)['name'];
    else:
        $image = wp_get_attachment_image_src( get_post_thumbnail_id( $postID ), 'card-default-lg' )[0];
        $excerpt = get_the_excerpt( $postID );
        $category = tax_by_postID('post', $postID)['name'];
    endif;
elseif ($postType === 'page') :
    $category = 'Page';
    $excerpt = get_post_meta(get_the_ID(), '_yoast_wpseo_metadesc', true); 
elseif ($postType === 'glossary') :
    $category = 'Glossary';
endif; ?>
<a href="<?php echo $link; ?>" class="card card-resources card--search w-100">
    <figure class="card-header pos-rel z-2 mb-0">
        <?php if ($image): ?>
            <img class="image-fit lazyload" data-src="<?php echo $image; ?>" alt="">
        <?php else: ?>
            <div class="content-card__placeholder-image"></div>
        <?php endif; ?>
    </figure>
    <div class="card-body pos-rel z-4">
        <?php if(!empty($category)): ?>
            <p class="mb-3 mt-n2"><span class="kicker is-text--white"><?php echo $category; ?></span>
        <?php endif; ?>
        <h4 class="content-card__title card-title"><?php echo get_the_title(); ?></h4>
    </div>
    <div class="card-footer pos-rel z-4 pt-0">
        <?php if(!empty($excerpt)): ?>
            <p class="content-card__excerpt card-text"><?php echo wp_trim_words($excerpt, 20); ?></p>
        <?php endif; ?>
        <p class="is-green is-sm mt-2"><span class="text mr-1"><?php _e( 'Read More', 'vendavo' ); ?></span> ></p>
    </div>
</a>
