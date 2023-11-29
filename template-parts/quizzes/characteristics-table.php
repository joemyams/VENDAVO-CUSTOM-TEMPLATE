<div class="characteristics-table__row is-header">
  <div class="col-sm">
    <p>Capability Category</p>
  </div>
  <div class="col-lg">
    <?php echo acfOutput($stage['headline'], 'p', ''); ?>
  </div>
</div>
<?php if ($stage['chart']): ?>
<?php foreach ($stage['chart'] as $row): ?>
<div class="characteristics-table__row is-header">
  <div class="col-sm">
    <?php echo acfOutput($row['headline'], 'p', 'char-table__name'); ?>
  </div>
  <div class="col-lg">
    <?php echo acfOutput($row['content'], 'div', 'char-table__desc'); ?>
  </div>
</div>
<?php endforeach; ?>
<?php endif; ?>