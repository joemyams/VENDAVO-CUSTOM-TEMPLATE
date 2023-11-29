<article class="partner-card">
    <div <?php if ($card['content']) echo 'data-fancybox="'. $card['blockID'] .'"'; ?> href="#<?php echo $card['boxID']; ?>" class="partner-card__inner">
        <img class="partner-card__logo" src="<?php echo $card['logo']['url']; ?>" alt="">
    </div>
    <div id="<?php echo $card['boxID']; ?>" class="partner-popup rte">
        <div class="partner-popup__header">
            <img class="partner-card__logo" src="<?php echo $card['logo']['url']; ?>" alt="">
        </div>
        
        <?php echo acfOutput($card['content'], 'div', 'partner-card__bio'); ?>
    </div>
</article>
