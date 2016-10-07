{$params = [
    where => [ 
        'parent:NOT IN'=> [85, 5, 82, 80, 78]
    ]
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

<!-- START FOOTER MENU-->
<span class="copyright pull-right visible-desktop">
    <div class="menu-footer-menu-container">
        <ul class="unstyled footer_menu" id="menu-footer-menu">
            {foreach $result.object as $object} 
                <li><a href="{$object.uri}">{$object.pagetitle}</a></li>
            {/foreach}
        </ul>
    </div>
</span>
<!-- END FOOTER MENU-->
