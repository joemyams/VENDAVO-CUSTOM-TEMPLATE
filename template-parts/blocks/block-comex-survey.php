<?php 
$calc = get_field('calculators', 'options');
$content = get_field('block_header');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-flex--desktop '. $design['width'] . '">'; ?>
<div class="half half--form-headline">
  <div class="form-headline__inner">
    <div class="form-intro__inner">
      <?php echo acfImgOutput($content['image'], 'comex-survey__img', ''); ?>
      <div class="form-headline__text">
        <?php echo acfOutput($content['headline']['text'], 'h1', 'comex-survey__headline h3 ' . $content['headline']['color']); ?>
        <?php echo acfOutput($content['subheadline']['text'], 'h6',  'comex-survey__subheadline ' . $content['subheadline']['color']); ?>
      </div>
    </div>
    <div class="form-result__inner" data-active-field="" style="display:none">
      <p class="kicker font-size-xs"><?php _e( 'COMMERCIAL EXCELLENCE MATURITY ASSESSMENT', 'vendavo' ); ?></p>
      <h5 class="is-text--green-10 font-size-h3"><?php _e( 'Here’s where you stand overall:', 'vendavo' ); ?></h5>
      <div class="category-scale">
        <div class="category-scale__single level-1">
          <div class="scale-number">1</div>
          <div class="card-arrow"></div>
          <div class="scale-label"><?php _e( 'Unstructured', 'vendavo' ); ?></div>
        </div>
        <div class="category-scale__single level-2">
          <div class="scale-number">2</div>
          <div class="card-arrow"></div>
          <div class="scale-label"><?php _e( 'Disciplined', 'vendavo' ); ?></div>
        </div>
        <div class="category-scale__single level-3">
          <div class="scale-number">3</div>
          <div class="card-arrow"></div>
          <div class="scale-label"><?php _e( 'Adaptive', 'vendavo' ); ?></div>
        </div>
        <div class="category-scale__single level-4">
          <div class="scale-number">4</div>
          <div class="card-arrow"></div>
          <div class="scale-label"><?php _e( 'Optimized', 'vendavo' ); ?></div>
        </div>
      </div>
      <footer class="form-results__footer"></footer>
    </div>
  </div>
</div>
<div class="half half--multistep-form">
  <?php if ($content['form_id']) {
    gravity_form( $content['form_id'], false, false, false, null, true, -1, true );
  }; ?>
  <?php if ($calc['vend_comex']['marketo_id']): ?>
    <form id="mktoForm_<?php echo $calc['vend_comex']['marketo_id']; ?>" style="display: block;"></form>
    <script>
      jQuery(document).on('ready', function() {
        MktoForms2.loadForm(
          "//app-abb.marketo.com",
          "526-WQV-792",
          <?php echo $calc['vend_comex']['marketo_id']; ?>,
          function (form) {
            form.onSuccess(function (values, followUpUrl) {
              location.href = values.cEMAOriginalReportURL;
              return false;
            });
          }
          );
      });
    </script>
  <?php endif; ?>
  
</div>

<?php echo '</div></section>'; ?>
<div id="stop"></div>

<?php endif; ?>