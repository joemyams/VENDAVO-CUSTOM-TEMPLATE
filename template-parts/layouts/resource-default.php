<?php $postID = get_the_ID();
      $pageContent = get_field('resource_simple', $postID);
      $cardContent = get_field('resource_page', $postID); 
      $headline = $pageContent['headline'] ?: $cardContent['headline'] ?: get_the_title(); 
      $subheadline = $pageContent['subheadline'] ?: $cardContent['subheadline']; ?>

<section class="resource-body is-top--lg is-bottom--md is-text--blue-30">
    <div class="cont is-default is-flex--tablet">
      <div class="half resource__main">
        <?php echo acfOutput($headline, 'h1', 'h2'); ?>
        <?php echo acfOutput($subheadline, 'p', 'resource__subtitle h4'); ?>


        <?php if ($pageContent['file_url']): ?>
            <a target="_blank" href="<?php echo $pageContent['file_url']['url']; ?>" class="btn btn--primary is-green is-sm front"><?php _e( 'Download PDF', 'vendavo' ); ?></a>
            <?php elseif ($pageContent['external_url']): ?>
            <a target="_blank" href="<?php echo $pageContent['external_url']; ?>" class="btn btn--primary is-green is-sm front"><?php _e( 'Download PDF', 'vendavo' ); ?></a>
            <?php endif; ?>
        <?php if ($pageContent['slider']): ?>
        <div class="resource-preview">
          <?php foreach ($pageContent['slider'] as $page): ?>
          <div class="resource-preview__page">
            <img src="<?php echo $page['url']; ?>" alt="">
          </div>
          <?php endforeach; ?>
        </div>
        <?php endif; ?>
        <div id="stop"></div>
      </div>
      <div class="half resource__aside">
        <div class="resource-aside">
     
          <div class="aside-cta">
          <?php if ($pageContent['file_url']): ?>
            <a target="_blank" href="<?php echo $pageContent['file_url']['url']; ?>" class="btn btn--primary is-green front"><?php _e( 'Download PDF', 'vendavo' ); ?></a>
            <?php elseif ($pageContent['external_url']): ?>
            <a target="_blank" href="<?php echo $pageContent['external_url']; ?>" class="btn btn--primary is-green front"><?php _e( 'Download PDF', 'vendavo' ); ?></a>
            <?php endif; ?>
            <?php if ($pageContent['bg_image']): ?>
              <?php echo acfImgOutput($pageContent['bg_image'], 'image-fit', ''); ?>
            <?php endif; ?>
          </div>
  
          <div class="aside-content">
            <?php echo acfOutput($pageContent['marketo_headline'], 'h4', ''); ?>
            <?php echo acfOutput($pageContent['marketo_subheadline'], 'p', ''); ?>
            <?php if ($pageContent['marketo']['form_id'] && $pageContent['marketo']['munchkin_id']): ?>
            <form id="mktoForm_<?php echo $pageContent['marketo']['form_id']; ?>"></form>
            <script>
				jQuery(document).ready(function() {
              MktoForms2.loadForm("//app-abb.marketo.com", "<?php echo $pageContent['marketo']['munchkin_id']; ?>", <?php echo $pageContent['marketo']['form_id']; ?>);
				});
            </script>
            <?php endif; ?>
          </div>
        </div>
      </div>
</section>