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
$author = get_field('author_override', $postID);
if ($author) :
  $authorDetails = get_field('author_details', $author);
  $authorName = get_the_title($author);
  $authorBio = $details['bio'];
  $authorHeadshot = $details['headshot']['url'];
  $authorWebsite = $details['website'];
endif;
?>
<div class="navigator__cell pos-rel item">
    <a href="<?php echo $link; ?>" class="card card-resources featured">
        <figure class="card-header pos-rel z-2 mb-0">
            <?php if ($image): ?>
                <img class="image-cover lazyload" data-src="<?php echo $image; ?>" alt="">
            <?php else: ?>
                <div class="content-card__placeholder-image"></div>
            <?php endif; ?>            
        </figure>
        <div class="card-body pos-abs z-4">
            <div class="card__meta">
                <?php $category = tax_by_postID( 'resource-type', get_the_ID() ); ?>
                <div class="card_category text-uppercase font-weight-bold"><?php echo $category['name']; ?></div>
                <?php if ($author): ?>
                    <span class="card__author mr-2">by <?php echo $authorName; ?></span>
                <?php endif; ?>
                <span class="card__date"><?php echo get_the_date(); ?></span>
            </div>
        </div>
        <div class="card-footer pos-abs z-4">
            <h4 class="content-card__title card-title"><?php echo get_the_title(); ?></h4>
            <p class="content-card__excerpt card-text"><?php echo wp_trim_words($excerpt, 20); ?></p>
            <div class="mt-3"><span class="btn btn-primary is-sm"><?php _e( 'Read More', 'vendavo' ); ?></span></div>
        </div>
    </a>
</div>