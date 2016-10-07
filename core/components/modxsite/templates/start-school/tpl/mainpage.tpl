{* Шаблон главной страницы. Расширяет шаблон layout.tpl *}
{extends file="layout.tpl"}

{* Переопределяем блок контента *}
{block name=mainpage}

    {include "inc/mainpage/slider.tpl"}
    {include "inc/mainpage/try.tpl"}

    {include "inc/mainpage/offer.tpl"}
    {include "inc/mainpage/classes.tpl"}
    {include "inc/mainpage/classboard.tpl"}
    {include "inc/mainpage/testimonials.tpl"}
    {include "inc/mainpage/staffs.tpl"}
    {*include "inc/mainpage/timetable.tpl"*}

    <script src='{$pre_template_url}wp-content/plugins/rs-plugin/js/jquery.themepunch.plugins.min.js'></script>
    <script src='{$pre_template_url}wp-content/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js'></script>

{/block}
{block name=content}
{/block}