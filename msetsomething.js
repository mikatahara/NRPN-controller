function mSetsomething()
{
	mFdg[0].cv.addEventListener('mousedown', e =>LmouseClick(e,0),false);
	mFdg[0].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,0),false);
	mFdg[0].cv.addEventListener('mousemove', e =>LmouseMove (e,0),false);

	mFdg[1].cv.addEventListener('mousedown', e =>LmouseClick(e,1),false);
	mFdg[1].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,1),false);
	mFdg[1].cv.addEventListener('mousemove', e =>LmouseMove (e,1),false);

	mFdg[2].cv.addEventListener('mousedown', e =>LmouseClick(e,2),false);
	mFdg[2].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,2),false);
	mFdg[2].cv.addEventListener('mousemove', e =>LmouseMove (e,2),false);

	mFdg[3].cv.addEventListener('mousedown', e =>LmouseClick(e,3),false);
	mFdg[3].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,3),false);
	mFdg[3].cv.addEventListener('mousemove', e =>LmouseMove (e,3),false);

	mFdg[4].cv.addEventListener('mousedown', e =>LmouseClick(e,4),false);
	mFdg[4].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,4),false);
	mFdg[4].cv.addEventListener('mousemove', e =>LmouseMove (e,4),false);

	mFdg[5].cv.addEventListener('mousedown', e =>LmouseClick(e,5),false);
	mFdg[5].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,5),false);
	mFdg[5].cv.addEventListener('mousemove', e =>LmouseMove (e,5),false);

	mFdg[6].cv.addEventListener('mousedown', e =>LmouseClick(e,6),false);
	mFdg[6].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,6),false);
	mFdg[6].cv.addEventListener('mousemove', e =>LmouseMove (e,6),false);

	mFdg[7].cv.addEventListener('mousedown', e =>LmouseClick(e,7),false);
	mFdg[7].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,7),false);
	mFdg[7].cv.addEventListener('mousemove', e =>LmouseMove (e,7),false);

	mFdg[8].cv.addEventListener('mousedown', e =>LmouseClick(e,8),false);
	mFdg[8].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,8),false);
	mFdg[8].cv.addEventListener('mousemove', e =>LmouseMove (e,8),false);

	mFdg[9].cv.addEventListener('mousedown', e =>LmouseClick(e,9),false);
	mFdg[9].cv.addEventListener('mouseup', 	 e =>LmouseUp   (e,9),false);
	mFdg[9].cv.addEventListener('mousemove', e =>LmouseMove (e,9),false);

	mFdg[10].cv.addEventListener('mousedown', e =>LmouseClick(e,10),false);
	mFdg[10].cv.addEventListener('mouseup',   e =>LmouseUp   (e,10),false);
	mFdg[10].cv.addEventListener('mousemove', e =>LmouseMove (e,10),false);

	mFdg[11].cv.addEventListener('mousedown', e =>LmouseClick(e,11),false);
	mFdg[11].cv.addEventListener('mouseup',   e =>LmouseUp   (e,11),false);
	mFdg[11].cv.addEventListener('mousemove', e =>LmouseMove (e,11),false);

	mFdg[12].cv.addEventListener('mousedown', e =>LmouseClick(e,12),false);
	mFdg[12].cv.addEventListener('mouseup',   e =>LmouseUp   (e,12),false);
	mFdg[12].cv.addEventListener('mousemove', e =>LmouseMove (e,12),false);

	mFdg[13].cv.addEventListener('mousedown', e =>LmouseClick(e,13),false);
	mFdg[13].cv.addEventListener('mouseup',   e =>LmouseUp   (e,13),false);
	mFdg[13].cv.addEventListener('mousemove', e =>LmouseMove (e,13),false);

	mFdg[14].cv.addEventListener('mousedown', e =>LmouseClick(e,14),false);
	mFdg[14].cv.addEventListener('mouseup',   e =>LmouseUp   (e,14),false);
	mFdg[14].cv.addEventListener('mousemove', e =>LmouseMove (e,14),false);

	mFdg[15].cv.addEventListener('mousedown', e =>LmouseClick(e,15),false);
	mFdg[15].cv.addEventListener('mouseup',   e =>LmouseUp   (e,15),false);
	mFdg[15].cv.addEventListener('mousemove', e =>LmouseMove (e,15),false);

	setItem(document.midievent.sld1h);
	setItem(document.midievent.sld1l);
	setItem(document.midievent.sld2h);
	setItem(document.midievent.sld2l);
	setItem(document.midievent.sld3h);
	setItem(document.midievent.sld3l);
	setItem(document.midievent.sld4h);
	setItem(document.midievent.sld4l);

	setItem(document.midievent.sld5h);
	setItem(document.midievent.sld5l);
	setItem(document.midievent.sld6h);
	setItem(document.midievent.sld6l);
	setItem(document.midievent.sld7h);
	setItem(document.midievent.sld7l);
	setItem(document.midievent.sld8h);
	setItem(document.midievent.sld8l);

	setItem(document.midievent.sld9h);
	setItem(document.midievent.sld9l);
	setItem(document.midievent.sld10h);
	setItem(document.midievent.sld10l);
	setItem(document.midievent.sld11h);
	setItem(document.midievent.sld11l);
	setItem(document.midievent.sld12h);
	setItem(document.midievent.sld12l);

	setItem(document.midievent.sld13h);
	setItem(document.midievent.sld13l);
	setItem(document.midievent.sld14h);
	setItem(document.midievent.sld14l);
	setItem(document.midievent.sld15h);
	setItem(document.midievent.sld15l);
	setItem(document.midievent.sld16h);
	setItem(document.midievent.sld16l);

	setItem(document.midiset.notenum);

	$('#mcc1h').change(function() { var val = $(this).val(); mNrpnc[0].fSetMSB(val); });
	$('#mcc1l').change(function() { var val = $(this).val(); mNrpnc[0].fSetLSB(val); });
	$('#mcc2h').change(function() { var val = $(this).val(); mNrpnc[1].fSetMSB(val); });
	$('#mcc2l').change(function() { var val = $(this).val(); mNrpnc[1].fSetLSB(val); });
	$('#mcc3h').change(function() { var val = $(this).val(); mNrpnc[2].fSetMSB(val); });
	$('#mcc3l').change(function() { var val = $(this).val(); mNrpnc[2].fSetLSB(val); });
	$('#mcc4h').change(function() { var val = $(this).val(); mNrpnc[3].fSetMSB(val); });
	$('#mcc4l').change(function() { var val = $(this).val(); mNrpnc[3].fSetLSB(val); });
	$('#mcc5h').change(function() { var val = $(this).val(); mNrpnc[4].fSetMSB(val); });
	$('#mcc5l').change(function() { var val = $(this).val(); mNrpnc[4].fSetLSB(val); });
	$('#mcc6h').change(function() { var val = $(this).val(); mNrpnc[5].fSetMSB(val); });
	$('#mcc6l').change(function() { var val = $(this).val(); mNrpnc[5].fSetLSB(val); });
	$('#mcc7h').change(function() { var val = $(this).val(); mNrpnc[6].fSetMSB(val); });
	$('#mcc7l').change(function() { var val = $(this).val(); mNrpnc[6].fSetLSB(val); });
	$('#mcc8h').change(function() { var val = $(this).val(); mNrpnc[7].fSetMSB(val); });
	$('#mcc8l').change(function() { var val = $(this).val(); mNrpnc[7].fSetLSB(val); });
	$('#mcc9h').change(function() { var val = $(this).val(); mNrpnc[8].fSetMSB(val); });
	$('#mcc9l').change(function() { var val = $(this).val(); mNrpnc[8].fSetLSB(val); });

	$('#mcc10h').change(function() { var val = $(this).val(); mNrpnc[9].fSetMSB(val); });
	$('#mcc10l').change(function() { var val = $(this).val(); mNrpnc[9].fSetLSB(val); });
	$('#mcc11h').change(function() { var val = $(this).val(); mNrpnc[10].fSetMSB(val); });
	$('#mcc11l').change(function() { var val = $(this).val(); mNrpnc[10].fSetLSB(val); });
	$('#mcc12h').change(function() { var val = $(this).val(); mNrpnc[11].fSetMSB(val); });
	$('#mcc12l').change(function() { var val = $(this).val(); mNrpnc[11].fSetLSB(val); });
	$('#mcc13h').change(function() { var val = $(this).val(); mNrpnc[12].fSetMSB(val); });
	$('#mcc13l').change(function() { var val = $(this).val(); mNrpnc[12].fSetLSB(val); });
	$('#mcc14h').change(function() { var val = $(this).val(); mNrpnc[13].fSetMSB(val); });
	$('#mcc14l').change(function() { var val = $(this).val(); mNrpnc[13].fSetLSB(val); });
	$('#mcc15h').change(function() { var val = $(this).val(); mNrpnc[14].fSetMSB(val); });
	$('#mcc15l').change(function() { var val = $(this).val(); mNrpnc[14].fSetLSB(val); });
	$('#mcc16h').change(function() { var val = $(this).val(); mNrpnc[15].fSetMSB(val); });
	$('#mcc16l').change(function() { var val = $(this).val(); mNrpnc[15].fSetLSB(val); });

	$('#note').change(function()   { var val = $(this).val(); mNoteNum=val; });
	$('#note').val(mNoteNum);

	$('#channel').change(function()   { var val = $(this).val(); mChannel=val; });
	$('#channel').val(mChannel);

	$('#start').click(function(){
		if(mStartTime==null){
			$(this).val("STOP");
			mStartTime=setInterval(function() {
				if(output!=null){
					outMessage(0x90+(mChannel-1),mNoteNum,0x60);
					output.send([0x80+(mChannel-1),mNoteNum,0x00], 900);
				}
			}, 1000);
		} else {
			$(this).val("RUN");
			clearInterval(mStartTime);
			mStartTime=null;
		}
	});

	mNrpnc[0].fSetSLDM('#mcc1h' );
	mNrpnc[0].fSetSLDL('#mcc1l' );
	mNrpnc[1].fSetSLDM('#mcc2h' );
	mNrpnc[1].fSetSLDL('#mcc2l' );
	mNrpnc[2].fSetSLDM('#mcc3h' );
	mNrpnc[2].fSetSLDL('#mcc3l' );
	mNrpnc[3].fSetSLDM('#mcc4h' );
	mNrpnc[3].fSetSLDL('#mcc4l' );
	mNrpnc[4].fSetSLDM('#mcc5h' );
	mNrpnc[4].fSetSLDL('#mcc5l' );
	mNrpnc[5].fSetSLDM('#mcc6h' );
	mNrpnc[5].fSetSLDL('#mcc6l' );
	mNrpnc[6].fSetSLDM('#mcc7h' );
	mNrpnc[6].fSetSLDL('#mcc7l' );
	mNrpnc[7].fSetSLDM('#mcc8h' );
	mNrpnc[7].fSetSLDL('#mcc8l' );
	mNrpnc[8].fSetSLDM('#mcc9h' );
	mNrpnc[8].fSetSLDL('#mcc9l' );


	mNrpnc[9].fSetSLDM ('#mcc10h');
	mNrpnc[9].fSetSLDL ('#mcc10l');
	mNrpnc[10].fSetSLDM('#mcc11h');
	mNrpnc[10].fSetSLDL('#mcc11l');
	mNrpnc[11].fSetSLDM('#mcc12h');
	mNrpnc[11].fSetSLDL('#mcc12l');
	mNrpnc[12].fSetSLDM('#mcc13h');
	mNrpnc[12].fSetSLDL('#mcc13l');
	mNrpnc[13].fSetSLDM('#mcc14h');
	mNrpnc[13].fSetSLDL('#mcc14l');
	mNrpnc[14].fSetSLDM('#mcc15h');
	mNrpnc[14].fSetSLDL('#mcc15l');
	mNrpnc[15].fSetSLDM('#mcc16h');
	mNrpnc[15].fSetSLDL('#mcc16l');
}

