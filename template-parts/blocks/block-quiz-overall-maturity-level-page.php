<?php 
$content = get_field('block_header');
$design = get_field('block_design');
$cards = get_field('block_cards');
$slideDesign = get_field('quiz_design');
$entry_id = $_GET['e'] ?: '';
if ($entry_id) {
  $entry = GFAPI::get_entry( $entry_id );
};
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont has-padding">
    <div class="overall-level-page__header">
      <?php echo acfOutput($content['kicker']['text'], 'p', 'kicker ' . $content['kicker']['color']); ?>
      <?php echo acfOutput($content['headline']['text'], 'h1', 'cover-page__headline ' . $content['headline']['color']); ?>
    </div>
    <?php if ($cards): ?>
    <div class="overall-level-grid text-center">
      <?php $cardCounter = 1; foreach ($cards as $card): ?>
      <div data-index="<?php echo $cardCounter; ?>"
        class="level-single<?php if ( $entry && $cardCounter == $entry['64']) echo ' is-active'; ?>">
        <div class="level-single__inner">
          <?php echo acfOutput($card['label'], 'p', 'level-single__label'); ?>
          <?php echo acfOutput($card['number'], 'p', 'level-single__num'); ?>
          <?php echo acfOutput($card['headline'], 'p', 'level-single__title'); ?>
          <?php echo acfOutput($card['subheadline'], 'p', 'level-single__subtitle'); ?>
          <?php echo acfOutput($card['description'], 'p', 'level-single__desc'); ?>
        </div>
      </div>
      <?php $cardCounter++; endforeach; ?>
    </div>
    <?php endif; ?>
    <?php if ($slideDesign['show_footer']) get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
  </div>
</section>

<?php endif; ?>