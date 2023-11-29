<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

?>
<!doctype html>

<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php if(is_singular( 'resources' )) {
      $postID = get_the_ID();
      $pageType = get_field('resource_type', $postID);
      $resourceRedirect = get_field('resource_redirect', $postID);        
      if ($pageType == 'redirect' && $resourceRedirect) { echo '<meta HTTP-EQUIV="REFRESH" content="0; url='. $resourceRedirect['url'] .'">'; };
  }; ?>
  <?php wp_head(); ?>
  <?php if(get_field('head_scripts', 'option')) : the_field('head_scripts', 'option'); endif; ?>
</head>
<body <?php body_class(); ?>>
  <?php if(get_field('body_scripts', 'option')): the_field('body_scripts', 'option'); endif; ?>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text"
      href="#content"><?php _e( 'Skip to content', 'vendavo' ); ?></a>
      <?php if (get_post_type() !== 'quiz_pdf'): ?>
        <?php get_template_part( 'template-parts/header/site-header' ); ?>
      <?php endif; ?>
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">