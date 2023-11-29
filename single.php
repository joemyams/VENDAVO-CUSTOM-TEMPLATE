<?php 
if(!in_category('podcasts')):
    get_template_part('template-parts/layouts/single-default');
else:
    get_template_part('template-parts/layouts/single-podcast');
endif;
?>