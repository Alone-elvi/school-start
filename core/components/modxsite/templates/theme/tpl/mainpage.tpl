{extends "[main]tpl/mainpage.tpl"}

{*
    Данный шаблон будет расширять шаблон tpl/mainpage.tpl из основного скина сайта,
    название которого содержится в переменной modxSmarty.template
*}
{block name=content}

<!--<div class="row mrgbtm35">-->
<div class="row">
    {include "inc/menu/leftmenu/menu.tpl"}
    {include "inc/slider/slider.tpl"}
</div>
<div class="home_separator"></div>    

<div class="row mrgbtm35">
    <div class="span12">
        <!--<p style="text-align: center;">
            <img class="size-full aligncenter" title="round1" src="images/admin.png" alt="" width="50" height="50"/>
        </p>-->
        <h1 style="text-align: center;">{$modx->resource->longtitle}</h1>
        <p style="text-align: center; font-size: 11px; margin-bottom: 0px !important;">{$modx->resource->content}</p>          
    </div>
</div>

<div class="home_separator"></div>
<!-- Start recent portfolio item -->
{include "inc/portfolio/portfolio.tpl"}

    <!-- DIVIDER -->
<div class="home_separator"></div>                        

    <!-- End recent portfolio item -->

{/block}