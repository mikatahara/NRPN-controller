
var mSH=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var mFdg=null;
var mNrpnc=null;
var mSideName=['slide1','slide2','slide3','slide4','slide5','slide6','slide7','slide8',
	'slide9','slide10','slide11','slide12','slide13','slide14','slide15','slide16'];
var mNrpnName=['NRPN01','NRPN02','NRPN03','NRPN04','NRPN05','NRPN06','NRPN07','NRPN08',
	'NRPN09','NRPN10','NRPN11','NRPN12','NRPN13','NRPN14','NRPN15','NRPN16'];
var mImsb=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var mIlsb=[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
var mIdatah=[10,20,30,40,50,60,70,80,90,100,110,120,110,90,80,70];

var mNoteNum=0x30;
var mChannel=10;
var mStartTime=null;

function setItem(e)
{
	for(var i=0; i<128; i++){
		var j=Math.floor(i/16);
		var k=i%16;
		var n=mSH[j]+mSH[k];
		if(i<10)
			n= n +"(  "+ i.toString(10)+ ")";
		else if(i<100)
			n= n +"( "+ i.toString(10)+ ")";
		else
			n= n +"("+ i.toString(10)+ ")";
		e.options[i] = new Option(n, i);
	}
	e.value=60;
}

window.onload = function() {

	setInputMenuID(document.input_device_select.ids);
	setOutputMenuID(document.output_device_select.ids);
	runTest2();

	mFdg=new Array(16);
	mNrpnc=new Array(16);

	var str;
	var ival=60;
	for(var i=0; i<16; i++){
		mFdg[i] = new DrawGraph(15,225,4,24);
		mFdg[i].fSetCanvas(document.getElementById(mSideName[i]));
		mFdg[i].fStrokeRect();
		mFdg[i].fSetViewPort(0,127,-1,1);

		mFdg[i].ctx.fillStyle = "#222222";
		mFdg[i].ctx.font = "12px 'sans-serif'";
		mFdg[i].fWriteText("MSB",10,48);
		mFdg[i].fWriteText("LSB",130,48);

/*		mFdg[i].ctx.font = "16px 'sans-serif'";
		mFdg[i].fWriteText(mNrpnName[i],10,74); */
/*		mFdg[i].ctx.fillStyle = "#666666";
		mFdg[i].fDrawArcXY(ival,0,10);	*/
/*		mFdg[i].ctx.fillStyle = "#444444";
		mFdg[i].ctx.font = "18px 'sans-serif'";
		str = ival.toString(10);
		mFdg[i].fWriteText(str,240,20);*/
	}

	for(var i=0; i<16; i++){
		var name=mNrpnName[i];
		mNrpnc[i]=new NRPNC(0,i,60,0,name);
		mNrpnc[i].fSetFDG(mFdg[i]);
	}

	mSetsomething();

	for(var i=0; i<16; i++){
		mNrpnc[i].fSetMSB(mImsb[i]);
		mNrpnc[i].fSetLSB(mIlsb[i]);
		mNrpnc[i].fSetDATAH(mIdatah[i]);
		mNrpnc[i].fSetNAME(mNrpnName[i]);
	}

};

/* *******************************************	*/
/*	各NRPNCへ移動 								*/
/* *******************************************	*/
/*	Knobの描画			*/
/*function fDrawKnob(fdg)
{
	var ival=Math.floor(fdg.iVx);

	if(ival>=127)	ival=127;
	else if(ival<0)	ival=0;
	fdg.ctx.clearRect(0,0,300,28);
	fdg.fStrokeRect();
	fdg.ctx.fillStyle = "#666666";
	fdg.fDrawArcXY(ival,0,10);
	fdg.ctx.fillStyle = "#444444";
	fdg.ctx.font = "18px 'sans-serif'";
	var str = ival.toString(10);
	fdg.fWriteText(str,240,20);
	return ival;
}*/

/*	マウスの位置をViewport座標に変換			*/
/*function LmouseViewpoint(e,fdg){
	var mouseX,mouseY;
	var rect = e.target.getBoundingClientRect();
	mouseX = e.clientX-rect.left;
	mouseY = e.clientY-rect.top;
	mouseX*=fdg.cv.width/fdg.cv.clientWidth
	mouseY*=fdg.cv.height/fdg.cv.clientHeight;
	mouseX=Math.floor(mouseX);
	mouseY=Math.floor(mouseY);

	fdg.mcX = mouseX;
	fdg.mcY = mouseY;
	fdg.fConvVPos(fdg.mcX,fdg.mcY);	//Viewport座標に変換
}*/

/* Mouseをクリック */
function LmouseClick(e,num){
/*	var ival=LmouseViewpoint(e,mNrpnc[fdg].fdg);*/
	mNrpnc[num].fGetKnobPosition(e);
	mNrpnc[num].fdg.mMf=1;
}

/* Mouseをアップ */
function LmouseUp(e,num){
//	LmouseViewpoint(e,mNrpnc[fdg].fdg);
//	var ival=fDrawKnob(mNrpnc[fdg].fdg);
	mNrpnc[num].fGetKnobPosition(e);
	mNrpnc[num].fdg.mMf=0;
//	mNrpnc[fdg].fSetDATAH(ival);
}

/* Mouseをドラック*/
function LmouseMove(e,num){
	if(mNrpnc[num].fdg.mMf==0) return;
/*	LmouseViewpoint(e,mNrpnc[fdg].fdg);
	var ival=fDrawKnob(mNrpnc[fdg].fdg);
	mNrpnc[fdg].fSetDATAH(ival);*/
	mNrpnc[num].fGetKnobPosition(e);

}
