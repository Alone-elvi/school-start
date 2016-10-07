var LLMS=window.LLMS||{};!function(e){"use strict";LLMS.Ajax={url:window.ajaxurl||window.llms.ajaxurl,type:"post",data:[],cache:!1,dataType:"json",async:!0,response:[],init:function(e){if(null===e||"object"!=typeof e)return!1;e.url=this.url,e.type="type"in e?e.type:this.type,e.data="data"in e?e.data:this.data,e.cache="cache"in e?e.cache:this.cache,e.dataType="dataType"in e?e.dataType:this.dataType,e.async="async"in e?e.async:this.async,e.data._ajax_nonce=wp_ajax_data.nonce;var t=LLMS.Rest,s=t.get_query_vars();return e.data.post_id="post"in s?s.post:null,e},call:function(e){var t=this.init(e);return t?(this.request(t),this):!1},request:function(t){return e.ajax(t),this}},LLMS.l10n=LLMS.l10n||{},LLMS.l10n.translate=function(e){var t=this;return t.strings[e]?t.strings[e]:e},LLMS.MB_Course_Outline={init:function(){e("#llms_post_edit_type").length&&"course"===e("#llms_post_edit_type").val()&&this.bind()},alreadySubmitted:!1,bind:function(){function t(){e("#llms-outline-add").removeClass("clicked"),e("#llms-outline-add").addClass("bt"),e("#llms-outline-menu").removeClass("fade-in"),e("#triangle").show()}var s=this;e(document).ready(function(){s.addSectionRowFunctionality(),s.addLessonRowFunctionality()}),e(".llms-modal-cancel").click(function(t){t.preventDefault(),e(window).trigger("build")}),e(document).ready(function(){e(".llms-chosen-select").chosen({width:"100%"})}),e(".tab-link").on("click",function(){e("#content_ifr").css("height","300px"),e("#excerpt_ifr").css("height","300px")}),e("#_has_prerequisite").attr("checked")?(e(".llms-prereq-top").addClass("top"),e(".llms-prereq-bottom").show()):e(".llms-prereq-bottom").hide(),e("#_has_prerequisite").change(function(){e("#_has_prerequisite").attr("checked")?(e(".llms-prereq-top").addClass("top"),e(".llms-prereq-bottom").show()):(e(".llms-prereq-top").removeClass("top"),e(".llms-prereq-bottom").hide())}),this.toggle_custom_single_price_field(),e("a.llms-modal").click(function(){e("#"+e(this).attr("data-modal_id")).topModal({title:e(this).attr("data-modal_title"),closed:function(){s.alreadySubmitted=!1}})}),e("a.llms-modal-new-lesson-link").click(function(){e("#"+e(this).attr("data-modal_id")).topModal({title:e(this).attr("data-modal_title"),open:function(){s.getSections(),e("#llms_create_lesson").find('input[value="Create Lesson"]').removeProp("disabled")},closed:function(){s.alreadySubmitted=!1}})}),e("a.llms-modal-existing-lesson-link").click(function(){e("#"+e(this).attr("data-modal_id")).topModal({title:e(this).attr("data-modal_title"),open:function(){s.getSections(),s.getLessons()},closed:function(){s.alreadySubmitted=!1}})}),this.setup_course(),e(window).click(function(s){"llms-outline-add"!==s.target.id&&e("#llms-outline-add").hasClass("clicked")&&(e("#llms-outline-menu").css("display","none"),t())}),e(window).scroll(function(){if(e("#llms-outline-add").hasClass("clicked")){e("#triangle").hide();var t=e("#llms-outline-menu"),s=-e("#llms-outline-add").offset().top-81+e(window).scrollTop()+e(window).height()/2;t.css("top",s)}}),e("#llms-outline-add").click(function(t){t.preventDefault();var s=e("#llms-outline-menu");if(e(this).hasClass("bt")){if(e(this).offset().top-e(window).scrollTop()<200)s.css("top","43px"),e(window).width()<851&&(s.find("#triangle").css("left","164px"),s.css("top","57px"),s.css("left","-138px"),s.css("bottom","15px"));else if(s.css("top",""),e(window).width()<851){s.css("top","-54px");var n=e(window).width()<400?-Math.abs(e(window).width()/2):-242;n+="px",s.css("left",n),s.css("bottom","15px"),s.find("#triangle").css("left","227px")}e(this).removeClass("bt"),e(this).addClass("clicked"),s.addClass("fade-in"),s.css("display","block")}else e(this).removeClass("clicked"),e(this).addClass("bt"),s.removeClass("fade-in"),s.css("display","none"),s.find("#triangle").show()}),e("#tooltip_menu a").click(function(t){var s=e("#llms-outline-menu");s.removeClass("fade-in"),s.css("display","none"),t.preventDefault()}),e("a.tooltip").click(function(e){e.preventDefault()}),e("#llms_create_section").on("submit",function(t){t.preventDefault();var n={};e.each(e(this).serializeArray(),function(e,t){n[t.name]=t.value}),s.alreadySubmitted===!1&&(s.alreadySubmitted=!0,s.createSection(n))}),e("#llms_create_lesson").on("submit",function(t){t.preventDefault();var n={};e.each(e(this).serializeArray(),function(e,t){n[t.name]=t.value}),s.alreadySubmitted===!1&&(s.alreadySubmitted=!0,s.createLesson(n))}),e("#llms_add_existing_lesson").on("submit",function(t){t.preventDefault();var n={};e.each(e(this).serializeArray(),function(e,t){n[t.name]=t.value}),s.alreadySubmitted===!1&&(s.alreadySubmitted=!0,s.addExistingLesson(n))}),e("#llms_edit_lesson").on("submit",function(t){t.preventDefault();var n={};e.each(e(this).serializeArray(),function(e,t){n[t.name]=t.value}),s.updateLesson(n)}),e("#llms_edit_section").on("submit",function(t){t.preventDefault();var n={};e.each(e(this).serializeArray(),function(e,t){n[t.name]=t.value}),s.updateSection(n)}),e("#llms_delete_section").on("submit",function(t){t.preventDefault();var n={};e.each(e(this).serializeArray(),function(e,t){n[t.name]=t.value}),s.deleteSection(n)})},toggle_custom_single_price_field:function(){e("#_is_custom_single_price").attr("checked")?(e(".llms-custom-single-price-top").removeClass("bottom"),e(".llms-custom-single-price-top").addClass("top"),e(".llms-custom-single-price-bottom").show()):e(".llms-custom-single-price-bottom").hide(),e("#_is_custom_single_price").change(function(){e("#_is_custom_single_price").attr("checked")?(e(".llms-custom-single-price-top").removeClass("bottom"),e(".llms-custom-single-price-top").addClass("top"),e(".llms-custom-single-price-bottom").show()):(e(".llms-custom-single-price-top").removeClass("top"),e(".llms-custom-single-price-top").addClass("bottom"),e(".llms-custom-single-price-bottom").hide())})},resortSections:function(){var t={};e(".llms-section").each(function(s){s++,e(this).find('[name="llms_section_order[]"]').val(s),e(this).find(".llms-section-order").html(s);var n=e(this).find('[name="llms_section_id[]"]').val();t[n]=s}),LLMS.MB_Course_Outline.updateSectionOrder(t)},updateSectionOrder:function(e){console.log(e),LLMS.Ajax.call({data:{action:"update_section_order",sections:e},beforeSend:function(){},success:function(e){console.log(e)}})},updateLessonOrder:function(e){console.log(e),LLMS.Ajax.call({data:{action:"update_lesson_order",lessons:e},beforeSend:function(){},success:function(e){console.log(e)}})},resortLessons:function(){var t={};e(".llms-lesson-tree").each(function(){e(this).find(".llms-lesson").each(function(s){s++;var n=e(this).parent().parent().find('[name="llms_section_id[]"]').val();e(this).find('[name="llms_lesson_parent_section[]"]').val(n),e(this).find('[name="llms_lesson_order[]"]').val(s),e(this).find(".llms-lesson-order").html(s),console.log(n);var i=e(this).find('[name="llms_lesson_id[]"]').val();t[i]={parent_section:n,order:s}})}),LLMS.MB_Course_Outline.updateLessonOrder(t)},createSection:function(t){LLMS.Ajax.call({data:{action:"create_section",title:t.llms_section_name},beforeSend:function(){},success:function(t){console.log(t),t.success===!0&&(e("#llms_course_outline_sort").append(t.data),e(window).trigger("build"),LLMS.MB_Course_Outline.addSectionRowFunctionality(),e("#llms_create_section").each(function(){this.reset()}))}})},addSectionRowFunctionality:function(){e(".llms-lesson-tree").sortable({connectWith:".llms-lesson-tree",axis:"y",placeholder:"placeholder",cursor:"move",forcePlaceholderSize:!0,stop:function(){LLMS.MB_Course_Outline.resortLessons()}}).disableSelection(),e("#llms_course_outline_sort").sortable({connectWith:".sortablewrapper",axis:"y",placeholder:"placeholder",cursor:"move",forcePlaceholderSize:!0,stop:function(){LLMS.MB_Course_Outline.resortSections()}}).disableSelection(),e("a.llms-edit-section-link").click(function(){var t=e(this);e("#"+e(this).attr("data-modal_id")).topModal({title:e(this).attr("data-modal_title"),open:function(){var e=t.parent().parent().find('[name="llms_section_id[]"]').val();LLMS.MB_Course_Outline.getSection(e)}})}),e("a.llms-delete-section-link").click(function(){var t=e(this);e("#"+e(this).attr("data-modal_id")).topModal({title:e(this).attr("data-modal_title"),open:function(){var s=t.parent().parent().find('[name="llms_section_id[]"]').val();e("#llms-section-delete-id").val(s)}})})},addLessonRowFunctionality:function(){e("a.llms-edit-lesson-link").click(function(){var t=e(this);e("#"+e(this).attr("data-modal_id")).topModal({title:e(this).attr("data-modal_title"),open:function(){var e=t.parent().parent().parent().find('[name="llms_lesson_id[]"]').val();LLMS.MB_Course_Outline.getLesson(e)}})}),e(".llms-remove-lesson-link").on("click",function(t){t.preventDefault();var s=e(this).parent().parent().parent().find('[name="llms_lesson_id[]"]').val();LLMS.MB_Course_Outline.removeLesson(s)})},createLesson:function(t){LLMS.Ajax.call({data:{action:"create_lesson",title:t.llms_lesson_name,excerpt:t.llms_lesson_excerpt,section_id:t.llms_section},beforeSend:function(){},success:function(s){console.log(s),s.success===!0&&(e(".llms-section").each(function(){var n=e(this).find('[name="llms_section_id[]"]').val();console.log(n),n===t.llms_section&&(console.log("found one"),console.log(e(this)),console.log(e(this).find(".llms_lesson_tree")),e(this).find("#llms_section_tree_"+t.llms_section).append(s.data))}),e(window).trigger("build"),LLMS.MB_Course_Outline.addLessonRowFunctionality(),e("#llms_create_lesson").each(function(){this.reset()}))}})},addExistingLesson:function(t){LLMS.Ajax.call({data:{action:"add_lesson_to_course",lesson_id:t.llms_lesson,section_id:t.llms_section},beforeSend:function(){},success:function(s){s.success===!0&&(e(".llms-section").each(function(){var n=e(this).find('[name="llms_section_id[]"]').val();console.log(n),n===t.llms_section&&e(this).find("#llms_section_tree_"+t.llms_section).append(s.data)}),e(window).trigger("build"),LLMS.MB_Course_Outline.addLessonRowFunctionality(),e("#llms_add_existing_lesson").each(function(){this.reset()}))}})},getSections:function(){LLMS.Ajax.call({data:{action:"get_course_sections"},success:function(t){t.success===!0&&(e("#llms-section-select").empty(),e.each(t.data,function(t,s){var n=e('<option value="'+s.ID+'">'+s.post_title+"</option>");e("#llms-section-select").append(n)}),e("#llms-section-select").trigger("chosen:updated"))}})},getSection:function(t){console.log(t),LLMS.Ajax.call({data:{action:"get_course_section",section_id:t},success:function(t){t.success===!0&&(e("#llms-section-edit-name").val(t.data.post.post_title),e("#llms-section-edit-id").val(t.data.id))}})},getLesson:function(t){console.log(t),LLMS.Ajax.call({data:{action:"get_course_lesson",lesson_id:t},success:function(t){t.success===!0&&(e("#llms-lesson-edit-name").val(t.data.post.post_title),e("#llms-lesson-edit-excerpt").val(t.data.post.post_excerpt),e("#llms-lesson-edit-id").val(t.data.id))}})},updateSection:function(t){LLMS.Ajax.call({data:{action:"update_course_section",section_id:t.llms_section_edit_id,title:t.llms_section_edit_name},success:function(s){s.success===!0&&(e(".llms-section").each(function(){var n=e(this).find('[name="llms_section_id[]"]').val();console.log(n),n===t.llms_section_edit_id&&(console.log("found one"),console.log(e(this)),console.log(e(this).find(".llms-section-title")),e(this).find(".llms-section-title").html(s.data.title))}),e(window).trigger("build"),e("#llms_edit_section").each(function(){this.reset()}))}})},updateLesson:function(t){LLMS.Ajax.call({data:{action:"update_course_lesson",lesson_id:t.llms_lesson_edit_id,title:t.llms_lesson_edit_name,excerpt:t.llms_lesson_edit_excerpt},success:function(s){s.success===!0&&(e(".llms-lesson").each(function(){var n=e(this).find('[name="llms_lesson_id[]"]').val();console.log(n),n===t.llms_lesson_edit_id&&(e(this).find(".llms-lesson-title").html(s.data.title.title),e(this).find(".llms-lesson-excerpt").html(s.data.excerpt.post_excerpt))}),e(window).trigger("build"),e("#llms_edit_lesson").each(function(){this.reset()}))}})},removeLesson:function(t){LLMS.Ajax.call({data:{action:"remove_course_lesson",lesson_id:t},success:function(s){s.success===!0&&e(".llms-lesson").each(function(){var s=e(this).find('[name="llms_lesson_id[]"]').val();console.log(s),s===t&&(e(this).remove(),LLMS.MB_Course_Outline.resortLessons())})}})},deleteSection:function(t){LLMS.Ajax.call({data:{action:"delete_course_section",section_id:t.llms_section_delete_id},success:function(s){s.success===!0&&(e(".llms-section").each(function(){var s=e(this).find('[name="llms_section_id[]"]').val();console.log(s),s===t.llms_section_delete_id&&(e(this).remove(),LLMS.MB_Course_Outline.resortSections())}),e(window).trigger("build"))}})},getLessons:function(){LLMS.Ajax.call({data:{action:"get_lesson_options_for_select"},success:function(t){t.success===!0&&(e("#llms-lesson-select").empty(),e.each(t.data,function(t,s){var n=e('<option value="'+t+'">'+s+"</option>");e("#llms-lesson-select").append(n)}),e("#llms-lesson-select").trigger("chosen:updated"))}})},setup_course:function(){var t=LLMS.Rest,s=["post-new.php"],n="course",i=t.get_query_vars();t.is_path(s)&&i.post_type===n&&(e(document).ready(function(){e("#pop1").topModal({title:"Create New Course"})}),e("#llms-create-course-submit").click(function(t){e("#title").val(e("#llms-course-name").val()),e("#save-post").click(),t.preventDefault()}))}},LLMS.OutlineCollapse={$outlines:null,init:function(){this.$outlines=e(".llms-widget-syllabus--collapsible"),this.$outlines.length&&this.bind()},bind:function(){var t=this;this.$outlines.each(function(){var s=e(this),n=s.find(".llms-section .section-header");n.on("click",function(s){s.preventDefault();var n=e(this),i=n.closest(".llms-section"),l=t.get_section_state(i);switch(l){case"closed":t.open_section(i);break;case"opened":t.close_section(i)}}),s.find(".llms-collapse-toggle").on("click",function(s){s.preventDefault();var i=e(this),l=i.attr("data-action"),o="close"===l?"opened":"closed";n.each(function(){var s=e(this).closest(".llms-section"),n=t.get_section_state(s);if(o!==n)return!0;switch(n){case"closed":t.close_section(s);break;case"opened":t.open_section(s)}e(this).trigger("click")})})})},close_section:function(e){e.removeClass("llms-section--opened").addClass("llms-section--closed")},open_section:function(e){e.removeClass("llms-section--closed").addClass("llms-section--opened")},get_section_state:function(e){return e.hasClass("llms-section--opened")?"opened":"closed"}},LLMS.Quiz={init:function(){var t=LLMS.Rest,s=["llms_quiz"];(t.is_path(s)||e("body").hasClass("single-llms_quiz"))&&this.bind()},bind:function(){var t=this;e("#llms-quiz-timer").hide(),e("#llms_start_quiz").click(function(){return t.start_quiz(),!1}),e(".view-summary").click(function(){var t=e(".accordion");t.hasClass("hidden")?(t.fadeIn(300),t.removeClass("hidden"),e(this).text(LLMS.l10n.translate("Hide Summary"))):(t.fadeOut(300),t.addClass("hidden"),e(this).text(LLMS.l10n.translate("View Summary")))}),this.chart_quiz_grade()},chart_quiz_grade:function(){var t=e(".llms-animated-circle"),s=e(".llms-progress-circle-count"),n=e("#llms-grade-value").val(),i=430*n/100;t.css({"stroke-dashoffset":430-i}),s.html(Math.round(n)+"%")},start_quiz:function(){var t=e("#llms-quiz").val(),s=e("#llms-user").val(),n=new Ajax("post",{action:"start_quiz",quiz_id:t,user_id:s},!0);n.start_quiz(t,s)},answer_question:function(){if(e("input[name=llms_option_selected]:checked").length<=0){e("#llms-quiz-question-wrapper .llms-error").remove();var t=LLMS.l10n.translate("You must enter an answer to continue.");e("#llms-quiz-question-wrapper").prepend('<div class="llms-error">'+t+"</div>")}else{var s=e("#llms-quiz").val(),n=e("#question-type").val(),i=e("#question-id").val(),l=e("input[name=llms_option_selected]:checked").val(),o=new Ajax("post",{action:"answer_question",quiz_id:s,question_type:n,question_id:i,answer:l},!0);o.answer_question(n,i,l)}},previous_question:function(){var t=e("#llms-quiz").val(),s=e("#question-id").val(),n=new Ajax("post",{action:"previous_question",quiz_id:t,question_id:s},!0);n.previous_question(t,s)},start_quiz_timer:function(){var t=e("#set-time").val();if(t){var s,n,i,l,o=(new Date).getTime()+60*t*1e3,a=60*t*1e3,c=document.getElementById("tiles"),r=this;setTimeout(function(){r.complete_quiz()},a),this.getCountdown(t,o,a,s,n,i,l,c),setInterval(function(){r.getCountdown(t,o,a,s,n,i,l,c)},1e3)}},getCountdown:function(t,s,n,i,l,o,a,c){var r=(new Date).getTime(),d=(s-r)/1e3;d>=0&&(n/2>1e3*d&&(e("#tiles").removeClass("color-full"),e("#tiles").addClass("color-half")),n/4>1e3*d&&(e("#tiles").removeClass("color-half"),e("#tiles").addClass("color-empty")),i=this.pad(parseInt(d/86400)),d%=86400,l=this.pad(parseInt(d/3600)),d%=3600,o=this.pad(parseInt(d/60)),a=this.pad(parseInt(d%60)),c.innerHTML="<span>"+l+":</span><span>"+o+":</span><span>"+a+"</span>")},pad:function(e){return(10>e?"0":"")+e},complete_quiz:function(){var t=e("#llms-quiz").val(),s=e("#question-type").val(),n=e("#question-id").val(),i=e("input[name=llms_option_selected]:checked").val(),l=new Ajax("post",{action:"complete_quiz",quiz_id:t,question_id:n,question_type:s,answer:i},!0);l.complete_quiz(t,n,s,i)}},LLMS.Review={init:function(){this.bind()},bind:function(){e("#llms_review_submit_button").click(function(){""!==e("#review_title").val()&&""!==e("#review_text").val()?jQuery.ajax({type:"post",dataType:"json",url:window.llms.ajaxurl,data:{action:"LLMSSubmitReview",review_title:e("#review_title").val(),review_text:e("#review_text").val(),pageID:e("#post_ID").val()},success:function(){console.log("Review success"),e("#review_box").hide("swing"),e("#thank_you_box").show("swing")},error:function(e,t,s){console.log(e),console.log(t),console.log(s)}}):(""===e("#review_title").val()?e("#review_title_error").show("swing"):e("#review_title_error").hide("swing"),""===e("#review_text").val()?e("#review_text_error").show("swing"):e("#review_text_error").hide("swing"))}),e("#_llms_display_reviews").attr("checked")?(e(".llms-num-reviews-top").addClass("top"),e(".llms-num-reviews-bottom").show()):e(".llms-num-reviews-bottom").hide(),e("#_llms_display_reviews").change(function(){e("#_llms_display_reviews").attr("checked")?(e(".llms-num-reviews-top").addClass("top"),e(".llms-num-reviews-bottom").show()):(e(".llms-num-reviews-top").removeClass("top"),e(".llms-num-reviews-bottom").hide())}),console.log("Review Methods Bound")}},LLMS.Tabs={init:function(){this.bind()},bind:function(){e("ul.tabs li").click(function(){var t=e(this).attr("data-tab");e("ul.tabs li").removeClass("current"),e(".tab-content").removeClass("current"),e(this).addClass("current"),e("#"+t).addClass("current")})}},LLMS.Rest={is_path:function(e){for(var t=!1,s=window.location.href,n=0;n<e.length;n++)s.search(e[n])>0&&!t&&(t=!0);return t},get_query_vars:function(){for(var e,t=[],s=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),n=0;n<s.length;n++)e=s[n].split("="),t.push(e[0]),t[e[0]]=e[1];return t}},LLMS.init=function(){for(var e in LLMS)"object"==typeof LLMS[e]&&null!==LLMS[e]&&void 0!==LLMS[e].init&&"function"==typeof LLMS[e].init&&LLMS[e].init()},LLMS.init(e)}(jQuery);