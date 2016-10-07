<section id=pre-footer> </section>
<footer id=footer>
    <section class="container footer-in">
        <div class=row>
            <div class=col-md-4>
                <ul>
                    <li id=text-1 class="widget widget_text">
                        <h5 class=subtitle>О нас</h5>
                        <div class=textwidget>
                            <img src="{$pre_template_url}images/site/logos/Logo_Start_Footer.png" alt="Школа Старт" />
                            <hr class=vertical-space1>
                            {include file="inc/footer/footer-about.tpl"}
                        </div>
                    </li>
                </ul>
            </div>
            <div class=col-md-4>
                {include file="inc/footer/footer-articles.tpl"}
            </div>
            <div class=col-md-4>
                <ul>
                    <li id=text-2 class="widget widget_text">
                        <h5 class=subtitle>Контактная информация</h5>
                        <div class=textwidget>
                            <div class=contant-information>
                                <div class=clearfix><i class=fa-home></i> <span>{include file="inc/contacts/address.tpl"}</span></div>
                                <div class=clearfix><i class=fa-phone></i>
                                    <div><a href="tel:{include file='inc/contacts/phone.tpl'}"> {include file="inc/contacts/phone.tpl"}</a></div>
                                </div>
                                <div class=clearfix><i class=fa-envelope></i>
                                    <div>{include file="inc/contacts/email.tpl"}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class=footbot>
        <div class=container>
            <div class=col-md-6>
                <div class="footer-navi f-left"> © {$smarty.now|date_format:"%Y"} All Rights Reserved. Created by Alone-elvi.</div>
            </div>
            <div class=col-md-6>
                <div class="footer-navi floatright">
                    <div class=socialfollow>
                        <a target=_blank href="https://www.instagram.com/school.start/" class=instagram><i class=fa-instagram></i></a>
                        <a target=_blank href="https://vk.com/startschoolorg" class=vk><i class=fa-vk></i></a>

                        <!--<a target=_blank href="index.html#" class=twitter><i class=fa-twitter></i></a><a target=_blank href="index.html#" class=google-plus><i class=fa-google-plus></i></a><a target=_blank href="index.html#" class=instagram><i class=fa-instagram></i></a><a target=_blank href="index.html#" class=facebook><i class=fa-facebook></i></a><a target=_blank href="index.html#" class=rss><i class=fa-rss></i></a><a target=_blank href="index.html#" class=linkedin><i class=fa-linkedin></i></a>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</footer>
