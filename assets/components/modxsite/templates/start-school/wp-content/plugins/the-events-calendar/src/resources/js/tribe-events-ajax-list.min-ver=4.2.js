!function(e,t,a,r,i,n,s,p,_,l){a(t).ready(function(){function u(e){if("change_view"!=tribe_events_bar_action){if(e.preventDefault(),s.ajax_running)return;var a=t.location.pathname;s.paged=1,a.match(/\/all\/$/)?s.view="all":s.view="list",s.popping=!1,n.pre_ajax(function(){o()})}}function o(){var u=a("#tribe-events-header");if(s.ajax_running=!0,!s.popping){s.filter_cats&&(r.cur_url=u.data("baseurl"));var o=a("#tribe-events-list-hash").val();s.params={action:"tribe_list",tribe_paged:s.paged,tribe_event_display:s.view},s.url_params={tribe_paged:s.paged,tribe_event_display:s.view};var v=t.location.pathname;if((v.match(/\/all\/$/)||r.cur_url.match(/tribe_post_parent=[0-9]+/))&&(s.url_params.tribe_event_display="all",s.params.tribe_post_parent=parseInt(u.closest("#tribe-events-content").find("[data-parent-post-id]:first").data("parent-post-id"),10)),""===tribe_js_config.permalink_settings&&(s.url_params.eventDisplay="all"===s.url_params.tribe_event_display?"all":"list"),o.length&&(s.params.hash=o),r.default_permalinks&&!s.url_params.hasOwnProperty("post_type")&&(s.url_params.post_type=_.events_post_type),s.category&&(s.params.tribe_event_category=s.category),a(i).trigger("tribe_ev_serializeBar"),n.invalid_date_in_params(s.params))return void(s.ajax_running=!1);a("#tribe-events-content .tribe-events-loop").tribe_spin(),s.params=a.param(s.params),s.url_params=a.param(s.url_params),a(i).trigger("tribe_ev_collectParams"),s.pushstate=!1,s.do_string=!0}p.pushstate&&!s.filter_cats?(l&&debug.time("List View Ajax Timer"),a(i).trigger("tribe_ev_ajaxStart").trigger("tribe_ev_listView_AjaxStart"),a.post(TribeList.ajaxurl,s.params,function(e){if(s.initial_load=!1,n.enable_inputs("#tribe_events_filters_form","input, select"),e.success){s.ajax_running=!1,r.ajax_response={total_count:parseInt(e.total_count),view:e.view,max_pages:e.max_pages,tribe_paged:e.tribe_paged,timestamp:(new Date).getTime()},a("#tribe-events-list-hash").val(e.hash);var p=a.parseHTML(e.html);a("#tribe-events-content").replaceWith(p),0===e.total_count&&a("#tribe-events-header .tribe-events-sub-nav").empty(),s.page_title=a("#tribe-events-header").data("title"),t.title=s.page_title,s.do_string&&history.pushState({tribe_params:s.params,tribe_url_params:s.url_params},s.page_title,r.cur_url+"?"+s.url_params),s.pushstate&&history.pushState({tribe_params:s.params,tribe_url_params:s.url_params},s.page_title,r.cur_url),a(i).trigger("tribe_ev_ajaxSuccess").trigger("tribe_ev_listView_AjaxSuccess"),a(i).trigger("ajax-success.tribe").trigger("tribe_ev_listView_AjaxSuccess"),l&&debug.timeEnd("List View Ajax Timer")}})):s.url_params.length?e.location=r.cur_url+"?"+s.url_params:e.location=r.cur_url}var v=n.get_url_param("tribe_paged"),b=a("#tribe-events > .tribe-events-venue");if(v&&(s.paged=v),p.pushstate&&!p.map_view()){var g="action=tribe_list&tribe_paged="+s.paged;r.params.length&&(g=g+"&"+r.params),s.category&&(g=g+"&tribe_event_category="+s.category),history.replaceState({tribe_params:g,tribe_url_params:r.params},t.title,location.href),a(e).on("popstate",function(e){var t=e.originalEvent.state;t&&!b.length&&(s.do_string=!1,s.pushstate=!1,s.popping=!0,s.params=t.tribe_params,s.url_params=t.tribe_url_params,n.pre_ajax(function(){o()}),n.set_form(s.params))})}a("#tribe-events-content-wrapper").on("click",'ul.tribe-events-sub-nav a[rel="next"]',function(e){if(e.preventDefault(),!s.ajax_running){var t=a(this).attr("href"),i=/tribe_event_display=([^&]+)/gi,p=i.exec(t);a(this).parent().is(".tribe-events-past")?s.view="past":p&&"undefined"!=typeof p[1]?s.view=p[1]:s.view="list",r.cur_url=n.url_path(t),i=/tribe_paged=([^&]+)/gi,p=i.exec(t),p&&"undefined"!=typeof p[1]?s.paged=p[1]:"list"===s.view?s.paged?s.paged++:s.paged=2:s.paged?s.paged--:(s.view="list",s.paged=1),s.popping=!1,n.pre_ajax(function(){o()})}}).on("click",'ul.tribe-events-sub-nav a[rel="prev"]',function(e){if(e.preventDefault(),!s.ajax_running){var t=a(this).attr("href"),i=/tribe_event_display=([^&]+)/gi,p=i.exec(t);a(this).parent().is(".tribe-events-past")?s.view="past":p&&"undefined"!=typeof p[1]?s.view=p[1]:s.view="list",i=/tribe_paged=([^&]+)/gi,p=i.exec(t),r.cur_url=n.url_path(a(this).attr("href")),p&&"undefined"!=typeof p[1]?s.paged=p[1]:"list"===s.view?s.paged>1?s.paged--:(s.paged=1,s.view="past"):s.paged++,s.popping=!1,n.pre_ajax(function(){o()})}}),n.snap("#tribe-events-content-wrapper","#tribe-events-content-wrapper","#tribe-events-footer .tribe-events-nav-previous a, #tribe-events-footer .tribe-events-nav-next a"),(p.no_bar()||p.live_ajax()&&p.pushstate)&&a("#tribe-events-bar").on("changeDate","#tribe-bar-date",function(e){p.reset_on()||(s.popping=!1,u(e))}),a("form#tribe-bar-form").on("submit",function(e){s.popping=!1,u(e)}),a(i).on("tribe_ev_runAjax",function(){o()}),l&&debug.info("TEC Debug: tribe-events-ajax-list.js successfully loaded"),s.view&&l&&debug.timeEnd("Tribe JS Init Timer")})}(window,document,jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_js_config,tribe_debug);