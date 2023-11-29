<div class="quiz-average-graph__row">
  <div class="graph-row__left">
    <?php echo acfOutput($item['label'], 'div', 'row-title'); ?>
    <ul class="row-scores">
      <?php echo acfOutput($item['score'], 'li', 'row-score--user'); ?>
      <?php echo acfOutput($item['average'], 'li', 'row-score--b2b'); ?>
    </ul>
  </div>

</div>

<style>
  .level-group {
    border: 1px solid red;
    position: absolute;
    top: 0;
    height: auto !important;
  }
  .graph-row__right {
    position: static;
  }
</style>