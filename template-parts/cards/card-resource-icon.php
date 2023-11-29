<article class="popular-resource">
    <div class="popular-resource__inner">
        <div class="popular-resource__image">
          <?php echo acfImgOutput($details['image'], '', ''); ?>
        </div>
        <div class="popular-resource__text">
            <?php echo acfOutput($details['kicker'], 'p', 'kicker'); ?>
            <?php echo acfOutput($details['title'], 'h4', 'popular-resource__headline'); ?>
            <?php echo acfOutput($details['subheadline'], 'p', 'popular-resource__subheadline'); ?>
            <?php if ($details['is_library']) {
                echo acfLinkOutput($details['resource_link'], 'btn btn--primary is-green is-sm');
            } else {
              set_query_var('button', $details['link']);
              get_template_part('/template-parts/components/dynamic-cta');
            }; ?>
          </div>
      </div>
  </article> 