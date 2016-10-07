{* Главное меню *}

{block menu_params}
    
    {$params = [
        "outerTpl" => '@CODE  <ul [[+wf.classes]]>[[+wf.wrapper]]</ul>',
        "innerTpl" => '@CODE <ul [[+wf.classes]]>[[+wf.wrapper]]</ul>',
        "parentRowTpl" => '@CODE <li[[+wf.id]][[+wf.classes]]>
            <a href="[[+wf.link]]" title="[[+wf.title]]" [[+wf.attributes]] class="dropdown-toggle" data-toggle="dropdown">[[+wf.linktext]] <span class="caret"></span></a>
            [[+wf.wrapper]]
        </li>',
        "outerClass" => 'menu',
        "innerClass" => 'sub-menu',
        "hereClass" => 'current-menu-item'
    ]}

{/block}

{block menu_wrapper}
<nav>
    {snippet name="Wayfinder@MainMenu" params=$params as_tag=!$main_menu_is_cached}
</nav>    
{/block}
 


                        <!-- START MAIN MENU-->
