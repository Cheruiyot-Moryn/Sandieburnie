;/*FB_PKG_DELIM*/

__d("PolarisEmailsSentStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";c=h._("Emails from Instagram");d=h._("Other");e=h._("Other emails from Instagram in the last 14 days that aren't about security or login will appear here. You can use it to verify which emails are real and which are fake.");f=h._("Security");var i=h._("Security and login emails from Instagram in the last 14 days will appear here. You can use it to verify which emails are real and which are fake."),j=h._("Learn more");function a(a){return h._("Sent to: {email}",[h._param("email",a)])}function b(a){return h._("Sent from: {sender_email}",[h._param("sender_email",a)])}g.EMAILS_SENT_TEXT=c;g.OTHER_EMAILS_TAB=d;g.OTHER_EMAILS_TEXT=e;g.SECURITY_EMAILS_TAB=f;g.SECURITY_EMAILS_TEXT=i;g.LEARN_MORE_TEXT=j;g.sentToText=a;g.sentFromText=b}),98);
__d("PolarisEmailsSentTabs.react",["PolarisEmailsSentStrings","PolarisExternalLink.react","PolarisIGCoreBox","PolarisIGCoreTabV2","PolarisIGCoreTabsV2","PolarisIGCoreText","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i="https://help.instagram.com/760602221058803";function j(a){return h.jsxs(c("PolarisIGCoreBox"),{children:[h.jsx(c("PolarisIGCoreBox"),{paddingX:d("PolarisUA").isMobile()?4:0,paddingY:d("PolarisUA").isMobile()?7:8,children:h.jsxs(c("PolarisIGCoreText").Title,{color:"ig-secondary-text",weight:"normal",children:[a.title," ",h.jsx(c("PolarisExternalLink.react"),{href:i,children:d("PolarisEmailsSentStrings").LEARN_MORE_TEXT})]})}),a.list]})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.otherEmailsList;a=a.securityEmailsList;return h.jsxs(c("PolarisIGCoreTabsV2"),{children:[h.jsx(c("PolarisIGCoreTabV2"),{node:h.jsx(j,{list:a,title:d("PolarisEmailsSentStrings").SECURITY_EMAILS_TEXT}),children:d("PolarisEmailsSentStrings").SECURITY_EMAILS_TAB}),h.jsx(c("PolarisIGCoreTabV2"),{node:h.jsx(j,{list:b,title:d("PolarisEmailsSentStrings").OTHER_EMAILS_TEXT}),children:d("PolarisEmailsSentStrings").OTHER_EMAILS_TAB})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisEmailsSentPage.react",["PolarisEmailsSentStrings","PolarisEmailsSentTabs.react","PolarisFXCentralizedSettingsContextualMessage.react","PolarisFXShouldUserSeeACContextualMessage","PolarisIGCoreBox","PolarisIGCoreDivider","PolarisIGCoreText","PolarisPageMetadata.react","PolarisReactRedux","PolarisSettingsShell.react","PolarisUA","PolarisformatDate","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState,k="emailsSentPage";function a(a){var b=d("PolarisReactRedux").useSelector(function(a){return a.settings.emailsSentData}),e=b.securityEmails;b=b.otherEmails;var g=j(d("PolarisFXShouldUserSeeACContextualMessage").CONTEXTUAL_MESSAGE_DATA_DEFAULT),l=g[0],m=g[1];i(function(){d("PolarisFXShouldUserSeeACContextualMessage").shouldUserSeeACContextualMessage().then(function(a){m(a)})},[]);function n(a){var b=a.emailAddress,e=a.sendTimestamp,f=a.senderEmail;a=a.title;e=c("PolarisformatDate")(e,"M j, Y g:i A");return h.jsxs(c("PolarisIGCoreBox"),{paddingX:d("PolarisUA").isMobile()?4:0,paddingY:d("PolarisUA").isMobile()?3:4,children:[h.jsx(c("PolarisIGCoreText").BodyEmphasized,{color:"primary",children:a}),d("PolarisUA").isMobile()?h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisIGCoreBox"),{marginBottom:2,marginTop:2,children:h.jsx(c("PolarisIGCoreText").Body,{color:"primary",children:e})}),h.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",children:d("PolarisEmailsSentStrings").sentToText(b)}),h.jsx(c("PolarisIGCoreBox"),{marginTop:2,children:h.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",children:d("PolarisEmailsSentStrings").sentFromText(f)})})]}):h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisIGCoreBox"),{marginBottom:2,marginTop:2,children:h.jsx(c("PolarisIGCoreText").Body,{color:"primary",children:e})}),h.jsxs(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",children:[d("PolarisEmailsSentStrings").sentToText(b)," \xb7 ",d("PolarisEmailsSentStrings").sentFromText(f)]})]})]})}n.displayName=n.name+" [from "+f.id+"]";function o(a){a=a.emails;return a.map(function(a,b){return h.jsxs(c("PolarisIGCoreBox"),{children:[h.jsx(c("PolarisIGCoreBox"),{width:"100%",children:h.jsx(c("PolarisIGCoreDivider"),{})}),h.jsx(n,{emailAddress:a.email_address,sendTimestamp:a.send_timestamp,senderEmail:a.sender_email,title:a.title})]},b)})}return h.jsxs(c("PolarisSettingsShell.react"),{hideNavigation:!!a.hide_navigation,pageIdentifier:k,title:d("PolarisEmailsSentStrings").EMAILS_SENT_TEXT,children:[h.jsx(c("PolarisPageMetadata.react"),{id:k,title:d("PolarisEmailsSentStrings").EMAILS_SENT_TEXT}),l.should_user_see_centralized_settings_transition_plan_two?h.jsx(c("PolarisFXCentralizedSettingsContextualMessage.react"),{content:l==null?void 0:(g=l.ac_transition_option_two_group_of_settings_banner)==null?void 0:g.title,primary_action_title:l==null?void 0:(a=l.ac_transition_option_two_group_of_settings_banner)==null?void 0:a.primary_action_title,primary_action_uri:l==null?void 0:(g=l.ac_transition_option_two_group_of_settings_banner)==null?void 0:g.primary_action_uri}):null,h.jsxs(c("PolarisIGCoreBox"),{marginEnd:d("PolarisUA").isMobile()?0:16,marginStart:d("PolarisUA").isMobile()?0:16,children:[!d("PolarisUA").isMobile()&&h.jsx(c("PolarisIGCoreBox"),{marginBottom:8,marginTop:8,children:h.jsx(c("PolarisIGCoreText").Headline2,{children:d("PolarisEmailsSentStrings").EMAILS_SENT_TEXT})}),h.jsx(c("PolarisIGCoreBox"),{children:h.jsx(c("PolarisEmailsSentTabs.react"),{otherEmailsList:h.jsx(o,{emails:b}),securityEmailsList:h.jsx(o,{emails:e})})})]})]})}a.displayName=a.name+" [from "+f.id+"]";g.PAGE_ID=k;g.EmailsSentPage=a}),98);
__d("PolarisCookieModalEnums",[],(function(a,b,c,d,e,f){"use strict";a={DATED_PRE_2016:1,DATED_20160525:2,DATED_20201005:3,DATED_20210301:4};b={BANNER:"1",MODAL:"2"};f.CookiePolicyMajorVersion=a;f.COOKIE_CONSENT_VALUES=b}),66);
__d("PolarisCookieConsentCollapsible.react",["fbt","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreChevronIcon","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState,k=h._("Chevron icon to see cookie consent section");function a(a){var b=a.children,d=a.heading,e=a.onToggle;a=a.startExpanded;a=a===void 0?!1:a;a=j(a);var f=a[0],g=a[1];a=function(){e!=null&&e(!f),g(!f)};return i.jsxs(c("PolarisIGCoreBox"),{children:[i.jsx(c("PolarisIGCoreButton"),{borderless:!0,fullWidth:!0,onClick:a,children:i.jsxs(c("PolarisIGCoreBox"),{direction:"row",display:"flex",marginBottom:0,marginTop:3,children:[i.jsx(c("PolarisIGCoreBox"),{alignItems:"start",flex:"grow",justifyContent:"center",children:i.jsx(c("PolarisIGCoreText").SectionSmall,{textAlign:"left",children:d})}),i.jsx(c("PolarisIGCoreChevronIcon"),{alt:k,color:"ig-primary-text",direction:f?"up":"down",size:24})]})}),f&&b]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisCookieConsentModal.react",["cx","IGCoreDialog","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreModalHeader","PolarisIGCoreText","PolarisMiddleDot.react","PolarisUA","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(){function a(){}a.Divider=function(){return i.jsx("div",{className:"_abdb"})};a.Body=function(a){var b=a.children,c=a.handleScroll;return i.jsx("div",{className:"_abdc",onScroll:c?function(a){return c(a.target)}:null,children:b})};a.BodyPadding=function(a){a=a.children;return i.jsx(c("PolarisIGCoreBox"),{padding:6,children:a})};a.SecondarySection=function(a){var b=a.paragraphs;a=a.title;return i.jsxs(c("PolarisIGCoreBox"),{marginBottom:3,marginTop:4,width:"100%",children:[i.jsx(c("PolarisIGCoreText").SectionSmall,{children:a}),b.map(function(a,b){return i.jsxs(c("PolarisIGCoreBox"),{direction:"row",marginTop:3,children:[i.jsx("div",{style:{marginTop:-3},children:i.jsx(c("PolarisMiddleDot.react"),{margin:"none"})}),i.jsx(c("PolarisIGCoreBox"),{flex:"grow",marginStart:2,children:i.jsx("div",{className:"_abdd",children:i.jsx(c("PolarisIGCoreText").Body,{children:a})})})]},b)})]})};a.ParagraphGroup=function(a){var b=a.color,d=b===void 0?"ig-primary-text":b;b=a.paragraphs;return b.map(function(a,b){return i.jsx(c("PolarisIGCoreBox"),{marginTop:b>0?4:0,children:i.jsx("div",{className:"_abdd",children:i.jsx(c("PolarisIGCoreText").Body,{color:d,children:a})})},b)})};a.Header=function(a){var b=a.endAdornment,d=a.onBack;a=a.title;return i.jsx(c("PolarisIGCoreModalHeader"),{endAdornment:b,onBack:d,children:a})};a.IconWithText=function(a){var b=a.icon;a=a.text;return i.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",direction:"row",display:"flex",marginTop:6,children:[i.jsx(c("PolarisIGCoreBox"),{alignItems:"center",width:24,children:i.jsx(c("PolarisIGCoreBox"),{flex:"shrink",children:b})}),i.jsx(c("PolarisIGCoreBox"),{flex:"grow",marginStart:3,children:i.jsx("div",{className:"_abdd",children:i.jsx(c("PolarisIGCoreText").Body,{children:a})})})]})};a.ButtonGroup=function(b){var e=b.primaryButton;b=b.secondaryButton;return d("PolarisUA").isMobile()?i.jsxs(i.Fragment,{children:[i.jsx(a.Divider,{}),i.jsxs(c("PolarisIGCoreBox"),{marginBottom:4,marginTop:4,children:[b!=null&&i.jsx(c("PolarisIGCoreBox"),{marginBottom:2,children:b}),e]})]}):i.jsxs(i.Fragment,{children:[b,e]})};a.CTAButton=function(a){var b=a.children,e=a.disabled;e=e===void 0?!1:e;var f=a.onClick;a=a.primary;a=a===void 0?!1:a;return d("PolarisUA").isMobile()?i.jsx(c("PolarisIGCoreBox"),{marginEnd:4,marginStart:4,children:i.jsx(c("PolarisIGCoreButton"),{color:a?"ig-primary-button":"ig-secondary-button",disabled:e,fullWidth:!0,large:!0,onClick:f,children:b})}):i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:a?"ig-primary-button":"ig-secondary-button",disabled:e,onClick:f,children:b})};return a}();g["default"]=a}),98);
__d("PolarisCookieConsentStrings",["fbt","PolarisExternalLink.react","PolarisRoutes","react"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("react");b=a.jsx("a",{href:d("PolarisRoutes").NEW_COOKIE_POLICY_PATH,rel:"noopener noreferrer",target:"_blank",children:h._("Cookie Policy")});e=a.jsx("a",{href:d("PolarisRoutes").NEW_COOKIE_POLICY_PATH,rel:"noopener noreferrer",target:"_blank",children:h._("Instagram")});f=a.jsx("a",{href:d("PolarisRoutes").FACEBOOK_COOKIE_POLICY_PATH,rel:"noopener noreferrer",target:"_blank",children:h._("Facebook")});d=a.jsx(c("PolarisExternalLink.react"),{href:"http://www.aboutads.info",children:h._("Digital Advertising Alliance")});var i=a.jsx(c("PolarisExternalLink.react"),{href:"http://youronlinechoices.eu",children:h._("European Digital Advertising Alliance")}),j=a.jsx(c("PolarisExternalLink.react"),{href:"https://support.google.com/chrome/answer/95647",children:h._("Google Chrome")}),k=a.jsx(c("PolarisExternalLink.react"),{href:"https://support.microsoft.com/en-ie/help/17442/windows-internet-explorer-delete-manage-cookies",children:h._("Internet Explorer")}),l=a.jsx(c("PolarisExternalLink.react"),{href:"https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",children:h._("Firefox")}),m=a.jsx(c("PolarisExternalLink.react"),{href:"https://support.apple.com/en-ie/guide/safari/sfri11471/mac",children:h._("Safari")}),n=a.jsx(c("PolarisExternalLink.react"),{href:"https://support.apple.com/en-us/HT201265",children:h._("Safari Mobile")}),o=a.jsx(c("PolarisExternalLink.react"),{href:"https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/",children:h._("Opera")}),p=h._("Allow the use of cookies from Instagram in this browser?"),q=h._("Provide and improve content on Facebook Products"),r=h._("Provide a safer experience by using information that we receive from cookies on and off Instagram"),s=h._("Provide and improve Facebook Products for people who have an account"),t=h._("For advertising and measurement services off Facebook Products, for analytics and to provide certain features and improve our services for you, we use tools from other companies on Instagram. These companies also use cookies."),u=h._("You can allow the use of all cookies, just essential cookies or you can choose more options below. You can learn more about cookies and how we use them, and review or change your choice at any time in our {Cookie Policy}.",[h._param("Cookie Policy",b)]),v=h._("We use tools from other companies for advertising and measurement services off Facebook Products, for analytics and to provide certain features and improve our services for you. These companies also use cookies."),w=h._("These cookies are required to use Facebook Products. They're necessary for these sites to work as intended."),x=h._("We use cookies and similar technologies to help:");h._("Accept");var y=h._("Language");a.jsx(c("PolarisExternalLink.react"),{href:"https://www.facebook.com/help/1561485474074139?helpref=page_content",children:h._("Facebook Products")});a=h._("Select all");c=h._("Select All");var z=h._("Deselect all"),A=h._("Deselect All");h=h._("Change Language");g.COOKIE_POLICY_LINK=b;g.INSTAGRAM_COOKIE_POLICY_LINK=e;g.FACEBOOK_COOKIE_POLICY_LINK=f;g.DIGITAL_ADVERTISING_ALLIANCE_LINK=d;g.EU_DIGITAL_AD_ALLIANCE_LINK=i;g.CHROME_LINK=j;g.IE_LINK=k;g.FF_LINK=l;g.SAFARI_LINK=m;g.SAFARI_MOBILE_LINK=n;g.OPERA_LINK=o;g.LANDING_TITLE_TEXT_REDESIGN=p;g.LANDING_LIST_ITEM_1=q;g.LANDING_LIST_ITEM_2=r;g.LANDING_LIST_ITEM_3=s;g.LANDING_LIST_SECONDARY_PARAGRAPH=t;g.LANDING_LIST_THIRD_PARAGRAPH=u;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_EXPLANATION=v;g.MANAGE_SETTINGS_ESSENTIAL_COOKIES_EXPLANATION=w;g.LIST_OF_REASONS_INTRO_TEXT=x;g.LANGUAGE_ALT_TEXT=y;g.SELECT_ALL_COOKIE_OPTIONS=a;g.SENTENCE_CASE_SELECT_ALL_COOKIE_OPTIONS=c;g.DESELECT_ALL_COOKIE_OPTIONS=z;g.SENTENCE_CASE_DESELECT_ALL_COOKIE_OPTIONS=A;g.CHANGE_LANGUAGE=h}),98);
__d("PolarisUserCookieConsentStrings",["fbt","PolarisCookieConsentStrings","PolarisExternalLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("react");h._("Allow the use of cookies by Instagram?");h._("Allow the use of cookies by Instagram and Facebook?");b=h._("At Facebook, which builds Instagram, we believe that personalising the content you see improves your experience. We use cookies and similar technologies to show you relevant content and to improve how our products work.");e=h._("At Facebook, which builds Instagram, we believe that personalising the content you see improves your experience. We use cookies and similar technologies to show you relevant content and to improve how our products work.");f=h._("We're providing you with control over certain cookies we use on and off Facebook Products to:");var i=h._("Provide, personalise and improve content and services for you"),j=h._("Help show you relevant ads and measure their performance"),k=h._("Provide a safer experience for you and to analyse the use of our systems"),l=h._("For advertising and measurement services off Facebook Products, for analytics and to provide certain features and improve our services for you, we use tools from other companies on Instagram. These companies also use cookies."),m=h._("For advertising and measurement services off Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies on Instagram and Facebook. These companies also use cookies.");h._("You can allow the use of all cookies, or you can choose more options. We'll remember your cookie choices and apply them anywhere you're logged in to Instagram, and where you use your accounts to log in to other Facebook Products. You can review or change your choices at any time in your cookie settings.");h._("You can allow the use of all cookies, or you can choose more options. We'll remember your cookie choices and apply them anywhere you're logged in to Instagram or Facebook, and where you use your accounts to log in to other Facebook Products. You can review or change your choices at any time in your cookie settings.");var n=h._("You can allow the use of all cookies, just essential cookies or you can choose more options below. We'll remember your cookie choices and apply them anywhere you're logged in to Instagram, and where you use your accounts to log in to other Facebook Products. You can review or change your choices at any time in your cookie settings."),o=h._("You can allow the use of all cookies, just essential cookies or you can choose more options below. We'll remember your cookie choices and apply them anywhere you're logged in to Instagram or Facebook, and where you use your accounts to log in to other Facebook Products. You can review or change your choices at any time in your cookie settings."),p=h._("We don't sell your information to anyone. Learn more about cookies and how we use them in our {Cookie Policy}.",[h._param("Cookie Policy",d("PolarisCookieConsentStrings").COOKIE_POLICY_LINK)]),q=h._("We don't sell your information to anyone. Learn more about cookies and how we use them in our Cookie Policies on {Instagram} and {Facebook}.",[h._param("Instagram",d("PolarisCookieConsentStrings").INSTAGRAM_COOKIE_POLICY_LINK),h._param("Facebook",d("PolarisCookieConsentStrings").FACEBOOK_COOKIE_POLICY_LINK)]),r=h._("Allow essential and optional cookies"),s=h._("Only allow essential cookies");h._("Only allow selected cookies");h._("Don't allow optional cookies");h._("Reject optional cookies");h._("Deny optional cookies");var t=h._("More information"),u=h._("We use cookies to help provide, personalise and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance, and to provide a safer experience for you. You can learn more about how we use cookies in our {Cookie Policy}.",[h._param("Cookie Policy",d("PolarisCookieConsentStrings").COOKIE_POLICY_LINK)]),v=h._("We use cookies to help provide, personalise and improve your experience, including the ads that you see, help businesses with analytics and measuring ad performance, and provide a safer experience for you. You can learn more about how we use cookies in our Cookie Policies on {Instagram} and {Facebook}.",[h._param("Instagram",d("PolarisCookieConsentStrings").INSTAGRAM_COOKIE_POLICY_LINK),h._param("Facebook",d("PolarisCookieConsentStrings").FACEBOOK_COOKIE_POLICY_LINK)]),w=h._("We'll remember your cookie choices and apply them anywhere you're logged in to Instagram and where you use your accounts to log in to other Facebook products. You can review or change your choices at any time in your cookie settings."),x=h._("We'll remember your cookie choices and apply them anywhere you're logged in to Instagram or Facebook and where you use your accounts to log in to other Facebook products. You can review or change your choices at any time in your cookie settings."),y=h._("Essential cookies"),z=h._("Essential cookies"),A=h._("These cookies are required to use Facebook Company Products. They're necessary for these sites to work as intended."),B=h._("Optional cookies"),C=h._("Optional cookies"),D=h._("If you allow these cookies:"),E=h._("If you don't allow these cookies:"),F=h._("If you allow our use of these cookies:"),G=h._("If you don't allow our use of these cookies:"),H=h._("Our cookies on other apps and websites"),I=h._("Our cookies on other apps and websites"),J=h._("These cookies help other companies to share information with us about your activity on their apps and websites. We use the information we receive to help personalise and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance, and to provide services off Instagram, such as using Instagram to log in to other apps and websites."),K=h._("These cookies help other companies to share information with us about your activity on their apps and websites. We use the information we receive to help personalise and improve your experience, including the ads you see, help businesses with analytics and measuring ad performance and provide services off Facebook Products, such as using Instagram or Facebook to log in to other apps and websites."),L=h._("You can continue using Instagram to log in to other apps and websites"),M=h._("You can continue using Instagram or Facebook to log in to other apps and websites"),N=h._("We'll use information from other apps and websites to show you relevant ads, unless you have not provided consent to our use of data from partners for ads, or otherwise restricted our use of information from other apps and websites using either \"Data about your activity from partners\" or your device settings, in which case, we will continue to honour your choices."),O=h._("You'll be logged out of apps and websites where you've used your Instagram accounts to log in, and won't be able to use your accounts to log back in"),P=h._("You'll be logged out of apps and websites where you've used your Instagram or Facebook accounts to log in, and won't be able to use your accounts to log back in"),Q=h._("We'll use limited information from other apps and websites for security and integrity purposes, but it will not be used to show you personalised ads"),R=h._("We may still receive aggregate information about activity on other apps and websites for measurement purposes, but this will not include your individual cookie information"),S=h._("Cookies from other companies"),T=h._("Cookies from other companies"),U=h._("For advertising and measurement services off Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies. These companies also use cookies. You can learn more in our {Cookie Policy}.",[h._param("Cookie Policy",d("PolarisCookieConsentStrings").COOKIE_POLICY_LINK)]),V=h._("For advertising and measurement services off Facebook Products, analytics, and to provide certain features and improve our services for you, we use tools from other companies. These companies also use cookies. You can learn more in our Cookie Policies on {Instagram} and {Facebook}.",[h._param("Instagram",d("PolarisCookieConsentStrings").INSTAGRAM_COOKIE_POLICY_LINK),h._param("Facebook",d("PolarisCookieConsentStrings").FACEBOOK_COOKIE_POLICY_LINK)]),W=h._("We'll be able to better personalise ads for you off Instagram and measure their performance"),X=h._("We'll be able to better personalise ads for you off Facebook Products and measure their performance"),Y=h._("Features on our products will not be affected"),Z=h._("Other companies will receive information about you by using cookies"),$=h._("We won't use cookies from other companies to help personalise ads for you off Instagram or measure their performance"),aa=h._("We won't use cookies from other companies to help personalise ads for you off Facebook Products or to measure their performance"),ba=h._("Some features on our products may not work");h._("Other ways you can control your information");var ca=h._("Other ways you can control your information");h._("Controls in your Instagram account");var da=h._("Controls in your Instagram account"),ea=h._("If you have an Instagram account, you can manage how different data is used to personalise ads with these tools."),fa=h._("Ad settings"),ga=h._("To show you more relevant ads, we receive and use data that advertisers and other partners provide to us about your activity on their websites and apps, as well as certain offline interactions, such as purchases. You can control whether you see ads based on your activity off Instagram through data about your activity from partners in your settings.");h._("You can control whether you see ads based on your activity off Instagram through data about your activity from partners in your settings. If you've enabled connected experiences across your Instagram and Facebook accounts, you can also adjust your Facebook ad experience through this setting.");var ha=h._("Ad preferences"),ia=h._("You can choose to see fewer ads about certain topics using ad topics in your settings.");h._("More information about online advertising");var ja=h._("More information about online advertising");a=a.jsx(c("PolarisExternalLink.react"),{href:"https://youradchoices.ca/",children:h._("Digital Advertising Alliance of Canada")});c=h._("Instagram adheres to the Self-Regulatory Principles for Online Behavioral Advertising and participates in the opt-out programmes established by the {Digital Advertising Alliance}, the {Digital Advertising Alliance of Canada} and the {European Interactive Digital Advertising Alliance}. You can opt out from all participating companies through these sites.",[h._param("Digital Advertising Alliance",d("PolarisCookieConsentStrings").DIGITAL_ADVERTISING_ALLIANCE_LINK),h._param("Digital Advertising Alliance of Canada",a),h._param("European Interactive Digital Advertising Alliance",d("PolarisCookieConsentStrings").EU_DIGITAL_AD_ALLIANCE_LINK)]);h._("Controlling cookies with browser settings");d=h._("Controlling cookies with browser settings");h=h._("Your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings they make available and how they work at any time. As of 5 October 2020, you may find additional information about the controls offered by popular browsers at the links below. Certain parts of Facebook Products may not work properly if you have disabled browser cookies. Please be aware that these controls are distinct from the controls that Instagram offers.");g.LANDING_INTRO_PARAGRAPH_UNLINKED=b;g.LANDING_INTRO_PARAGRAPH_LINKED=e;g.LANDING_INTRO_LIST=f;g.LANDING_LIST_ITEM_1=i;g.LANDING_LIST_ITEM_2=j;g.LANDING_LIST_ITEM_3=k;g.LANDING_LIST_SECONDARY_PARAGRAPH_1_UNLINKED=l;g.LANDING_LIST_SECONDARY_PARAGRAPH_1_LINKED=m;g.LANDING_LIST_SECONDARY_PARAGRAPH_WITH_ESSENTIAL_COOKIES_2_UNLINKED=n;g.LANDING_LIST_SECONDARY_PARAGRAPH_WITH_ESSENTIAL_COOKIES_2_LINKED=o;g.LANDING_LIST_SECONDARY_PARAGRAPH_3_UNLINKED=p;g.LANDING_LIST_SECONDARY_PARAGRAPH_3_LINKED=q;g.ALLOW_ESSENTIAL_AND_OPTIONAL_COOKIES_TEXT=r;g.ONLY_ALLOW_ESSENTIAL_COOKIES_TEXT=s;g.MORE_INFORMATION_TEXT=t;g.MANAGE_SETTINGS_INTRO_PARAGRAPH_ONE_UNLINKED=u;g.MANAGE_SETTINGS_INTRO_PARAGRAPH_ONE_LINKED=v;g.MANAGE_SETTINGS_INTRO_PARAGRAPH_TWO_UNLINKED=w;g.MANAGE_SETTINGS_INTRO_PARAGRAPH_TWO_LINKED=x;g.MANAGE_SETTINGS_ESSENTIAL_COOKIES_LABEL=y;g.SENTENCE_CASE_MANAGE_SETTINGS_ESSENTIAL_COOKIES_LABEL=z;g.MANAGE_SETTINGS_ESSENTIAL_COOKIES_EXPLANATION=A;g.MANAGE_SETTINGS_OPTIONAL_COOKIES_HEADER=B;g.SENTENCE_CASE_MANAGE_SETTINGS_OPTIONAL_COOKIES_HEADER=C;g.MANAGE_SETTINGS_IF_YOU_ALLOW_THESE_COOKIES_HEADER=D;g.MANAGE_SETTINGS_IF_YOU_DONT_ALLOW_THESE_COOKIES_HEADER=E;g.MANAGE_SETTINGS_IF_YOU_ALLOW_OUR_USE_OF_THESE_COOKIES_HEADER=F;g.MANAGE_SETTINGS_IF_YOU_DONT_ALLOW_OUR_USE_OF_THESE_COOKIES_HEADER=G;g.MANAGE_SETTINGS_CROSS_SITE_COOKIES_LABEL=H;g.SENTENCE_CASE_MANAGE_SETTINGS_CROSS_SITE_COOKIES_LABEL=I;g.MANAGE_SETTINGS_CROSS_SITE_COOKIES_EXPLANATION_UNLINKED=J;g.MANAGE_SETTINGS_CROSS_SITE_COOKIES_EXPLANATION_LINKED=K;g.MANAGE_SETTINGS_CROSS_SITE_COOKIES_ALLOWED_ITEM_ONE_UNLINKED=L;g.MANAGE_SETTINGS_CROSS_SITE_COOKIES_ALLOWED_ITEM_ONE_LINKED=M;g.MANAGE_SETTINGS_CROSS_SITE_COOKIES_ALLOWED_ITEM_TWO=N;g.MANAGE_SETTINGS_CROSS_SITECOOKIES_NOT_ALLOWED_ITEM_ONE_UNLINKED=O;g.MANAGE_SETTINGS_CROSS_SITECOOKIES_NOT_ALLOWED_ITEM_ONE_LINKED=P;g.MANAGE_SETTINGS_CROSS_SITECOOKIES_NOT_ALLOWED_ITEM_TWO=Q;g.MANAGE_SETTINGS_CROSS_SITECOOKIES_NOT_ALLOWED_ITEM_THREE=R;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_LABEL=S;g.SENTENCE_CASE_MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_LABEL=T;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_EXPLANATION_UNLINKED=U;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_EXPLANATION_LINKED=V;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_ALLOWED_ITEM_ONE_UNLINKED=W;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_ALLOWED_ITEM_ONE_LINKED=X;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_ALLOWED_ITEM_TWO=Y;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_ALLOWED_ITEM_THREE=Z;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_NOT_ALLOWED_ITEM_ONE_UNLINKED=$;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_NOT_ALLOWED_ITEM_ONE_LINKED=aa;g.MANAGE_SETTINGS_COOKIES_FROM_OTHER_COMPANIES_NOT_ALLOWED_ITEM_TWO=ba;g.SENTENCE_CASE_OTHER_CONTROLS_HEADER=ca;g.SENTENCE_CASE_CONTROLS_IN_IG_HEADER=da;g.CONTROLS_IN_IG_HEADER_PARAGRAPH_ONE=ea;g.CONTROLS_IN_IG_HEADER_PARAGRAPH_TWO=fa;g.CONTROLS_IN_IG_HEADER_PARAGRAPH_THREE=ga;g.CONTROLS_IN_IG_HEADER_PARAGRAPH_FIVE=ha;g.CONTROLS_IN_IG_HEADER_PARAGRAPH_SIX=ia;g.SENTENCE_CASE_MANAGE_SETTINGS_ONLINE_ADVERTISING=ja;g.DIGITAL_ADVERTISING_ALLIANCE_OF_CANADA_LINK=a;g.MANAGE_SETTINGS_ONLINE_ADVERTISING_UNLINKED_PARAGRAPH=c;g.SENTENCE_CASE_MANAGE_SETTINGS_BROWSER=d;g.MANAGE_SETTINGS_BROWSER_UNLINKED_PARAGRAPH=h}),98);
__d("PolarisCookieConsentFalcoEvent",["PolarisCookieModalEnums","PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";a={ACTION:"action",IMPRESSION:"impression",DEBUG:"debug"};var h={falco:!0,pigeon:!1};b=function(){function a(){}a.log=function(a){d("PolarisFalcoLogger").FalcoLogger.log("instagram_web_cookie_consent",a(),{},h)};a.logUserEvent=function(b){a.log(function(){return babelHelpers["extends"]({cookie_policy_major_version:d("PolarisCookieModalEnums").CookiePolicyMajorVersion.DATED_20210301,cookie_policy_type:d("PolarisCookieModalEnums").COOKIE_CONSENT_VALUES.MODAL},b)})};return a}();g.COOKIE_CONSENT_EVENT_TYPES=a;g.CookieConsentFalcoEvent=b}),98);