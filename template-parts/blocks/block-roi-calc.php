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

    <?php if ($calc['vend_roi']['form_id']) {
    gravity_form( $calc['vend_roi']['form_id'], false, false, false, null, true, -1, true );
  } ?>
</div>
<div class="half half--graph">
  <div class="graph__inner">
    <div class="graph__header text-center">
      <h3 id="graphTotal"></h3>
      <p><?php _e( 'Total Expected Value of Vendavo Pricing Solutions', 'vendavo' ); ?></p>
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
<?php if ($calc['vend_roi']['marketo_id']): ?>
<form id="mktoForm_<?php echo $calc['vend_roi']['marketo_id']; ?>" style="display: block;"></form>
<script>
	jQuery(document).on('ready', function(){
		MktoForms2.loadForm(
    "//app-abb.marketo.com",
    "526-WQV-792",
    <?php echo $calc['vend_roi']['marketo_id']; ?>,
  function (form) {
    form.onSuccess(function (values, followUpUrl) {
      location.href = values.roiOriginalReportURL;
      return false;
      });
    }
  );
	});

</script>
<?php endif; ?>


<style>
.block--roi-calc {}
.block--roi-calc .gform_body > .gform_fields {
  padding-right: 0;
  
}
.block--roi-calc .gform_wrapper ul.gform_fields li.gfield.gfield_html {
  padding: 0;
}
.block--roi-calc .gform_body > .gform_fields > .gfield:nth-child(2),
.block--roi-calc .gform_body > .gform_fields > .gfield:first-child {
  width: 48% !important;
}
.block--roi-calc .roi__2col-fields li.gfield.gsection.field_sublabel_below.field_description_below {
  margin-top: 1rem !important;
  padding: 0;
  /* border: 1px solid red !important; */
}
.block--roi-calc .roi__2col-fields {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  border-radius: var(--radius-LG);
  padding: 2rem;
  margin-right: 2%;
  box-shadow: var(--dropShadow-20);
}
.block--roi-calc .gsection {
  border-bottom: none !important;
  width: 36% !important;
  max-width: 200px;
  padding-right: 1.5rem;
  margin: 0 !important;

  position: relative;
}
.roi__2col__header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.roi__2col__header .popover-icon {
  position: relative;
  font-size: 13px;
  right: 0 !important;
  margin: 0;
  display: none;
}
.block--roi-calc .graph__inner {
  padding-bottom: 2.5rem;
}
.roi__2col__col{
  width: 31.5%;
  text-align: center;
  position: relative;

}
.block--roi-calc .roi__2col-fields .gsection_title {
  font-size: 1rem;
  padding: 0;
}
.block--roi-calc .roi-2col__header-label {
  font-weight: 600;
  line-height: 1.2;
  padding: 0;
  margin: 0;
}
.block--roi-calc .roi__2col-fields .gfield {
  width: 30%;
  margin-top: 1rem;
}
.block--roi-calc .roi__2col-fields .gfield:not(.gsection) .gfield_label {
  display: none !important;
}
.block--roi-calc .roi__2col-fields .popover-icon {
  right: 1rem;
}
</style>

<?php endif; ?>