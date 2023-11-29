<?php 
$content = get_field('block_header');
$results = get_field('block_results');
$design = get_field('block_design');
$lowLevel = get_field('low_level');
$medLevel = get_field('medium_level');
$highLevel = get_field('high_level');
$quote = get_field('block_quote');
$entry_id = $_GET['e'] ?: '';
if ($entry_id) {
  $entry = GFAPI::get_entry( $entry_id );
};
if ($content['subtotal_to_show'] == 'analytics' ) {
  $category = 'Analytics';
  $subtotal = number_format($entry['106']);
  $ranking = $entry['4'];
  if ($ranking <= 33) {
    $color = 'is-red';
  } elseif ($ranking <= 66) {
    $color = 'is-orange';
  } else {
    $color = 'is-green';
  }
} elseif ($content['subtotal_to_show'] == 'price-mgmt') {
  $category = 'Price Management';
  $subtotal = number_format($entry['108']);
  $ranking = $entry['6'];
  if ($ranking <= 33) {
    $color = 'is-red';
  } elseif ($ranking <= 66) {
    $color = 'is-orange';
  } else {
    $color = 'is-green';
  }
} elseif ($content['subtotal_to_show'] == 'price-opt') {
  $category = 'Price Optimization';
  $subtotal = number_format($entry['109']);
  $ranking = $entry['8'];
    if ($ranking <= 33) {
    $color = 'is-red';
  } elseif ($ranking <= 66) {
    $color = 'is-orange';
  } else {
    $color = 'is-green';
  }
} elseif ($content['subtotal_to_show'] == 'deal-mgmt') {
  $category = 'Deal Management';
  $subtotal = number_format($entry['107']);
  $ranking = $entry['9'];
    if ($ranking <= 33) {
    $color = 'is-red';
  } elseif ($ranking <= 66) {
    $color = 'is-orange';
  } else {
    $color = 'is-green';
  }
};
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont">
    <div class="roi-category__aside">
      <?php echo acfImgOutput($content['image'], 'roi-category__icon', ''); ?>
      <?php echo acfOutput($content['headline']['text'], 'h2', 'roi-category__headline ' . $content['headline']['color']); ?>
      <?php echo acfOutput($content['text'], 'div', 'roi-category__text'); ?>
    </div>
    <div class="roi-category__breakdown">
      <div class="roi-breakdown__maturity">
        <div class="roi-maturity">
          <div class="roi-maturity__num">$<?php echo $subtotal; ?></div>
          <div class="roi-maturity__label"><?php _e( 'Your Expected Benefit from improved', 'vendavo' ); ?> <strong><?php echo $category; ?></strong>
            <?php _e( 'maturity', 'vendavo' ); ?></div>
        </div>
      </div>
      <div class="roi-breakdown__scale">
        <div class="breakdown-scale__header">
          <div class="col-left">
            <?php echo acfOutput($ranking, 'h1', $color . ' breakdown-scale__answer'); ?>
          </div>
          <div class="col-right">
            <div class="breakdown-scale"></div>
            <div class="breakdown-labels">
              <?php echo acfOutput($lowLevel['headline'], 'div', 'breakdown-scale__label'); ?>
              <?php echo acfOutput($medLevel['headline'], 'div', 'breakdown-scale__label'); ?>
              <?php echo acfOutput($highLevel['headline'], 'div', 'breakdown-scale__label'); ?>

            </div>
          </div>
        </div>
        <div class="breakdown-scale__body">
          <div class="breadkdown-scale__results">
            <h6><?php _e( 'Your Answer for', 'vendavo' ); ?> <?php echo $category; ?> <?php _e( 'Maturity Ranking', 'vendavo' ); ?></h6>
          </div>
          <div class="breadkdown-scale__description">
            <?php echo acfOutput($lowLevel['copy'], 'div', 'results-col'); ?>
            <?php echo acfOutput($medLevel['copy'], 'div', 'results-col'); ?>
            <?php echo acfOutput($highLevel['copy'], 'div', 'results-col'); ?>
          </div>
        </div>

      </div>
      <?php if ($quote['quote']): ?>
      <div class="roi-breakdown__quote">
        <?php echo acfOutput($quote['quote'], 'div', 'roi-quote__quote'); ?>
        <?php echo acfOutput($quote['source'], 'p', 'roi-quote__source'); ?>
      </div>
      <?php endif; ?>
    </div>

  </div>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>


<style>
.roi-category__icon {
  width: 80px;
  margin-bottom: 2rem;
}

.roi-breakdown__scale {
  background-color: var(--gray-10);
  border-left: 10px solid var(--green-10);
  border-top-right-radius: var(--radius-MD);
  border-bottom-right-radius: var(--radius-MD);

  padding: 1.5rem;
  margin-top: 2rem;

}
.roi-breakdown__quote {
  margin-top: 2rem;
  color: #696057;
  padding-left: 3rem;
  padding-top: 1rem;
  position: relative;
}
.roi-breakdown__quote::before {
  content: '“';
  font-size: 300px;
  opacity: .125;
  line-height: 0.75;
  position: absolute;
  height: 100px;
  top: 0;
  left: 0;
}
.roi-quote__quote p {
  font-size: 18px;
  font-style: italic;
  padding-right: 1rem;

  line-height: 1.4;
  position: relative;
  z-index: 1;
}
.roi-quote__source {
  /* margin-top: 1rem; */
  text-align: right;
  padding: 1rem;
}
.breadkdown-scale__results {
  width: 30%;
}

.breakdown-scale__body {
  display: flex;
}

.breadkdown-scale__description {
  display: flex;
  width: 70%;
}

.breadkdown-scale__description .results-col {
  width: 33.333%;
}

.breadkdown-scale__description .results-col li {
  margin-bottom: .5rem;
  line-height: 1.3;
}

.breadkdown-scale__description .results-col li,
.breadkdown-scale__description .results-col p {
  font-size: 11px;
  color: #696057;
}

.breakdown-scale {
  height: 20px;
  background: linear-gradient(270deg, rgba(63, 180, 58, 1) 0%, rgba(243, 253, 43, 1) 33%, rgba(248, 183, 57, 1) 60%, rgba(252, 69, 69, 1) 100%);
  position: relative;
  width: 100%;

}

.block--quiz-roi-category-breakdown .quiz-cont {
  display: flex;
}

.breakdown-labels {
  display: flex;
}

.breakdown-scale__label {
  width: 33.333%;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: .5rem;
  position: relative;
  padding: 1rem 0 0 0;
}

.breakdown-scale__label::before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 2px;
  height: 30px;
  background: var(--gray-30);
}

.breakdown-scale__header {
  display: flex;
}

.breakdown-scale__header .col-right {
  width: 70%;
}

.breakdown-scale__header .col-left {
  width: 30%;
}

.roi-maturity__num {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  color: var(--green-10);
  width: 60%;
}

.roi-maturity__label {
  width: 40%;
  color: var(--gray-30);
  font-weight: 500;
  border-left: 2px solid var(--green-10);
  padding-left: 1.5rem;
  line-height: 1.4;
}

.roi-maturity {
  border: 2px solid var(--green-10);
  padding: 1.5rem;
  border-radius: var(--radius-MD);

  width: 100%;
  display: flex;
  align-items: center;
}

.roi-category__breakdown {
  padding: 2rem;
  width: 60%;
}

.roi-category__aside {
  width: 40%;
  height: 100%;
  background-color: var(--blue-30);
  color: #fff;
  padding: 3rem;
}
</style>

<?php endif; ?>