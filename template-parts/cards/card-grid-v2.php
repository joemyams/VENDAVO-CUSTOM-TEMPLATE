<article class="card card-grid-v2 w-100 border-0 is-text--blue-30">
    <div class="card-body border-0 rounded-0 bg-transparent">
        <div class="inner">
            <?php echo acfOutput($card['headline'], 'h3', 'single-card__headline'); ?>
            <?php echo acfOutput($card['content'], 'div', 'single-card__content'); ?>
            <?php echo acfImgOutput($card['logo'], '', 'card-grid__logo mt-4'); ?>
        </div>
        <?php if($card['links']): ?>
            <div class="btn-group is-top--sm">
                <?php foreach ($card['links'] as $links ): ?>
                    <?php $link = $links['link']; ?>
                    <?php if(!empty($link['url']) && !empty($link['title'])): ?>
                    <a class="btn btn--primary is--blue90-V2 btn-block" href="<?php echo esc_url($link['url']); ?>" title="<?php echo $link['title']; ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>><?php echo $link['title']; ?></a>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>
</article>