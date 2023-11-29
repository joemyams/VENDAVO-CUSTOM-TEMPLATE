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
$image = $resourceDetails['image']['sizes']['card-default'];
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
    <a href="<?php echo $link; ?>" class="card card-resources alt">
        <figure class="card-header pos-rel z-2">
            <?php if ($image): ?>
                <img class="image-fit lazyload" data-src="<?php echo $image; ?>" alt="">
            <?php else: ?>
                <div class="content-card__placeholder-image"></div>
            <?php endif; ?>
        </figure>
        <div class="card-body pos-rel z-4 px-0 pt-2">
            <h4 class="content-card__title card-title"><?php echo get_the_title(); ?></h4>
            <p class="content-card__date card-text"><span class="card__date-icon mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28.566 28.566"><g transform="translate(0)"><path d="M14.283,0A14.283,14.283,0,1,0,28.566,14.283,14.325,14.325,0,0,0,14.283,0Zm0,25A10.712,10.712,0,1,1,25,14.283,10.744,10.744,0,0,1,14.283,25Zm1.785-11.426,4.821,4.821-2.5,2.5L12.5,15V5.356h3.571Z" fill="#cbd0d3"/></g></svg></span><span class="card__date-text">
                <?php $datePosted = get_the_time('U');
                if ($datePosted  >= strtotime('-1 week') ) :
                    human_time_diff($datePosted,current_time( 'U' ));
                else: 
                    echo get_the_date();
                endif;
            ?></span>
            <?php if ($author): ?>
                <span class="card__author mr-2">by <?php echo $authorName; ?></span>
            <?php endif; ?>
        </p>
    </div>
</a>
</div>