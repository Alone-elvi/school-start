{$params = [
    "parent" => 163
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
<!-- START SIDEBAR -->
<div class="span3 page_sidebar">
     <div class="well">
            <h5 style="font-weight: 600; text-transform: uppercase !important;">Деятельность:</h5>
            <hr/>
            <div class="textwidget">
                <ul class="sub-menu">
                {foreach $result.object as $object} 
                    <li><a href="{$object.uri}">{$object.pagetitle}</a></li>
                {/foreach}
            </ul>
            </div>
        </div>
</div>

<!--END SIDEBAR-->

