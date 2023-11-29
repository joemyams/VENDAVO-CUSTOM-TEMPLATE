<?php 
$content = get_field('block_header');
$design = get_field('block_design');
$entry_id = $_GET['e'] ?: '';
$calcs = get_field('calculators', 'options');
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 
if ($entry_id) {
 $entry = GFAPI::get_entry( $entry_id ); 
 if ($entry['form_id'] === $calcs['vend_comex']['form_id']) {
   $name =  $entry['57.3'] . ' ' . $entry['57.6'];
   $company = $entry['59']; 
 } elseif ($entry['form_id'] === $calcs['vend_cpq']['form_id']) {
   $name = $entry['44.3'] . ' ' . $entry['44.6'];
   $company = $entry['45']; 
 } elseif ($entry['form_id'] === $calcs['vend_roi']['form_id']) {
   $name = $entry['118.3'] . ' ' . $entry['118.6'];
   $company = $entry['127']; 
 }
}; 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont">
    <div class="cover-page__text front">
      <div class="cover-page__text-inner">
        <?php echo acfOutput($content['kicker']['text'], 'p', 'kicker ' . $content['kicker']['color']);
              echo acfOutput($content['headline']['text'], 'h1', 'cover-page__headline ' . $content['headline']['color']); ?>
        <?php if ($entry_id): ?>
        <div class="cover-page__prepared-for">
          <p class="kicker"><?php _e( 'Exclusively Prepared For:', 'vendavo' ); ?></p>
          <h3><?php echo $name; ?></h3>
          <h5><?php echo $company ?></h5>
        </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if ($content['image']) echo '<img class="image-fit" src="'. $content['image']['url']  .'"/>'; ?>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>

<?php endif; ?>