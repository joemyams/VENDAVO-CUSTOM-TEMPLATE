<article class="accordion__single">
    <div class="accordion-header">
        <?php echo acfImgOutput($dropdown['header']['image'], 'image-cover', 'accordion-header__image'); ?>
        <div class="accordion-header__text">
            <div>
            <?php echo acfOutput($dropdown['header']['headline'], 'h5', 'accordion-header__headline'); ?>
            <?php echo acfOutput($dropdown['header']['subheadline'], 'h6', 'kicker accordion-header__subheadline'); ?>
            </div>
        <button class="accordion-header__button">
            <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'plus', 28, 'accordion-header__plus ' . $quote['design']['icon_color'] ); ?>
        </button>
        </div>
    </div>
    <?php echo acfOutput($dropdown['content'], 'div', 'accordion-drawer rte'); ?>
</article>