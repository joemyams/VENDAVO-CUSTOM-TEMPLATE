  <div class="blog-body__share">
    <p class="mb-0 mr-3 mr-lg-4"><?php _e( 'Share this article', 'vendavo' ); ?>:</p>
    <div>
 <a aria-label="Share on Linkedin" class="share-link--twitter"
      href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode( get_permalink() ); ?>"
      rel="nofollow noopener" target="_blank">
      <?php echo Vendavo_get_icon_svg( 'social', 'linkedin', 26, 'blog-share__icon' ); ?>
    </a>
    <a aria-label="Share on Facebook" class="share-link--facebook" onclick="
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink() ); ?>', 
              'facebook-share-dialog', 
              'width=626,height=436'); 
            return false;" rel="nofollow noopener" target="_blank">
      <?php echo Vendavo_get_icon_svg( 'social', 'facebook', 26, 'blog-share__icon' ); ?>
    </a>
    <a aria-label="Share on Twitter" class="share-link--twitter"
      href="https://twitter.com/intent/tweet/?url=<?php echo urlencode( get_permalink() ); ?>" rel="nofollow noopener"
      target="_blank">
      <?php echo Vendavo_get_icon_svg( 'social', 'twitter', 26, 'blog-share__icon' ); ?>
    </a>
    </div>
   
  </div>