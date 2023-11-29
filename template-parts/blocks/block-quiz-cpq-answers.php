<?php 
$content = get_field('block_header');
$results = get_field('block_results');
$design = get_field('block_design');
$entry_id = $_GET['e'] ?: '';
if ($entry_id) {
  $entry = GFAPI::get_entry( $entry_id );
  if ($results['stage'] == 'is-first') {
    $statNum = $entry['19'];
  } elseif ($results['stage'] == 'is-second') {
    $statNum = $entry['30'];
  } elseif ($results['stage'] == 'is-third') {
    $statNum = $entry['22'];
  } elseif ($results['stage'] == 'is-fourth') {
    $statNum = $entry['26'];
  }
};
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont has-padding">
    <?php echo acfOutput($content['headline']['text'], 'h3', 'cpq-answers__headline text-center ' . $content['headline']['color']); ?>
    <?php if ($results) {
      echo '<div class="cpq-answer-grid">';
      for($i = 0; $i < count($results); $i++) {
        $fieldNum = $results[$i]['form_field'];
        $resultNum = $entry[$fieldNum];
       if ($results[$i]['format_number'] == 'currency') {
          $subtotal = '$' . number_format($resultNum);
        } elseif ($results[$i]['format_number'] == 'percent') {
          $subtotal = $entry[$results[$i]['form_field']] . '%';
        } else {
          $subtotal = $entry[$results[$i]['form_field']];
        }
        echo '<div class="cpq-answer-row"><div class="answer-row__index">' . ($i+1)  .'</div><div class="answer-row__label">'. $results[$i]['label'] .'</div><div class="answer-row__result">'. $subtotal .'</div></div>';
      }
      echo '</div>';
    }; ?>
  </div>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>


<style>
.cpq-answer-grid {
  max-width: 700px;
  margin: 0 auto;
}

.cpq-answers__headline {
  margin-bottom: 2rem;
  margin-top: -1.5rem;
}

.cpq-answer-row {
  display: flex;
  border-radius: 10px;
  align-items: center;
  box-shadow: var(--dropShadow-10);
  background-color: #fff;
  margin-top: 1rem;
  overflow: hidden;
}

.answer-row__index {
  width: 40px;
  color: var(--green-20);
  align-self: stretch;
  display: flex;
  font-weight: 600;
  align-items: center;
  text-align: center;
  border-right: 1px solid var(--gray-20);
  background-color: var(--gray-10);
}

.answer-row__result {
  font-weight: 600;
  font-size: 20px;
  text-align: right;
}

.cpq-answer-row>div:nth-child(2) {
  width: 50%;
  flex-grow: 1;
  border-right: 1px solid var(--gray-20);
}

.cpq-answer-row>div {
  padding: 1rem;
}

.cpq-answer-row>div:last-child {
  width: 180px;
  padding: 1rem;
}
</style>

<?php endif; ?>