<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$cards = get_field('block_cards');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont text-center <?php the_field('card_width'); ?>">
        <?php echo acfOutput($content['headline'], 'h4', 'products-grid__headline'); ?>
        <?php if ($cards): ?>
        <div class="product-grid">
            <?php foreach ($cards as $card): ?>
            <article class="product-grid__single rel">
                <div class="product-grid__inner">
                    <?php echo acfImgOutput($card['icon'], '', 'product-grid__icon'); ?>
                    <?php echo acfOutput($card['title'], 'h5', 'product-card__title') . 
                          acfOutput($card['description'], 'p', 'product-card__description'); ?>
                </div>
            </article>
            <?php endforeach; ?>
        </div>
        <?php endif; 
           if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); } ?>
    </div>
</section>

<?php endif; ?>