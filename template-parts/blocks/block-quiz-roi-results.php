<?php 
$content = get_field('block_header');
$results = get_field('block_results');
$design = get_field('block_design');
$entry_id = $_GET['e'] ?: '';
if ($entry_id) {
  $entry = GFAPI::get_entry( $entry_id );
  $conTotal = $entry['115'];
  $expectTotal = $entry['110'];
  $difference = round(($conTotal/$expectTotal) * 100, 2);

};
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont has-padding">
    <div class="cpq-results__graph rel">
      <p class="graph-y__label kicker"><?php _e( 'Total Benefit Range', 'vendavo' ); ?></p>

      <div class="graph-col is-conservative" style="height: <?php echo $difference; ?>%">
        <div class="graph-col__inner">
          <p class="graph-col__total">$
            <?php echo number_format($conTotal); ?></p>
          <div class="graph-piece is-sales is-sales-color" style="height: <?php echo $entry['123']; ?>%"></div>
          <div class="graph-piece is-market is-market-color" style="height: <?php echo $entry['124']; ?>%"></div>
          <div class="graph-piece is-pricing is-pricing-color" style="height: <?php echo $entry['125']; ?>%"></div>
          <div class="graph-piece is-supply-chain is-supply-color" style="height: <?php echo $entry['126']; ?>%"></div>
        </div>
        <p class="graph-col__label kicker"><?php _e( 'Conservative', 'vendavo' ); ?></p>

      </div>
      <div class="graph-col is-expected" style="height:100%;">
        <div class="graph-col__inner">
          <p class="graph-col__total">$

            <?php echo number_format($expectTotal); ?></p>

          <div class="graph-piece is-sales is-sales-color" style="height: <?php echo $entry['119']; ?>%"></div>
          <div class="graph-piece is-market is-market-color" style="height: <?php echo $entry['120']; ?>%"></div>
          <div class="graph-piece is-pricing is-pricing-color" style="height: <?php echo $entry['121']; ?>%"></div>
          <div class="graph-piece is-supply-chain is-supply-color" style="height: <?php echo $entry['122']; ?>%"></div>

        </div>
        <p class="graph-col__label kicker"><?php _e( 'Expected', 'vendavo' ); ?></p>

      </div>
    </div>
    <div class="cpq-results__table">
      <?php echo acfOutput($content['headline']['text'], 'h3', 'cpq-answers__headline text-center ' . $content['headline']['color']); ?>
      <h3>Your Results</h3>
      <p class="cpq-results__disclaimer"><?php _e( 'Here’s your range of benefits shown in a chart and table: a conservative
        estimate on the left and an expected benefit on the right. The table also expresses the benefits as a percentage
        of sales, for easy comparison across businesses with different revenue figures. The areas of business process
        improvement are highlighted with each category adding to the next, so your company can compare the total
        conservative and expected benefits you will achieve after integrating a Price Management solution.', 'vendavo' ); ?></p>
      <div class="cpq-result-table">
        <div class="table-row is-header">
          <div class="col-left"></div>
          <div class="col-right">Your Benefit</div>
        </div>
        <div class="table-row is-subheader">
          <div class="col-left"><?php _e( 'What is the expected annualized value across my business process areas?', 'vendavo' ); ?></div>
          <div class="col-right">
            <div><?php _e( 'Conservative', 'vendavo' ); ?></div>
            <div><?php _e( 'Expected', 'vendavo' ); ?></div>
            <div><?php _e( 'Range % of Sales', 'vendavo' ); ?></div>
          </div>
        </div>
        <div class="table-row is-result">
          <div class="col-left">
            <div class="result-key is-sales-color"></div><?php _e( 'Analytics', 'vendavo' ); ?>
          </div>
          <div class="col-right">
            <div>$<?php echo number_format($entry['111']); ?></div>

            <div>$<?php echo number_format($entry['106']); ?></div>

            <div>02.% - 0.3%</div>
          </div>
        </div>
        <div class="table-row is-result">
          <div class="col-left">
            <div class="result-key is-market-color"></div><?php _e( 'Price Management', 'vendavo' ); ?>
          </div>
          <div class="col-right">
            <div>$<?php echo number_format($entry['113']); ?></div>

            <div>$<?php echo number_format($entry['108']); ?></div>

            <div>0.1% - 0.1%</div>

          </div>
        </div>
        <div class="table-row is-result">
          <div class="col-left">
            <div class="result-key is-pricing-color"></div><?php _e( 'Price Optimization', 'vendavo' ); ?>
          </div>
          <div class="col-right">

            <div>$<?php echo number_format($entry['114']); ?></div>


            <div>$<?php echo number_format($entry['109']); ?></div>
            <div>1.1% - 2.1%</div>

          </div>
        </div>
        <div class="table-row is-result">
          <div class="col-left">
            <div class="result-key is-supply-color"></div><?php _e( 'Deal Management', 'vendavo' ); ?>
          </div>
          <div class="col-right">
            <div>$<?php echo number_format($entry['112']); ?></div>

            <div>$<?php echo number_format($entry['107']); ?></div>

            <div>2.3% - 3.4%</div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>

<style>
.is-sales-color {
  background-color: var(--blue-10)
}

.is-market-color {
  background-color: var(--purple-10)
}

.is-pricing-color {
  background-color: var(--yellow-10)
}

.is-supply-color {
  background-color: var(--pink-10);
}

.table-row.is-subheader {
  display: flex;
  border-bottom: 2px solid var(--gray-20);
}

.cpq-results__disclaimer {
  font-size: 12px !important;
}

.cpq-result-table {
  box-shadow: var(--dropShadow-20);
  border-radius: var(--radius-MD);
  margin-top: 2rem;
  /* padding: 1rem; */
}

.graph-col__total {
  text-align: center;
  font-size: 20px;
  letter-spacing: -1px !important;
  font-weight: 600;
}

.result-key {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  /* background-color: var(--blue-20); */
}

.table-row {
  display: flex;
  padding-left: 1.5rem;
}

.table-row .col-left {
  width: 40%;
  flex-shrink: 0;
}

.table-row.is-result .col-left {
  position: relative;
  padding-left: 36px !important;
}

.table-row.is-result:last-child {
  padding-bottom: 1rem;
}

.table-row .col-right {
  width: 60%;
  border-left: 1px solid var(--gray-10);
}

.table-row.is-header .col-right {
  background-color: var(--gray-10);
  font-weight: 600;
  padding: .5rem;

}

.table-row .col-right {
  text-align: center;

}

.table-row .col-right,
.table-row .col-right p {
  font-size: 14px;

}

.table-row.is-subheader .col-left,
.table-row.is-result .col-left {
  width: 40%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  padding: .75rem 0;
}

.table-row.is-subheader .col-left {
  font-size: 12px;
  padding-right: 1rem;
}

.table-row.is-result .col-right,
.table-row.is-subheader .col-right {
  display: flex;
  width: 60%;

}

.table-row.is-subheader .col-right {
  color: var(--gray-30);

}

.table-row.is-result .col-right>div,
.table-row.is-subheader .col-right>div {
  width: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}

.cpq-results__table {
  padding-left: 2rem;
}

.cpq-results__table p {
  font-size: 14px;
}

.block--quiz-roi-results .quiz-cont {
  display: flex;
}

.cpq-results__graph {
  display: flex;
  padding: 0 1rem;
  height: 500px;
  align-items: flex-end;
  flex-shrink: 0;
  width: 35%;
  border-left: 2px solid var(--gray-20);
  border-bottom: 2px solid var(--gray-20);
}

.graph-y__label {
  position: absolute;
  transform: rotate(270deg) translateX(-50%);
  transform-origin: bottom left;
  top: 50%;
  left: -10px;
}

.graph-col__label {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
}

.cpq-results__graph .graph-col {
  width: 50%;
  padding: 0 1rem 0 1rem;
  display: flex;
  position: relative;

}

.cpq-results__graph .graph-col {
  justify-content: flex-end;
}

.cpq-results__graph .graph-col__inner {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.graph-piece {
  width: 100%;
  height: 25%;
}
</style>

<?php endif; ?>