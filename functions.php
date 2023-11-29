<?php
add_theme_support('post-thumbnails');

function enqueue_custom_scripts() {
    if (is_page('resources')) {
        wp_enqueue_script('update-canonical', get_theme_file_uri( '/assets/js/update-canonical.js' ), array('jquery'), null, true);
    }
    if (is_home() || is_front_page()) { // Assuming the blog is either the home or front page
        wp_enqueue_script('blog-canonical', get_theme_file_uri( '/assets/js/blog-canonical.js' ), array('jquery'), null, true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');


function custom_canonical_filter($canonical) {
    // Check if on the resources page
    if(is_post_type_archive('resources')) {
        $taxonomy_term = get_query_var('filter'); // or $_GET['filter']
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;

        // If there's a taxonomy term set
        if($taxonomy_term) {
            $canonical = home_url("/resources/{$taxonomy_term}/");
            if($paged > 1) {
                $canonical .= "page/{$paged}/";
            }
        } else {
            // If no taxonomy term, just check for pagination
            if($paged > 1) {
                $canonical = home_url("/resources/page/{$paged}/");
            }
        }
    } elseif (is_home() || is_post_type_archive('post')) { // This checks if we are on the blog page
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        
        if($paged > 1) {
            $canonical = home_url("/blog/page/{$paged}/");
        } else {
            $canonical = home_url("/blog/");
        }
    }
    
    return $canonical;
}
add_filter('wpseo_canonical', 'custom_canonical_filter');




function load_more_posts_ajax_handler(){
    // The $_POST contains all the data sent via ajax 
    $paged = $_POST['page']; 

    $args = array(
        'post_type' => 'post',
        'paged'    => $paged,
        // Include additional parameters if needed
    );

    $query = new WP_Query($args);

    if($query->have_posts()) :
        while($query->have_posts()): $query->the_post();
            get_template_part('template-parts/post/content', get_post_format());
        endwhile;
    endif;
    die; // here we exit the script and even no wp_reset_query() required!
}
add_action('wp_ajax_load_more_posts', 'load_more_posts_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts_ajax_handler'); // wp_ajax_nopriv_{action}



load_theme_textdomain( 'vendavo', get_template_directory() . '/languages' );

function vendavo_theme_support() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	remove_theme_support( 'core-block-patterns' );
}

add_action( 'after_setup_theme', 'vendavo_theme_support' );

add_theme_support( 'editor-styles' );

/********************************************************
* Classes
********************************************************/

require get_template_directory() . '/classes/class-vendavo-svg-icons.php';


/********************************************************
* Theme Styles & Scripts
********************************************************/

function enqueue_slick_slider() {
    // Enqueue Slick Slider CSS
    wp_enqueue_style('slick-slider', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');

    // Enqueue Slick Slider theme CSS (optional, only if you want to use a theme)
    wp_enqueue_style('slick-slider-theme', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css', array('slick-slider'));

    // Enqueue Slick Slider JavaScript
    wp_enqueue_script('slick-slider', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.8.1', true);
}
add_action('wp_enqueue_scripts', 'enqueue_slick_slider');

// Enqueue CSS & JS
function vendavo_scripts() {
// 	wp_enqueue_script( 'marketo-forms', 'https://app-abb.marketo.com/js/forms2/js/forms2.js', false, 1.0 , false );
// 	wp_enqueue_script( 'gsap-lib', get_theme_file_uri( '/assets/js/gsap.js' ), false, filemtime( get_stylesheet_directory() . '/assets/js/gsap.js') , false );
  /*
  wp_deregister_script( 'jquery' );
  wp_register_script( 'jquery' , ( '//ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js' ), true, null, true );
  wp_enqueue_script( 'jquery' );
  */
  wp_enqueue_script( 'vendor', get_theme_file_uri( '/assets/js/vendor.js' ), array('jquery'), filemtime( get_stylesheet_directory() . '/assets/js/vendor.js') , true );
  wp_enqueue_script( 'vendavo', get_theme_file_uri( '/assets/js/theme.js' ), array('vendor'), filemtime( get_stylesheet_directory() . '/assets/js/theme.js') , true );
  wp_enqueue_script( 'vendavo-comex-calc', get_theme_file_uri( '/assets/js/gravity_comex-calc.js' ), array('vendavo'), filemtime( get_stylesheet_directory() . '/assets/js/gravity_comex-calc.js') , true );
  wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/assets/css/theme.css', array(), filemtime( get_stylesheet_directory() . '/assets/css/theme.css' ));
  wp_enqueue_style( 'theme-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
  wp_enqueue_style( 'update-style', get_stylesheet_directory_uri() . '/assets/css/updates.css', array(), filemtime( get_stylesheet_directory() . '/assets/css/updates.css' ));

	// Setup Ajax Variables for Security Regenrating New PDFs
  $vendavoAJAX = [
    'ajax_url' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('vendavo-nonce')
  ];

  	// Localize Variables to theme.js File
  wp_localize_script('vendavo', 'Theme_AJAX', $vendavoAJAX);
};

function vendavo_admin_scripts() {
  wp_enqueue_style( 'vendavo-admin-styles', get_stylesheet_directory_uri() . '/style-admin.css', array(), filemtime( get_stylesheet_directory() . '/style-admin.css' ));
  wp_register_script( 'editor-js', get_template_directory_uri().'/asssets/js/editor.js', array('jquery'), false, true );
  wp_enqueue_script( 'editor-js' );
  
    
}
add_action( 'wp_enqueue_scripts', 'vendavo_scripts' );
add_action( 'admin_enqueue_scripts', 'vendavo_admin_scripts' );

function enqueue_custom_ajax_script() {
    wp_enqueue_script('custom-ajax', get_template_directory_uri() . '/assets/js/custom-ajax.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_ajax_script');

// Add CSS to Block Editor
add_editor_style( 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap' );
add_editor_style( 'assets/css/theme.css' );
add_editor_style( 'style-editor.css');
add_editor_style( 'assets/css/updates.css');

/********************************************************
* Theme Navigation Menus
********************************************************/
/**
 * Limit max menu depth in admin panel 
 */
 function load_posts_by_ajax_callback() {
    check_ajax_referer('load_more_posts', 'security');
    $paged = $_POST['page'];
    $args = array(
        'post_type' => 'resources',
        'post_status' => 'publish',
        'posts_per_page' => '10',
        'paged' => $paged,
    );
    $my_posts = new WP_Query( $args );
    if ( $my_posts->have_posts() ) :
        ?>
        <?php while ( $my_posts->have_posts() ) : $my_posts->the_post() ?>
            // HTML for the post here. You can use the same HTML as in your loop above.
        <?php endwhile ?>
        <?php
    endif;
    wp_die();
}
add_action('wp_ajax_load_posts_by_ajax', 'load_posts_by_ajax_callback');
add_action('wp_ajax_nopriv_load_posts_by_ajax', 'load_posts_by_ajax_callback');

 
 function my_alm_shortcode_atts($atts) {
    $atts['post_type'] = 'resources';
    $atts['posts_per_page'] = '9';
    $atts['taxonomy'] = 'resource-type';
    $atts['taxonomy_terms'] = 'ebooks';
    $atts['taxonomy_operator'] = 'IN';
    $atts['scroll'] = 'false';
    return $atts;
}
add_filter('alm_shortcode_atts', 'my_alm_shortcode_atts', 10, 1);

function limit_admin_menu_depth($hook)
{
  if ($hook != 'nav-menus.php') return;

  wp_register_script('limit-admin-menu-depth', get_stylesheet_directory_uri() . '/assets/admin/js/limit-menu-depth.js', array(), '1.0.0', true);
  wp_localize_script(
    'limit-admin-menu-depth',
    'myMenuDepths',
    array(
      'header-nav' => 3,
      'footer-nav' => 1,
      'legal-nav' => 0,
      'lang-nav' => 0,
      'eyebrow-nav' => 0 
    )
  );
  wp_enqueue_script('limit-admin-menu-depth');
}
add_action( 'admin_enqueue_scripts', 'limit_admin_menu_depth' );

class vendavoWalker extends Walker_Nav_Menu {

	function start_el(&$output, $item, $depth=0, $args=[], $id=0) {

		$desc = get_field('description', $item->ID);
		$layout = get_field('dropdown_style', $item->ID). ' ';
    $isBold = get_field('is_bold', $item->ID) ? 'is__bold' : '';
    $unequalGrid = get_field('has_unequal_columns', $item->ID) ? 'unequal-column' : '';
    $stackedGrid = get_field('has_stacked_columns', $item->ID) ? 'columns-stacked' : '';
    $bgcoloredGrid = get_field('has_colored_columns', $item->ID) ? 'columns-colored' : '';
    if (!$item->classes[0]) array_shift($item->classes);
    if ($depth == 0 || $depth == 1) array_push($item->classes, $layout);
    if ($depth == 0) array_push($item->classes, $unequalGrid);
    if ($depth == 0) array_push($item->classes, $stackedGrid);
    if ($depth == 0) array_push($item->classes, $bgcoloredGrid);
    if ($desc) {
     $output .= '<li class="level-' . $depth . ' '. implode(' ', $item->classes) . ' '. $isBold .' has-description"><a href="' . $item->url . '">' . $item->title . '<p class="menu-item-description">'. $desc .'</p></a>';
   } else {
     $output .= '<li class="level-'. $depth . ' ' . implode(' ', $item->classes) . ' '. $isBold .'"><a href="' . $item->url . '">' . $item->title . '</a>';
   }
 }

 function start_lvl( &$output, $depth = 0, $args = array() ) {
  if ($depth == 0) {
   $output .= "<ul class='sub-menu'><div class='sub-menu__inner'>";
 } else {
   $output .= '<ul class="sub-menu">';
 }

}
function end_lvl( &$output, $depth = 0, $args = array() ) {
  if ($depth == 0) {
   $output .= "</div></ul>";
 } else {
   $output .= "</ul>";
 }
}

}

add_filter('wp_get_nav_menu_items', 'my_wp_get_nav_menu_items', 10, 3);
function my_wp_get_nav_menu_items($items, $menu, $args) {
  foreach($items as $key => $item)
    $items[$key]->description = '';

  return $items;
}


function register_theme_menus() {
	register_nav_menus(
		array(
      'footer-nav' => __( 'Footer Nav' ),
      'header-nav' => __( 'Header Nav' ),
      'legal-nav' => __( 'Legal Nav' ),
      'lang-nav' => __( 'Language Nav' )
    )
	);
}
add_action( 'init', 'register_theme_menus' );




/********************************************************
* Custom Login Styles
********************************************************/

function custom_login_logo() {
  $custom_logo_id = get_theme_mod( 'custom_logo' );
  $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
  if ($logo): ?>
    <style type="text/css">
      body.login {
        background-color: #011c33;
      }

      body.login .button-primary {
        background-color: #0086cc;
        border-color: #0086cc;
        border-radius: 0;
        border: 1px solid inherit;
      }

      body.login .button-primary:focus,
      body.login .button-primary:hover {
        background-color: #005ea2;
        border: 1px solid #005ea2;
      }

      body.login input {
        border-radius: 0;
      }

      body.login .forgetmenot {
        float: none;
        display: block;
        text-align: center;
        width: 100%;
        margin-top: 0.75rem;
      }

      body.login input[type="submit"].button-primary {
        width: 100%;
        display: block;
        float: none;
        text-transform: uppercase;
        margin-top: 60px;
        padding: 12px;

      }

      body.login form {
        background-color: #002748;
        border: none;
        border-radius: 10px;
        padding: 26px 0 0 0;
        margin-top: 3rem;
      }

      body.login form .user-pass-wrap,
      body.login form p:first-child {
        padding: 0 30px;
      }

      body.login label {
        margin-bottom: 5px;
      }

      body.login label,
      body.login a.privacy-policy-link,
      body.login #backtoblog a,
      body.login #nav a {
        color: #fff;
      }

      body.login a.privacy-policy-link:hover,
      body.login #backtoblog a:hover,
      body.login #nav a:hover {
        color: #fff;
        opacity: .5;
      }

      body.login div#login h1 a {
        background-image: url(<?php echo $logo[0]; ?>);
        width: 80px;
        height: 85px;
        pointer-events: none;
        background-size: 100% auto;
        background-position: center;
        pointer-events: none;
      }
    </style>
  <?php endif;
} add_action( 'login_enqueue_scripts', 'custom_login_logo' );
/********************************************************
* Remove Comments
********************************************************/
// Removes from admin menu
add_action( 'admin_menu', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
  remove_menu_page( 'edit-comments.php' );
}
// Removes from post and pages
add_action('init', 'remove_comment_support', 100);

function remove_comment_support() {
  remove_post_type_support( 'post', 'comments' );
  remove_post_type_support( 'page', 'comments' );
}
// Removes from admin bar
function mytheme_admin_bar_render() {
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('comments');
}
add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );

/********************************************************
* Gravity Forms 
  * Enqueue Script in Footer
  * Scroll on Unsuccessful AJAX Submit
********************************************************/

add_filter("gform_init_scripts_footer", "init_scripts");
function init_scripts() {
	return true;
}
add_filter( 'gform_confirmation_anchor', '__return_true' );


add_action('admin_head', 'custom_editor_styles');

function custom_editor_styles() {
  echo '<style>
    #edittag {
  display: flex;
  flex-direction: column;
}
	#edittag .rank-math-metabox-wrap { order: 1; }
	#edittag .edit-tag-actions { order: -1; }
</style>';
}




function wpdocs_custom_excerpt_length( $length ) {
  return 14;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );




/*********************
* re-order left admin menu
**********************/
function reorder_admin_menu( $__return_true ) {
  return array(
	 'index.php', // Dashboard
	 'edit.php?post_type=page', // Pages
	 'edit.php', // Posts (Blogs)
	 'edit.php?post_type=resources', // Resources
	 'separator1', // --Space--
	 'edit.php?post_type=partners', // Partner Directory
	 'edit.php?post_type=quotes', // Quote Library
	 'edit.php?post_type=authors', // Blog Authors
	 'edit.php?post_type=events',  // Events
   'edit.php?post_type=glossary', // Glossary
   'edit.php?post_type=capability', // Capability
   'separator1', // --Space--
     'edit.php?post_type=ditty_news_ticker', // News Ticker Plugin
	 'separator2', //
     'upload.php', // Media
	 'plugins.php', // Plugins
	 'themes.php', // Appearance
     'edit-comments.php', // Comments
     'users.php', // Users
     'tools.php', // Tools
     'options-general.php', // Settings
   );
}
add_filter( 'custom_menu_order', 'reorder_admin_menu' );
add_filter( 'menu_order', 'reorder_admin_menu' );


function reading_time() {
	$content = get_post_field( 'post_content', $post->ID );
	$word_count = str_word_count( strip_tags( $content ) );
	$readingtime = ceil($word_count / 120);
	$timer = ($readingtime == 1) ? " minute" : " minutes";
	$totalreadingtime = $readingtime . $timer;
	return $totalreadingtime;
}




/**
 * Gets the SVG code for a given icon.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @param string $group The icon group.
 * @param string $icon The icon.
 * @param int    $size The icon size in pixels.
 * @param string $classes The classes inherited from the block controls
 *
 * @return string
 */
function vendavo_get_icon_svg( $group, $icon, $size = 24, $classes = 'is-inherit' ) {
	return Vendavo_SVG_Icons::get_svg( $group, $icon, $size, $classes );
}


/**
 * Request PDF from pdfswitch.io API on Gravity Fields Submission
 *
 * @since Twenty Twenty-One 1.0
 *
 * @param string $endpoint PDFShift API Endpoint
 * @param string $apiKey PDFShift API Key
 * @param array  $body PDFShift API Body Req
 * @param string $classes The classes inherited from the block controls
 *
 * @return string
 */

add_filter( 'gform_confirmation', 'custom_confirmation_message', 10, 4 );


function pdfshift($params, $confirmation) {
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.pdfshift.io/v3/convert/pdf",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($params),
    CURLOPT_HTTPHEADER => array('Content-Type:application/json'),
    CURLOPT_USERPWD => 'api:778d6ee69dac4a48979983142006a5c1'
  ));

  $response = curl_exec($curl);
  $error = curl_error($curl);
  $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  curl_close($curl);
  if (!empty($error)) {
    throw new Exception($error);
  } elseif ($statusCode >= 400) {
    $body = json_decode($response, true);
    if (isset($body['error'])) {
      $newConfirmation =  "Something went wrong:".$body['error'];
    } else {
      throw new Exception($response);
      $newConfirmation =  "Something went wrong";
    }
    return $newConfirmation;

  } else {
    $json = json_decode($response, true);
    $newConfirmation = '<div class="confirmation-msg">'. $confirmation .  "<div class='text-center'><a id='originalLink' class='btn btn--primary is-green' href='". $json['url'] . "' target='_blank'>Download My PDF Report</a></div></div>";
    return $newConfirmation;
  }
}

function custom_confirmation_message( $confirmation, $form, $entry, $ajax ) {

  $themeOptions = get_field('calculators', 'options');

  $body = [
    'format' => '12.5inx7.6in',
    'sandbox' => false,
  ];

  if ($form['id'] == $themeOptions['vend_comex']['form_id']) {
    $pdfTemplate = $themeOptions['vend_comex']['template_url'];
    $body['source'] = $pdfTemplate . '?e=' . $entry['id'];
    $body['filename'] = $themeOptions['vend_comex']['pdf_output_prefix'] . '_' . $entry['57.3']. '_' . $entry['57.6'] . '_' . date("m_d_y") . '.pdf';
    GFAPI::update_entry_field( $entry['id'], '76', $body['source'] . '&pdf=1');
    $pdfResult = pdfshift($body, $confirmation);
    return $pdfResult;
  }
  if ($form['id'] == $themeOptions['vend_cpq']['form_id']) {
    $pdfTemplate = $themeOptions['vend_cpq']['template_url'];
    $body['source'] = $pdfTemplate . '?e=' . $entry['id'];
    $body['filename'] = $themeOptions['vend_cpq']['pdf_output_prefix'] . '_' . $entry['44.3']. '_' . $entry['44.6'] . '_' . date("m_d_y") . '.pdf';
    GFAPI::update_entry_field( $entry['id'], '66', $body['source'] . '&pdf=1');
    $pdfResult = pdfshift($body, $confirmation);
    return $pdfResult;
  }
  if ($form['id'] == $themeOptions['vend_roi']['form_id']) {
    $pdfTemplate = $themeOptions['vend_roi']['template_url'];
    $body['source'] = $pdfTemplate . '?e=' . $entry['id'];
    $body['filename'] = $themeOptions['vend_roi']['pdf_output_prefix']. '_' . $entry['118.3']. '_' . $entry['118.6'] . '_' . date("m_d_y") . '.pdf';
    GFAPI::update_entry_field( $entry['id'], '153', $body['source'] . '&pdf=1');
    $pdfResult = pdfshift($body, $confirmation);
    return $pdfResult;
  }
}

// Generate Quiz PDF on preview with pdf URL param set to 1
// Used to re-generate PDFs after the initial 48-hour grace period on AWS
// Implemented on single-quiz_pdf.php

function generateQuizPDF() { 

  // Check that AJAX request has valid nonce, if not, terminate immediately
  if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'vendavo-nonce')) {
    wp_die(-1);
  }
  // Set up form data for PDFShift API request
  $entry_id = $_POST['entry'];
  $form_data = RGFormsModel::get_lead($entry_id);
  $pdfRES = custom_confirmation_message( '', $form_data['form_id'], $form_data, true );

  // Send HTML Markup + Entry ID back on success
  wp_send_json_success(array(
    'response' => $pdfRES,
    'entry' => $_POST['entry']
  ));
}

