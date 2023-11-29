<div class="navigator__cell pos-rel item w-100">
  <div class="card card-quote-v2 front quote-card__bottom align-items-stretch">
    <div class="card-header pos-rel">
      <div class="quote-svg__image z-2" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/quote.svg) no-repeat;"></div>
      <div class="quote-svg__bg absolute-fill z-2" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/quote-bg.jpg) no-repeat;"></div>
      <?php if($details['source']['headshot'] && !empty($details['source']['headshot'])): 
        echo acfImgOutput($details['source']['headshot'], 'abs-centered', 'quote-card__headshot z-3'); 
      else:
        echo acfImgOutput($details['company']['logo_white'], 'abs-centered', 'quote-card__headshot z-3');
      endif; ?>
      <?php if ($details['case_study']) : ?>
        <a class="quote-card__cta" href="<?php echo $details['case_study']; ?>"><span><?php _e( 'View Case Study', 'vendavo' ); ?></span></a>
      <?php endif; ?>
    </div>
    <div class="card-body">
      <?php echo acfOutput($details['headline'], 'p', 'quote-card__quote'); ?>
    </div>
    <div class="card-footer pos-rel">
      <div class="quote-card__meta align-items-center mt-0 pt-0 d-block d-sm-flex">
        <div class="inner">
          <?php echo acfOutput($details['source']['name'], 'h5', 'quote-card__name'); ?>
          <?php echo acfOutput($details['source']['title'], 'p', 'quote-card__title'); ?>
        </div>
        <?php if ($details['company']['name']): echo acfOutput($details['company']['name'], 'p', 'quote-card__company'); endif; ?>
      </div>
    </div>
  </div>
</div>