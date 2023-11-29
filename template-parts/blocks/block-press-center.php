<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<div class="cont is-sm">
<div class="press-center__filters">
  <div class="press-filters__inner text-center">
  <?php echo do_shortcode('[ajax_load_more_filters id="newscategories" target="7652464726"]'); ?>

  </div>
</div>
</div>
<?php echo '<section '. $blockInfo .'><div class="cont is-lg is-flex--desktop '. $design['width'] . '">'; ?>
<div class="half press-center__right">
  <div class="press-center__contact">
    <div class="press-contact__inner is-bg--purple-G is-text--white">
      <h4 class="press-contact__headline"><?php _e( 'Editorial Contact:', 'vendavo' ); ?></h4>
      <div class="press-contact__details">
      <?php $contact = get_field('press_contact'); ?>
          <?php echo acfImgOutput($contact['headshot'], '', 'press-contact__headshot'); ?>
        <div>
        <?php echo acfOutput($contact['name'], 'h5', 'press-contact__name'); ?>
        <?php echo acfOutput($contact['title'], 'p', 'press-contact__title'); ?>
        <div class="cta-container">
        <?php echo acfLinkOutput($contact['link'], 'btn btn--secondary is-white is-sm'); ?>
        </div>
        </div>
      </div>
      
    </div>
  </div>
 
</div>
<div class="half press-center__left">
<?php echo do_shortcode('[ajax_load_more id="7652464726" container_type="div" filters="true" filters_scroll="true" theme_repeater="theme_repeater.php" post_type="post" posts_per_page="9" category="news-coverage,news-releases"]'); ?>
</div>

<div id="stop"></div>
<?php echo '</div></section>'; ?>

<?php endif; ?>