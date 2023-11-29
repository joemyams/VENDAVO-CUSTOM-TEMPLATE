<?php $postID = get_the_ID(); ?>
<button type="button" data-target="#capability-modal" class="card card-capability pos-rel modal-link align-items-stretch w-100 pos-rel">
    <div class="card-body pos-rel z-4">
        <?php if(get_field('headline', $postID)) : ?>
            <h4 class="capability__title card-title"><?php the_field('headline', $postID); ?></h4>
        <?php endif; ?>
    </div>
    <div id="capability__info-<?php echo $postID; ?>" class="capability__info d-none">
        <?php the_field('text', $postID); ?>
    </div>
    <div class="card__icon-plus svg__icon-plus pos-abs z-2">
        <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'plus', 32, 'capability__plus'); ?>
    </div>
</button>