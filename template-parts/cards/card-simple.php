<article class="single-card is-simple <?php if ($card['image']) echo 'has-image'; ?>">
    <?php if ($card['link']): ?>
    <a href="<?php echo $card['link']['url']; ?>" class="single-card__inner rte">
    <?php else: ?>
        <div class="single-card__inner rte">
    <?php endif; ?>
    <div class="single-card__upper">
  <?php echo acfimgOutput($card['image'], 'single-card__icon', ''); ?>
            <?php echo acfOutput($card['headline'], 'h3', 'single-card__headline'); ?>
            <?php echo acfOutput($card['content'], 'div', 'single-card__content'); ?>

    </div>
  
    <?php if ($card['link']): ?>
       <div class="single-card__lower">
    <span class="btn btn--primary is-sm is-green"><?php echo $card['link']['title']; ?></span>
       </div>
    </a>
    <?php else: ?>
    </div>
    <?php endif; ?>
</article>