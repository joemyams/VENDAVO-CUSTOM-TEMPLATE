<?php 
$ctas = get_field('block_ctas');
$cards = get_field('block_cards');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
$text = get_field('block_text');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

?>
<section <?php echo $blockInfo; ?>>
    <div class="cont is-default">
        <?php if ($cards): ?>
            <div class="chout__header">
                <div class="inner">
                    <?php echo acfOutput($text['kicker'], 'p', 'kicker');
                    echo (!empty($text['headline'])) ? acfOutput($text['headline'], 'h3', $prefix . '__headline') : '<h3>'. translate( 'Industry Challenges & Vendavo Outcomes', 'vendavo' ).'</h3>';
                    echo acfOutput($text['subheadline'], 'h4', $prefix . '__subheadline'); ?>
                </div>
                <?php if(count($cards) > 1): ?>
                    <div class="tab-group">
                        <div class="tab-group__indicator"></div>
                        <?php 
                        $tabCount = 0;
                        foreach ($cards as $card): ?>
                            <?php if ($tabCount == 0) {
                                echo '<a class=" is-active tab-link" data-index="' . $tabCount . '" data-slick="slick-'. $block['id'] . '">' . $card['headline']['text'] . '</a>';
                            } else {
                                echo '<a class="tab-link" data-index="' . $tabCount . '" data-slick="slick-'. $block['id'] . '">' . $card['headline']['text'] . '</a>';
                            }; ?>
                            <?php $tabCount++; endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
                <div class="chout-container rel">
                    <div class="chout-slick tabbed-slick" data-slick="slick-<?php echo $block['id']; ?>">
                        <?php foreach ($cards as $card): ?>
                            <div class="chout-card">
                                <div class="chout-card__inner">
                                    <div class="chout-card__sidebar">
                                        <?php echo acfOutput($card['headline']['text'], 'h6', 'sidebar-headline'); ?>
                                    </div>
                                    <div class="chout-card__body">
                                        <div class="chout-card__left">
                                            <div class="chout-card__column ">
                                                <?php echo acfOutput($card['content']['challenges_headline'], 'h4', 'chout-card__headline'); ?>
                                                <?php echo acfOutput($card['content']['challenges'], 'div', 'rte'); ?>
                                            </div>
                                        </div>
                                        <div class="chout-card__right">
                                            <div class="chout-card__column rel">
                                                <?php echo acfOutput($card['content']['outcomes_headline'], 'h4', 'chout-card__headline'); ?>
                                                <?php echo acfOutput($card['content']['outcomes'], 'div', 'rte'); ?>
                                                <?php echo acfLinkOutput($card['headline']['link'], 'chout-card__btn btn btn--primary is-green is-sm'); ?>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>

<?php endif; ?>