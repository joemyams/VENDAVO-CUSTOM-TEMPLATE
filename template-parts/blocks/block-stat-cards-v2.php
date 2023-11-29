<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_tabs');
$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-center'; 
endif;

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <div class="tab-container">
            <ul class="tab__nav nav flex-column flex-lg-row nav-pills nav-fill" role="tablist">
                <?php $i = 0;
                foreach ($cards as $card): 
                    if ($i == 0) :
                        $isActive = 'active is-active';
                        $isSelected = 'true';
                    else:
                        $isActive = '';
                        $isSelected = 'false';
                    endif;
                    echo '<li class="nav-item mb-2 mb-lg-0"><a class="tab-link '. $isActive .'" data-index="'. $i .'" id="tt-'. sanitize_title($card['title']) .'-link" data-toggle="tab" href="#tt-'. sanitize_title($card['title']) .'" role="tab" aria-controls="tt-'. sanitize_title($card['title']) .'" aria-selected="'. $isSelected .'">' . $card['title'] . '</a></li>';
                    $i++;
                endforeach; ?>
            </ul>
            <div class="tab-content pos-rel is-top-xs">
                <?php $i = 0; 
                foreach ($cards as $card): 
                    if ($i == 0) :
                        $isActive = 'active show';
                    else:
                        $isActive = '';
                    endif;
                    echo '<div class="tab-pane fade '. $isActive .'" id="tt-'. sanitize_title( $card['title']) .'" role="tabpanel" aria-labelledby="tt-'. sanitize_title($card['title']) .'-link">';
                    echo '<div class="row">';
                    foreach ($card['tab'] as $tab):
                        echo '<div class="item col-md-6 col-lg-3 mb-4 pb-2"><div class="card-stat text-center"><div class="stat-number">'. $tab['title'] .'</div><div class="stat-label">'. $tab['subtitle'] .'</div></div></div>';
                    endforeach;
                    echo '</div></div>';
                    $i++;
                endforeach; ?>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>