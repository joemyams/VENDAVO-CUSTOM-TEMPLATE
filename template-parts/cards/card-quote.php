<div class="front quote-card__bottom">
  <div>
  <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'quote', 36, 'testimonal__quote-svg is-white' ); ?>
  <?php echo acfOutput($details['headline'], 'p', 'quote-card__quote'); ?>
  </div>
  <div class="quote-card__meta align-items-center">
  <div>
    <?php echo acfImgOutput($details['source']['headshot'], '', 'quote-card__headshot mb-2'); ?>
    <?php echo acfOutput($details['source']['name'], 'h5', 'quote-card__name'); ?>
    <?php echo acfOutput($details['source']['title'], 'p', 'quote-card__title'); ?>
    <?php if (!$details['company']['logo']) echo acfOutput($details['company']['name'], 'p', 'quote-card__company'); ?>
  </div>
  <?php if ($details['company']['logo_white']): ?>
     <?php echo acfImgOutput($details['company']['logo_white'], '', 'quote-card__logo'); ?>
  <?php else: ?>
     <?php echo acfImgOutput($details['company']['logo'], '', 'quote-card__logo'); ?>
  <?php endif; ?>
</div>

</div>
  <?php if ($details['case_study']) : ?>
    <a class="quote-card__cta" href="<?php echo $details['case_study']; ?>"><span><?php _e( 'View Case Study', 'vendavo' ); ?></span></a>
  <?php endif; ?>
  