<!--FOOTER-->
      
<!-- START WIDGET AREA AND SOCIAL ICONS -->
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="span3 soc_icons">
                <div>
                    <img alt="" src="{$pre_template_url}images/logo-footer.png"><br>
                    <!--<a href="http://flickr.com/" target="_blank"><div class="icon_flickr"></div></a>-->
                    <!--<a href="http://plus.google.com/" target="_blank"><div class="icon_google"></div></a>-->
                    <a href="http://facebook.com/" target="_blank"><div class="icon_facebook"></div></a>
                    <!--<a href="http://pinterest.com/" target="_blank"><div class="icon_pi"></div></a>-->
                    <a href="http://twitter.com/" target="_blank"><div class="icon_t"></div></a>
                    <a href="http://youtube.com/" target="_blank"><div class="icon_youtube"></div></a>
                    <!--<a href="http://linkedin.com/" target="_blank"><div class="icon_in"></div></a>
                    <a href="http://deviantart.com/" target="_blank"><div class="icon_da"></div></a>
                    <a href="http://www.skype.com/" target="_blank"><div class="icon_skype"></div></a>
                    <a href="http://www.icq.com/" target="_blank"><div class="icon_icq"></div></a>
                    <a href="http://envato.com/" target="_blank"><div class="icon_envato"></div></a>
                    <a href="http://forrst.com/" target="_blank"><div class="icon_forrst"></div></a>
                    <a href="http://www.bing.com/" target="_blank"><div class="icon_bing"></div></a>
                    <a href="http://myspace.com/" target="_blank"><div class="icon_myspace"></div></a>-->
                </div>
            </div>

            <div class="span3">
                <div class="textwidget">
                    <div class="well">
                    {$footer_description  = $modx->getObject('modResource',160)}
                    <h6>{$footer_description->get('introtext')}</h6>{$footer_description->get('content')}

                    </div>
                </div>
            </div>
            <div class="span3">
            <h6>Контактная информация</h6><hr>
                <div class="textwidget">
                <ul class="unstyled">
                    <li><i class="icon-user icon-white"></i> {$phone->get('introtext')}</li>
                    <li><i class="icon-envelope icon-white"></i> {$email->get('content')}</li>
                    {$address  = $modx->getObject('modResource',161)}

                    <li><i class="icon-map-marker icon-white"></i> {$address->get('content')}</li>
                </ul>
                </div>
            </div>
            <!-- END CONTACT INFO -->
        </div>
    </div>
</div>
<!-- END WIDGET AREA AND SOCIAL ICONS -->
        
<!--START BOTTOM LINE-->
<div class="bottom_line">
    <div class="container">
        <div class="row">
            <!-- START COPYRIGHT INFORMATION-->
            <div class="span6">
                <span class="copyright">Copyright {$smarty.now|date_format:"%Y"} - Уральские мастера. Разработка  - <a href="http://alone-elvi.net">Alone-elvi.net</a></span>
            </div>
            <!-- END COPYRIGHT INFORMATION-->
            <div class="span6">
                {include "inc/menu/footer/menu.tpl"}
            </div>
        </div>
    </div>
</div>
<!--END BOTTOM LINE-->
<!--END FOOTER-->