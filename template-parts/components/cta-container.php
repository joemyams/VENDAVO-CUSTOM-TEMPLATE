<div class="cta-container">
    <?php
    set_query_var('button', $ctas['primary']);
    get_template_part('/template-parts/components/dynamic-cta');
    set_query_var('button', $ctas['secondary']);
    get_template_part('/template-parts/components/dynamic-cta');
    if($ctas['has_additional_btn']):
    set_query_var('button', $ctas['tertiary']);
    get_template_part('/template-parts/components/dynamic-cta');
    endif; ?>
</div>