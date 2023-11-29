<?php 
$content = get_field('block_header');
$graph = get_field('block_graph');
$design = get_field('block_design');
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
  <div class="quiz-cont">
    <?php echo acfOutput($content['headline']['text'], 'h2', 'quiz-subpage__headline ' . $content['headline']['color']); ?>
    <div class="quiz-average-graph rel">
      <div class="quiz-average-graph__row is-header">
        <div class="graph-row__left">
          <div class="row-title"><?php _e( 'Capability Category', 'vendavo' ); ?></div>
          <ul class="row-scores">
            <li class="row-score--user"><?php _e( 'Your Scores', 'vendavo' ); ?></li>
            <li class="row-score--b2b"><?php _e( 'B2B Average', 'vendavo' ); ?></li>
          </ul>
        </div>
        <div class="graph-row__right">
          <h4><?php _e( 'Commercial Excellence Maturity', 'vendavo' ); ?></h4>
        </div>
      </div>
      <div class="graph-row__body">
        <?php $categories = array('customer', 'product', 'pricing', 'sales', 'analytics', 'process');
            $subtotalFields = array(64,66,39,40,41,42);
          for ($j = 0; $j < count($subtotalFields); $j++) {
            if ($entry) {
              $graph[$categories[$j]]['score'] = number_format($entry[$subtotalFields[$j]], 2);
              $graph[$categories[$j]]['maturity'] = $entry[64];
            }
              set_query_var('item', $graph[$categories[$j]]);
              get_template_part('/template-parts/quizzes/quiz-slide-graph-row');
          }; ?>
        <div class="graph-row__chart">
          <?php  for ($k = 0; $k < count($subtotalFields); $k++) {
            if ($entry) {
              $graph[$categories[$k]]['score'] = number_format($entry[$subtotalFields[$k]], 2);
              $graph[$categories[$k]]['maturity'] = $entry[64];
            }
            $rowOffset = (100 / count($subtotalFields)) ;
            $rowPosition = ($rowOffset * ($k+1)) - ($rowOffset / 2);
            $item = $graph[$categories[$k]];
            $nextItem = $graph[$categories[$k+1]];
            $scoreLevel = round($item['score']);
            $relativeAverage = ($item['average'] * 25 ) - 13.75;
            $relativeScore = ($item['score'] * 25 )  - 13.75;
            $nextRelativeScore = ($nextItem['score'] * 25 )  - 13.75;
            $nextRowPosition = ($rowOffset * ($k+2)) - ($rowOffset / 2);
            $nextRelativeAverage = ($nextItem['average'] * 25 ) - 13.75;
            
            echo '<div id="scoreDot' . $k .'" class="dot dot--score is-level-'. $scoreLevel .'" style="left:'. $relativeScore .'%; top:'. $rowPosition .'%"></div>';
            echo '<div class="dot dot--b2b is-level-2" style="left:'. $relativeAverage .'%; top:'. $rowPosition .'%"></div>'; 

            if ($k < (count($subtotalFields)) - 1) {
              echo '<svg id="svg"><line x1="'. $relativeScore .'%" x2="'. $nextRelativeScore .'%" y1="'. $rowPosition .'%" y2="'. $nextRowPosition .'%" class="score-line is-average '. $k .'" stroke="white" stroke-width="2" /></svg>';
              echo '<svg id="svg"><line x1="'. $relativeAverage .'%" x2="'. $nextRelativeAverage .'%" y1="'. $rowPosition .'%" y2="'. $nextRowPosition .'%" class="score-line is-b2b'. $k .'" stroke="#67abe1" stroke-width="2" /></svg>';
            };
            
            }; ?>
        </div>

      </div>

      <div class="quiz-average-graph__row is-footer">
        <div class="graph-row__left">
          <?php echo acfOutput($graph['disclaimer'], 'div', 'row-title'); ?>
        </div>
        <div class="graph-row__right">
          <?php  $steps = array('Unstructured', 'Disciplined', 'Adaptive', 'Optimized');
          for ($i = 1; $i <= count($steps); $i++) {
            echo '<div class="graph-cell--level level-'. $i .'"><h4>' .  $steps[$i-1] . '</h4></div>';
          }; ?>
        </div>
      </div>
    </div>
    <?php if ($slideDesign['show_footer']) get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
  </div>
</section>


<style>
.score-line.is-average {
  z-index: 40;
}

#svg {
  position: absolute;
  top: 0;
  left: 10px;
  width: 100%;
  height: 100%;
}
</style>

<?php endif; ?>