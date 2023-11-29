<?php 
$content = get_field('block_header');
$results = get_field('block_results');
$design = get_field('block_design');
$entry_id = $_GET['e'] ?: '';
if ($entry_id) {
  $entry = GFAPI::get_entry( $entry_id );
  if ($results['stage'] == 'is-first') {
    $statNum = $entry['13'];
  } elseif ($results['stage'] == 'is-second') {
    $statNum = $entry['24'];
  } elseif ($results['stage'] == 'is-third') {
    $statNum = $entry['16'];
  } elseif ($results['stage'] == 'is-fourth') {
    $statNum = $entry['20'];
  }
};
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont results-<?php echo $results['stage']; ?>">
    <div class="cpq-breakdown__image">
      <div class="cpq-tiers">
        <div class="cpq-tier is-active"><?php _e( 'Sales Effectiveness, Quoting Capacity', 'vendavo' ); ?></div>
        <div class="cpq-tier"><?php _e( 'Go To Market Effectiveness', 'vendavo' ); ?></div>
        <div class="cpq-tier"><?php _e( 'Pricing Discipline, Margin Management', 'vendavo' ); ?></div>
        <div class="cpq-tier"><?php _e( 'Back Office & Supply Chain Efficiency', 'vendavo' ); ?></div>
      </div>
      <div class="cpq-image__stat">
        <?php echo acfOutput($results['result_labels']['top'], 'p', 'kicker'); ?>
        <p class="cpq-result"><?php echo $statNum; ?>%</p>
        <?php echo acfOutput($results['result_labels']['bottom'], 'p', 'kicker'); ?>
      </div>
      <div class="cpq-image">
        <?php if ($content['image']) echo '<img class="image-fit" src="'. $content['image']['url']  .'"/>'; ?>
      </div>
    </div>
    <div class="cpq-breakdown__text">
      <div class="cpq-text">
        <div class="cpq-text__inner rte">
          <?php echo acfOutput($content['headline']['text'], 'h3', 'cpq-category__headline ' . $content['headline']['color']); ?>
          <br>
          <?php echo acfOutput($content['text'], 'div', ''); ?>
        </div>
      </div>
    </div>
  </div>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>

<?php endif; ?>