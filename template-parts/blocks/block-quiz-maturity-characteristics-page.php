<?php 
$content = get_field('block_header');
$table = get_field('block_table');
$design = get_field('block_design');
$slideDesign = get_field('quiz_design');
$entry_id = $_GET['e'] ?: '';
if($entry_id) {
  $entry = GFAPI::get_entry( $entry_id );
}
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont has-padding is-level-<?php echo $entry ? $entry[64] : 1; ?>">
    <div class="characteristics__header">
      <?php echo acfOutput($content['kicker']['text'], 'p', 'kicker ' . $content['kicker']['color']); ?>
      <?php echo acfOutput($content['headline']['text'], 'h2', 'quiz-subpage__headline ' . $content['headline']['color']); ?>
      <?php echo acfOutput($content['subheadline']['text'], 'h4', 'quiz-subpage__subheadline ' . $content['subheadline']['color']); ?>
    </div>
    <?php 
      $stages = array('block_stage_one', 'block_stage_two', 'block_stage_three', 'block_stage_four');
      $counter = 1;
      foreach ($stages as $stage) {
        if (get_field($stage)) {
          echo '<div class="characteristics__table" data-num="'. $counter .'">';
          set_query_var('stage', get_field($stage));
          get_template_part('/template-parts/quizzes/characteristics-table');
          echo '</div>';
          $counter++;
        };
      }; 
      if ($slideDesign['show_footer']) get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
  </div>
</section>

<?php endif; ?>