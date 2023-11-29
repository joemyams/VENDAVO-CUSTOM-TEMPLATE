<?php 
$content = get_field('block_header');
$design = get_field('block_design');
$slideDesign = get_field('quiz_design');
$entry_id =  '189';
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
    <div class="statistic-page__header">
      <?php echo acfOutput($content['kicker']['text'], 'p', 'kicker ' . $content['kicker']['color']); ?>
      <?php echo acfOutput($content['headline']['text'], 'h1', 'cover-page__headline ' . $content['headline']['color']); ?>
    </div>
    <div class="statistic-page__body">
      <div class="statistic-page__image">
        <img class="" src="<?php echo $content['image']['url']; ?>" alt="">
      </div>
      <div class="statistic-page__text">
        <?php echo acfOutput($content['stat']['text'], 'div', 'statistic-page__number ' . $content['stat']['color']); ?>
        <?php echo acfOutput($content['subheadline']['text'], 'h3', 'statistic-page__subheadline ' . $content['subheadline']['color']); ?>
      </div>
    </div>

  </div>
  <?php if ($slideDesign['show_footer']) get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>

</section>

<?php endif; ?>