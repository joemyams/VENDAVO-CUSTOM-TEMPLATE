<?php 
$content = get_field('block_header');
$columns = get_field('block_columns');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont has-padding">
    <div class="icon-overview__header">
      <?php echo acfOutput($content['headline']['text'], 'h3', 'cpq-category__headline ' . $content['headline']['color']); ?>
    </div>
    <div class="icon-overview__grid">
      <?php foreach ($columns as $column): ?>
      <div class="icon-overview__col">
        <?php echo acfImgOutput($column['icon'], 'icon-col__image', ''); ?>
        <?php echo acfOutput($column['headline']['text'], 'h4', 'icon-col__headline ' . $column['headline']['color']); ?>
        <?php echo acfOutput($column['content'], 'div', 'icon-col__text'); ?>

      </div>
      <?php endforeach; ?>

    </div>
  </div>
  <?php  get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>

<style>
.icon-overview__grid {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  border-radius: var(--radius-MD);
  box-shadow: var(--dropShadow-20);
  background-color: #fff;
  padding: 3rem 1rem;
}

.icon-col__headline {
  font-weight: 700;
}

.icon-col__image {
  width: 100px;
  margin-bottom: 1rem;
}

.icon-overview__col:not(:last-child) {
  border-right: 1px solid var(--gray-10);
}

.icon-overview__col {
  width: 25%;
  flex-grow: 1;
  /* border: 1px solid red; */
  padding: 0 2rem;
}

.icon-col__text p {
  font-size: 13px;
  line-height: 1.45;
}
</style>

<?php endif; ?>