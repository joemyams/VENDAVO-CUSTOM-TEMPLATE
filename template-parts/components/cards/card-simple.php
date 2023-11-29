
    <?php if ($card['link']) { echo '<a href="'. $card['link']['url'] .'" class="simple-card__inner rte">'; } else { echo '<div class="simple-card__inner rte">'; }?>
    <?php echo acfImgOutput($card['icon'], 'simple-card__image', 'simple-card__aspect');?>
    <?php echo acfOutput($card['kicker'], 'p', 'simple-card__kicker kicker'); ?>
    <?php echo acfOutput($card['headline'], 'h4', 'simple-card__headline'); ?>
    <?php echo acfOutput($card['content'], 'div', 'simple-card__content '); ?>
    <?php if ($card['link']) { echo '<div class="simple-card__cta"><span class="btn btn--primary is-sm is-green">'. $card['link']['title'] .'</span></div></a>'; } else { echo '</div>'; }?>
