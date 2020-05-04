function NRPNC(msb,lsb,datah,datal,name)
{
	this.msb	= msb;
	this.lsb	= lsb;
	this.datah	= datah;
	this.datal	= datal;
	this.name	= name;
	this.fdg	= null;
	this.sldm	= null;
	this.sldl	= null;
}

NRPNC.prototype={

	fSetSLDM:  function(e) {
		this.sldm=e;
	},

	fSetSLDL:  function(e) {
		this.sldl=e;
	},

	fSetNAME:  function(e) {
		this.name=e;
		this.fdg.ctx.clearRect(0,58,300,28);
		this.fdg.ctx.font = "16px 'sans-serif'";
		this.fdg.fWriteText(this.name,10,74);
	},

	fSetDATAH: function(e) {
		this.datah=e;

		this.fdg.ctx.clearRect(0,0,300,28);
		this.fdg.fStrokeRect();
		this.fdg.ctx.fillStyle = "#666666";
		this.fdg.fDrawArcXY(this.datah,0,10);
		this.fdg.ctx.fillStyle = "#444444";
		this.fdg.ctx.font = "18px 'sans-serif'";
		var str = this.datah.toString(10);
		this.fdg.fWriteText(str,240,20);

		outMessage(0xB0+(mChannel-1),0x62,this.lsb);
		outMessage(0xB0+(mChannel-1),0x63,this.msb);
		outMessage(0xB0+(mChannel-1),0x06,this.datah);

	},


	fGetKnobPosition: function(e) {
		var mouseX,mouseY;
		var rect = e.target.getBoundingClientRect();

		mouseX = e.clientX-rect.left;
		mouseY = e.clientY-rect.top;
		mouseX*=this.fdg.cv.width/this.fdg.cv.clientWidth
		mouseY*=this.fdg.cv.height/this.fdg.cv.clientHeight;
		mouseX=Math.floor(mouseX);
		mouseY=Math.floor(mouseY);

		this.fdg.mcX = mouseX;
		this.fdg.mcY = mouseY;
		this.fdg.fConvVPos(this.fdg.mcX,this.fdg.mcY);	//Viewportç¿ïWÇ…ïœä∑

		var ival=Math.floor(this.fdg.iVx);		//KnobÇÃílÇãÅÇﬂÇÈ
		this.fSetDATAH(ival);
	},

	fSetFDG:   function(e){
		this.fdg=e;
	},

	fSetMSB:   function(e)
	{ 
		this.msb=e;
		$(this.sldm).val(e);
	},

	fSetLSB:   function(e)
	{
		this.lsb=e;
		$(this.sldl).val(e);
	},

	fSetDATAL: function(e) { this.datal=e; },

	fGetMSB:   function() { return this.msb;  },
	fGetLSB:   function() { return this.lsb;  },
	fGetDATAH: function() { return this.datah;},
	fGetDATAL: function() { return this.datal;},
	fGetNAME:  function() { return this.name; },

}
