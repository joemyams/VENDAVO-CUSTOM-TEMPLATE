<?php 
$header = get_field('block_header');
$design = get_field('block_design');
$calc = get_field('calculators', 'options');

$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<div class="is-bg--gray-10 is-top--lg is-bottom--xs text-center">
  <div class="cont is-sm">

    <?php echo acfOutput($header['kicker']['text'], 'p', $header['kicker']['color'] . ' kicker'); ?>
    <?php echo acfOutput($header['headline']['text'], 'h2', $header['headline']['color']); ?>
    <?php echo acfOutput($header['subheadline']['text'], 'p', $header['subheadline']['color']); ?>
  </div>

</div>
<?php echo '<section '. $blockInfo .'><div class="cont rel is-flex--tablet '. $design['width'] . '">'; ?>
<div class="half half--quiz">
  <?php if ($calc['vend_cpq']['form_id']) {
    gravity_form( $calc['vend_cpq']['form_id'], false, false, false, null, true, -1, true );
  } ?>
</div>
<div class="half half--graph">
  <div class="graph__inner">
    <div class="graph__header text-center">
      <h3 id="graphTotal"></h3>
      <p><?php _e( 'Total Annualized Expected Value of CPQ', 'vendavo' ); ?></p>
    </div>
    <div class="graph__chart">
    <canvas id="myChart" width="400" height="400"></canvas>

    </div>
    <div class="graph__legend">
      <div id="chartLegend"></div>
    </div>
   
  </div>
</div>

<?php echo '</div></section>'; ?>
<?php if ($calc['vend_cpq']['marketo_id']): ?>
<form id="mktoForm_<?php echo $calc['vend_cpq']['marketo_id']; ?>" style="display: block;"></form>
<script>
	jQuery(document).on('ready', function() {
		MktoForms2.loadForm(
    "//app-abb.marketo.com",
    "526-WQV-792",
    <?php echo $calc['vend_cpq']['marketo_id']; ?>,
  function (form) {
    form.onSuccess(function (values, followUpUrl) {
      location.href = values.cpqOriginalReportURL;
      return false;
      });
    }
  );
	});
</script>
<?php endif; ?>

<?php endif; ?>