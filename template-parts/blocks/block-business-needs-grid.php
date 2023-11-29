<?php 
$header = get_field("block_header");
$cards = get_field('block_cards');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont text-center '. $design['width'] . '">'; ?>
<?php if ($header['kicker'] || $header['headline']): ?>
    <div class="needs-header">
        <?php echo acfOutput($header['kicker'], 'p', 'kicker'); ?>
        <?php echo acfOutput($header['headline'], 'h2', 'needs__headline'); ?>
    </div>
<?php endif; ?>
<div class="needs-grid front">
    <?php foreach ($cards as $card): ?>
        <article class="needs-card">
          <?php if ($card['link']['url']): ?>
            <a href="<?php echo $card['link']['url']; ?>" class="needs-card__inner">
          <?php else: ?>
            <div class="needs-card__inner">
            <?php endif; ?>
                <?php echo acfOutput($card['headline'], 'h4', 'needs-card__headline'); ?>
                <?php echo acfOutput($card['subheadline'], 'p', 'needs-card__subheadline'); ?>
                <?php if ($card['link']) echo '<div class="needs-card__hover"><span class="needs-card__button btn btn--primary is-sm is-green">'. $card['link']['title'] .'</span></div>'; ?>
           <?php if (!$card['link']['url']): ?>
            </div>
          <?php else: ?>
          </a>
          <?php endif; ?>
        </article>
    <?php endforeach; ?>
</div>

<?php echo '</div>'; ?> 
<?php echo '</section>'; ?>

<?php endif; ?>