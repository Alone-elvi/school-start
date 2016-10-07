{extends "[main]layout.tpl"}
<!--[if (gte IE 9)|!(IE)]><!-->
<!DOCTYPE html>
<html lang=en-US xmlns="http://www.w3.org/1999/html">
<!--<![endif]-->
{block name=meta}

    {* Заголовок специально в блок загнан, чтобы в разных шаблонах его можно было бы переопределить *}
    <title>{block name="title"}{$modx->resource->longtitle|default:$modx->resource->pagetitle}{/block}</title>
    {snippet name="MetaX@MetaX"}

{/block}

{block name=params}
{/block}
{block name=bootstrap}
{/block}

{block name=styles}
    <link rel=stylesheet href="{$pre_template_url}css/timetible.css"/>
    <link rel=stylesheet id=main-style-css href='{$pre_template_url}wp-content/themes/michigan/css/master-min.css' media=all />
    <link rel=stylesheet id=main-style-css href='{$pre_template_url}wp-content/plugins/rs-plugin/css/captions-original.css' media=all />
    <link rel=stylesheet id=main-style-css href='{$pre_template_url}wp-content/plugins/rs-plugin/css/settings.css' media=all />

    <link rel=stylesheet href="{$pre_template_url}css/custom-style.css"/>
    <link rel=stylesheet href="{$pre_template_url}fancyBox/source/jquery.fancybox.css"/>
{/block}
{block name=pagetitle}
{/block}
{block name=header}
{/block}
{block name=body}
<body>
<div id=wrap class=" colorskin-custom kids-t ">
    <section class=top-bar>
        <div class=container>
            <div class="top-links lftflot">
                [[!SimpleSearchForm? &landing=`190` &tpl=`search`]]
                <h6 class="ui-link colorful-header"><i class=fa-envelope-o></i>{include file="inc/contacts/email.tpl"}</h6>
                <h6><i class=fa-phone></i>
                    <a class="ui-link colorful-header" href="tel:{include file='inc/contacts/phone.tpl'}"> {include file="inc/contacts/phone.tpl"}</a>
                </h6>
            </div>
            <div class="top-links rgtflot">
                <div class=socialfollow>
                    <!--<a target=_blank href="index.html#" class=twitter><i class=fa-twitter></i></a>-->
                    <!--<a target=_blank href="index.html#" class=google-plus><i class=fa-google-plus></i></a>-->
                    <a target=_blank href="https://www.instagram.com/school.start/" class=instagram><i class=fa-instagram></i></a>
                    <!--<a target=_blank href="index.html#" class=facebook><i class=fa-facebook></i></a>-->
                    <!--<a target=_blank href="index.html#" class=rss><i class=fa-rss></i></a>-->
                    <a target=_blank href="https://vk.com/startschoolorg" class=vk><i class=fa-vk></i></a>
                </div>
            </div>
        </div>
    </section>
    <header id=header class="res-menu horizontal-w  colorful-header">
        <div class=container>
            <div class="col-md-3 col-sm-3 logo-wrap ">
                <div class=logo>
                    <a href="index.html">
                        <img src={$pre_template_url}images/site/logos/logo.PNG alt=logo width=204
                             class=img-logo-w1>
                    </a>
                    <span class=logo-sticky>
                        <a href="index.html">
                            <img src="{$pre_template_url}images/site/logos/logo.PNG" alt=logo width=60 class=img-logo-w3>
                        </a>
                    </span>
                </div>
            </div>
            {include file="inc/menu/mainmenu/menu.tpl"}
        </div>
    </header>
    {block name=content}
        <section id="headline">
            <div class="container">
                <h2>{$modx->resource->pagetitle}</h2>
            </div>
        </section>
        <section class="container page-content">
            <hr class=vertical-space2>
            <section class="col-md-9 cntt-w">
                <article id=post-8961 class="blog-post blgtyp1  post-8961 post type-post status-publish format-standard has-post-thumbnail hentry category-school">
                    <div class=blog-inner>
                        <div class=blgt1-top-sec>
                            <!--<span class="post-format-icon colorb "></span>-->
                            <!--<h3 class=post-title-ps1>
                            </h3>-->
                            {$modx->resource->content}
                        </div>
                    </div>
                </article>
            </section>
        </section>
    {/block}

    <section id=main-content class=container>
        <div class=row-wrapper-x>
            <p></p>
        </div>
    </section>

    {block name=slider}
    {/block}
    {block name=mainpage}
    {/block}
    {block name=footer}
        {include "inc/footer/footer.tpl"}
    {/block}

{/block}

{block name=shopmodx_scripts}
    <script src='{$pre_template_url}js/jquery.min.js'></script>
    <!--script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></--script-->
    <script src="https://code.jquery.com/jquery-migrate-1.4.1.min.js" type="text/javascript"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>-->
    <script src='{$pre_template_url}fancyBox/source/jquery.fancybox.js'></script>


    <script src='{$pre_template_url}wp-includes/js/jquery/ui/core.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/widget.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/position.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/tooltip.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/datepicker.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/mouse.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/slider.min-ver=1.11.4.js'></script>
    <script src='{$pre_template_url}wp-includes/js/jquery/ui/tabs.min-ver=1.11.4.js'></script>

    <script src='{$pre_template_url}wp-content/plugins/timetable/js/jquery.ba-bbq.min-ver=4.5.4.js'></script>
    <script src='{$pre_template_url}wp-content/plugins/timetable/js/jquery.carouFredSel-6.2.1-packed-ver=4.5.4.js'></script>
    <script src='{$pre_template_url}wp-content/plugins/timetable/js/jquery.carouFredSel-6.2.1-packed-ver=4.5.4.js'></script>
    <script src='{$pre_template_url}wp-content/plugins/w-time-table/public/js/wb-tt-ver=1.0.0.js'></script>
    <script src='{$pre_template_url}wp-includes/js/mediaelement/mediaelement-and-player.min-ver=2.18.1-a.js'></script>
    <script src="{$pre_template_url}wp-content/themes/michigan/js/jquery.masonry.min.js"></script>
    <script src="{$pre_template_url}wp-content/themes/michigan/js/webnus-custom.js"></script>
    <script src="{$pre_template_url}wp-content/themes/michigan/js/colorize.js"></script>
    <script src='{$pre_template_url}wp-includes/js/wp-embed.min-ver=4.5.4.js'></script>
    <script src="{$pre_template_url}wp-content/themes/michigan/js/live-search.js"></script>
    <script src='{$pre_template_url}wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min-ver=4.12.js'></script>

{/block}
</body>

</html>
