<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont text-center">
        <h3><?php _e( 'Industry Challenges & Vendavo Outcomes', 'vendavo' ); ?></h3>
        <div class="tab-group">
            <div class="tab-group__indicator"></div>
            <a href=""><?php _e( 'Pricing', 'vendavo' ); ?></a>
            <a href=""><?php _e( 'Selling', 'vendavo' ); ?></a>
            <a href=""><?php _e( 'Leadership', 'vendavo' ); ?></a>
        </div>
        <div class="tabbed-group text-left">
            <div class="tab-column">
                <div class="tab-column__inner rte">
                    <h4 class="tab-column__headline"><?php _e( 'Pricing Challenges', 'vendavo' ); ?></h4>
                    <div class="tab-column__content ">
                        <ul>
                            <li><?php _e( 'Lack of advanced commercial pricing models', 'vendavo' ); ?></li>
                            <li><?php _e( 'Limited spare parts profit optimization', 'vendavo' ); ?></li>
                            <li><?php _e( 'Lack of understanding of perceived customer segment value', 'vendavo' ); ?></li>
                            <li><?php _e( 'Limited measures for profitability visibility across the value chain', 'vendavo' ); ?></li>
                            <li><?php _e( 'Your commercial processes struggle with getting the optimized, winning price in front of the customer quickly', 'vendavo' ); ?></li>
                        </ul>
                    </div>
                    <div class="cta-container">
                    <a href="" class="btn btn--secondary is-sm is-green"><?php _e( 'Learn More', 'vendavo' ); ?></a>
                    </div>
                </div>
            </div>
            <div class="tab-column">
                <div class="tab-column__inner rte">
                    <h4 class="tab-column__headline"><?php _e( 'Pricing Outcomes', 'vendavo' ); ?></h4>
                    <div class="tab-column__content ">
                        <ul>
                            <li><?php _e( 'Automated Intelligent Pricing', 'vendavo' ); ?></li>
                            <li><?php _e( 'Price Optimization', 'vendavo' ); ?></li>
                            <li><?php _e( 'Dynamic Pricing', 'vendavo' ); ?></li>
                            <li><?php _e( 'Centralized Price Management', 'vendavo' ); ?></li>
                            <li><?php _e( 'Market Data Management', 'vendavo' ); ?></li>
                            <li><?php _e( 'Transfer Price Management', 'vendavo' ); ?></li>
                            <li><?php _e( 'List Price Management', 'vendavo' ); ?></li>
                            <li><?php _e( 'Pricing Guidance', 'vendavo' ); ?></li>
                            <li><?php _e( 'Pricing Analytics', 'vendavo' ); ?></li>
                            <li><?php _e( 'Incentive Management', 'vendavo' ); ?></li>
                        </ul>
                    </div>
                    <div class="cta-container">
                    <a href="" class="btn btn--secondary is-sm is-green"><?php _e( 'Learn More', 'vendavo' ); ?></a>
                    </div>
                </div>
            </div>
            
        </div>
    
    </div>
</section>

<style>
    @media screen and (min-width: 1200px) {
        .tab-column__content ul { columns: 2; column-gap: 60px; }

    }
    .tab-column__content li { font-size: 14px; }
    .tab-column {
        width: 50%;
        padding: 1em 1em 0 1em;
    }
    .tab-column__headline {
        margin-bottom: 1.5rem !important;
    }
    .tab-column__inner {
        /* box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);

        border-radius: 10px; */
        padding: 0 3em;
    }
    .block--tabbed-content .tab-group__indicator { width: 80px; }
    .tabbed-group::after {
        content: '';
        display: block;
        position: absolute;
        width: 1px;
        height: 100%;
        top: 0;
        background: var(--ltGray);
        left: 50%;
        transform: translateX(-50%);
    }
    .tabbed-group {
        display: flex;
        /* max-width: 1000px; */
        margin: 3rem auto 0 auto;
        position: relative;
    }
</style>

<?php endif; ?>