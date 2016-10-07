{* Главное меню *}

{block menu_params}

    {$params = [
    "parentRowTpl" => '@CODE <li[[+wf.id]][[+wf.classes]]>
            <a href="[[+wf.link]]" title="[[+wf.title]]" [[+wf.attributes]] class="dropdown-toggle" data-toggle="dropdown">[[+wf.linktext]] <span class="caret"></span></a>
            [[+wf.wrapper]]
        </li>',
"outerClass" => 'nav navbar-nav',
"innerClass" => 'dropdown-menu'
]}

{/block}

{block menu_wrapper}
    <nav id=nav-wrap class="nav-wrap1 col-md-9 col-sm-9 ">
        <div class=container>
            {snippet name="Wayfinder@MainMenu" params=$params as_tag=!$main_menu_is_cached}
        </div>
    </nav>
{/block}
 