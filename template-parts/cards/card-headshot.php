<article class="single-card is-headshot <?php if ($card['image']) echo 'has-image'; ?>">
    <div class="single-card__inner rte">
    <div class="single-card__header">
      <?php echo acfimgOutput($card['image'], 'single-card__headshot', ''); ?>
            <?php echo acfOutput($card['headline'], 'h3', 'single-card__headline'); ?>
    </div>
          
            <?php echo acfOutput($card['content'], 'div', 'single-card__content'); ?>
    </div>
</article>