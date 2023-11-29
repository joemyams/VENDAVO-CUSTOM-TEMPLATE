<?php 
$content = get_field('block_header');
$cards = get_field('block_cards');
$design = get_field('block_design');
$slideDesign = get_field('quiz_design');
$gravity_id = get_field('gravity_id');
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
  <?php if (is_user_logged_in() && !is_admin()) echo '<ul class="stage-preview"><li>Preview As:</li><li class="stage-toggle" data-stage="1">Stage 1</li><li class="stage-toggle" data-stage="2">Stage 2</li><li class="stage-toggle" data-stage="3">Stage 3</li><li  class="stage-toggle" data-stage="4">Stage 4</li></ul>'; ?>

  <div class="quiz-cont container-stage-<?php echo $entry ? $entry[$gravity_id] : 1; ?>">
    <div class="category-overview">
      <div>
        <?php echo acfImgOutput($content['icon'], 'capability-icon', ''); ?>
        <?php echo acfOutput($content['kicker']['text'], 'p', 'kicker ' . $content['kicker']['color']); ?>
        <?php echo acfOutput($content['headline']['text'], 'h1', 'cover-page__headline ' . $content['headline']['color']); ?>
      </div>
      <?php foreach($cards as $card): ?>
      <div class="category-text is-stage-<?php echo $card['stage']; ?>">
        <div>
          <?php echo acfOutput($card['headline'], 'h4', ''); ?>
          <?php echo acfOutput($card['subheadline'], 'p', ''); ?>
        </div>
        <div class="category-scale is-level-2">
          <?php $categories = array('Unstructured', 'Disciplined', 'Adaptive', 'Optimized'); 
          for ($i = 1; $i <= count($categories); $i++) {
            echo '<div class="category-scale__single level-'. $i .'">
            <div class="scale-number">'. $i .'</div>
            <div class="card-arrow"></div>
            <div class="scale-label">'. $categories[$i-1] .'</div></div>';
          }; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
    <div class="category-tips rel">
      <?php foreach($cards as $card): ?>
      <div class="category-tips-text  is-stage-<?php echo $card['stage']; ?>">
        <div>

          <div class="top-tier-badge">
            <div class="top-badge"></div>
            <div class="top-text">
              <p><strong><?php _e( 'Congratulations!', 'vendavo' ); ?></strong> <?php _e( 'You are truly leading the pack. Most or all of these areas are well-practiced and familiar to everyone in your organization.', 'vendavo' ); ?></p>
            </div>
          </div>

          <?php echo acfOutput($card['aside'], 'div', ''); ?>
        </div>

      </div>
      <?php endforeach; ?>
    </div>
    <?php if ($slideDesign['show_footer']) get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
  </div>
</section>

<?php endif; ?>