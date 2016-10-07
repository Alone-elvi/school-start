{* Главное меню *}

{block menu_params}

    {$params = [
    "rowTpl" => '@CODE <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="[[+wf.link]]" title="[[+wf.title]]" [[+wf.attributes]] data-description="">[[+wf.linktext]]</a></li>',
"outerTpl" => '@CODE [[+wf.wrapper]]
<!--<li[[+wf.id]][[+wf.classes]]>
            <a href="[[+wf.link]]" title="[[+wf.title]]" [[+wf.attributes]] [[+wf.classes]] data-toggle="">[[+wf.linktext]]</a>

        </li>-->',
"parentRowTpl" => '@CODE <li[[+wf.id]][[+wf.classes]]>
            <a href="[[+wf.link]]" title="[[+wf.title]]" [[+wf.attributes]] data-toggle="">[[+wf.linktext]]</a>
            [[+wf.wrapper]]
        </li>',
"innerTpl" => '@CODE
            <ul class="sub-menu">
                [[+wf.wrapper]]
            </ul>
        </li>',
"outerClass" => '',
"parentClass" => 'menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children',
"innerClass" => 'menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children',
"startId" => '0',
     "where" => 'parent:not in":[2, 5, 110, 85, 110, 170]',
"level" => '2'
]}

{/block}

{block menu_wrapper}
    <nav id=nav-wrap class="nav-wrap1 col-md-9 col-sm-9 ">
        <div id="menu-icon"><i class="fa-navicon"></i> <span>Menu - </span><span class="mn-clk">Navigation</span><span
                    class="mn-ext1"></span><span class="mn-ext2"></span><span class="mn-ext3"></span></div>
        <div class=container>
            <ul id=nav>
                {snippet name="Wayfinder@MainMenu" params=$params as_tag=!$main_menu_is_cached}
            </ul>

        </div>
    </nav>
{/block}
