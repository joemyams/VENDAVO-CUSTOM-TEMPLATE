<?php 
$prefooter = get_field('prefooter', 'options'); 
$footerHeadline = get_field('footer_override_headline') ?: $prefooter['headline'];
$footerLink = get_field('footer_override_link') ?: $prefooter['button'];
$footerImage = get_field('footer_override') ?: $prefooter['image'];
$disableCTA = get_field('disable_cta');
if(!($disableCTA || $prefooter['disable_cta'])) : ?>
<section class="pre-footer">
  <div class="cont is-default front">
    <?php echo acfImgOutput($footerImage, 'image-fit', 'pre-footer__aspect'); ?>
    <div class="pre-footer__content">
      <?php echo acfOutput($footerHeadline, 'h3', 'pre-footer__headline'); ?>
      <a href="<?php echo $footerLink['url']; ?>" class="pre-footer__btn btn btn--primary is-green"><?php echo $footerLink['title']; ?></a>
    </div>
  </div>
</section>
<?php endif; ?>