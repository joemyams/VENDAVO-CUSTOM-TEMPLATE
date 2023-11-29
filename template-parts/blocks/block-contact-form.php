<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
$form = get_field('block_form');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-flex--tablet text-center '. $design['width'] . '">'; ?>
<div class="half half--form">
  <?php 
  if($form['form_heading']) : echo acfOutput($form['form_heading'], 'h4', 'header-form__headline'); endif; ?>
  <?php $formID = !empty($form['form_id']) ? $form['form_id'] : '610'; ?>
  <form id="mktoForm_<?php echo $formID; ?>"></form>
  <script>
    jQuery(document).ready(function() {
      MktoForms2.loadForm("//app-abb.marketo.com", "526-WQV-792", <?php echo $formID; ?>);
    });
  </script>
</div>
<div class="half half--contact">
  <div class="contact-block is-bg--blue-G is-text--white">
    <h5><?php _e( 'Global HQ', 'vendavo' ); ?></h5>
    <p><?php _e( 'Email:', 'vendavo' ); ?> <a href="mailto:vsupport@vendavo.com">vsupport@vendavo.com</a></p>
    <p><?php _e( 'Phone:', 'vendavo' ); ?> <a href="tel:303-309-2320">+1.303.309.2320</a></p>
  </div>
  <div class="contact-block is-bg--purple-G is-text--white">
    <h5><?php _e( 'Support Hotline', 'vendavo' ); ?></h5>
    <p><?php _e( 'Email:', 'vendavo' ); ?> <a href="mailto:vsupport@vendavo.com">vsupport@vendavo.com</a></p>
    <p><?php _e( 'Phone:', 'vendavo' ); ?> <a href="tel:303-309-2320">+1.303.309.2320 <?php _e( '(Option 2 for Support)', 'vendavo' ); ?></a></p>
  </div>
  <div class="contact-block is-bg--green-G is-text--white">
    <h5><?php _e( 'Press Inquiries', 'vendavo' ); ?></h5>
    <p><?php _e( 'For press and analyst inquiries, contact the marketing department at', 'vendavo' ); ?> <a
      href="mailto:press@vendavo.com">press@vendavo.com</a>.
    </p>
  </div>
</div>

<?php echo '</div></section>'; ?>

<?php endif; ?>