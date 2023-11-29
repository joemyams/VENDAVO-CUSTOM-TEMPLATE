<?php 
$variant = get_field('block_variant');
$text = get_field('block_text');
$image = get_field('block_image');
$ctas = get_field('block_ctas');
$statColor = get_field('stat_color');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-flex--tablet '. $design['width'] . ' ' . $text['position'] . '">'; ?>
<div class="half half--text rte">
  <?php echo acfImgOutput($text['image'], 'half-form__image', ''); ?>
  <?php  echo acfReturnTextBlock( $text, 'half-text');
    if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); } ?>
</div>
<div class="half half--form">
  <div class="half-form__inner">

    <h3 class="is-text--white text-center form--headline"><?php _e( 'Get Started', 'vendavo' ); ?></h3>
    <form id="mktoForm_610"></form>
    <script>
    MktoForms2.loadForm("//app-abb.marketo.com", "526-WQV-792", 610);
    </script>
  </div>

</div>
<?php echo '</div></section>'; ?>



<style>
.half--text {
  padding-right: 3rem;
  padding-bottom: 5rem;
}

.block--half-form {
  position: relative;
}

.form--headline {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.block--half-form::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #fff;
}

.half-form__image {
  width: 80%;
  margin: 0 0 1rem 0;
}

.half-form__inner {
  max-width: 500px;
  position: relative;
  z-index: 4;
  background-color: var(--blue-20);
  border-radius: var(--radius-MD);
  padding: 3rem;
  box-shadow: var(--dropShadow-20);
  margin-left: auto;
}

.half--form .mktoButtonRow,
.half--form .mktoForm .mktoSimple .mktoButton,
.half--form .mktoHasWidth,
.half--form .mktoForm {
  max-width: 100%;
  width: 100% !important;
}

.half--form .mktoForm .mktoGutter {
  height: 0.2rem;
}

.half--form .mktoForm .mktoSimple .mktoButton {
  left: 0 !important;
  background: var(--gradient-Green) !important;
  border-radius: var(--radius-SM) !important;
  text-transform: capitalize !important;
  font-weight: 400 !important;
  font-size: 22px !important;
}

.half--form {}

.half--form .mktoFieldDescriptor.mktoFormCol {
  width: 100%;
}

.half--form .mktoFieldWrap,
.half--form .mktoFieldWrap input {
  width: 100%;
}


@media screen and (min-width: 1200px) {
  .half-text__subheadline {
    max-width: 600px;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
  }

  .half-text__body {
    max-width: 500px;
  }

  .block--half-form h2 {
    font-size: 2.975rem !important;
  }
}
</style>

<?php endif; ?>