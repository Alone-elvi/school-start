{extends file="layout.tpl"}

{block name=params}
    {$params=[
    "where"=> ["id" => $modx->resource->id],
    'current' => 1,
    'showhidden' => 1,
    'showunpublished' => 1,
    "cache"     => 1,
    "class_key" => 1
    ]}

    {$options = "&q=100&w=780&h=260&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}
    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

    {$params=[
    "parent"=> $modx->resource->parent,
    'showhidden' => 1,
    'showunpublished' => 1,
    "cache"     => 1,
    "class_key" => 1
    ]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result_parent}
    {$options = "&q=100&w=780&h=390&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}

{/block}

{block name=content}
    {$arr = array()}
    {$curent = 0}
    {$count = 0}
    {$i = 0}
    {foreach $result_parent.object as $object}
        {if $object.id == $modx->resource->id}
            {$current = $i}
        {/if}
        {$arr[$i] = $object.id}
        {$arr[$object.id] = $object.pagetitle}
        {$i = $i + 1}
    {/foreach}
    {$count = $i}
    {$object = $result.object}
    <section id="headline">
        <div class="container">
            <h1>{$modx->resource->pagetitle}</h1>
        </div>
    </section>

    <section class="container page-content">
        <div class="col-md-6 col-sm-6 w-prev-article">
            {if $current>0}
                <a href="[[~{$arr[$current-1]}]]" rel=prev>
                    <span class=colorf>Предыдущая</span>
                    <strong>{$arr[$arr[$current-1]]}</strong>
                </a>
            {/if}
        </div>
        <div class="col-md-6 col-sm-6 w-next-article">
            {if $current<$count-1}
                <a href="[[~{$arr[$current+1]}]]" rel=next>
                    <span class=colorf>Следующая</span>
                    <strong>{$arr[$arr[$current+1]]}</strong>
                </a>
            {/if}
        </div>

        <hr class=vertical-space2>
        <section class="col-md-12 ">
            <article class=blog-single-post>
                <div class=post-trait-w>

                    <!--<div class=blgt1-top-sec>
                        <h1 class=post-title-ps1>{*$modx->resource->pagetitle*}</h1>
                    </div>-->
                    {$image = $object.image|default:$object.imageDefault}
                    {$src = $modx->runSnippet('phpthumbof', [
                    "input" => $image,
                    "options"   => $options
                    ])}

                    <img src="{$src}" alt="{$object.decription}" class="landscape full" /></div>
                <div class="post type-post status-publish format-standard has-post-thumbnail hentry category-food">
                    <div class=postmetadata>
                        <h6 class=blog-date> {$object.publishedon|date_format:"%D"}</h6>
                    </div>
                    {$object.content}
                    <!--<div class="container rec-posts">
                        <div class=col-md-12>
                            <h3 class=rec-title>Recommended Posts</div></h3>
                        <div class="col-md-4 col-sm-4">
                            <article class=rec-post>
                                <figure>
                                    <a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html" title="Health and safety limits children&#039;s school playtime"><img src="../wp-content/uploads/2016/03/kids-blog-page_04-1-420x330.jpg" alt="Health and safety limits children&#039;s school playtime" class="landscape thumbnail michigan_webnus_blog2_img" width=420 height=330 /></a>
                                </figure>
                                <h5><a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html">Health and safety limits children&#8217;s school playtime</a></h5>
                                <p>June 27, 2016</p>
                            </article>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <article class=rec-post>
                                <figure>
                                    <a href="../8-super-healthy-foods-we-guarantee-your-kid-will-eat/index.html" title="8 Super Healthy Foods We Guarantee Your Kid will Eat"><img src="../wp-content/uploads/2016/03/kids-blog-page_03-420x277.jpg" alt="8 Super Healthy Foods We Guarantee Your Kid will Eat" class="landscape thumbnail michigan_webnus_blog2_img" width=420 height=277 /></a>
                                </figure>
                                <h5><a href="../8-super-healthy-foods-we-guarantee-your-kid-will-eat/index.html">8 Super Healthy Foods We Guarantee Your Kid will Eat</a></h5>
                                <p>March 26, 2016</p>
                            </article>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <article class=rec-post>
                                <figure>
                                    <a href="../5-tips-to-adapt-children-with-modern-technology/index.html" title="Five tips to adapt children with modern technology"><img src="../wp-content/uploads/2016/06/blgp-k1-420x330.jpg" alt="Five tips to adapt children with modern technology" class="landscape thumbnail michigan_webnus_blog2_img" width=420 height=330 /></a>
                                </figure>
                                <h5><a href="../5-tips-to-adapt-children-with-modern-technology/index.html">Five tips to adapt children with modern technology</a></h5>
                                <p>June 28, 2016</p>-->
            </article>
            </div>
            </div>
            </div>
            </article>
            <!--<div class=comments-wrap id=comments>
                <div class=commentbox>
                    <div class=post-bottom-section>
                        <div class=right></div>
                    </div>
                    <div id=respond class=comment-respond>
                        <h3 id=reply-title class=comment-reply-title>Leave a Reply <small><a rel=nofollow id=cancel-comment-reply-link href="index.html#respond" style=display:none;>Cancel reply</a></small></h3>
                        <form action=http://webnus.biz/themes/michigan/kids/wp-comments-post.php method=post id=commentform class=comment-form>
                            <p class=comment-notes><span id=email-notes>Your email address will not be published.</span> Required fields are marked <span class=required>*</span></p>
                            <p class=comment-form-comment>
                                <label for=comment>Comment</label>
                                <textarea id=comment name=comment cols=45 rows=8 maxlength=65525 aria-required=true required=required></textarea>
                            </p>
                            <p class=comment-form-author>
                                <label for=author>Name <span class=required>*</span></label>
                                <input id=author name=author type=text value="" size=30 maxlength=245 aria-required=true required=required />
                            </p>
                            <p class=comment-form-email>
                                <label for=email>Email <span class=required>*</span></label>
                                <input id=email name=email type=text value="" size=30 maxlength=100 aria-describedby=email-notes aria-required=true required=required />
                            </p>
                            <p class=comment-form-url>
                                <label for=url>Website</label>
                                <input id=url name=url type=text value="" size=30 maxlength=200 />
                            </p>
                            <p class=form-submit>
                                <input name=submit type=submit id=submit class=submit value="Post Comment" />
                                <input type=hidden name=comment_post_ID value=8961 id=comment_post_ID />
                                <input type=hidden name=comment_parent id=comment_parent value=0 />
                            </p>
                        </form>
                    </div>
                </div>
            </div>-->
        </section>
        <!--<aside class="col-md-3 sidebar">
            <li id=search-2 class="widget widget_search">
                <h4 class=subtitle>Search</h4>
                <form role=search action=http://webnus.biz/themes/michigan/kids/ method=get>
                    <div>
                        <input name=s type=text placeholder="Enter Keywords..." class="search-side live-search">
                        <input type=submit id=searchsubmit value=Search class=btn />
                    </div>
                </form>
            </li>
            <li id=categories-2 class="widget widget_categories">
                <h4 class=subtitle>Categories</h4>
                <ul>
                    <li class="cat-item cat-item-11"><a href="../category/english-learning/index.html">English Learning</a></li>
                    <li class="cat-item cat-item-12"><a href="../category/food/index.html">Food</a></li>
                    <li class="cat-item cat-item-13"><a href="../category/geography/index.html">Geography</a></li>
                    <li class="cat-item cat-item-64"><a href="../category/school/index.html">school</a></li>
                </ul>
            </li>
            <li id=webnuswidgettabs-1 class="widget widget_webnuswidgettabs">
                <div class=widget-tabs>
                    <div class="tab-hold tabs-wrapper">
                        <ul id=tabs class="tabset tabs">
                            <li><a href="index.html#tab-popular">Popular</a></li>
                            <li><a href="index.html#tab-recent">Recent</a></li>
                            <li><a href="index.html#tab-comments">Comments</a></li>
                        </ul>
                        <div class="tab-box tabs-container">
                            <div id=tab-popular class="tab tab_content" style="display: none;">
                                <ul class=tab-list>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../5-tips-to-adapt-children-with-modern-technology/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k1-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k1 /></a>
                                        </div>
                                        <div class=content><a href="../5-tips-to-adapt-children-with-modern-technology/index.html">Five tips to adapt children with modern technology</a>
                                            <div class=tab-date>June 28, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/03/kids-blog-page_04-1-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=kids-blog-page_04 /></a>
                                        </div>
                                        <div class=content><a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html">Health and safety limits children&#8217;s school playtime</a>
                                            <div class=tab-date>June 27, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-2/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k3-1-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k3 /></a>
                                        </div>
                                        <div class=content><a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-2/index.html">Pupils and staff used antisemitic language for kids</a>
                                            <div class=tab-date>June 26, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../things-you-should-know-before-seeing-classroom/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k2-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k2 /></a>
                                        </div>
                                        <div class=content><a href="../things-you-should-know-before-seeing-classroom/index.html">Things you should know before seeing classroom</a>
                                            <div class=tab-date>June 25, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../lets-make-kindergarten-better-than-ever-in-2016/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k3-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k3 /></a>
                                        </div>
                                        <div class=content><a href="../lets-make-kindergarten-better-than-ever-in-2016/index.html">Let’s make kindergarten better than ever in 2016</a>
                                            <div class=tab-date>June 25, 2016</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id=tab-recent class="tab tab_content" style="display: none;">
                                <ul class=tab-list>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../5-tips-to-adapt-children-with-modern-technology/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k1-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k1 /></a>
                                        </div>
                                        <div class=content><a href="../5-tips-to-adapt-children-with-modern-technology/index.html">Five tips to adapt children with modern technology</a>
                                            <div class=tab-date>June 28, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/03/kids-blog-page_04-1-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=kids-blog-page_04 /></a>
                                        </div>
                                        <div class=content><a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html">Health and safety limits children&#8217;s school playtime</a>
                                            <div class=tab-date>June 27, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-2/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k3-1-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k3 /></a>
                                        </div>
                                        <div class=content><a href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-2/index.html">Pupils and staff used antisemitic language for kids</a>
                                            <div class=tab-date>June 26, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../lets-make-kindergarten-better-than-ever-in-2016/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k3-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k3 /></a>
                                        </div>
                                        <div class=content><a href="../lets-make-kindergarten-better-than-ever-in-2016/index.html">Let’s make kindergarten better than ever in 2016</a>
                                            <div class=tab-date>June 25, 2016</div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a href="../things-you-should-know-before-seeing-classroom/index.html"><img width=164 height=124 src="../wp-content/uploads/2016/06/blgp-k2-164x124.jpg" class="attachment-michigan_webnus_tabs_img size-michigan_webnus_tabs_img wp-post-image" alt=blgp-k2 /></a>
                                        </div>
                                        <div class=content><a href="../things-you-should-know-before-seeing-classroom/index.html">Things you should know before seeing classroom</a>
                                            <div class=tab-date>June 25, 2016</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id=tab-comments class="tab tab_content" style="display: none;">
                                <ul class=tab-list>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a><img alt='' src='http://0.gravatar.com/avatar/3f263c6a3cce79dff1fc62b936846492?s=52&amp;d=mm&amp;r=g' srcset='http://0.gravatar.com/avatar/3f263c6a3cce79dff1fc62b936846492?s=104&amp;d=mm&amp;r=g 2x' class='avatar avatar-52 photo' height=52 width=52 /></a>
                                        </div>
                                        <div class=content>
                                            <p>admin says:</p>
                                            <div><a class=comment-text-side href="../course/technology/index.html#comment-5" title="admin on Technology">Proin eget tortor risus it sapien massa, convallis a era nec, egestas non nisi ultricies ligula sed magna dict...</a></div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a><img alt='' src='http://0.gravatar.com/avatar/c4996dffcb33f736773db2db652287e9?s=52&amp;d=mm&amp;r=g' srcset='http://0.gravatar.com/avatar/c4996dffcb33f736773db2db652287e9?s=104&amp;d=mm&amp;r=g 2x' class='avatar avatar-52 photo' height=52 width=52 /></a>
                                        </div>
                                        <div class=content>
                                            <p>Joe Dassin says:</p>
                                            <div><a class=comment-text-side href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html#comment-4" title="Joe Dassin on Health and safety limits children's school playtime">Quisque sollicitudin ante vel nulla bibendum varius. Praesent lobortis felis erat, id sagittis quam mollis ac....</a></div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a><img alt='' src='http://1.gravatar.com/avatar/77741fd74dba5db12202703a51fe3c40?s=52&amp;d=mm&amp;r=g' srcset='http://1.gravatar.com/avatar/77741fd74dba5db12202703a51fe3c40?s=104&amp;d=mm&amp;r=g 2x' class='avatar avatar-52 photo' height=52 width=52 /></a>
                                        </div>
                                        <div class=content>
                                            <p>David Kelly says:</p>
                                            <div><a class=comment-text-side href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html#comment-3" title="David Kelly on Health and safety limits children's school playtime">Quisque sollicitudin ante vel nulla bibendum varius. Praesent lobortis felis erat, id sagittis quam mollis ac....</a></div>
                                        </div>
                                    </li>
                                    <li class=clearfix>
                                        <div class=image>
                                            <a><img alt='' src='http://0.gravatar.com/avatar/66b4e152c798575031695bd51708fde8?s=52&amp;d=mm&amp;r=g' srcset='http://0.gravatar.com/avatar/66b4e152c798575031695bd51708fde8?s=104&amp;d=mm&amp;r=g 2x' class='avatar avatar-52 photo' height=52 width=52 /></a>
                                        </div>
                                        <div class=content>
                                            <p>Lance Dorgan says:</p>
                                            <div><a class=comment-text-side href="../lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit-3/index.html#comment-2" title="Lance Dorgan on Health and safety limits children's school playtime">Quisque sollicitudin ante vel nulla bibendum varius. Praesent lobortis felis erat, id sagittis quam mollis ac....</a></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li id=webnusinstagramwidget-2 class="widget widget_webnusinstagramwidget">
                <h4 class=subtitle>Instagram</h4>
                <div class=instagram-feed>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/p/BKKDErxjKJB/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14288055_180214692407767_96342380_n.jpg?ig_cache_key=MTMzNTg5Mzc1NTQ4ODQxMjIyNQ%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BKI4zdxD173/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.129.1080.1080/14272214_528164387393561_667234569_n.jpg?ig_cache_key=MTMzNTU2NzExNjc3NDg5MTI1NQ%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BKHY8jQjT3N/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14309906_173130089760343_1511477641_n.jpg?ig_cache_key=MTMzNTE0NTUyODY4MjE2Nzc1Nw%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BKGN22XASiM/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14269232_1057479074373422_363372307_n.jpg?ig_cache_key=MTMzNDgxNTI4MzM4NjMyOTIyOA%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BKEbY5Tj2aP/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.47.895.895/14272018_515211995338023_192604663_n.jpg?ig_cache_key=MTMzNDMxMTg0NzY2MzE5OTg4Nw%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BKDp8tvDTLp/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14134673_164696467267773_1890112718_n.jpg?ig_cache_key=MTMzNDA5NDQwNjgxNTEzNDQ0MQ%3D%3D.2" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BKB4Y5wDDwn/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c1.0.1078.1078/14240922_1193820124024404_261135781_n.jpg?ig_cache_key=MTMzMzU5NDk2NjU1OTgzMzEyNw%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BJ_Hjv_jOn1/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.121.1080.1080/14279033_1786276121650976_568574981_n.jpg?ig_cache_key=MTMzMjgxNzI1Nzc2NDI4NDkxNw%3D%3D.2.c" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/BJ84FBsjX6D/" target=_blank><img alt="" src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.65.1080.1080/14099320_1291841390878910_97489451_n.jpg?ig_cache_key=MTMzMjE4NjIyNTgxODA0MTk4Nw%3D%3D.2.c" /></a>
                        </li>
                    </ul>
                    <div class=clear></div>
                </div>
            </li>
            <li id=webnussocialwidget-2 class="widget widget_webnussocialwidget">
                <h4 class=subtitle>Social</h4>
                <div class=socialfollow> <a target=_blank href="index.html#" class=twitter><i class=fa-twitter></i></a><a target=_blank href="index.html#" class=google-plus><i class=fa-google-plus></i></a><a target=_blank href="index.html#" class=instagram><i class=fa-instagram></i></a><a target=_blank href="index.html#" class=facebook><i class=fa-facebook></i></a><a target=_blank href="index.html#" class=rss><i class=fa-rss></i></a><a target=_blank href="index.html#" class=linkedin><i class=fa-linkedin></i></a></div>
            </li>
            <li id=michigan_webnus_subscribe_widget-3 class="widget widget_michigan_webnus_subscribe_widget">
                <h4 class=subtitle>Subscribe</h4>
                <form class=widget-subscribe-form action=http://feedburner.google.com/fb/a/mailverify method=post target=popupwindow onSubmit="window.open('http://feedburner.google.com/fb/a/mailverify?uri=', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true">
                    <input type=hidden value="" name=uri />
                    <input type=hidden name=loc value=en_US />
                    <p></p>
                    <input placeholder="Example: name@gmail.com" class="colorr widget-subscribe-email" type=text name=email />
                    <button class=widget-subscribe-submit type=submit><span>GO! </span></button>
                </form>
            </li>
        </aside>-->
        <div class=white-space></div>
    </section>
{/block}