add_action('wp_ajax_generateQuizPDF', 'generateQuizPDF'); // Logged In Users
add_action('wp_ajax_nopriv_generateQuizPDF', 'generateQuizPDF'); // Visitors



//* Remove decimals from total calculation in Gravity Forms
function gf_update_currency( $currencies ) {
	$currencies['USD'] = array(
   'name' => __( 'U.S. Dollar', 'gravityforms' ),
   'symbol_left' => '$',
   'symbol_right' => '',
   'symbol_padding' => '',
   'thousand_separator' => ',',
   'decimal_separator' => '.',
   'decimals' => 0
 );
  return $currencies;
}
add_filter( 'gform_currencies', 'gf_update_currency' );

add_action( 'wp_ajax_nopriv_ajax_vendor_pagination', 'ajax_vendor_pagination' );
add_action( 'wp_ajax_ajax_vendor_pagination', 'ajax_vendor_pagination' );

function ajax_vendor_pagination() {
  check_ajax_referer( 'ajax_btn_nonce', 'nonce' );
  $post_type = sanitize_text_field( $_POST['post_type'] );
  $paged = sanitize_text_field( $_POST['paged'] );
  $termFilter = sanitize_text_field( $_POST['termType'] );
  $termID = sanitize_text_field( $_POST['termID'] );

  $posts_per_page = get_option( 'posts_per_page' );
  switch ($post_type):

    case 'post':
    if($termFilter === 'cat') : 
      $termType = 'cat';
    elseif ($termFilter === 'tag'): 
      $termType = 'tag_id';
    elseif ($termFilter === 'author'): 
      $termType = 'author__in';
    endif;

    $args = array( 'post_type' => $post_type, 'paged' => $paged, $termType => $termID, 'post_status' => 'publish',
      'meta_query' => array(
        'relation'  => 'OR',
        array(
          'key'       => 'hide_from_loop',
          'value'     => 1,
          'compare'   => '!='
        ),
        array(
          'key'       => 'hide_from_loop',
          'compare'   => 'NOT EXISTS'
        )
      )
    );
    $loop = new WP_Query( $args );
    if ( $loop->have_posts() ) :
      while ( $loop->have_posts() ) : $loop->the_post();
        echo '<div class="item card-item col-lg-4 d-flex todisplay">'; get_template_part('/template-parts/cards/card-press-ajax'); echo '</div>';
      endwhile;
    endif;
    break;

    case 'resources':
    if($termID == 1) : 
      $args = array( 'post_type' => explode(',',$post_type), 'paged' => $paged, 'post_status' => 'publish',
        'meta_query' => array(
          array(
            'relation'  => 'OR',
            array(
              'key'       => 'hide_from_loop',
              'value'     => 1,
              'compare'   => '!='
            ),
            array(
              'key'       => 'hide_from_loop',
              'compare'   => 'NOT EXISTS'
            )
          )
        )
      );
    else : 
      $args = array( 'post_type' => $post_type, 'paged' => $paged, 'post_status' => 'publish',
        'meta_query' => array(
          array(
            'relation'  => 'OR',
            array(
              'key'       => 'hide_from_loop',
              'value'     => 1,
              'compare'   => '!='
            ),
            array(
              'key'       => 'hide_from_loop',
              'compare'   => 'NOT EXISTS'
            )
          )
        ));
      if(!empty($termFilter)):
        $args['tax_query'] = array(
          array (
            'taxonomy' => $termFilter,
            'field'    => 'term_id',
            'terms' => $termID,
          )
        );
      else:
        $args['tax_query'] = array(
          array (
            'taxonomy' => 'resource-type',
            'field'    => 'term_id',
            'terms' => $termID,
          )
        );
      endif;
    endif;
    $loop = new WP_Query( $args );
    if ( $loop->have_posts() ) :
      while ( $loop->have_posts() ) : $loop->the_post();
        echo '<div class="item card-item col-lg-4 d-flex todisplay">'; get_template_part('/template-parts/cards/card-resources-ajax'); echo '</div>';
      endwhile;
    endif;
    break;

    default:
    if($termID == 1) : 
      $args = array( 'post_type' => explode(',',$post_type), 'paged' => $paged, 'post_status' => 'publish',
        'meta_query' => array(
          'relation'  => 'OR',
          array(
            'key'       => 'hide_from_loop',
            'value'     => 1,
            'compare'   => '!='
          ),
          array(
            'key'       => 'hide_from_loop',
            'compare'   => 'NOT EXISTS'
          )
        ) );
    else : 
      $args = array( 'post_type' => $post_type, 'paged' => $paged, 'post_status' => 'publish',
        'meta_query' => array(
          'relation'  => 'OR',
          array(
            'key'       => 'hide_from_loop',
            'value'     => 1,
            'compare'   => '!='
          ),
          array(
            'key'       => 'hide_from_loop',
            'compare'   => 'NOT EXISTS'
          )
        ),
        'tax_query' => array(
          array (
            'taxonomy' => $post_type. '-type',
            'field'    => 'term_id',
            'terms' => $termID,
          )
        ) );
    endif;
    $loop = new WP_Query( $args );
    if ( $loop->have_posts() ) :
      while ( $loop->have_posts() ) : $loop->the_post();
        echo '<div class="item card-item col-lg-4 d-flex todisplay">'; get_template_part('/template-parts/cards/card-content'); echo '</div>';
      endwhile;
    endif;
    break;
  endswitch;

  wp_reset_postdata();
  die();
}


