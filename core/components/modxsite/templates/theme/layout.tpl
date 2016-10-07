{*

    Данный шаблон будет расширять шаблон layout.tpl из основного скина сайта,
    название которого содержится в переменной modxSmarty.template
*}

{*extends "[main]layout.tpl"*}

{block name=meta}

    {* Заголовок специально в блок загнан, чтобы в разных шаблонах его можно было бы переопределить *}
    <title xmlns="http://www.w3.org/1999/html">{block name="title"}{$modx->resource->longtitle|default:$modx->resource->pagetitle} | {$site_name}{/block}</title>
    {snippet name="MetaX@MetaX"}

{/block}

{block name=styles}

    <!-- REVOLUTION BANNER CSS SETTINGS -->
    <link rel="stylesheet" type="text/css" href="{$pre_template_url}rs-plugin/css/responsive.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="{$pre_template_url}rs-plugin/css/settings.css" media="screen"/>
    <!-- Flex Slider CSS -->
    <link rel="stylesheet" href="{$pre_template_url}flexslider/flexslider.css" type="text/css">
    <!-- Le styles -->
    <link href="{$pre_template_url}assets/css/bootstrap.css" rel="stylesheet">
    <link href="{$pre_template_url}assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="{$pre_template_url}assets/css/wide_layout.css" rel="stylesheet">
    <link href="{$pre_template_url}assets/css/docs.css" rel="stylesheet">
    <link href="{$pre_template_url}assets/css/options.css" rel="stylesheet">
    <!--<link href="{$pre_template_url}assets/css/builder.css" rel="stylesheet">-->
    <link href="{$pre_template_url}assets/css/custom.css" rel="stylesheet">
    <!--<link href="{$pre_template_url}assets/js/google-code-prettify/prettify.css" rel="stylesheet">-->
    <!--<link href="{$pre_template_url}assets/css/prettyPhoto.css" media="screen" rel="stylesheet" type="text/css">-->
    <link href="{$pre_template_url}assets/fancybox/source/jquery.fancybox.css" media="screen" rel="stylesheet"
          type="text/css">
    <link href="{$pre_template_url}assets/nivo/nivo-slider.css" media="screen" rel="stylesheet" type="text/css">
    {block name=fonts}
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,greek-ext,greek,vietnamese,latin-ext,cyrillic&ver=3.4.2"
              id="gOpenSans-css" media="all" rel="stylesheet" type="text/css"/>
    {/block}
    <!-- Le fav and touch icons -->

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" type="text/css" href="{$pre_template_url}assets/css/ie.css"/>
    <![endif]-->
    <!-- FlexSlider -->
    {block name=bootstrap_meta}
    {/block}

    {block name=bootstrap_theme}
    {/block}

    {block name=bootstrap}
    {/block}

{/block}



{block name=pagetitle}
{/block}
{block name=header}

    <!--PAGE HEAD-->
    <div class="page_head">
        <div class="container">

            <div class="row">
                <div class="span2">
                    <!--START LOGO IMAGE-->
                    <div class="logo">
                        <a href="{config name=site_url}">
                            <img alt="$site_name &#8211; " src="{$pre_template_url}images/logo.png"/></a>
                    </div>
                    <!-- END LOGO IMAGE-->
                </div>
                <div class="span9">
                    {include "inc/menu/mainmenu/menu.tpl"}
                </div>
            </div>
        </div>
    </div>
    <!--/PAGE HEAD-->
    <!--WELCOME AREA-->
    <div class="tag_line">
        <div class="container">
            <div class="row">
                <div class="span12">
                    <div class="welcome">
                        <div class="span7 pull-right">
                            {$phone = $modx->getObject('modResource',158)}
                            {$email = $modx->getObject('modResource',159)}
                            <h3><strong class="colored">{$phone->get('introtext')} </strong>
                            </h3>
                            <h5></span><a href="mailto:{$email->get('introtext')} alt=" Напишите нам на
                                          электронную почту">{$email->get('content')}</a>
                            </h5>
                        </div>
                        <div class="span4">
                            {block name=Breadcrumbs}
                                {snippet name="Breadcrumbs@Breadcrumbs"}
                            {/block}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/WELCOME AREA-->
{/block}

{block name=main-content}
    <div class="main_content_area">
        <div class="container">
            {block name=content}
                {$modx->resource->content}
            {/block}
        </div>
    </div>
{/block}
{block name=jquery}
{/block}


{block name=bootstrap_js}
{/block}

{block name=footers}


{/block}
{block alertify}
{/block}

{block name=jivosite}
{/block}

{block name=footer}
    {include "inc/footer/footer.tpl"}
{/block}
{block name=shopmodx_scripts}
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <!-- jQuery REVOLUTION Slider  -->
    <script type="text/javascript" src="{$pre_template_url}rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
    <script type="text/javascript" src="{$pre_template_url}rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <!--<script src="{$pre_template_url}assets/js/jquery.tweet.js"></script>-->
    <!--<script src="{$pre_template_url}assets/js/google-code-prettify/prettify.js"></script>-->
    <script src="{$pre_template_url}assets/js/bootstrap.min.js"></script>
    <script src="{$pre_template_url}assets/fancybox/source/jquery.fancybox.pack.js"></script>
    <script src="{$pre_template_url}assets/fancybox/source/jquery.fancybox-buttons.js"></script>
    <!--<script src="{$pre_template_url}assets/js/jquery.prettyPhoto.js"></script>-->
    <script src="{$pre_template_url}assets/js/jquery.easing.1.3.js"></script>
    <script src="{$pre_template_url}assets/js/superfish-menu/superfish.js"></script>
    <script src="{$pre_template_url}assets/js/jquery.nivo.slider.js"></script>
    <script src="{$pre_template_url}assets/js/jflickrfeed.min.js"></script>
    <script src="{$pre_template_url}assets/js/testimonialrotator.js"></script>
    <script src="{$pre_template_url}assets/js/jquery.waitforimages.js"></script>
    <script src="{$pre_template_url}assets/js/jquery.isotope.min.js"></script>
    <script src="{$pre_template_url}flexslider/jquery.flexslider-min.js"></script>
    <script src="{$pre_template_url}assets/js/theme.js"></script>
    <script src="{$pre_template_url}assets/js/custom.js"></script>
    <script src="{$pre_template_url}assets/js/ya-m.js"></script>
{/block}
