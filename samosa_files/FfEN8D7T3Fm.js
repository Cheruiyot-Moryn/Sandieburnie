;/*FB_PKG_DELIM*/

__d("LSComputeParticipantCapabilities",["LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(f){return c.seq([function(a){return c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.ftr(c.db.table(14).fetch([[[a[1],d[0]]]]),function(b){return c.i64.eq(b.threadKey,a[1])&&c.i64.eq([0,0],[0,0])&&c.i64.eq(b.contactId,d[0])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[!1,!1],d[1]=c[0],d[2]=c[1],c):(b=a.item,c=[b.isAdmin==null?!1:b.isAdmin,b.isModerator],d[1]=c[0],d[2]=c[1],c)})},function(b){return c.ftr(c.db.table(14).fetch([[[a[1],a[0]]]]),function(b){return c.i64.eq(b.threadKey,a[1])&&c.i64.eq([0,0],[0,0])&&c.i64.eq(b.contactId,a[0])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[!1,!1],d[4]=c[0],d[5]=c[1],c):(b=a.item,c=[b.isAdmin==null?!1:b.isAdmin,b.isModerator],d[4]=c[0],d[5]=c[1],c)})},function(b){return c.ftr(c.db.table(7).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.id,a[0])&&c.i64.eq([0,1],[0,1])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[[0,1073741823],[0,0],!1],d[7]=c[0],d[8]=c[1],d[9]=c[2],c):(b=a.item,c=[b.capabilities==null?[0,1073741823]:b.capabilities,b.contactTypeExact==null?[0,0]:b.contactTypeExact,b.isManagedByViewer==null?!1:b.isManagedByViewer],d[7]=c[0],d[8]=c[1],d[9]=c[2],c)})},function(a){return d[12]=c.i64.eq(d[8],[0,4])?d[9]?[0,2612119]:c.i64.or_([0,2612119],c.i64.lsl_([0,1],c.i64.to_int32([0,3]))):d[7],c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[11]=a[0],a})},function(e){return d[13]=c.i64.lsl_([0,1],c.i64.to_int32([0,20])),d[15]=d[1]&&!d[4]&&c.i64.neq(d[11],a[0])?d[12]:c.i64.eq(c.i64.and_(d[12],d[13]),[0,0])?d[12]:c.i64.sub(d[12],d[13]),c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[14]=a[0],a})},function(e){return d[16]=c.i64.lsl_([0,1],c.i64.to_int32([0,22])),d[19]=d[4]&&d[1]&&c.i64.neq(d[14],a[0])?d[15]:c.i64.eq(c.i64.and_(d[15],d[16]),[0,0])?d[15]:c.i64.sub(d[15],d[16]),d[2]?d[17]=!(d[4]||d[5]):d[17]=!0,c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[18]=a[0],a})},function(b){return d[20]=c.i64.lsl_([0,1],c.i64.to_int32([0,21])),e[0]=(d[1]||d[2])&&d[17]&&c.i64.neq(a[0],d[18])?d[19]:c.i64.eq(c.i64.and_(d[19],d[20]),[0,0])?d[19]:c.i64.sub(d[19],d[20])}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpdateThreadsRangesV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(d){return b.seq([function(c){return b.fe(b.db.table(10).fetch([[[a[1]]]]),function(a){return a["delete"]()})},function(d){return c[8]=b.i64.gt(a[2],[0,1])&&b.i64.gt(a[3],[-2147483648,0]),a[0]==="inbox"&&b.i64.eq(a[1],[0,0])&&b.i64.eq(a[4],[0,1])?b.seq([function(d){return c[9]=a[2],c[10]=a[3],c[11]=!1,c[12]=c[8],b.fe(b.db.table(198).fetch(),function(a){a=a.item;return c[13]=a.minLastActivityTimestampMs,c[15]=a.minThreadKey,c[14]=b.i64.lt(c[9]==null?c[13]:c[9],c[13]),c[9]=c[14]?c[13]:c[9],c[10]=c[14]?c[15]:c[10],c[11]=c[11]||a.isLoadingBefore,c[12]=c[12]||b.i64.gt(c[13],[0,1])&&b.i64.gt(c[15],[-2147483648,0])})},function(a){return a=[c[9],c[10],c[11],c[12]],c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],a}]):b.resolve((d=[a[2],a[3],!1,c[8]],c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],d))},function(d){return b.i64.eq(a[4],[0,1])?b.seq([function(d){return c[9]=c[0],c[10]=c[1],c[11]=c[2],c[12]=c[3],b.fe(b.ftr(b.db.table(220).fetch(),function(c){return b.i64.eq(c.parentThreadKey,a[1])}),function(a){a=a.item;return c[13]=a.minLastActivityTimestampMs,c[15]=a.minThreadKey,c[14]=b.i64.lt(c[9]==null?c[13]:c[9],c[13]),c[9]=c[14]?c[13]:c[9],c[10]=c[14]?c[15]:c[10],c[11]=c[11]||a.isLoadingBefore,c[12]=c[12]||b.i64.gt(c[13],[0,1])&&b.i64.gt(c[15],[-2147483648,0])})},function(a){return a=[c[9],c[10],c[11],c[12]],c[4]=a[0],c[5]=a[1],c[6]=a[2],c[7]=a[3],a}]):b.resolve((d=[c[0],c[1],c[2],c[3]],c[4]=d[0],c[5]=d[1],c[6]=d[2],c[7]=d[3],d))},function(d){return b.db.table(10).add({parentThreadKey:a[1],minThreadKey:c[5]==null?[-2147483648,0]:c[5],minLastActivityTimestampMs:c[4]==null?[0,1]:c[4],maxLastActivityTimestampMs:[0,1],maxThreadKey:[-2147483648,0],isLoadingBefore:c[6],isLoadingAfter:!1,hasMoreBefore:c[7],hasMoreAfter:!1})}])},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("ghlTestUBT",["cr:1543261","cr:334"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1543261")&&b("cr:1543261")(),g["default"]=b("cr:334")}),98);