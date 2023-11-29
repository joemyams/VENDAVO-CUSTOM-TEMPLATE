<?php 
$content = get_field('block_header');
$results = get_field('block_results');
$design = get_field('block_design');
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
  <div class="quiz-cont">
    <div class="roi-results__aside">
      <?php echo acfOutput($content['headline']['text'], 'h2', 'roi-results__headline ' . $content['headline']['color']); ?>
      <?php echo acfOutput($content['text'], 'div', 'roi-results__text'); ?>
      <ul class="roi-results__first">
        <li><?php _e( 'Annual Sales Revenue', 'vendavo' ); ?>: <strong>$<?php echo number_format($entry['1']); ?></strong></li>
        <li><?php _e( 'Return on Sales', 'vendavo' ); ?>: <strong><?php echo number_format($entry['2']); ?>%</strong></li>
      </ul>
      <h4><?php _e( 'Addressable Revenue', 'vendavo' ); ?></h4>
      <ul>
        <li><?php _e( 'Analytics', 'vendavo' ); ?>: <strong><?php echo number_format($entry['3']); ?>%</strong></li>
        <li><?php _e( 'Price Management', 'vendavo' ); ?>: <strong><?php echo number_format($entry['5']); ?>%</strong></li>
        <li><?php _e( 'Price Optimization', 'vendavo' ); ?>: <strong><?php echo number_format($entry['7']); ?>%</strong></li>
        <li><?php _e( 'Deal Management', 'vendavo' ); ?>: <strong><?php echo number_format($entry['9']); ?>%</strong></li>
      </ul>
      <h4><?php _e( 'Your Ranking', 'vendavo' ); ?></h4>
      <ul>
        <li><?php _e( 'Analytics', 'vendavo' ); ?>: <strong><?php echo number_format($entry['4']); ?></strong></li>
        <li><?php _e( 'Price Management', 'vendavo' ); ?>: <strong><?php echo number_format($entry['6']); ?></strong></li>
        <li><?php _e( 'Price Optimization', 'vendavo' ); ?>: <strong><?php echo number_format($entry['8']); ?></strong></li>
        <li><?php _e( 'Deal Management', 'vendavo' ); ?>: <strong><?php echo number_format($entry['10']); ?></strong></li>
      </ul>
    </div>
    <div class="roi-results__breakdown rel">
      <?php if ($content['image']): ?>
        <img src="<?php echo $content['image']['url']; ?>" class="image-cover" />
      <?php endif; ?>
    </div>

  </div>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>


<style>
  .roi-results__first {
    list-style-type: none;
    padding: 20px;
    margin-top: 30px;
    font-size: 18px;
    border: 2px solid var(--green-10);
    background-color: var(--blue-40);
  }
  .roi-results__first li:not(:first-child) {
    margin-top: 8px;
  }
  .block--quiz-roi-results-summary ul {
    margin-bottom: 20px;
  }
.block--quiz-roi-results-summary .quiz-cont {
  display: flex;
}

.roi-results__breakdown {
  padding: 2rem;
  width: 60%;
}

.roi-results__aside {
  width: 40%;
  height: 100%;
  background-color: var(--blue-30);
  color: #fff;
  padding: 3rem;
}
</style>

<?php endif; ?>