add_action( 'wp_ajax_nopriv_ajax_search_pagination', 'ajax_search_pagination' );
add_action( 'wp_ajax_ajax_search_pagination', 'ajax_search_pagination' );

function ajax_search_pagination() {
  check_ajax_referer( 'ajax_btn_nonce', 'nonce' );
  $post_type = array('post', 'resources', 'page');
  $paged = sanitize_text_field( $_POST['paged'] );
  $search_term = sanitize_text_field( $_POST['search_term'] );

  $posts_per_page = get_option( 'posts_per_page' );
  $args = array( 'post_type' => $post_type, 'paged' => $paged, 'post_status' => 'publish',
    's'         => $search_term,
    'meta_query' => array(
      'relation'  => 'OR',
      array(
        'key'       => 'hide_from_loop',
        'value'     => 1,
        'compare'   => '!='
      ),
      array(
        'key'       => 'hide_from_loop',
        'compare'   => 'NOT EXISTS'
      )
    ),
  );
  $loop = new WP_Query( $args );
  if ( $loop->have_posts() ) :
    while ( $loop->have_posts() ) : $loop->the_post();
      echo '<div class="item card-item col-lg-4 d-flex todisplay">'; get_template_part('/template-parts/cards/card-search-grid-v2'); echo '</div>';
    endwhile;
  endif;

  wp_reset_postdata();
  die();
}

/*
function reorder_SearchQuery( $query ) {
    if ( $query->is_search() && !is_admin() ) {
        $order_query = 'post_type';
        $query->set('orderby', $order_query);
        $query->set('order', 'ASC');
    }
}
add_action( 'pre_get_posts', 'reorder_SearchQuery' );
*/